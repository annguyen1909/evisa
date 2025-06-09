// /login/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LoginForm } from "@/components/shared/Login";

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
  <div
    className="bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 md:p-10"
    style={{ backgroundImage: "url('/images/auth/bigbackground.jpg')" }}
  >
    <div className="w-full max-w-sm md:max-w-4xl">
      <LoginForm />
    </div>
  </div>
);

}
