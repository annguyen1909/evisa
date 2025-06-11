"use client";

import { Button } from "@/components/ui/button";
import {
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CustomerSupport() {
  return (
    <section className="w-full mt-6 max-w-2xl md:max-w-6xl rounded-lg shadow-sm p-2 mx-auto bg-gradient-to-r from-[#FED16A]/50 to-[#FFF085]/50">
      <div className="flex flex-col md:flex-row justify-evenly w-full p-2 md:p-6 gap-2 md:gap-12">

        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Heading + Image Row */}
          <div className="flex items-center whitespace-nowrap gap-4">
            <div className="text-[#16610E] text-2xl md:text-3xl font-bold">
              <span className="text-[#CB6601] font-bold">24/7 </span>
              Customer Support
            </div>
            <Image
              src="/images/logo.png"
              alt="Customer Support"
              width={72}
              height={71}
              className="w-14 h-auto md:w-[72px] md:h-[71px]"
            />
          </div>

          {/* Paragraph below */}
          <p className="text-[#16610E] max-w-xs md:max-w-sm text-base md:text-lg font-medium mt-2">
            Need help? Our visa experts are available 24/7.  
            Fast, friendly, and expert support — anytime, anywhere.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end gap-4 mt-4 md:mt-12">
          <Button className="bg-[#065BB9] hover:bg-[#065BB9]/80 text-white px-8 md:px-12 py-4 md:py-6 flex items-center gap-2 text-sm md:text-base">
            <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
            Contact Us
          </Button>

          <div className="flex gap-4 flex-wrap justify-center md:justify-end">
            <div className="flex items-center gap-2 text-sm text-[#065BB9] font-medium">
              <PhoneIcon className="h-4 w-4" /> Call Us
            </div>
            <div className="flex items-center gap-2 text-sm text-[#065BB9] font-medium">
              <EnvelopeIcon className="h-4 w-4" /> Email Us
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
