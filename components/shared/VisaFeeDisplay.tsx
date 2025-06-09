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
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Visa Fee Calculator for {country.name}
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="numVisas" className="block mb-1 font-medium">
            Number of Visas
          </label>
          <Input
            id="numVisas"
            type="number"
            min={1}
            value={numVisas}
            onChange={(e) => setNumVisas(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Type of Visa</label>
          <Select value={visaType} onValueChange={setVisaType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select visa type" />
            </SelectTrigger>
            <SelectContent>
              {visaTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Processing Time</label>
          <Select value={processingTime} onValueChange={setProcessingTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select processing time" />
            </SelectTrigger>
            <SelectContent>
              {processingTimes.map((time) => (
                <SelectItem key={time.value} value={time.value}>
                  {time.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Nationality</label>
          <Select value={nationality} onValueChange={setNationality}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select nationality" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES_DATA.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4 border-t">
          <p className="text-lg font-semibold">
            Estimated Total Fee:{" "}
            <span className="flex flex-col text-green-600 text-sm">
              <span>Government Fee - ${govFee}</span>
              <span>Visa Fee - ${visaFee}</span>
              <span>Number of Passengers - {numVisas}</span>
              <span>Service Fee - ${serviceFee}</span>
              <span>Total Fee - ${totalFee}</span>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
