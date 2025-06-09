"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Get Your eVisa", href: "/apply" },
  { label: "Pricing", href: "/pricing" },
  { label: "Info Center", href: "/" },
  { label: "Contact Our Expert", href: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky z-10 top-0 bg-white shadow-md px-6 py-4 flex justify-between items-center border-b">
      <Link href="/" className="relative w-28 h-10">
        <Image
          src="/images/logo.png"  // your logo path
          alt="eVisa Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-gray-700 text-xl hover:text-primary transition"
            onClick={() => setIsOpen(false)} // close menu if any link clicked (optional)
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Apply button */}
      <div className="hidden md:block">
        <Button>Apply</Button>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden ml-4 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition"
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {item.label}
              </Link>
            ))}
            <Button onClick={() => setIsOpen(false)}>Apply</Button>
          </nav>
        </div>
      )}
    </nav>
  );
}
