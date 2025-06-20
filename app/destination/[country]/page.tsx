// app/destination/[country]/page.tsx

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCountryBySlug } from '@/lib/countries';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from 'next/navigation';
import { Cloud, Earth, CircleDollarSign, SquareCheckBig, Timer, Dock, Send } from 'lucide-react';

type Steps = {
    name: string;
    title: string;
    description: string;
    image?: string;
};

const tabColors = [
    "#EF4444", // red
    "#3B82F6", // blue
    "#10B981", // green
    "#F59E0B", // amber
    "#8B5CF6", // purple
    "#EC4899", // pink
    "#FACC15", // yellow
];

const visaSteps: Steps[] = [
    {
        name: "1",
        title: "Apply Online",
        description:
            "Submit your eVisa application on our website",
        image: "/images/steps/step1.png",
    },
    {
        name: "2",
        title: "Pay Online",
        description:
            "Secured payment system that accepts Cards, or Bank Transfer",
        image: "/images/steps/step2.png",
    },
    {
        name: "3",
        title: "Get Your eTA",
        description:
            "eTA will be delivered to your email",
        image: "/images/steps/step3.png",
    },
];



export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
    const { country: countrySlug } = await params;
    const country = getCountryBySlug(countrySlug);

    if (!country) {
        notFound();
    }

    return (
        <div>
            <section
                id="country-hero"
                className="w-full min-h-[25vh] lg:min-h-[35vh] items-center relative bg-cover bg-center bg-no-repeat p-2 sm:p-16 flex flex-col justify-center text-white"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out -z-10"
                    style={{ backgroundImage: `url(/images/country/${country.name}/${country.name}-bg.jpg)` }}
                />

                <div className="flex flex-col max-w-5xl md:max-w-7xl w-2/3 max-md:items-center gap-2">
                    <Image
                        src={`https://flagcdn.com/${country.code}.svg`}
                        alt={`${country.name} Flag`}
                        width={50}
                        height={50}
                        className=""
                    />
                    <h1 className="text-3xl font-manrope sm:text-4xl md:text-6xl uppercase font-semibold">
                        {country.name}
                    </h1>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section
                id="country-intro"
                className="w-full bg-white rounded-lg mt-12 p-4 sm:p-6 max-w-5xl md:max-w-7xl mx-auto text-center flex flex-col items-center gap-6"
                style={{
                    backgroundImage: "url('/images/assets/background.jpg')",
                    backgroundSize: "cover",           // or "contain", depending on your need
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div className="w-full md:w-5/6 flex flex-col items-center">
                    <Image
                        src={`${country.roundedFlagUrl}`}
                        alt={`${country.name} Flag`}
                        width={50}
                        height={50}
                    />
                    <h2 className="text-xl sm:text-3xl font-manrope font-bold uppercase mt-6 mb-4">
                        About {country.name}
                    </h2>
                    <p className="text-lg px-4 md:px-12 font-manrope text-gray-700">
                        {country.description}
                    </p>
                </div>

                <div className="w-full md:w-2/3 px-16 md:px-0 flex flex-col md:flex-row md:justify-between gap-0">
                    <div className="flex md:w-1/3 flex-row md:flex-col items-center gap-2 text-[#065BB9] font-normal text-xl text-center">
                        <Dock size={40} strokeWidth='1.25px' />
                        <p>Apply Online In 3 Steps</p>
                    </div>
                    <div className="flex md:w-1/3 flex-row md:flex-col items-center gap-2 text-[#CB6601] font-normal text-xl text-center">
                        <Timer size={40} strokeWidth='1.25px' />
                        <p>As soon as 1 Day</p>
                    </div>
                    <div className="flex md:w-1/3 flex-row md:flex-col items-center gap-2 text-[#cfac5a] font-normal text-xl text-center">
                        <Send size={40} strokeWidth='1.25px' />
                        <p>Receive eTA by Email</p>
                    </div>
                </div>

                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#16610E] cursor-pointer rounded-lg text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#CB6601] before:duration-600 before:ease-out hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10">Apply Now</span>
                </button>

            </section>

            {/* WELCOME MESSAGE SECTION */}
            <section
                id="welcome-message"
                className="w-full bg-white p-8 rounded-lg max-w-5xl md:max-w-7xl mt-12 mx-auto flex flex-col md:flex-row items-center gap-8"
            >
                <div className="w-full md:w-3/5 flex flex-col gap-8">
                    <h2 className="text-xl font-inter sm:text-3xl font-bold uppercase">
                        Welcome to {country.name}
                    </h2>
                    <p className="text-md font-manrope sm:text-xl max-w-5xl md:max-w-7xl">
                        {country.welcomeMessage}
                    </p>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-4 items-start">
                            <Cloud className="w-6 h-6 text-[#065BB9]" />
                            <p className='text-lg md:text-xl font-manrope'>
                                <span className="text-[#065BB9] font-manrope font-semibold">Climate:</span> {country.info.climate}
                            </p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <Earth className="w-6 h-6 text-[#CB6601]" />
                            <p className='text-lg md:text-xl font-manrope'>
                                <span className="text-[#CB6601] font-manrope font-semibold">Language:</span> {country.info.language}
                            </p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CircleDollarSign className="w-6 h-6 text-[#cfac5a]" />
                            <p className='text-lg md:text-xl font-manrope'>
                                <span className="text-[#cfac5a] font-manrope font-semibold">Currency:</span> {country.info.currency}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" w-full md:w-3/5 flex justify-center">
                    <Image
                        src={`${country.welcomeImgUrl}`}
                        alt={`${country.name} Welcome`}
                        width={600}
                        height={400}
                        className="rounded-3xl"
                    />
                </div>
            </section>

            <section
                id="visa-type"
                className="w-full bg-white p-8 rounded-lg max-w-5xl md:max-w-7xl mt-12 mx-auto flex flex-col gap-8 px-4 sm:px-8"
            >
                <h2
                    className="text-xl sm:text-3xl font-bold uppercase font-inter text-center"
                >
                    Visa Types for {country.name}
                </h2>
                <Tabs defaultValue={country.etaInfo.visaTypes[0]?.name} className="w-full">
                    <TabsList className="flex mx-auto flex-wrap gap-2">
                        {country.etaInfo.visaTypes.map((tab, index) => {
                            const color = tabColors[index % tabColors.length]; // loop if more than 7
                            return (
                                <TabsTrigger
                                    key={tab.name}
                                    value={tab.name}
                                    className="data-[state=active]:text-[var(--tab-color)] data-[state=active]:bg-[var(--tab-color)]/10 cursor-pointer"
                                    style={{
                                        "--tab-color": color,
                                    } as React.CSSProperties}
                                >
                                    <div className="flex flex-col items-center">
                                        <p className="uppercase text-xl font-bold">{tab.type}</p>
                                        <p className="text-lg">{tab.description}</p>
                                    </div>
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    {country.etaInfo.visaTypes.map((visa) => (
                        <TabsContent key={visa.name} value={visa.name} className="mt-6">
                            <div className="flex flex-col lg:flex-row gap-6 items-center">
                                <div className="max-w-4xl mx-auto flex flex-col gap-2 text-md sm:text-xl space-y-4" style={{ fontFamily: 'Roboto' }}>
                                    <p className='font-manrope'>
                                        The {country.name} government requires{" "}
                                        {visa.allowedNationalities?.length ?? 0} nationalities to get a {visa.type} to enter the country for Tourism. Now you can apply on our website easily and receive it by email.
                                    </p>

                                    {/* VISA SERVICE PACKAGE */}
                                    <div className='flex flex-col gap-2 border-1 border-gray-200 rounded-lg p-4'>
                                        <h2 className='text-lg font-semibold'>VISA SERVICE PACKAGE</h2>
                                        <p className='font-manrope'>Our service helps travelers obtain travel documents, simplifying the process so that you can better prepare for the trip. The package includes:</p>
                                        {[
                                            "Entry visa for a short period",
                                            "Application form filling assistance",
                                            "Travel insurance consultant",
                                            "Portal for real-time visa updates",
                                            "24/7 online support team for any issues",
                                            "Urgent case support, with added fees"
                                        ].map((item) => (
                                            <div key={item} className='flex gap-2'>
                                                <SquareCheckBig className='w-6 h-6 text-[#16610E]' />
                                                <p className='font-manrope'>{item}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* ETA INFORMATION */}
                                    <div className='flex flex-col gap-2 border-1 border-gray-200 rounded-lg p-4'>
                                        <h2 className='text-lg font-semibold'>ETA INFORMATION</h2>
                                        <ul className='list-disc list-inside'>
                                            <li className='font-manrope'>Single Entry</li>
                                            <li className='font-manrope'>Stay duration: {visa.visaDuration}</li>
                                            <li className='font-manrope'>Government & Admin fee: US$ {visa.govFee.toFixed(2)}</li>
                                            <li className='font-manrope'>
                                                Service fee:
                                                <button className="p-0 ml-2 bg-transparent border-none text-md underline text-blue-600 hover:text-blue-800 cursor-pointer">
                                                    See More
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* HOW TO APPLY */}
                                    <div id='steps' className='flex flex-col gap-2'>
                                        <p className='font-semibold uppercase text-lg'>HOW TO APPLY FOR {country.name} {visa.type.toUpperCase()} ETA?</p>
                                        <p className='font-manrope mb-4'>
                                            Fantastic! {country.name} allows you to apply for an eTA (Electronic Travel Authorization) and now, you can easily apply for this eTA through our website following 3 simple steps below:
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                            {visaSteps.map(({ name, title, description, image }) => (
                                                <Card
                                                    key={name}
                                                    className="flex flex-col h-full transition-transform gap-2 p-4 hover:scale-[1.02] hover:shadow-lg"
                                                    style={{ color: "#16610E" }}
                                                >
                                                    <CardHeader>
                                                        <CardTitle className="font-extrabold text-5xl sm:text-4xl text-center">
                                                            {name}
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent className="px-0 mt-2 flex flex-col items-center">
                                                        <Image
                                                            src={image || "/images/steps/default.png"}
                                                            width={88}
                                                            height={87}
                                                            className="w-fit h-12 mb-4"
                                                            alt={`${name} flag`}
                                                        />
                                                        <CardTitle className="font-extrabold mb-2 text-center text-2xl sm:text-lg">
                                                            {title}
                                                        </CardTitle>
                                                        <p className="text-gray-600 text-lg text-center leading-relaxed">
                                                            {description}
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>

                                        <p className='text-center text-lg font-semibold mt-4 text-[#16610E]'>GET A ETA WITHIN 1 WORKING DAY</p>
                                        <Button className='bg-[#16610E] mt-2 uppercase mx-auto hover:bg-[#16610E]/80 w-1/3 cursor-pointer px-8 py-6 text-white text-xl sm:text-lg'>
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </section>
            <section id='gvc-support' className='w-full bg-white p-8 rounded-lg max-w-5xl md:max-w-7xl mt-12 mx-auto flex flex-col gap-8 px-4 sm:px-8'>
                <h2 className='text-xl sm:text-3xl font-bold uppercase text-center' style={{ fontFamily: 'Roboto' }}>
                    GVC Support
                </h2>
                <p className='text-md sm:text-xl max-w-5xl md:max-w-7xl'>
                    {country.gvcSupport.description}
                </p>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <SquareCheckBig className='w-6 h-6 text-[#16610E]' />
                        <p>{country.gvcSupport.services[0]}</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
