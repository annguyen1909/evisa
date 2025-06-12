export type Country = {
  slug: string;
  name: string;
  description: string;
  welcomeMessage: string;
  flagUrl?: string;
  roundedFlagUrl?: string;
  imageUrl?: string; // Optional image URL for the country
  welcomeImgUrl?: string;
  etaInfo: {
    intro: string;
    processing: {
      summary: string;
      steps: string[];
      urgentProcessing: string;
    };
    types: {
      type: string;
      description: string;
    }[];
    requiredFor: string;
    governmentFee: number;
    serviceFee: string | number;
  };
  visaTabs: {
    value: string;
    color: string;
    title: string;
    subtitle: string;
    visaType: string;
  }[];
  visaServicePackage: string[];
  howToApply: string[];
  gvcSupport: {
    description: string;
    services: string[];
    note: string;
  };
  recommendedInsurance: {
    name: string;
    price: number;
    benefits: string[];
  };
  info: {
    climate: string;
    language: string;
    currency: string;
  };
};
