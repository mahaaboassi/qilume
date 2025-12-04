import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import ContactSection from "@/components/contact/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Qilumé Aesthetics",
  description: "Get in touch with Qilumé Aesthetics in Gurgaon. Find our address, phone number, and other contact details to book appointments or ask about our aesthetic and wellness services.",
  alternates: {
    canonical: "https://www.qilumeaesthetics.com/contact", 
  },
};
export default function Contact(){
    return (
        <div>
            <Navbar/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}