"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="w-full bg-gray-100 flex justify-between items-center px-6 py-3 border-b">
      <div className="text-sm text-gray-700 space-y-1">
        <p>Your Trusted eVisa Solution</p>
        <p>Fast, Secure & Reliable</p>
      </div>
      <div className="flex gap-3">
        <Button variant="secondary">Check Visa Status</Button>
        <Button>
          <Link href="/login" className="text-white">
            Log In
          </Link>
        </Button>
      </div>
    </div>
  );
}