"use client";

import React, { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { COUNTRIES_DATA } from "@/lib/constants";// Assuming this function is defined in utils

interface VisaFeeCalculatorProps {
  country: {
    code: string;
    name: string;
    govFee: 49;
    touristVisa: number;
    businessVisa: number;
    serviceFee: number;
  };
}

const visaTypes = [
  { label: "Tourist Visa", value: "tourist" },
  { label: "Business Visa", value: "business" },
];

const processingTimes = [
  { label: "Normal (7-10 days)", value: "normal" },
  { label: "Express (3-5 days)", value: "express" },
];

export default function VisaFeeCalculator({ country }: VisaFeeCalculatorProps) {
  const [numVisas, setNumVisas] = useState(1);
  const [visaType, setVisaType] = useState("tourist");
  const [processingTime, setProcessingTime] = useState("normal");
  const [nationality, setNationality] = useState("");

  const govFee = country.govFee;
  const serviceFee = country.serviceFee;
  const visaFee = visaType === "tourist" ? country.touristVisa : country.businessVisa;
  const processingMultiplier = processingTime === "express" ? 1.5 : 1;

  const totalFee = ((govFee + visaFee) * numVisas + serviceFee) * processingMultiplier;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValidCountry = COUNTRIES_DATA.find((c) => c.code === nationality);
    if (!isValidCountry) {
      alert("Please select a valid country for nationality.");
      return;
    }

    alert(`Proceed to apply for a visa to ${country.name}`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 border border-gray-200 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-inter font-bold uppercase mb-8 text-center text-[#16610E]">
        Visa Fee Calculator for {country.name}
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numVisas" className="block mb-2 font-manrope font-medium text-gray-700">
            Number of Visas
          </label>
          <Input
            id="numVisas"
            type="number"
            min={1}
            value={numVisas}
            onChange={(e) => setNumVisas(Number(e.target.value))}
            className="border-gray-200 focus:border-[#16610E] focus:ring-[#16610E]"
          />
        </div>

        <div>
          <label className="block mb-2 font-manrope font-medium text-gray-700">Type of Visa</label>
          <Select value={visaType} onValueChange={setVisaType}>
            <SelectTrigger className="w-full border-gray-200 focus:border-[#16610E] focus:ring-[#16610E]">
              <SelectValue placeholder="Select visa type" />
            </SelectTrigger>
            <SelectContent>
              {visaTypes.map((type) => (
                <SelectItem key={type.value} value={type.value} className="font-manrope">
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-2 font-manrope font-medium text-gray-700">Processing Time</label>
          <Select value={processingTime} onValueChange={setProcessingTime}>
            <SelectTrigger className="w-full border-gray-200 focus:border-[#16610E] focus:ring-[#16610E]">
              <SelectValue placeholder="Select processing time" />
            </SelectTrigger>
            <SelectContent>
              {processingTimes.map((time) => (
                <SelectItem key={time.value} value={time.value} className="font-manrope">
                  {time.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-2 font-manrope font-medium text-gray-700">Nationality</label>
          <Select value={nationality} onValueChange={setNationality}>
            <SelectTrigger className="w-full border-gray-200 focus:border-[#16610E] focus:ring-[#16610E]">
              <SelectValue placeholder="Select nationality" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES_DATA.map((c) => (
                <SelectItem key={c.code} value={c.code} className="font-manrope">
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-lg font-inter font-semibold text-[#16610E] mb-4">
            Estimated Total Fee
          </p>
          <div className="flex flex-col space-y-2 text-sm font-manrope">
            <div className="flex justify-between">
              <span className="text-gray-600">Government Fee</span>
              <span className="font-medium">${govFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Visa Fee</span>
              <span className="font-medium">${visaFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Number of Passengers</span>
              <span className="font-medium">{numVisas}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service Fee</span>
              <span className="font-medium">${serviceFee}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="font-semibold text-[#16610E]">Total Fee</span>
              <span className="font-bold text-[#16610E]">${totalFee}</span>
            </div>
          </div>
          <Button 
            type="submit" 
            className="mt-6 w-full relative flex h-[50px] items-center justify-center overflow-hidden bg-[#16610E] cursor-pointer rounded-lg text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#CB6601] before:duration-600 before:ease-out hover:before:h-56 hover:before:w-56"
          >
            <span className="relative z-10 font-manrope font-medium">Apply Now</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
