import { TermsSection } from "@/components/support/sectionTerms"
import { Video } from "@/components/about/video"
import Footer from "@/components/common/footer"
import { Navbar } from "@/components/common/navbar"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Qilumé Aesthetics",
  description: "Read the Terms and Conditions of Qilumé Aesthetics, outlining the rules, policies, and guidelines for using our website and services.",
  alternates: {
    canonical: "https://www.qilumeaesthetics.com/terms-and-conditions", // ✅ Add canonical here
  },
};
export default function About() {
    return(
        <div>

            <Navbar/>
            <TermsSection/>
            <Video/>
            <Footer/>
        </div>
    )
}