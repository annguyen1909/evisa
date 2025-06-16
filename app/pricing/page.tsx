"use client";

import { useState } from "react";
import CountrySearch from "@/components/shared/CountrySearch";
import VisaFeeCalculator from "@/components/shared/VisaFeeCalculator";
import { COUNTRIES_DATA } from "@/lib/constants"; // Country data
import CustomAccordion from "@/components/shared/CustomAccordion";
import { Button } from "@/components/ui/button";
import FeeGuarantee from "../components/FeeGuarantee";
import CustomerSupport from "../components/CustomerSupport";

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

  const accordionItems = COUNTRIES_DATA.map((country) => ({
    id: country.code,
    trigger: (
      <>
        <img
          src={country.flag}
          alt={country.name}
          className="w-16 h-10 object-contain"
        />
        <p className="font-medium">{country.name}</p>
      </>
    ),
content: (
  <div className="relative bg-white rounded-xl shadow-xl border border-gray-200 p-6 text-base sm:text-lg font-manrope text-gray-800 overflow-hidden transition-all duration-500">
    {/* Accent stripe */}
    <div className="relative z-10 space-y-6">
      <div>
        <p className="font-semibold text-2xl mb-1 text-[#16610E]">Government & Admin Fee to {country.name}</p>
        <p>
          The Government & Admin Fee is an obligated fee, which is the amount
          that the applicant has to pay for the Immigration Department to process
          eVisa.
        </p>
      </div>

      <div>
        <p className="font-semibold text-xl mb-1 text-[#16610E]">
          Tourist eVisa - Multiple Entries for 5 Years
        </p>
        <p>US $20.00</p>
      </div>

      <div>
        <p className="font-semibold mb-1 text-xl text-[#16610E]">Service Fee</p>
        <p>
          This fee covers eVisa consulting, personal info checking, status
          updates, collection & delivery of eVisa.
        </p>
        <p>
          Processing time is 3 days after receiving complete documents.
        </p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>1 person – US$ 39.00</li>
          <li>2 people – US$ 37.00</li>
          <li>3–5 people – US$ 35.00</li>
          <li>6–9 people – US$ 34.00</li>
          <li>10+ people – US$ 32.00</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold mb-1 text-xl text-[#16610E]">Tour & Group Support</p>
        <p>
          Travel agents can contact us for discounted group tour visa pricing.
        </p>
      </div>

      <div>
        <p className="font-semibold mb-1 text-xl text-[#16610E]">Emergency Support</p>
        <p>Need a visa urgently?</p>
        <ul className="mt-1 list-disc list-inside">
          <li>Urgent (24h) – Plus US$ 79.00/person</li>
          <li>Super Urgent (5h) – Plus US$ 99.00/person</li>
        </ul>
      </div>

      <Button
        className="w-full bg-[#16610E] text-white font-semibold rounded-lg py-2 mt-4 hover:bg-[#16610E]/90 transition"
        onClick={() => alert(`Apply Now for ${country.name}`)}
      >
        Apply Now
      </Button>
    </div>
  </div>
),
  }));

  return (
    <main className="w-full mx-auto py-12">
      <section
        id="country-hero"
        className="w-full min-h-[25vh] lg:min-h-[30vh] relative bg-cover bg-center bg-no-repeat p-2 sm:p-16 flex flex-col justify-center text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out -z-10"
          style={{ backgroundImage: `url('/images/country/kenya-bg.jpg')` }}
        />
        <div className="w-full items-center text-center gap-2">
          <h2 className="text-2xl font-manrope sm:text-3xl md:text-3xl">
            eVisa Pricing List
          </h2>
          <h1 className="text-3xl font-manrope sm:text-4xl md:text-4xl uppercase font-semibold">
            Find Out How Much You Will Pay Your Fees
          </h1>
        </div>
      </section>
      {/* Hero Section */}
      <section className="text-center max-w-2xl rounded-lg  mx-auto p-8 pb-6 mt-12">
        <h1 className="text-2xl text-[#16610E] font-manrope sm:text-4xl md:text-4xl font-bold mb-6">Check Your Fees Here</h1>
        <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
          <CountrySearch
            value={searchCountry}
            onChange={(countryName) => setSearchCountry(countryName)}
            placeholder="Enter country name"
          />

          <button
            onClick={handleCheckNow}
            className="bg-[#16610E] text-white px-6 py-1.5 rounded-md hover:bg-[#16610E]/90 transition"
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

      {/* Countries Grid with Custom Accordion */}
      <section className="mt-4 max-w-7xl max-md:px-2 p-4 mx-auto text-center">
        <h2 className="text-[#16610E] font-manrope text-4xl font-bold mb-6">
          Comprehensive Visa Fee Information
        </h2>
        <CustomAccordion items={accordionItems} />
      </section>
      <CustomerSupport/>
      <FeeGuarantee/>
    </main>
  );
}
