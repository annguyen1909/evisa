// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const southafrica: Country = {
  slug: 'south-africa',
  name: 'South Africa',
  code: 'za',
  region: 'Africa',
  flagUrl: '/images/country/south-africa/south-africa-square.png',
  imageUrl: '/images/country/south-africa/south-africa-bg.jpg',
  roundedFlagUrl: '/images/country/south-africa/south-africa-rounded.png',
  description: `South Africa is a country of incredible diversity, from the iconic Table Mountain to the wildlife-rich Kruger National Park. It is known for its vibrant cities, history, and natural wonders.`,
  welcomeMessage: `Welcome to South Africa! Explore Cape Town and Johannesburg, go on safari, and visit the historic Robben Island. Experience the Rainbow Nation's culture, cuisine, and breathtaking landscapes.`,
  welcomeImgUrl: '/images/country/south-africa/south-africa-welcome.jpg',
  etaInfo: {
    intro: `In January 2024, The Kenya Government replaced the eVisa with the Electronic Travel Authorization (Kenya ETA), for which citizens of all countries are eligible to apply.`,
    processing: {
      summary: 'Apply Online In 3 Steps',
      steps: [
        'Fill in the online form on our website.',
        'Pay the eTA fee online — via credit card, debit card, PayPal, or bank transfer.',
        'Get your eTA sent to your email.',
      ],
      urgentProcessing: 'As soon as 1 Day',
    },
    visaTypes: [
      {
        type: 'Tourist ETA',
        description: 'Single Entry for 90 days',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 12
      },
      {
        type: 'Business ETA',
        description: 'Single Entry for 90 days',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 12
      },
      {
        type: 'Transit ETA',
        description: 'Single Entry for 72 hours',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 12
      },
    ],
    requiredFor: '194 nationalities are required to obtain a Tourist ETA.',
    governmentFee: 95,
    serviceFee: 'See more', // or use a number if fixed
  },

  visaServicePackage: [
    'Entry visa for a short period',
    'Application form filling assistance',
    'Travel insurance consultant',
    'Portal for real-time visa updates',
    '24/7 online support team for any issues',
    'Urgent case support, with added fees',
  ],

  howToApply: [
    'Fill in the online form on our website.',
    'Pay the eTA fee online via credit card, debit card, PayPal, or bank transfer.',
    'Get your eTA sent to your email.',
  ],

  gvcSupport: {
    description: 'Apply Visa at GVC — with many years of experience, GVC simplifies the process.',
    services: [
      'Consulting about the eVisa',
      "Receiving & checking the applicant's information",
      'Informing the status and results',
      'Collecting the eVisa from the authorities',
      'Sending it to the applicant',
    ],
    note: 'You can also apply on your own through the government website to save your budget.',
  },

  recommendedInsurance: {
    name: 'Covid-19 Insurance',
    price: 299,
    benefits: [
      'Maximum Benefit up to US$ 50,000.00',
      'Covering Covid-19 Treatment Expense',
      'Medical Payments Coverage',
      'Trip Delay, Trip Interruption, Lost Baggage',
      'An advantage condition for your visa approval',
    ],
  },

  info: {
    climate: 'Varied: Mediterranean in the southwest, subtropical in the northeast',
    language: '11 official languages, including English, Afrikaans, Zulu',
    currency: 'South African Rand (ZAR)',
  },

  visaTabs: [
    {
      value: "tourist",
      color: "#065BB9",
      title: "Tourism",
      subtitle: "Single Entry for 90 days",
      visaType: "Tourist ETA",
    },
    {
      value: "business",
      color: "#CB6601",
      title: "Business",
      subtitle: "Single Entry for 90 days",
      visaType: "Business ETA",
    },
    {
      value: "medical",
      color: "#16610E",
      title: "Medical",
      subtitle: "Single Entry for 90 days",
      visaType: "Medical ETA",
    },
  ],
  eligibleCountries: ["AL", "BG", "BY", "CD", "CG", "CI", "CM", "CN", "CR", "CU", "DZ", "EG", "ET", "GH", "GN", "HR", "ID", "IN", "IR", "KE", "KM", "LR", "LT", "MA", "ML", "MX", "NE", "NG", "OM", "PH", "PK", "RO", "SA", "SK", "SN", "UG"]
};

export default southafrica;
