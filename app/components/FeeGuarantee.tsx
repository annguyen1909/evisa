import { Button } from "@/components/ui/button";

export default function FeeGuarantee() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6 rounded-lg mt-4">
      <h2 className="text-3xl font-bold text-[#16610E] mb-6 text-center">
        No rush fees. No hidden costs.
      </h2>
      <p className="max-w-3xl mx-auto text-center text-[#16610E] mb-8 leading-relaxed">
        Just one flat service fee of <span className="font-bold">$49.99 per passenger</span>
      </p>

      {/* Cards and Symbols */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 md:gap-8 text-center">
        {/* Card 1 */}
        <div className="p-4 h-full bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-[#16610E] mb-2">1</h1>
          <h3 className="text-lg font-semibold text-[#16610E] whitespace-nowrap mb-2">Government Application Fees</h3>
          <p className="text-gray-600">
            This fee covers the cost of your eVisa application, as required by the government of your chosen destination.
          </p>
          <Button className="mt-4 mb-2 w-3/4 bg-[#16610E] hover:bg-[#16610E]/80 text-white">Check Visa Fees</Button>
        </div>

        {/* "+" Symbol */}
        <div className="md:block text-3xl font-bold text-[#16610E]">+</div>

        {/* Card 2 */}
        <div className="p-4 h-full bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-[#065BB9] mb-2">2</h1>
          <h3 className="text-lg font-semibold text-[#065BB9] mb-2">Our Service Fees</h3>
          <p className="text-gray-600">
            Enjoy 24/7 support, an 80% approval rate, and full eVisa assistance — all for one flat, transparent fee.
          </p>
          <Button className="mt-4 mb-2 w-3/4 bg-[#065BB9] hover:bg-[#065BB9]/80 text-white">$49.99 per passenger</Button>
        </div>

        {/* "=" Symbol */}
        <div className="md:block text-3xl font-bold text-[#16610E]">=</div>

        {/* Card 3 */}
        <div className="p-4 h-full bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-[#CB6601] mb-2">Total Balance</h1>
          <h3 className="text-lg font-semibold text-[#CB6601] mb-2">You have to pay</h3>
          <p className="text-gray-600">
            Flat-rate pricing with zero hidden fees — no extra charges for urgency, transparency you can count on.
          </p>
          <Button className="mt-4 mb-2 w-3/4 bg-[#CB6601] hover:bg-[#CB6601]/80 text-white">Apply Now</Button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#16610E] mt-8 text-center">
        Rejected? No worries — you get your service fee back.
      </h2>
      <h2 className="text-2xl font-bold text-[#16610E] mt-6 text-center">
        Guaranteed!
      </h2>
      <h3 className="text-lg font-bold text-[#CB6601] mt-6 text-center">Want to know more? Read our full refund policy here.</h3>
    </section>
  );
}
