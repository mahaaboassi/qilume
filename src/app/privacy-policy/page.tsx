import { PrivacySection } from "@/components/support/section"
import { Video } from "@/components/about/video"
import Footer from "@/components/common/footer"
import { Navbar } from "@/components/common/navbar"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Qilumé Aesthetics",
  description: "Read the Privacy Policy of Qilumé Aesthetics, explaining how we collect, use, and protect your personal information when you use our website and services.",
  alternates: {
    canonical: "https://www.qilumeaesthetics.com/privacy-policy", 
  },
};
export default function About() {
    return(
        <div>
            <Navbar/>
            <PrivacySection/>
            <Video/>
            <Footer/>
        </div>
    )
}