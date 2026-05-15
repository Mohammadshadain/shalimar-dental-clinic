import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const GumTreatmentLucknow = () => {
  return (
    <ServicePageTemplate
      title="Gum Treatment"
      seoTitle="Advanced Gum Treatment in Lucknow | Periodontal Surgery"
      seoDescription="Expert treatment for bleeding gums and periodontal disease in Lucknow at Shalimar Dental Clinic. Save your teeth with professional gum care near Dubagga."
      path="/gum-treatment-lucknow"
      image="/cleaning-before.png"
      benefits={[
        "Stops gum bleeding and inflammation",
        "Eliminates persistent bad breath",
        "Prevents tooth loosening and loss",
        "Reduces risk of heart disease and diabetes",
        "Restores healthy, firm gum tissue",
        "Painless laser gum therapy options"
      ]}
      content={
        <>
          <p>
            Healthy gums are the foundation of healthy teeth. <strong>Gum Treatment</strong> (Periodontics) at <strong>Shalimar Dental Clinic Lucknow</strong> focuses on diagnosing and treating diseases that affect the supporting tissues of your teeth.
          </p>
          <p>
            Gum disease is a 'silent' condition that often starts with simple bleeding (gingivitis) but can quickly progress to advanced periodontitis, which destroys the bone supporting your teeth.
          </p>
          <h3>Signs You Need Gum Treatment</h3>
          <ul>
            <li>Bleeding while brushing or flossing.</li>
            <li>Red, swollen, or tender gums.</li>
            <li>Gums pulling away from the teeth (recession).</li>
            <li>Persistent bad breath or metallic taste.</li>
            <li>Loose or shifting teeth.</li>
            <li>Pus appearing between teeth and gums.</li>
          </ul>
          <h3>Our Specialized Periodontal Care</h3>
          <p>
            Our clinic near Dubagga provides both non-surgical and surgical interventions:
          </p>
          <ul>
            <li><strong>Deep Scaling & Root Planing:</strong> Thorough cleaning below the gum line to remove infected deposits.</li>
            <li><strong>Flap Surgery:</strong> For advanced cases to clean deep periodontal pockets.</li>
            <li><strong>Bone Grafts:</strong> Restoring bone lost due to disease.</li>
            <li><strong>Laser Gum Therapy:</strong> Using advanced dental lasers for painless and fast-healing gum procedures.</li>
          </ul>
        </>
      }
      faqs={[
        { q: "Can gum disease be cured?", a: "Early-stage gingivitis can be reversed with professional cleaning and good hygiene. Advanced periodontitis can be managed and stabilized to prevent further damage." },
        { q: "Why do my gums bleed?", a: "Bleeding usually indicates inflammation caused by plaque buildup. It's a warning sign that you need professional dental intervention." },
        { q: "Is gum surgery painful?", a: "We use effective local anesthesia and minimally invasive techniques (like lasers) to ensure your comfort during any gum procedure." }
      ]}
    />
  );
};

export default GumTreatmentLucknow;
