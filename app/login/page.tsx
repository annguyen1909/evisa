// /login/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted:", form);
    // TODO: Add login logic
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/images/auth/background.jpg"
          alt="Login visual"
          fill
          className="object-cover"
        />
      </div>

      {/* Login Form */}
      <div className="flex flex-col text-center justify-center w-full md:w-1/3 mx-auto px-8 sm:px-12">
        <h2 className="text-3xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="text-sm text-right text-blue-600 hover:underline cursor-pointer">
            Forgot your password?
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Take me to Signing Up
          </Link>
        </p>
      </div>
    </div>
  );
}
