// src/config/site-config.ts

export const siteConfig = {
  name: "Atomic Dog",
  description: "Éducation canine bienveillante et rééducation comportementale.",
  author: "Votre Nom", // À compléter
  email: "contact@atomicdog.fr", // Placeholder
  phone: "+33 6 00 00 00 00", // Placeholder
  links: {
    whatsapp: "https://wa.me/33600000000", // À changer avec le vrai numéro
    instagram: "https://instagram.com/",
  },
  nav: [
    { title: "Accueil", href: "/" },
    { title: "À Propos", href: "/a-propos" }, // "Sobre mí" traduit [cite: 12]
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ],
};

// Extraction des prix et services depuis le PDF (Page 3) 
export const servicesData = [
  {
    id: "bilan",
    title: "Bilan Comportemental", // "Evaluación comportamental" [cite: 70]
    price: "65€",
    duration: "2h max",
    description: "Analyse complète du comportement de votre chien à domicile ou en extérieur.",
    features: ["Analyse de l'environnement", "Diagnostic précis", "Premières pistes de travail"],
  },
  {
    id: "balade",
    title: "Balade Éducative", // "Paseos educativos" [cite: 31, 72]
    price: "18€",
    unit: "/heure",
    pack: "60€ pour 5 balades", // [cite: 73]
    description: "Socialisation et apprentissage des codes canins en groupe ou individuel.",
  },
  {
    id: "chiot",
    title: "École du Chiot", // "Curso cachorro" [cite: 42, 76]
    price: "270€",
    unit: "Formule complète",
    description: "Les bases pour bien démarrer : propreté, solitude, socialisation.",
    details: "6 séances sur 1 an", // [cite: 77]
  },
  {
    id: "education",
    title: "Éducation Adulte", // "Educación básica" [cite: 47, 78]
    price: "50€",
    unit: "/séance",
    packs: [
      { name: "Pack 4 séances", price: "195€", oldPrice: "200€" }, // [cite: 79, 80]
      { name: "Pack 8 séances", price: "380€", oldPrice: "400€" }, // [cite: 81, 82]
    ],
    description: "Assis, couché, rappel, marche en laisse pour chien adulte.",
  },
  {
    id: "reeducation",
    title: "Rééducation / Troubles", // "Modificación de conducta" [cite: 52, 83]
    price: "55€",
    unit: "/séance",
    packs: [
      { name: "Pack 3 séances", price: "165€" }, // [cite: 84]
      { name: "Pack 5 séances", price: "270€" }, // [cite: 85]
      { name: "Pack 10 séances", price: "500€" }, // [cite: 86]
    ],
    description: "Pour les problèmes d'agressivité, peur, anxiété de séparation.",
  },
  {
      id: "pension",
      title: "Pension & Garde", // "Guardería a domicilio" [cite: 37, 74]
      price: "A partir de 18€",
      description: "Garde à domicile ou promenades pendant vos absences.",
  }
];