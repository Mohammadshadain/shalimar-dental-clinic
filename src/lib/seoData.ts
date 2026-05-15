export const CLINIC_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Shalimar Dental Clinic",
  "image": "https://images.unsplash.com/photo-1629909613654-28a3a7c4bc42?q=80&w=1200&auto=format&fit=crop",
  "@id": "https://shalimardentalclinic.online",
  "url": "https://shalimardentalclinic.online",
  "telephone": "+919598112677",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Dubagga Chauraha, Hardoi Rd",
    "addressLocality": "Lucknow",
    "addressRegion": "UP",
    "postalCode": "226003",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.8837,
    "longitude": 80.8407
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/shalimar_dentalclinic_dubagga"
  ],
  "priceRange": "$$"
};

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is root canal treatment painful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Shalimar Dental Clinic, we use advanced local anesthesia and painless techniques to ensure your root canal treatment is as comfortable as possible."
      }
    },
    {
      "@type": "Question",
      "name": "How much do dental implants cost in Lucknow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dental implant costs vary depending on the type of implant. We offer affordable dental implants in Lucknow starting at competitive prices."
      }
    }
  ]
};
