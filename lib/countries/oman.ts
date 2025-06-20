// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const oman: Country = {
  slug: 'oman',
  name: 'Oman',
  code: 'om',
  region: 'Middle East',
  flagUrl: '/images/country/oman/oman-square.png',
  imageUrl: '/images/country/oman/oman-bg.jpg',
  roundedFlagUrl: '/images/country/oman/oman-rounded.png',
  description: `Oman is a country of dramatic deserts, stunning coastlines, and ancient forts. It is known for its rich history, traditional culture, and warm Arabian hospitality.`,
  welcomeMessage: `Welcome to Oman! Wander the souks of Muscat, explore the dunes of the Wahiba Sands, and relax on the beaches of Salalah. Discover the beauty and traditions of this peaceful Gulf nation.`,
  welcomeImgUrl: '/images/country/oman/oman-welcome.jpg',
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
    climate: 'Arid, hot summers and mild winters',
    language: 'Arabic',
    currency: 'Omani Rial (OMR)',
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
  eligibleCountries: ["AD", "AF", "AG", "AL", "AM", "AO", "AR", "AS", "AT", "AU", "AZ", "BA", "BE", "BF", "BG", "BN", "BO", "BR", "BT", "BY", "CA", "CH", "CL", "CN", "CO", "CR", "CU", "CZ", "DE", "DK", "DM", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GE", "GN", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IR", "IS", "IT", "JP", "KZ", "LA", "LB", "LI", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MK", "ML", "MT", "MV", "MX", "MY", "NA", "NE", "NI", "NL", "NO", "NR", "NZ", "PA", "PE", "PL", "PT", "PY", "RO", "SC", "SE", "SG", "SI", "SK", "SM", "SN", "SR", "SV", "TH", "TJ", "TM", "TR", "TW", "US", "UY", "UZ", "VA", "VE", "VN", "ZA"]
};

export default oman;
