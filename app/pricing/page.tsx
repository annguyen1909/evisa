"use client";

import { useState } from "react";
import CountrySearch from "@/components/shared/CountrySearch";
import VisaFeeCalculator from "@/components/shared/VisaFeeCalculator";
import { COUNTRIES_DATA } from "@/lib/constants"; // Country data


import { Popover } from "@headlessui/react";
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
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Comprehensive Visa Fee Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {COUNTRIES_DATA.map((country) => (
            <Popover key={country.code} className="relative">
              <Popover.Button
                className={`w-full cursor-pointer border rounded-lg p-4 flex flex-col items-center shadow-md transition hover:shadow-lg bg-white`}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-16 h-10 object-contain mb-2"
                />
                <p className="font-medium">{country.name}</p>
              </Popover.Button>

              <Popover.Panel
                className="absolute z-30 mt-3 w-72 rounded-lg bg-white p-6 shadow-lg ring-1 ring-black ring-opacity-5"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                <h3 className="text-xl font-bold mb-3">Travel to {country.name}</h3>
                <p className="mb-2">
                  <strong>Government & Administrative Fee:</strong>{" "}
                  {country.govFee}
                </p>
                <p className="mb-2">
                  <strong>Tourist eVisa - Single Entry for 30 Days:</strong>{" "}
                  {country.touristVisa}
                </p>
                <p className="mb-2">
                  <strong>Business eVisa - Single Entry for 30 Days:</strong>{" "}
                  {country.businessVisa}
                </p>
                <p className="mb-2">
                  <strong>Our Flat Service Fees:</strong> {country.serviceFee}
                </p>
                <p className="mb-4 text-gray-600">{country.tourGroupSupport}</p>
                <Button
                  className="w-full"
                  onClick={() => alert(`Apply Now for ${country.name}`)}
                >
                  Apply Now
                </Button>
              </Popover.Panel>
            </Popover>
          ))}
        </div>
      </section>
    </main>
  );
}
