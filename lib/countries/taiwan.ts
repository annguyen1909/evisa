// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const taiwan: Country = {
  slug: 'taiwan',
  name: 'Taiwan',
  region: 'East Asia',
  flagUrl: '/images/country/taiwan/taiwan-square.png',
  imageUrl: '/images/country/taiwan/taiwan-bg.jpg',
  roundedFlagUrl: '/images/country/taiwan/taiwan-rounded.png',
  description: `A Vietnamese visa is a type of travel document issued by Vietnamese officials that allows you to travel to and enter Vietnam with tourism and business intentions.`,
  welcomeMessage: `Vietnam - A captivating Southeast Asian country renowned for its breathtaking landscapes, rich history, and vibrant culture. Explore the bustling streets of Hanoi, the capital city, where traditional architecture blends with modern influences, and indulge in the flavors of Vietnamese street food. Immerse yourself in the natural beauty of Halong Bay, with its towering limestone islands and emerald waters, or venture into the lush rice terraces of Sapa. Discover the ancient wonders of Hue's Imperial City or the charming lantern-lit streets of Hoi An.`,
  welcomeImgUrl: '/images/country/taiwan/taiwan-welcome.jpg',
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
    climate: 'Humid, tropical',
    language: 'Vietnam, English',
    currency: 'Vietnam Dong (VND)',
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

export default taiwan;
