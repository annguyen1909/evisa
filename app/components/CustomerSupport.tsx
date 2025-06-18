"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CustomerSupport() {
  return (
    <section className="w-full mt-6 max-w-6xl rounded-lg shadow-sm p-6 mx-auto bg-gradient-to-r from-[#FED16A]/50 to-[#FFF085]/50">
      <div className="md:flex-row justify-evenly w-full py-6 md:p-6 gap-2 md:gap-12">
        {/* Up Section */}
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
          <p className="text-[#16610E] text-base md:text-lg font-medium mt-2">
            Need help? Our visa experts are available 24/7.
            Fast, friendly, and expert support — anytime, anywhere.
          </p>
        </div>

        {/* Down Section */}
        <div className="flex flex-row justify-center gap-4 mt-4 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 text-center">
            {/* Card 1 */}
            <div className="p-4 h-full bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h1 className="text-2xl font-bold text-[#16610E] my-2">Call Us</h1>
              <Image
                src="/images/support/call-us.png"
                alt="Customer Support"
                width={78}
                height={78}
                className="mx-auto md:w-[78px] md:h-[78px] p-2"
              />
              <p className="text-gray-600 mt-2">
                We are available 24/7 by Calls
              </p>
              <Button className="mt-4 mb-2 w-3/4 bg-[#16610E] hover:bg-[#16610E]/80 text-white">Check Visa Fees</Button>
            </div>

            {/* Card 2 */}
            <div className="p-4 h-full bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h1 className="text-2xl font-bold text-[#16610E] my-2">Live Chat With Us</h1>
              <Image
                src="/images/support/live-chat.png"
                alt="Customer Support"
                width={78}
                height={78}
                className="mx-auto md:w-[78px] md:h-[78px]"
              />
              <p className="text-gray-600 mt-2">
                We are available 24/7 on Live Chat
              </p>
              <Button className="mt-4 mb-2 w-3/4 bg-[#16610E] hover:bg-[#16610E]/80 text-white">$49.99 per passenger</Button>
            </div>

            {/* Card 3 */}
            <div className="p-4 h-full bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h1 className="text-2xl font-bold text-[#16610E] my-2">Email Us</h1>
              <Image
                src="/images/support/email.png"
                alt="Customer Support"
                width={78}
                height={78}
                className="mx-auto md:w-[78px] md:h-[78px]"
              />
              <p className="text-gray-600 mt-2">
                We are available 24/7 on Live Chat
              </p>
              <Button className="mt-4 mb-2 w-3/4 bg-[#16610E] hover:bg-[#16610E]/80 text-white">Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
