import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import React from "react";

interface FooterProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    paymentLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultSections = [
    {
        title: "ABOUT US",
        links: [
            { name: "About Us", href: "#" },
            { name: "Terms Of Service", href: "#" },
            { name: "Legal Agreements", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "Disclaimers", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "Digital Services Act", href: "#" },
        ],
    },
    {
        title: "OUR SERVICES",
        links: [
            { name: "Visa Information", href: "#" },
            { name: "Check Visa Eligibility", href: "#" },
            { name: "Check Visa Status", href: "#" },
            { name: "Visa Process", href: "#" },
            { name: "Pricing", href: "#" },
        ],
    },
    {
        title: "INFORMATION",
        links: [
            { name: "Make Payment", href: "#" },
            { name: "Embassy List", href: "#" },
            { name: "FAQs", href: "#" },
            { name: "Payment Guidelines", href: "#" },
        ],
    },
    {
        title: "MOST REQUESTED",
        links: [
            { name: "Kenya Visa", href: "mailto:support@example.com" },
            { name: "Uganda Visa", href: "tel:+11234567890" },
            { name: "Malaysia Visa", href: "#" },
            { name: "Indonesia Visa", href: "#" },
            { name: "Ethiopia Visa", href: "#" },
            { name: "Sri Lanka Visa", href: "#" },
        ],
    },
];


const defaultSocialLinks = [
    { icon: <FaInstagram className="size-10" />, href: "#", label: "Instagram" },
    { icon: <FaFacebook className="size-10" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="size-10" />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className="size-10" />, href: "#", label: "LinkedIn" },
];

const defaultPaymentLinks = [
    { icon: <FaCcVisa className="size-10" />, href: "#", label: "Instagram" },
    { icon: <FaCcMastercard className="size-10" />, href: "#", label: "Facebook" },
    { icon: <FaPaypal className="size-10" />, href: "#", label: "Twitter" },
];

const defaultLegalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
];

const Footer = ({
    sections = defaultSections,
    socialLinks = defaultSocialLinks,
    paymentLinks = defaultPaymentLinks,
    copyright = "© 2025 Unitedevisa.com All rights reserved.",
    legalLinks = defaultLegalLinks,
}: FooterProps) => {
    return (
        <section className="bg-white text-gray-700 whitespace-nowrap px-6 py-8 md:px-10 lg:px-32">
            <div className="max-w-6xl mx-auto flex flex-col gap-6">
                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {sections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="mb-4 text-xl uppercase font-bold">{section.title}</h3>
                            <ul className="space-y-3 text-sm">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx} className="hover:text-primary">
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social + Payment Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t pt-4">
                    {/* Social Icons */}
                    <div>
                        <h3 className="mb-4 text-lg uppercase font-semibold">Social network</h3>
                        <ul className="flex space-x-6 text-muted-foreground">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="hover:text-primary">
                                    <a href={social.href} aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Payment Icons */}
                    <div>
                        <h3 className="mb-4 text-lg uppercase font-semibold">Payment</h3>
                        <ul className="flex space-x-6 text-muted-foreground">
                            {paymentLinks.map((payment, idx) => (
                                <li key={idx} className="hover:text-primary">
                                    <a href={payment.href} aria-label={payment.label}>
                                        {payment.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg uppercase font-semibold">Contact Us</h3>
                        <ul className="h-[40px] space-y-6 text-sm">
                            <li className="flex flex-col hover:text-primary">
                                <a className="" href="">+1 234 567 8990</a>
                                <a className="" href="">+1 234 567 8990</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4 border-t pt-4">
                    <p className="text-center md:text-left">{copyright}</p>
                    <ul className="flex gap-4">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-primary">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export { Footer };
