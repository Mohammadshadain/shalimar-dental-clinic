import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const KidsDentistryLucknow = () => {
  return (
    <ServicePageTemplate
      title="Kids Dentistry"
      seoTitle="Best Pediatric Dentist in Lucknow | Kids Dental Care Lucknow"
      seoDescription="Shalimar Dental Clinic offers gentle and friendly dental care for children in Lucknow. Painless treatments and specialized pediatric services near Dubagga."
      path="/kids-dentistry-lucknow"
      image="/main1.png"
      benefits={[
        "Child-friendly and comforting environment",
        "Painless treatments designed for kids",
        "Prevents early childhood tooth decay",
        "Guides proper growth of permanent teeth",
        "Habit breaking treatments (thumb sucking, etc.)",
        "Education on proper brushing for children"
      ]}
      content={
        <>
          <p>
            Establishing good dental habits early is vital for a lifetime of healthy smiles. <strong>Pediatric Dentistry</strong> (Kids Dentistry) at <strong>Shalimar Dental Clinic Lucknow</strong> focuses on providing gentle, effective care in a friendly environment that reduces dental anxiety.
          </p>
          <p>
            Our team is specially trained to handle the unique dental needs of infants, children, and adolescents near Dubagga and Hardoi Road.
          </p>
          <h3>Our Specialized Services for Kids</h3>
          <ul>
            <li><strong>Dental Sealants:</strong> Protective coatings for back teeth to prevent cavities.</li>
            <li><strong>Fluoride Application:</strong> Strengthening developing enamel to resist decay.</li>
            <li><strong>Fillings for Milk Teeth:</strong> Preserving primary teeth to ensure proper space for permanent ones.</li>
            <li><strong>Pulpectomy:</strong> Pediatric root canal for severely decayed baby teeth.</li>
            <li><strong>Space Maintainers:</strong> Devices to hold space if a milk tooth is lost prematurely.</li>
          </ul>
          <h3>Why Choose Us for Your Child?</h3>
          <p>
            We believe that a child's first dental experience sets the tone for their future relationship with oral health. We use positive reinforcement and painless techniques to ensure every visit is a happy one.
          </p>
        </>
      }
      faqs={[
        { q: "When should my child first visit the dentist?", a: "The first visit should be by their first birthday or when their first tooth appears. Regular checkups should then happen every 6 months." },
        { q: "Are milk teeth really important?", a: "Yes! They help children chew and speak correctly, and most importantly, they save space for permanent teeth. Losing them too early can lead to alignment issues later." },
        { q: "How can I prevent cavities in my child?", a: "Limit sugary snacks, encourage twice-daily brushing, and visit us for professional fluoride treatments and sealants." }
      ]}
    />
  );
};

export default KidsDentistryLucknow;
