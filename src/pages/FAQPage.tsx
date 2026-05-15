import React from "react";
import { FAQ } from "../components/ClinicApp";
import SEO from "../components/SEO";
import { FAQ_SCHEMA } from "../lib/seoData";

const FAQPage = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <SEO 
        title="Dental FAQ | Common Questions About Treatments in Lucknow" 
        description="Find answers to common dental questions about RCT, implants, braces, and oral surgery. Clear explanations from Shalimar Dental Clinic Lucknow."
        canonicalPath="/faq"
        schemaData={FAQ_SCHEMA}
      />
      <FAQ />
    </div>
  );
};

export default FAQPage;
