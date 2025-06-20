"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type VisaType = {
  name: string;
  title: string;
  description: string;
  image?: string;
};

const visaTypes: VisaType[] = [
  {
    name: "1",
    title: "Application Online",
    description:
      "Submit your eVisa application on our website",
    image: "/images/steps/step1.png",
  },
  {
    name: "2",
    title: "Payment Online",
    description:
      "Secured payment system that accepts Cards, or Bank Transfer",
    image: "/images/steps/step2.png",
  },
  {
    name: "3",
    title: "Submit Documents",
    description:
      "Submit and manage your required documents through our secured portal",
    image: "/images/steps/step3.png",
  },
  {
    name: "4",
    title: "Receive Your eVisa",
    description:
      "Sit back and relax — we’ll deliver your eVisa straight to your inbox",
    image: "/images/steps/step4.png",
  },
];

export default function AllVisaTypes() {
  return (
    <section className="w-full max-w-7xl mx-auto py-6 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center font-manrope text-[#16610E]">
        4 Easy Steps to Get Your eVisa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {visaTypes.map(({ name, title, description, image }) => (
          <Card
            key={name}
            className="flex flex-col h-full transition-transform gap-2 p-8 hover:scale-[1.02] hover:shadow-lg"
            style={{ color: "#16610E" }}
          >
            <CardHeader className="">
              <CardTitle className="flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-[linear-gradient(45deg,_#16610E_50%,_#FED16A_100%)] text-white text-3xl font-extrabold text-center mx-auto">
                {name}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 mt-2 flex flex-col items-center">
              <Image
                src={image || "/images/steps/default.png"}
                width={88}
                height={87}
                className="w-fit h-20 mb-4"
                alt={`${name} flag`}
              />
              <CardTitle className="font-extrabold mb-2 text-center text-2xl sm:text-lg">
                {title}
              </CardTitle>
              <p className="text-gray-600 text-md text-center leading-relaxed">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
