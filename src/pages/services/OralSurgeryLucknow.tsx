import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const OralSurgeryLucknow = () => {
  return (
    <ServicePageTemplate
      title="Advanced Oral Surgery in Lucknow"
      seoTitle="Advanced Oral Surgery in Lucknow | Expert Surgeons | Shalimar Dental"
      seoDescription="Safe and painless oral surgery in Lucknow at Shalimar Dental Clinic. Specializing in wisdom tooth removal, bone grafting, and complex extractions."
      path="/oral-surgery-lucknow"
      image="/cost222.png"
      benefits={[
        "Expert Oral & Maxillofacial Surgeons",
        "Minimally invasive techniques",
        "Painless surgical procedures",
        "Comprehensive post-op care",
        "Modern sterilization protocols"
      ]}
      content={
        <>
          <p>
            Shalimar Dental Clinic is a premier center for oral surgery in Lucknow. Led by experienced specialists, we handle a wide range of surgical dental procedures with precision and care, ensuring the best possible outcomes for our patients.
          </p>
          <h3>Our Surgical Expertise</h3>
          <p>
            Our team is trained in advanced surgical techniques to address complex dental and jaw issues, including:
          </p>
          <ul>
            <li><strong>Complex Extractions:</strong> Safely removing impacted teeth or severely damaged teeth that cannot be saved.</li>
            <li><strong>Wisdom Tooth Removal:</strong> Expert surgical removal of third molars to prevent pain and overcrowding.</li>
            <li><strong>Bone Grafting:</strong> Strengthening the jawbone to provide a solid foundation for dental implants.</li>
            <li><strong>Sinus Lifts:</strong> Adding bone to the upper jaw to accommodate implants in the molar region.</li>
            <li><strong>Soft Tissue Surgery:</strong> Enhancing gum health and aesthetics through specialized surgery.</li>
          </ul>
          <h3>Patient Comfort and Safety</h3>
          <p>
            We understand that the thought of surgery can be intimidating. That's why we prioritize your comfort using advanced localized anesthesia and minimally invasive approaches. Our clinic follows strict international sterilization standards to ensure a safe and hygienic environment for every procedure.
          </p>
        </>
      }
    />
  );
};

export default OralSurgeryLucknow;
