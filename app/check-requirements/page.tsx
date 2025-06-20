'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCountryBySlug } from '@/lib/countries';
import { getNationalityByCode } from '@/lib/nationalities';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Earth } from 'lucide-react';
import VisaSteps from '../components/VisaSteps';

export default function CheckRequirementsPage() {
    const searchParams = useSearchParams();
    const nationalitySlug = searchParams.get('n');
    const destinationSlug = searchParams.get('d');

    const [nationalityName, setNationalityName] = useState<string | null>(null);
    const [destinationName, setDestinationName] = useState<string | null>(null);
    const [visaTypeResults, setVisaTypeResults] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkEligibility = async () => {
            if (!nationalitySlug || !destinationSlug) {
                notFound();
                return;
            }

            try {
                const nationality = getNationalityByCode(nationalitySlug);
                const destination = getCountryBySlug(destinationSlug);

                if (!nationality || !destination) {
                    notFound();
                    return;
                }

                setNationalityName(nationality.name);
                setDestinationName(destination.name);

                // Build file name (e.g., "Vietnam" → "vietnam")
                const fileName = destination.name.toLowerCase().replace(/ /g, '-');
                const destinationModule = await import(`@/lib/countries/${fileName}`);
                const visaTypes = destinationModule.default.etaInfo.visaTypes || [];

                // For each visa type, check eligibility
                const results = visaTypes.map((visaType: any) => ({
                    ...visaType,
                    isEligible: visaType.allowedNationalities.includes(nationality.code.toUpperCase()),
                }));
                setVisaTypeResults(results);
            } catch (err) {
                notFound();
            } finally {
                setLoading(false);
            }
        };
        checkEligibility();
    }, [nationalitySlug, destinationSlug]);

    if (loading) {
        return <p>Checking eligibility...</p>;
    }
    if (!visaTypeResults || !nationalityName || !destinationName) {
        return <p>Could not determine eligibility.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-green-700 via-green-500 to-lime-400 bg-clip-text text-transparent">Visa Eligibility Results</h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-8">
                {/* Nationality flag and name */}
                <div className="flex items-center gap-3">
                    <img
                        src={`/images/flags/rounded/${(nationalitySlug || '').toLowerCase()}.png`}
                        alt={nationalityName || ''}
                        className="w-10 h-10 rounded-full border shadow-md object-cover bg-white"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span className="text-lg font-semibold">{nationalityName}</span>
                </div>
                <Earth className="mx-2 text-gray-400 w-6 h-6" />
                {/* Destination flag and name */}
                <div className="flex items-center gap-3">
                    <img
                        src={destinationSlug ? `/images/country/${destinationSlug}/` + `${destinationSlug}-rounded.png` : ''}
                        alt={destinationName || ''}
                        className="w-10 h-10 rounded-full border shadow-md object-cover bg-white"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span className="text-lg font-semibold">{destinationName}</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visaTypeResults.map((visa, index) => (
                    <Card key={index} className="relative overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="absolute top-0 left-0 w-full h-2" style={{ background: visa.color || '#16610E' }} />
                        <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-2">
                            {visa.isEligible ? (
                                <CheckCircle className="text-green-600 w-7 h-7" />
                            ) : (
                                <XCircle className="text-red-500 w-7 h-7" />
                            )}
                            <CardTitle className="text-xl font-bold flex-1">{visa.type}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <CardDescription className="mb-2 text-base">
                                {nationalityName} is{' '}
                                {visa.isEligible ? (
                                    <span className="text-green-700 font-semibold">eligible</span>
                                ) : (
                                    <span className="text-red-600 font-semibold">not eligible</span>
                                )}{' '}
                                to enter {destinationName} for <span className="font-semibold">{visa.type}</span>.
                            </CardDescription>
                            <div className="text-gray-700 mb-2">{visa.description}</div>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                                <li><span className="font-medium">Duration:</span> {visa.visaDuration}</li>
                                <li><span className="font-medium">Validity:</span> {visa.visaValidity}</li>
                                <li><span className="font-medium">Processing:</span> {visa.expectedProcessingTime}</li>
                                <li className='whitespace-nowrap'><span className="font-medium">Government Fee:</span> <span className="text-gray-900 font-semibold">${visa.govFee}</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <VisaSteps/>
        </div>
    );
}
