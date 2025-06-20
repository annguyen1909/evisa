// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const benin: Country = {
  slug: 'benin',
  name: 'Benin',
  region: 'Africa',
  code: 'bj',
  flagUrl: '/images/country/benin/benin-square.png',
  imageUrl: '/images/country/benin/benin-bg.jpg',
  roundedFlagUrl: '/images/country/benin/benin-rounded.png',
  description: `Benin is a country rich in history and culture, known as the birthplace of Vodun (Voodoo) and home to the ancient Kingdom of Dahomey. It features vibrant markets, palaces, and beautiful coastline.`,
  welcomeMessage: `Welcome to Benin! Explore the Royal Palaces of Abomey, relax on the beaches of Grand-Popo, and experience the unique traditions of Vodun. Discover the warmth and hospitality of the Beninese people.`,
  welcomeImgUrl: '/images/country/benin/benin-welcome.jpg',
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
    climate: 'Tropical, hot and humid',
    language: 'French',
    currency: 'West African CFA franc (XOF)',
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
  eligibleCountries: ["AD", "AE", "AF", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BG", "BH", "BN", "BO", "BR", "BS", "BT", "BY", "BZ", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CZ", "DE", "DK", "DM", "DOM", "EC", "EE", "ES", "FI", "FJ", "FR", "GA", "GB", "GD", "GE", "GL", "GM", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KZ", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "MN", "MO", "MT", "MV", "MX", "MY", "MZ", "NA", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "RW", "SA", "SB", "SE", "SG", "SI", "SK", "SM", "SR", "SV", "SY", "SZ", "TH", "TJ", "TM", "TO", "TR", "TT", "TV", "TW", "TZ", "US", "UY", "UZ", "VA", "VC", "VE", "VN", "VU", "WS", "YE"]
};

export default benin;
