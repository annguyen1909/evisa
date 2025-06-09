"use client";

import React, { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import VisaFeeCalculator from "@/components/shared/VisaFeeCalculator";
import { COUNTRIES_DATA } from "@/lib/constants";
import VisaFeeDisplay from "@/components/shared/VisaFeeDisplay";

export default function ApplyPage() {
  const [nationality, setNationality] = useState("");
  const [destinationCode, setDestinationCode] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const destinationCountry = COUNTRIES_DATA.find((c) => c.code === destinationCode);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destinationCountry) {
      alert("Please select a destination country.");
      return;
    }
    // Add submission logic here
    alert(`Application submitted for ${fullName} to visit ${destinationCountry.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Step 1: Select Countries */}
        <section className="border rounded p-4 bg-white shadow space-y-4">
          <h2 className="text-lg font-semibold">Select Your Nationality and Destination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Your Nationality</label>
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
            <div>
              <label className="block mb-1 font-medium">Destination Country</label>
              <Select value={destinationCode} onValueChange={setDestinationCode}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select destination" />
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
          </div>
        </section>

        {/* Visa Fee Display - outside the form */}
        <section className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Visa Fee Calculator</h2>
          {destinationCountry ? (
            <VisaFeeDisplay
              country={{
                code: destinationCountry.code,
                name: destinationCountry.name,
                govFee: 49,
                touristVisa: Number(destinationCountry.touristVisa),
                businessVisa: Number(destinationCountry.businessVisa),
                serviceFee: Number(destinationCountry.serviceFee),
              }}
            />
          ) : (
            <p className="text-gray-600">Select a destination country to see visa fees.</p>
          )}
        </section>

        {/* Main Application Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 space-y-6">
          <h2 className="text-lg font-semibold">Personal Information & Document Upload</h2>

          <Input
            placeholder="Your full name"
            value={fullName}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setFullName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            required
          />
          <div className="flex gap-4">
            <Input
              placeholder="+1"
              value={areaCode}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setAreaCode(e.target.value)}
              className="w-1/4"
              required
            />
            <Input
              placeholder="123-456-7890"
              value={phone}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPhone(e.target.value)}
              className="flex-grow"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Upload Documents</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.png"
              required
              className="block"
            />
            {file && <p className="text-sm text-gray-700 mt-2">Selected file: {file.name}</p>}
          </div>

          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}
