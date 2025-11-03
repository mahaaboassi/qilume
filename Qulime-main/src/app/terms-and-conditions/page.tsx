import { TermsSection } from "@/components/support/sectionTerms"
import { Video } from "@/components/about/video"
import Footer from "@/components/common/footer"
import { Navbar } from "@/components/common/navbar"

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