import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const ToothExtractionLucknow = () => {
  return (
    <ServicePageTemplate
      title="Tooth Extraction"
      seoTitle="Painless Tooth Extraction in Lucknow | Wisdom Tooth Removal"
      seoDescription="Safe and painless tooth extraction and wisdom tooth removal in Lucknow at Shalimar Dental Clinic. Expert oral surgeons near Dubagga. Book now."
      path="/tooth-extraction-lucknow"
      image="/rct-before.webp"
      benefits={[
        "Stops intense pain from infected teeth",
        "Prevents spread of infection to other areas",
        "Resolves issues with impacted wisdom teeth",
        "Prepares for orthodontic (braces) treatment",
        "Removes badly broken or non-restorable teeth",
        "Quick and painless procedure"
      ]}
      content={
        <>
          <p>
            While our goal is always to save your natural teeth, sometimes a <strong>Tooth Extraction</strong> is necessary to protect your overall oral health. At <strong>Shalimar Dental Clinic Lucknow</strong>, we ensure that extractions are performed safely and completely painlessly.
          </p>
          <p>
            Whether it's a simple extraction or a complex surgical <strong>wisdom tooth removal</strong>, our experienced oral surgeons use advanced techniques to minimize discomfort and promote fast healing.
          </p>
          <h3>When is Extraction Necessary?</h3>
          <p>
            Intervention may be needed in cases of:
          </p>
          <ul>
            <li>Severe tooth decay that cannot be saved by RCT.</li>
            <li>Advanced gum disease (periodontitis) causing tooth mobility.</li>
            <li>Impacted wisdom teeth causing pain or crowding.</li>
            <li>Orthodontic requirements to create space for alignment.</li>
            <li>Badly fractured teeth due to trauma.</li>
          </ul>
          <h3>Post-Extraction Care</h3>
          <p>
            Healing depends on following proper aftercare instructions. We provide detailed guidance on managing the extraction site, including what to eat and how to maintain hygiene to prevent complications like "dry socket."
          </p>
        </>
      }
    />
  );
};

export default ToothExtractionLucknow;
