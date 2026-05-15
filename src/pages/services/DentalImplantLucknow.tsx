import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const DentalImplantLucknow = () => {
  return (
    <ServicePageTemplate
      title="Dental Implants"
      seoTitle="Best Dental Implants in Lucknow | Permanent Tooth Replacement"
      seoDescription="Get permanent tooth replacement with high-quality dental implants in Lucknow at Shalimar Dental Clinic. Expert implant surgeons and affordable cost near Dubagga."
      path="/dental-implant-lucknow"
      image="/implant--after.png"
      benefits={[
        "Looks and feels like natural teeth",
        "Prevents bone loss in the jaw",
        "Lasts a lifetime with proper care",
        "No slipping or clicking like dentures",
        "Preserves adjacent healthy teeth",
        "Restores full chewing and speaking ability"
      ]}
      content={
        <>
          <p>
            Losing a tooth can affect your confidence and your ability to chew comfortably. <strong>Dental Implants</strong> are the gold standard for tooth replacement, providing a permanent solution that mimics the function and appearance of natural teeth.
          </p>
          <p>
            At <strong>Shalimar Dental Clinic Lucknow</strong>, we provide world-class implantology services using premium titanium implants that fuse seamlessly with your jawbone.
          </p>
          <h3>What are Dental Implants?</h3>
          <p>
            A dental implant is a small titanium post that acts as a replacement for the root of a missing tooth. Once the implant is securely integrated with the bone, a custom-made dental crown is attached, giving you a functional and beautiful new tooth.
          </p>
          <h3>Why Choose Implants Over Dentures?</h3>
          <p>
            Unlike dentures, which can be unstable and cause bone loss over time, implants stimulate the jawbone and remain fixed in place. They require no special maintenance beyond regular brushing and flossing.
          </p>
          <h3>Our Implant Procedure</h3>
          <ul>
            <li><strong>Initial Consultation:</strong> Detailed assessment of bone density and oral health.</li>
            <li><strong>Implant Placement:</strong> Precise surgical placement of the titanium post.</li>
            <li><strong>Healing Phase:</strong> Osseointegration period where the bone grows around the implant.</li>
            <li><strong>Abutment & Crown:</strong> Fitting the connector and the final natural-looking crown.</li>
          </ul>
        </>
      }
      faqs={[
        { q: "Are dental implants painful?", a: "The procedure is performed under local anesthesia, so you won't feel any pain during the surgery. Post-surgical discomfort is minimal and can be managed with standard pain relievers." },
        { q: "How long do dental implants last?", a: "With good oral hygiene and regular dental checkups, dental implants can last a lifetime, making them a highly cost-effective long-term solution." },
        { q: "What is the cost of dental implants in Lucknow?", a: "The cost varies depending on the brand and type of implant. We offer affordable implant options without compromising on quality." }
      ]}
    />
  );
};

export default DentalImplantLucknow;
