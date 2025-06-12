// VisaTabContent.tsx
import { SquareCheckBig } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VisaTabContentProps {
  countryName: string;
  type: string;
  color: string;
  description: string;
  steps: {
    name: string;
    title: string;
    description: string;
    image: string;
  }[];
  showFullContent?: boolean;
}

export function VisaTabContent({
  countryName,
  type,
  color,
  description,
  steps,
  showFullContent = true,
}: VisaTabContentProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center">
      <div
        className="max-w-3xl mx-auto flex flex-col gap-4 text-sm sm:text-base"
        style={{ fontFamily: "Roboto" }}
      >
        <p>{description}</p>

        {showFullContent && (
          <>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">VISA SERVICE PACKAGE</h2>
              <p>
                Our service helps travelers obtain travel documents, simplifying
                the process so that you can better prepare for the trip. The
                package includes:
              </p>
              {[
                "Entry visa for a short period",
                "Application form filling assistance",
                "Travel insurance consultant",
                "Portal for real-time visa updates",
                "24/7 online support team for any issues",
                "Urgent case support, with added fees",
              ].map((item) => (
                <div className="flex gap-2" key={item}>
                  <SquareCheckBig className={`w-6 h-6 text-[${color}]`} />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">ETA INFORMATION</h2>
              <ul className="list-disc list-inside">
                <li>Single Entry</li>
                <li>Stay duration: 90 days</li>
                <li>Government & Admin fee: US$ 95.00</li>
                <li>
                  Service fee:
                  <button className="p-0 ml-2 bg-transparent border-none text-md underline text-blue-600 hover:text-blue-800 cursor-pointer">
                    See More
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold uppercase text-lg">
                HOW TO APPLY FOR {countryName} {type.toUpperCase()} ETA?
              </p>
              <p>
                Great! {countryName} allows you to apply for an eTA (Electronic
                Travel Authorization). Just follow 3 simple steps:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {steps.map(({ name, title, description, image }) => (
                  <Card
                    key={name}
                    className="flex flex-col h-full gap-2 p-4 hover:scale-[1.02] hover:shadow-lg transition-transform"
                    style={{ color }}
                  >
                    <CardHeader>
                      <CardTitle className="font-extrabold text-4xl text-center">
                        {name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center px-0 mt-2">
                      <Image
                        src={image || "/images/steps/default.png"}
                        width={88}
                        height={87}
                        className="w-fit h-12 mb-4"
                        alt={`${name} flag`}
                      />
                      <CardTitle className="font-extrabold mb-2 text-center text-lg">
                        {title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm text-center leading-relaxed">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-center text-lg font-semibold mt-4" style={{ color }}>
                GET A ETA WITHIN 1 WORKING DAY
              </p>

              <Button
                className="mt-2 uppercase mx-auto hover:opacity-90 w-3/4 sm:w-1/3 text-white text-base sm:text-lg"
                style={{ backgroundColor: color }}
              >
                Apply Now
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
