"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const steps = [
  { title: "Choose Destination", description: "Select your travel destination." },
  { title: "Select Visa Type", description: "Pick the suitable visa for your trip." },
  { title: "Fill Application", description: "Complete the visa application form." },
  { title: "Submit Documents", description: "Upload necessary documents." },
  { title: "Receive eVisa", description: "Get your eVisa via email." },
];

export default function VisaSteps() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">eVisa Steps</h2>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {steps.map(({ title, description }, index) => (
          <Card
            key={title}
            className="flex-1 flex flex-col p-6
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <CheckCircleIcon className="h-12 w-12 text-green-500 mb-4" />
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{`Step ${index + 1}: ${title}`}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
