'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import healthy_skin from "@/assets/banner/healthy_skin.png";
import TypewriterEffect from "@/components/common/typewriter";

export const ImageSection = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [typewriterActive, setTypewriterActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTypewriterActive(true); // Start typewriter when visible
          setShowParagraph(true);    // Show paragraph too
        }
      },
      { threshold: 0.5 } // 50% visibility triggers
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (showParagraph && paragraphRef.current) {
      paragraphRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [showParagraph]);

  return (
    <div
      ref={sectionRef}
      className="py-10 bg-[#EFEAE6] relative"
    >
      <Image
        src={healthy_skin}
        alt="Healthy Skin"
        className="w-full h-[500px] object-cover lg:h-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Only run typewriter when active */}
        {typewriterActive && <TypewriterEffect message="When your skin glows, your confidence shows." />}
        <p
          ref={paragraphRef}
          className={`font-darker mt-4 text-lg text-white lg:text-xl max-w-[550px] transition-opacity duration-1000 ${
            showParagraph ? "opacity-100" : "opacity-0"
          }`}
        >
          At QiLumé Aesthetics, we don’t mask beauty—we awaken it. Thoughtful
          care, glowing skin, and confidence that lasts longer than any filter.
        </p>
      </div>
    </div>
  );
};
