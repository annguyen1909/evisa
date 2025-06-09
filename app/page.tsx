import Hero from "./components/Hero";
import CheckEligibility from "./components/CheckEligibility";
import TopDestinations from "./components/TopDestinations";
import AllVisaTypes from "./components/AllVisaTypes";
import VisaSteps from "./components/VisaSteps";
import CustomerSupport from "./components/CustomerSupport";
import FeeGuarantee from "./components/FeeGuarantee";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <TopDestinations />
      <AllVisaTypes />
      <VisaSteps />
      <CustomerSupport />
      <FeeGuarantee />
    </main>
  );
}