import React from "react";
import { Hero, About, WhyChooseUs, Banner, Testimonials } from "../components/ClinicApp";
import SEO from "../components/SEO";
import { CLINIC_SCHEMA } from "../lib/seoData";

interface HomePageProps {
  onOpenModal: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenModal }) => {
  return (
    <>
      <SEO 
        title="Best Dentist in Lucknow | Top Rated Dental Clinic Near Me - Shalimar Dental" 
        description="Looking for the best dentist in Lucknow? Shalimar Dental Clinic offers advanced root canal treatment, dental implants, teeth cleaning, and painless tooth extraction. Expert care in Dubagga."
        canonicalPath="/"
        schemaData={CLINIC_SCHEMA}
      />
      <Hero />
      <About />
      <WhyChooseUs />
      <Banner onOpenModal={onOpenModal} />
      <Testimonials />
    </>
  );
};

export default HomePage;
