"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="w-full bg-[#16610E] flex justify-between items-center px-6 py-1.5 border-b max-md:hidden">
      <div className="text-sm flex gap-8 text-white">
        <p>We are available <span className="text-[#FED16A]">24/7</span> at + 1 888 888 888</p>
        <p>Chat with Our Experts</p>
      </div>
      <div className="flex gap-3">
        <Button variant="secondary">Check Visa Status</Button>
        <Button className="bg-[#D9D9D966] hover:bg-[#b6b6b666] transition-all duration-300">
          <Link href="/login" className="text-white">
            Log In
          </Link>
        </Button>
      </div>
    </div>
  );
}

