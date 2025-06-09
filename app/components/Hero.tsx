import CheckEligibility from "./CheckEligibility";

export default function Hero() {
  return (
    <section style={{ backgroundImage: "url('/images/hero/hero.jpg')" }} className="w-full bg-cover bg-center bg-no-repeat py-8 px-6 text-center flex flex-col items-center gap-24 text-white">
      <div className="">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Fast, Secure & Reliable eVisa Application
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Apply online for your travel visa in minutes. Trusted by thousands of travelers worldwide.
        </p>
      </div>
      <div className="">
        <CheckEligibility />
      </div>


    </section>
  );
}
