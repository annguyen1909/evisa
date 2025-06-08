// /signup/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    areaCode: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup form submitted:", form);
    // TODO: Add signup logic
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/images/auth/background.jpg"
          alt="Signup visual"
          fill
          className="object-cover"
        />
      </div>

      {/* Signup Form */}
      <div className="flex flex-col text-center justify-center gap-4 w-full md:w-1/2 px-8 sm:px-12">
        <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="flex gap-4">
            <Input
              name="areaCode"
              placeholder="Area Code"
              value={form.areaCode}
              onChange={handleChange}
              required
              className="w-1/3"
            />
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handleChange}
              required
              className="w-2/3"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Sign In Now
          </Link>
        </p>
      </div>
    </div>
  );
}
