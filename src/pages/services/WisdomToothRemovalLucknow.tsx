import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const WisdomToothRemovalLucknow = () => {
  return (
    <ServicePageTemplate
      title="Painless Wisdom Tooth Removal in Lucknow"
      seoTitle="Wisdom Tooth Extraction Lucknow | Painless Removal | Shalimar Dental"
      seoDescription="Safe and painless wisdom tooth removal in Lucknow at Shalimar Dental Clinic. Expert surgical extractions for impacted molars near Dubagga and Hardoi Road."
      path="/wisdom-tooth-removal-lucknow"
      image="/cost77.png"
      benefits={[
        "Expert surgical extraction",
        "Painless localized anesthesia",
        "Prevents future overcrowding",
        "Advanced digital imaging diagnostics",
        "Fast recovery and post-op care"
      ]}
      content={
        <>
          <p>
            Wisdom teeth, or third molars, often lack the space to erupt properly, leading to pain, infection, and damage to adjacent teeth. At Shalimar Dental Clinic Lucknow, we specialize in the safe and painless removal of wisdom teeth using advanced surgical techniques.
          </p>
          <h3>Why Remove Wisdom Teeth?</h3>
          <p>
            Impacted or poorly positioned wisdom teeth can cause a variety of dental problems:
          </p>
          <ul>
            <li><strong>Severe Pain:</strong> Pressure from an erupting wisdom tooth can cause debilitating aches.</li>
            <li><strong>Infection (Pericoronitis):</strong> The area around an impacted tooth can become inflamed and infected.</li>
            <li><strong>Cyst Formation:</strong> Fluid-filled sacs can develop around the tooth, damaging the jawbone.</li>
            <li><strong>Damage to Neighbors:</strong> Pressure can damage the roots of adjacent molars.</li>
            <li><strong>Overcrowding:</strong> Wisdom teeth can push other teeth out of alignment.</li>
          </ul>
          <h3>A Comfortable Experience</h3>
          <p>
             Our oral surgeons use high-resolution digital X-rays to plan the extraction precisely. We prioritize patient comfort with advanced anesthesia, ensuring the procedure is painless. Our team also provides comprehensive aftercare instructions to ensure a smooth and quick recovery.
          </p>
        </>
      }
    />
  );
};

export default WisdomToothRemovalLucknow;
