"use client";

import { useState } from "react";
import CountrySearch from "@/components/shared/CountrySearch";
import VisaFeeCalculator from "@/components/shared/VisaFeeCalculator";
import { COUNTRIES_DATA } from "@/lib/constants"; // Country data
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // from shadcn/ui

import { Button } from "@/components/ui/button";

export default function PricingPage() {


  const [searchCountry, setSearchCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);

  type Country = {
    code: string;
    name: string;
    flag: string;
    govFee: number;
    touristVisa: number;
    businessVisa: number;
    serviceFee: number;
    tourGroupSupport: string;
  };


  function handleCheckNow() {
    const inputLower = searchCountry?.toLowerCase?.() || "";
    const foundCountry = COUNTRIES_DATA.find(
      (country) => country.name.toLowerCase() === inputLower
    );
    if (foundCountry) {
      setShowCalculator(true);
      setSelectedCountry(foundCountry ?? null);
    } else {
      setShowCalculator(false);
      alert("Please select a valid country from the list");
    }
  }


  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Check Your Fees Here</h1>
        <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
          <CountrySearch
            value={searchCountry}
            onChange={(countryName) => setSearchCountry(countryName)}
            placeholder="Enter country name"
          />

          <button
            onClick={handleCheckNow}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Check
          </button>
        </div>
      </section>

      {/* Visa Fee Calculator */}
      {showCalculator && selectedCountry && (
        <VisaFeeCalculator
          country={{
            ...selectedCountry,
            name: selectedCountry.name,
            govFee: 49,
            touristVisa: Number(selectedCountry.touristVisa),
            businessVisa: Number(selectedCountry.businessVisa),
            serviceFee: Number(selectedCountry.serviceFee),
          }}
        />
      )}

      {/* Countries Grid with Popover */}
      {/* Countries Grid with Inline Accordion */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Comprehensive Visa Fee Information
        </h2>

        <Accordion type="multiple" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {COUNTRIES_DATA.map((country) => (
            <AccordionItem value={country.code} key={country.code} className="col-span-1">
              <AccordionTrigger className="flex flex-col items-center gap-2 p-4 border rounded-lg shadow-md bg-white hover:shadow-lg">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-16 h-10 object-contain"
                />
                <p className="font-medium">{country.name}</p>
              </AccordionTrigger>

              <AccordionContent className="p-4 border mt-2 rounded-lg bg-gray-50 text-sm space-y-4">
                <div>
                  <p className="font-semibold mb-1">Government & Admin Fee</p>
                  <p>
                    The Government & Admin Fee is an obligated fee, which is the amount
                    that the applicant has to pay for the Immigration Department to process
                    eVisa.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">
                    Tourist eVisa - Multiple Entries for 5 Years
                  </p>
                  <p>US $20.00</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Service Fee</p>
                  <p>
                    This fee covers eVisa consulting, personal info checking, status
                    updates, collection & delivery of eVisa.
                  </p>
                  <p>
                    Processing time is 3 days after receiving complete documents.
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>1 person – US$ 39.00</li>
                    <li>2 people – US$ 37.00</li>
                    <li>3–5 people – US$ 35.00</li>
                    <li>6–9 people – US$ 34.00</li>
                    <li>10+ people – US$ 32.00</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">Tour & Group Support</p>
                  <p>
                    Travel agents can contact us for discounted group tour visa pricing.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Emergency Support</p>
                  <p>Need a visa urgently?</p>
                  <ul className="mt-1">
                    <li>Urgent (24h) – Plus US$ 79.00/person</li>
                    <li>Super Urgent (5h) – Plus US$ 99.00/person</li>
                  </ul>
                </div>

                <Button
                  className="w-full"
                  onClick={() => alert(`Apply Now for ${country.name}`)}
                >
                  Apply Now
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>


    </main>
  );
}
