'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCountryBySlug } from '@/lib/countries';
import { getNationalityByCode } from '@/lib/nationalities';

export default function CheckRequirementsPage() {
    const searchParams = useSearchParams();
    const nationalitySlug = searchParams.get('n');
    const destinationSlug = searchParams.get('d');

    const [isEligible, setIsEligible] = useState<boolean | null>(null);
    const [nationalityName, setNationalityName] = useState<string | null>(null);
    const [destinationName, setDestinationName] = useState<string | null>(null);
    const [visaTypes, setVisaTypes] = useState<any[] | null>(null);


    useEffect(() => {
        const checkEligibility = async () => {
            if (!nationalitySlug || !destinationSlug) {
                console.warn("Missing search params:", { nationalitySlug, destinationSlug });
                notFound();
                return;
            }

            try {
                const nationality = getNationalityByCode(nationalitySlug);
                const destination = getCountryBySlug(destinationSlug);

                if (!nationality || !destination) {
                    console.warn("Nationality or destination not found in COUNTRIES:", {
                        nationalitySlug,
                        destinationSlug,
                        nationality,
                        destination,
                    });
                    notFound();
                    return;
                }

                console.log("Resolved nationality and destination:", {
                    nationality,
                    destination,
                });

                setNationalityName(nationality.name);
                setDestinationName(destination.name);


                // Build file name (e.g., "Vietnam" → "vietnam")
                const fileName = destination.name.toLowerCase().replace(/ /g, '-');
                console.log("Importing country file:", fileName);

                const destinationModule = await import(`@/lib/countries/${fileName}`);
                const { eligibleCountries, etaInfo } = destinationModule.default;
                console.log("Eligible country codes:", eligibleCountries);
                console.log("ETA Info:", etaInfo);



                setVisaTypes(etaInfo.visaTypes || []);

                const isMatch = eligibleCountries.includes(nationality.code.toUpperCase());
                console.log("Match found:", isMatch);
                console.log("Eligible country codes:", eligibleCountries);
                console.log("ETA Info:", etaInfo);
                console.log("Nationality result:", getNationalityByCode(nationalitySlug));

                setIsEligible(isMatch);
            } catch (err) {
                console.error("Error during eligibility check:", err);
                notFound();
            }

        };

        checkEligibility();
    }, [nationalitySlug, destinationSlug]);
    if (isEligible === null) {
        return <p>Checking eligibility...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Check Requirements</h1>
            <p>
                {nationalityName} is{' '}
                {isEligible ? (
                    <span className="text-green-600 font-semibold">eligible</span>
                ) : (
                    <span className="text-red-600 font-semibold">not eligible</span>
                )}{' '}
                to enter {destinationName}.
            </p>
            {visaTypes && visaTypes.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Available {destinationName} Visa Types</h2>
                    <div className="space-y-4">
                        {visaTypes.map((visa, index) => (
                            <div key={index} className="border p-4 rounded-md bg-gray-50">
                                <h3 className="text-lg font-bold">{visa.type}</h3>
                                <p>{visa.description}</p>
                                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                    <li><strong>Duration:</strong> {visa.visaDuration}</li>
                                    <li><strong>Validity:</strong> {visa.visaValidity}</li>
                                    <li><strong>Processing Time:</strong> {visa.expectedProcessingTime}</li>
                                    <li><strong>Government Fee:</strong> ${visa.govFee}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}
