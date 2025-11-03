"use client";

import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import ServiceList from "@/components/home/services/list";
import { BannerSection } from "@/components/services/banner";
import { useParams } from "next/navigation";

export default function ServiceInfo() {
    const { service } = useParams()
    return (
        <div>
            <Navbar/>
            <BannerSection/>
            <ServiceList service={service}/>
            <Footer/>
        </div>
    )
}