"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const nationalities = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "vn", label: "Vietnam" },
];

const destinations = [
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "ca", label: "Canada" },
];

export default function CheckEligibility() {
  const [nationality, setNationality] = useState<string | undefined>();
  const [destination, setDestination] = useState<string | undefined>();

  const onCheck = () => {
    if (!nationality || !destination) {
      alert("Please select both nationality and destination.");
      return;
    }
    alert(`Checking eligibility for ${nationality.toUpperCase()} to ${destination.toUpperCase()}`);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Check Your Visa Eligibility</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCheck();
        }}
        className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-5 items-center justify-center"
      >
        <div className="w-full md:w-64">
          <label htmlFor="nationality" className="block mb-1 font-medium text-sm">
            Your Nationality
          </label>
          <Select onValueChange={setNationality} value={nationality} defaultValue="">
            <SelectTrigger id="nationality" className="w-full">
              <SelectValue placeholder="Select nationality" />
            </SelectTrigger>
            <SelectContent>
              {nationalities.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-64">
          <label htmlFor="destination" className="block mb-1 font-medium text-sm">
            Your Destination
          </label>
          <Select onValueChange={setDestination} value={destination} defaultValue="">
            <SelectTrigger id="destination" className="w-full">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              {destinations.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-64">
          <Button type="submit" className="w-full md:w-auto">
            Check Now
          </Button>
        </div>
      </form>
    </section>
  );
}
