import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const TeethCleaningLucknow = () => {
  return (
    <ServicePageTemplate
      title="Teeth Cleaning"
      seoTitle="Professional Teeth Cleaning in Lucknow | Scaling & Polishing"
      seoDescription="Book professional teeth cleaning and scaling in Lucknow at Shalimar Dental Clinic. Remove plaque, tartar, and stains for a healthier, brighter smile today."
      path="/teeth-cleaning-lucknow"
      image="/cleaning-after.webp"
      benefits={[
        "Removes stubborn plaque and tartar",
        "Prevents gum disease and gingivitis",
        "Eliminates bad breath (halitosis)",
        "Brightens your smile by removing stains",
        "Detects dental issues at an early stage",
        "Improves overall oral hygiene"
      ]}
      content={
        <>
          <p>
            Regular professional <strong>Teeth Cleaning</strong> is essential for maintaining healthy teeth and gums. Even with regular brushing and flossing, plaque can harden into tartar (calculus), which only a dentist can remove.
          </p>
          <p>
            At <strong>Shalimar Dental Clinic Lucknow</strong>, we provide thorough scaling and polishing using ultra-modern ultrasonic tools to ensure a gentle yet effective cleaning experience.
          </p>
          <h3>Why is Scaling Important?</h3>
          <p>
            Tartar buildup can lead to gum inflammation, bleeding, and eventually periodontal disease, which is a leading cause of tooth loss in adults. Professional scaling removes this buildup from below the gum line, protecting your oral health.
          </p>
          <h3>Our Cleaning Process</h3>
          <ul>
            <li><strong>Ultrasonic Scaling:</strong> Using high-frequency vibrations to break down tartar and plaque.</li>
            <li><strong>Hand Scaling:</strong> Precise removal of any remaining deposits.</li>
            <li><strong>Polishing:</strong> Using a special paste to remove surface stains and make your teeth smooth.</li>
            <li><strong>Oral Hygiene Advice:</strong> Personalized tips to maintain your clean smile at home.</li>
          </ul>
          <p>
            We recommend a professional cleaning every 6 months to keep your smile at its best and prevent expensive dental treatments in the future.
          </p>
        </>
      }
      faqs={[
        { q: "Does teeth cleaning hurt?", a: "No, professional scaling is a non-invasive procedure. Some patients may experience slight sensitivity, but it is generally a painless process." },
        { q: "How long does a cleaning session take?", a: "A standard scaling and polishing session usually takes about 30 to 45 minutes." },
        { q: "Will cleaning make my teeth loose?", a: "This is a common myth. Cleaning actually strengthens your teeth by removing the infection-causing tartar that leads to bone loss and loose teeth." }
      ]}
    />
  );
};

export default TeethCleaningLucknow;
