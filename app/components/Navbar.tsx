"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
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
    <nav className="w-full sticky z-20 top-0 bg-white shadow-md px-2 py-4 md:p-4 flex justify-between items-center border-b lg:justify-evenly max-md:justify-between">
      {/* Logo */}
      <Link href="/" className="w-42 md:mr-12 h-10">
        <div className="relative w-full h-full z-20 gap-2 flex items-center">
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

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink href={item.href} className="relative overflow-hidden px-4 py-4 text-md cursor-pointer transition-all duration-300 bg-white
               before:absolute before:inset-0 before:bg-[#16610E]
               before:w-0 before:h-full before:transition-all before:duration-300 before:z-0 before:pointer-events-none 
               hover:before:w-full hover:text-white
               ">
                  <div className="relative z-10 font-manrope hover:border-[#16610E] whitespace-nowrap text-lg xl:text-xl">
                    {item.label}
                  </div>
                </NavigationMenuLink>

              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="bg-[#16610E] hover:bg-[#16610E]/80 text-white cursor-pointer px-6 py-7 text-lg">Apply Now</Button>
      </div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden ml-4 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t p-4 border-gray-200 shadow-md lg:hidden">
          <p className="text-gray-600 font-semibold pb-2">MENU</p>
          <nav className="flex flex-col bg-gray-100 rounded-lg p-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">

                <div className="flex justify-between items-center">
                  <Link

                    href={item.href}
                    className="text-gray-600 p-1 font-semibold uppercase hover:text-primary transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <hr className="mt-1 w-full" />
              </div>
            ))}
            <div className="flex justify-center">
              <Button className="bg-[#16610E] hover:bg-[#16610E]/80 text-white mt-1 py-6 w-1/3" onClick={() => setIsOpen(false)}>Apply</Button>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}
