import React from "react";
import { Services } from "../components/ClinicApp";
import SEO from "../components/SEO";

const ServicesPage = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <SEO 
        title="Best Dental Services in Lucknow | RCT, Implants & Braces - Shalimar Dental" 
        description="Comprehensive dental services in Lucknow. Expert root canal treatment, dental implants, teeth cleaning, braces, and oral surgery by top dentists in Dubagga."
        canonicalPath="/services"
      />
      <Services />
    </div>
  );
};

export default ServicesPage;
