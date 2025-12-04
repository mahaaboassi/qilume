import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { ServiceSection } from "@/components/services/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Qilumé Aesthetics",
  description: "Explore the wide range of aesthetic and wellness services at Qilumé Aesthetics in Gurgaon, including Botox, Dermal Fillers, Thread Lift, HIFU treatments, Laser Skin Toning, Cryo T-Shock, Laser Hair Reduction, Dermaplaning, and MediFacial treatments.",
  alternates: {
    canonical: "https://www.qilumeaesthetics.com/services", 
  },
};
export default function Services () {
    return (
        <div>
            <Navbar/>
            <ServiceSection/>
            <Footer/>
        </div>
    )
}