"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IdentificationIcon, GlobeAltIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";

const visaTypes = [
  {
    name: "Tourist eVisa",
    icon: IdentificationIcon,
    description: "Perfect for leisure trips up to 30 days.",
  },
  {
    name: "Business eVisa",
    icon: GlobeAltIcon,
    description: "Ideal for business trips and meetings.",
  },
  {
    name: "Transit eVisa",
    icon: DocumentCheckIcon,
    description: "For short layovers and transit stays.",
  },
];

export default function AllVisaTypes() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">All eVisa Types</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visaTypes.map(({ name, icon: Icon, description }) => (
          <Card
            key={name}
            className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Icon className="h-6 w-6 text-indigo-600" />
                <span>{name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
