"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    name: "Thailand Evisa",
    link: "thailand",
    image: "/images/topdestinations/thailand.jpg",
  },
  {
    name: "Vietnam Evisa",
    link: "vietnam",
    image: "/images/topdestinations/vietnam.jpg",
  },
  {
    name: "Japan Evisa",
    link: "japan",
    image: "/images/topdestinations/japan.jpg",
  },
  {
    name: "Malaysia Evisa",
    link: "malaysia",
    image: "/images/topdestinations/malaysia.jpg",
  },
];

export default function TopDestinationsCarousel() {
  return (
    <section className="w-full max-w-6xl overflow-x-hidden mx-auto pt-12 pb-4 px-4">
      <h2 className={`text-2xl sm:text-3xl text-[#16610E] font-bold mb-10 text-center`}>Top Destinations</h2>

      <Carousel
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent className="">
          {destinations.map(({ name, link, image }) => (
            <CarouselItem
              key={name}
              className="md:basis-1/3 lg:basis-1/4 hover:scale-105 transition-all duration-300"
            >
              <Card className="cursor-pointer overflow-hidden pt-0 pb-4 rounded-sm hover:shadow-lg transition-shadow duration-300">
                <Link
                  href={`/destination/${link}`}
                  className=""
                >
                  <Image
                    src={image}
                    alt={`${name} flag`}
                    width={500}
                    height={300}
                    className="w-full object-cover h-36 max-md:h-72"
                  />
                  <CardHeader className="text-center">
                    <CardTitle className="text-md uppercase mt-4">{name}</CardTitle>
                  </CardHeader>
                </Link>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex justify-center">
          <Link
            href="/destination"
            className="inline-flex items-center cursor-pointer gap-1 font-semibold text-md text-[#16610E] hover:text-[#16610E]/80 transition-colors duration-300"
          >
            View All Visa
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Carousel>
    </section>
  );
}
