import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const DentalCrownsLucknow = () => {
  return (
    <ServicePageTemplate
      title="Dental Crowns and Caps in Lucknow"
      seoTitle="Dental Crowns Lucknow | Protective Caps | Shalimar Dental"
      seoDescription="Restore your damaged teeth with high-quality dental crowns in Lucknow. Precise fit and natural-looking crowns at Shalimar Dental Clinic near Dubagga."
      path="/dental-crowns-lucknow"
      image="/cost8.png"
      benefits={[
        "Durable and high-strength materials",
        "Perfect shade matching",
        "Protects weakened teeth",
        "Restores full tooth function",
        "Comfortable and precise fit"
      ]}
      content={
        <>
          <p>
            Shalimar Dental Clinic offers premium dental crowns in Lucknow to restore the strength, function, and appearance of damaged teeth. Whether you've had a root canal or have a severely cracked tooth, our custom-made crowns provide long-lasting protection.
          </p>
          <h3>When is a Dental Crown Needed?</h3>
          <p>
            A crown (or cap) is used in various situations to save a tooth that has been compromised:
          </p>
          <ul>
            <li><strong>Post-Root Canal:</strong> To strengthen a tooth after the internal pulp has been removed.</li>
            <li><strong>Severe Decay:</strong> When a filling is insufficient to support the remaining tooth structure.</li>
            <li><strong>Cracked or Broken Teeth:</strong> To hold the tooth together and prevent further damage.</li>
            <li><strong>Dental Implants:</strong> As the final prosthetic replacement for a missing tooth.</li>
            <li><strong>Cosmetic Enhancement:</strong> To cover severely discolored or poorly shaped teeth.</li>
          </ul>
          <h3>Materials We Use</h3>
          <p>
            We offer various materials depending on your needs and budget, including high-quality porcelain, Zirconia, and ceramic. Our specialists ensure a perfect color match so your new crown blends seamlessly with your natural smile.
          </p>
        </>
      }
    />
  );
};

export default DentalCrownsLucknow;
