// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const egypt: Country = {
  slug: 'egypt',
  name: 'Egypt',
  region: 'Africa',
  code: 'eg',
  flagUrl:'/images/country/egypt/egypt-square.png',
  imageUrl: '/images/country/egypt/egypt-bg.jpg',
  roundedFlagUrl: '/images/country/egypt/egypt-rounded.png',
  description: `Egypt is a land of ancient wonders, home to the Pyramids of Giza, the Sphinx, and the Nile River. It is a crossroads of history, culture, and civilization.`,
  welcomeMessage: `Welcome to Egypt! Explore the treasures of Cairo, cruise the Nile to Luxor and Aswan, and marvel at the temples of Abu Simbel. Experience the hospitality and rich traditions of the Egyptian people.`,
  welcomeImgUrl: '/images/country/egypt/egypt-welcome.jpg',
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
    climate: 'Desert, hot and dry',
    language: 'Arabic',
    currency: 'Egyptian Pound (EGP)',
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
  eligibleCountries: ["AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CN", "CO", "CY", "CZ", "DE", "DK", "EC", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HK", "HR", "HU", "IE", "IN", "IS", "IT", "JP", "KR", "KW", "KZ", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NL", "NO", "NZ", "OM", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SM", "TW", "UA", "US", "UY", "VA", "VE", "XK", "ZA"]
};

export default egypt;
