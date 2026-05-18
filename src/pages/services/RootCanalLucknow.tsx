import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const RootCanalTreatmentLucknow = () => {
  return (
    <ServicePageTemplate
      title="Root Canal Treatment"
      seoTitle="Best Root Canal Treatment in Lucknow | Painless RCT Lucknow"
      seoDescription="Looking for painless root canal treatment in Lucknow? Shalimar Dental Clinic offers expert RCT services at affordable prices near Dubagga. Book your consultation today."
      path="/root-canal-treatment-lucknow"
      image="/rct-after.webp"
      benefits={[
        "Eliminates tooth pain immediately",
        "Saves your natural tooth from extraction",
        "Prevents spread of infection to other teeth",
        "Restores normal chewing and biting",
        "Painless procedure with modern anesthesia",
        "Preserves your natural smile and jawbone"
      ]}
      content={
        <>
          <p>
            Root Canal Treatment (RCT) is a highly effective procedure designed to save a tooth that is severely decayed or infected. At <strong>Shalimar Dental Clinic Lucknow</strong>, we specialize in providing <strong>painless root canal treatment</strong> using the latest endodontic technologies.
          </p>
          <p>
            Many people fear root canals, but with modern advancements, the procedure is no more uncomfortable than getting a standard filling. Our expert dentists near Dubagga ensure that you are completely comfortable throughout the process.
          </p>
          <h3>Why Do You Need RCT?</h3>
          <p>
            When the pulp (the soft tissue inside your tooth) becomes inflamed or infected due to deep decay, repeated dental procedures, or a crack in the tooth, it can cause intense pain or lead to an abscess. If left untreated, the infection can spread, leading to tooth loss.
          </p>
          <h3>Our Process</h3>
          <p>
            Our specialized endodontic team follows a systematic approach:
          </p>
          <ul>
            <li><strong>Diagnosis:</strong> Digital X-rays to assess the extent of infection.</li>
            <li><strong>Anesthesia:</strong> Local anesthesia to ensure a completely painless experience.</li>
            <li><strong>Cleaning:</strong> Removing the infected pulp and thoroughly cleaning the root canals.</li>
            <li><strong>Filling:</strong> Sealing the canals with a biocompatible material.</li>
            <li><strong>Restoration:</strong> Placing a dental crown to restore the tooth's strength and appearance.</li>
          </ul>
        </>
      }
    />
  );
};

export default RootCanalTreatmentLucknow;
