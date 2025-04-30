"use client";

import { Container, Divider } from "@mui/material";
import ProjectCards from "@/components/HomePage/ProjectCards";
import SkillsSection from "@/components/HomePage/SkillsSection";
import HeroSection from "@/components/HomePage/HeroSection";
import SEOHead from "@/utils/SEOHead";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Prateek Raj Verma - Full Stack Developer"
        description="Explore my portfolio, projects, and blog built with React, Next.js, and AWS."
        imageUrl="/Prateek_Photo.webp"
        url="https://prateek-raj.vercel.app/"
      />
      <Container sx={{ py: 3 }}>
        <HeroSection />
        <Divider sx={{ my: 3 }} />
        <SkillsSection />
        <Divider sx={{ my: 3 }} />
        <ProjectCards />
      </Container>
    </>
  );
}
