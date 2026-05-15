import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const DenturesLucknow = () => {
  return (
    <ServicePageTemplate
      title="High-Quality Dentures in Lucknow"
      seoTitle="Custom Dentures Lucknow | Removable Teeth Replacement | Shalimar Dental"
      seoDescription="Get comfortable and natural-looking dentures in Lucknow at Shalimar Dental Clinic. Affordable solutions for partial and full tooth replacement near Dubagga."
      path="/dentures-lucknow"
      image="/cost5.png"
      benefits={[
        "Custom-fit for maximum comfort",
        "Natural-looking appearance",
        "Durable and high-quality materials",
        "Restores chewing and speech",
        "Partial and full denture options"
      ]}
      content={
        <>
          <p>
            Shalimar Dental Clinic provides exceptional denture services in Lucknow, helping patients regain their smiles and confidence. Our custom-crafted dentures are designed to fit securely and comfortably, restoring both aesthetics and function.
          </p>
          <h3>Types of Dentures We Offer</h3>
          <p>
            Depending on your specific needs, we provide several options for removable tooth replacement:
          </p>
          <ul>
            <li><strong>Complete Dentures:</strong> Replaces a full set of teeth on either the upper or lower jaw.</li>
            <li><strong>Partial Dentures:</strong> Used when some natural teeth remain, filling the gaps and preventing other teeth from shifting.</li>
            <li><strong>Flexible Dentures:</strong> Made from a special material that offers superior comfort and a more natural feel.</li>
            <li><strong>Implant-Supported Dentures:</strong> Combine the affordability of dentures with the stability of implants for a more secure fit.</li>
          </ul>
          <h3>Comfort and Functionality</h3>
          <p>
            We take precise impressions of your mouth to ensure your dentures are perfectly aligned with your jaw and facial structure. Our goal is to provide you with a dental solution that allows you to eat your favorite foods, speak clearly, and smile with pride.
          </p>
        </>
      }
    />
  );
};

export default DenturesLucknow;
