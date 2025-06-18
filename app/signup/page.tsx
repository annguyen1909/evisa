"use client";

import { SignupForm } from "@/components/shared/Signup";

export default function SignupPage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 md:p-10"
      style={{ backgroundImage: "url('/images/auth/bigbackground.jpg')" }}
    >
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  );
}