
import { Navbar } from "@/components/common/navbar";
import { Hero } from "@/components/home/hero/banner";
import { Text } from "@/components/home/note/text";
import { ImageSection } from "@/components/home/image/image.section";
import TreatmentsGrid from "@/components/home/services/grid";
import Footer from "@/components/common/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted Skin Care Clinic in Gurgaon | Qilumé Aesthetics",
  description: "Visit Qilumé Aesthetics, a skin care clinic in Gurgaon known for Laser Treatment, Botox Treatment, hair loss treatment and more. Book your session today.",
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Gurgaon',
    'geo.position': '28.450198; 77.070030',
    'ICBM': '28.450198, 77.070030',
  },
  alternates: {
    canonical: "https://www.qilumeaesthetics.com/", // ✅ Add canonical here
  },
};
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Text/>
      <ImageSection/>
      <TreatmentsGrid/>
      <Footer/>
    </div>
  );
}
