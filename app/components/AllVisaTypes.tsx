"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type VisaType = {
  name: string;
  description: string;
  color: string;
  favorites?: { name: string; img: string }[];
};

const visaTypes: VisaType[] = [
  {
    name: "TOURIST VISA",
    description:
      "This type of visa is used for the purpose of travelling to a country. It is also the most popular visa type that we help our customers to apply for.",
    color: "#16610E",
    favorites: [
      { name: "Kenya", img: "/images/flags/kenya.png" },
      { name: "Cambodia", img: "/images/flags/cambodia.png" },
      { name: "Sri Lanka", img: "/images/flags/sri-lanka.png" },
    ],
  },
  {
    name: "BUSINESS VISA",
    description:
      "This visa is issued to travelers transiting through a country en route elsewhere. It’s short-term, and many countries waive the need for it.",
    color: "#065BB9",
    favorites: [
      { name: "Azerbaijan", img: "/images/flags/azerbaijan.png" },
      { name: "Bahrain", img: "/images/flags/bahrain.png" },
      { name: "India", img: "/images/flags/india.png" },
    ],
  },
  {
    name: "TRANSIT VISA",
    description:
      "Medical visa is used for travelers who want to be treated under the system of medicine of a country. It is used by just governments.",
    color: "#CB6601",
    favorites: [
      { name: "Singapore", img: "/images/flags/singapore.png" },
      { name: "Rwanda", img: "/images/flags/rwanda.png" },
      { name: "Tanzania", img: "/images/flags/tanzania.png" },
    ],
  },
  {
    name: "MEDICAL VISA",
    description:
      "Issued for patients seeking treatment abroad, this visa helps you access world-class healthcare while ensuring compliance with local laws.",
    color: "#FED16A",
    favorites: [
      { name: "Thailand", img: "/images/flags/thailand.png" },
      { name: "Malaysia", img: "/images/flags/malaysia.png" },
      { name: "UK", img: "/images/flags/united-kingdom.png" },
    ],
  },
];

export default function AllVisaTypes() {
  return (
    <section className="w-full max-w-7xl mx-auto py-6 px-4">
      <h2 className="text-2xl sm:text-3xl font-manrope font-bold mb-12 text-center text-[#16610E]">
        All eVisa Types. One Place.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {visaTypes.map(({ name, description, color, favorites }) => (
          <Card
            key={name}
            className="flex flex-col h-full justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ }}
          >
            <CardHeader className="rounded-t-xl p-2" style={{backgroundColor: color}}>
              <CardTitle className="font-extrabold text-white text-lg pt-2 sm:text-xl text-center">
                {name}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {description}
              </p>
            </CardContent>

            <hr
              className="h-px p-[0.5px] mx-2 rounded-xl bg-gray-200 border-0"
              style={{ background: color }}
            />

            {favorites && (
              <CardContent className="text-center">
                <p className="font-bold mb-2" style={{ color }}>
                  Favorite Destinations
                </p>

                <div className="flex justify-center gap-2 pt-2 flex-wrap">
                  {favorites.map(({ name, img }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center space-y-1 min-w-[64px]"
                    >
                      <Image
                        src={img}
                        width={56}
                        height={40}
                        className="w-14 h-10 object-contain"
                        alt={`${name} flag`}
                      />
                      <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}

            <div className="flex justify-center mb-0">
              <Button
                className="text-white w-4/5 sm:w-3/5 py-6 rounded-xl hover:opacity-90 transition"
                style={{ backgroundColor: color }}
              >
                Apply Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
