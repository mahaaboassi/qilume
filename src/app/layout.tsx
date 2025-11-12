import type { Metadata } from "next";
import {
  Alatsi,
  Abril_Fatface,
  Abhaya_Libre,
  Istok_Web,
  Darker_Grotesque
} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const alatsi = Alatsi({
  variable: "--font-alatsi",
  subsets: ["latin"],
  weight: "400",
});

const abril = Abril_Fatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: "400",
});

const abhaya = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const istok = Istok_Web({
  variable: "--font-istok-web",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const darker_grot = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Trusted Skin Care Clinic in Gurgaon | Qilumé Aesthetics",
  description: "Visit Qilumé Aesthetics, a skin care clinic in Gurgaon known for Laser Treatment, Botox Treatment, hair loss treatment and more. Book your session today.",
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Gurgaon',
    'geo.position': '28.450198; 77.070030',
    'ICBM': '28.450198, 77.070030',
  },
};
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": "https://www.qilumeaesthetics.com/",
  "name": "Qilumé Aesthetics Clinic",
  "description": "QiLumé Aesthetics is a premium aesthetic and wellness clinic dedicated to helping you look and feel your best.",
  "disambiguatingDescription": "We specialize in advanced skincare, laser hair reduction, slimming treatments, and holistic wellness solutions tailored for both men and women.",
  "mainEntityOfPage": "https://www.qilumeaesthetics.com/",
  "url": "https://www.qilumeaesthetics.com/",
  "telephone": "+919667929992",
  "priceRange": "$$$",
  "currenciesAccepted": "INR",
  "paymentAccepted": ["cash", "check", "credit card"],
  "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN",
      "streetAddress": "P, Ground Floor, Plot No-2027, Sector 45, Gurugram, Haryana 122003",
      "postalCode": "122003"
  },
  "sameAs": [
    "https://www.instagram.com/qilume.co/",
    "https://www.linkedin.com/company/qilum%C3%A9-aesthetics/"
  ],
  "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.450113761880118",
      "longitude": "77.06926912698462"
  },
  "slogan": "Skin care clinic in Gurgaon",
  "hasMap": "https://maps.app.goo.gl/TvswcPeFdK6c945m6",
  "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
       "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:00",
  },
  "knowsLanguage": ["en-IN"],
  "knowsAbout": [
      "Botox treatments in Gurgaon",
      "Dermal fillers in Gurgaon",
      "Thread lift in Gurgaon",
      "HIFU treatments in Gurgaon",
      "Laser Skin Toning in Gurgaon",
      "Cryo T-Shock therapy in Gurgaon",
      "Laser hair reduction in Gurgaon",
      "Dermaplaning facial in Gurgaon",
      "MediFacial treatment in Gurgaon"
  ],
  "logo": "https://www.qilumeaesthetics.com/logo.png",
  "image": "https://www.qilumeaesthetics.com/logo.png",
};
// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-76EMQBESRD"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-76EMQBESRD');
          `}
        </Script>
        <Script
            id="json-ld-schema"
            strategy="afterInteractive" // or "beforeInteractive" if absolutely critical for initial render
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
          />
      </head>
      <body
        className={`
          ${alatsi.variable}
          ${abril.variable}
          ${abhaya.variable}
          ${istok.variable}
          ${darker_grot.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
