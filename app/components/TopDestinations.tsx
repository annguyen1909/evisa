"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const destinations = [
  {
    name: "Thailand",
    image: "/images/flags/thailand.png",
    description: "Explore beautiful beaches and vibrant culture.",
  },
  {
    name: "Vietnam",
    image: "/images/flags/vietnam.png",
    description: "Experience rich history and stunning landscapes.",
  },
  {
    name: "Japan",
    image: "/images/flags/japan.png",
    description: "Discover the blend of tradition and modernity.",
  },
  {
    name: "Malaysia",
    image: "/images/flags/malaysia.png",
    description: "A tropical paradise with diverse cultures.",
  },
];

export default function TopDestinations() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Top Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map(({ name, image, description }) => (
          <Card key={name} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Image
                  src={image}
                  alt={`${name} flag`}
                  width={40}
                  height={25}
                  className="rounded-sm object-cover"
                />
                <span>{name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
