"use client";

import { Button } from "@/components/ui/button";
import { PhoneIcon, ChatBubbleLeftEllipsisIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const supportOptions = [
  {
    title: "Call Us",
    description: "Speak directly with our support team.",
    icon: PhoneIcon,
    buttonText: "Call Us Now",
    buttonAction: () => window.open("tel:+1234567890"),
  },
  {
    title: "Live Chat With Us",
    description: "Get real-time assistance online.",
    icon: ChatBubbleLeftEllipsisIcon,
    buttonText: "Chat With Us Now",
    buttonAction: () => alert("Live chat feature coming soon!"),
  },
  {
    title: "Email Us",
    description: "Send us an email with your inquiries.",
    icon: EnvelopeIcon,
    buttonText: "Email Us Now",
    buttonAction: () => window.location.href = "mailto:support@example.com",
  },
];

export default function CustomerSupport() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Us 24/7</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {supportOptions.map(({ title, description, icon: Icon, buttonText, buttonAction }) => (
          <div key={title} className="p-6 border rounded-lg shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow cursor-pointer">
            <Icon className="h-10 w-10 text-indigo-600" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <Button onClick={buttonAction}>{buttonText}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
