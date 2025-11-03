
import { Navbar } from "@/components/common/navbar";
import { Hero } from "@/components/home/hero/banner";
import { Text } from "@/components/home/note/text";
import { ImageSection } from "@/components/home/image/image.section";
import TreatmentsGrid from "@/components/home/services/grid";
import Footer from "@/components/common/footer";
import Script from 'next/script';

export default function Home() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
        "addressCountry": {
            "@type": "Country",
            "name": "IN"
        },
        "streetAddress": "P, Ground Floor, Plot No-2027, Sector 45, Gurugram, Haryana 122003",
        "postalCode": "122003"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.450113761880118",
        "longitude": "77.06926912698462"
    },
    "slogan": "Skin care clinic in Gurgaon",
    "hasMap": "https://maps.app.goo.gl/WNjsUGYMJSeKAFGU7",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "http://schema.org/Monday",
            "http://schema.org/Tuesday",
            "http://schema.org/Wednesday",
            "http://schema.org/Thursday",
            "http://schema.org/Friday",
            "http://schema.org/Saturday",
            "http://schema.org/Sunday"
        ],
        "opens": "10:00 AM",
        "closes": "8:00 PM"
    },
    "knowsLanguage": ["en-IN"],
    "knowsAbout": [
        "Laser skin treatments in Gurgaon",
        "Anti-aging treatments in Gurgaon",
        "Hair loss treatments in Gurgaon",
        "Botox treatments in Gurgaon"
    ],
    "logo": "https://www.qilumeaesthetics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.a6c14f53.png&w=1920&q=75",
    "image": "https://www.qilumeaesthetics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.a6c14f53.png&w=1920&q=75"
  };
  return (
    <div className="">
      <Script
        id="json-ld-schema"
        strategy="afterInteractive" // or "beforeInteractive" if absolutely critical for initial render
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Navbar/>
      <Hero/>
      <Text/>
      <ImageSection/>
      <TreatmentsGrid/>
      <Footer/>
    </div>
  );
}
