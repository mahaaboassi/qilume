import { Features } from "@/components/about/features"
import { AboutSection } from "@/components/about/section"
import { Video } from "@/components/about/video"
import { WhyChooseUs } from "@/components/about/whyUs"
import Footer from "@/components/common/footer"
import { Navbar } from "@/components/common/navbar"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Qilumé Aesthetics",
  description: "Learn about Qilumé Aesthetics, a premium skin care and wellness clinic in Gurgaon. Discover our mission, expert team, and dedication to helping you look and feel your best.",
  alternates: {
    canonical: "https://www.qilumeaesthetics.com/about", 
  },
};
export default function About() {
    return(
        <div>
            <Navbar/>
            <AboutSection/>
            <WhyChooseUs/>
            <Features/>
            <Video/>
            <Footer/>
        </div>
    )
}