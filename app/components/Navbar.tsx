"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Get Your eVisa", href: "/apply" },
  { label: "Pricing", href: "/pricing" },
  { label: "Info Center", href: "/" },
  { label: "Contact Our Expert", href: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky z-10 top-0 bg-white shadow-md p-6 py-2.5 flex justify-evenly items-center border-b max-md:justify-between">
      {/* Logo */}
      <Link href="/" className="w-28 h-10">
        <div className="relative w-full h-full ml-2 gap-2 flex items-center">
          <Image
            src="/images/logo.png"
            alt="eVisa Logo1"
            width={60}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
          <Image
            src="/images/logotext.png"
            alt="eVisa Logo2"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </Link>

      {/* Desktop Menu using NavigationMenu */}
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link href={item.href} passHref>
                  <NavigationMenuTrigger className="text-gray-700 text-md">
                    {item.label}
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="bg-[#16610E] px-6 py-7 text-lg">Apply Now</Button>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden ml-4 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition"
                onClick={() => setIsOpen(false)}
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
