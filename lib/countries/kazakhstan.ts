// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const kazakhstan: Country = {
  slug: 'kazakhstan',
  name: 'Kazakhstan',
  region: 'Central Asia',
  flagUrl: '/images/country/kazakhstan/kazakhstan-square.png',
  imageUrl: '/images/country/kazakhstan/kazakhstan-bg.jpg',
  roundedFlagUrl: '/images/country/kazakhstan/kazakhstan-rounded.png',
  description: `Kazakhstan is the world's largest landlocked country, known for its vast steppes, modern cities, and nomadic heritage. It offers a unique blend of ancient traditions and futuristic architecture.`,
  welcomeMessage: `Welcome to Kazakhstan! Discover the cosmopolitan city of Almaty, the futuristic capital of Astana (Nur-Sultan), and the breathtaking landscapes of the Altai Mountains and Charyn Canyon. Experience Kazakh hospitality and rich cultural traditions.`,
  welcomeImgUrl: '/images/country/kazakhstan/kazakhstan-welcome.jpg',
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
    climate: 'Continental, with hot summers and cold winters',
    language: 'Kazakh, Russian',
    currency: 'Tenge (KZT)',
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
};

export default kazakhstan;
