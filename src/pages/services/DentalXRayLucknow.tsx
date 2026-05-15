import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const DentalXRayLucknow = () => {
  return (
    <ServicePageTemplate
      title="Digital Dental X-Ray in Lucknow"
      seoTitle="Digital Dental X-Ray in Lucknow | Advanced Diagnostics | Shalimar Dental"
      seoDescription="Get high-definition digital dental X-rays in Lucknow at Shalimar Dental Clinic. Precise diagnostics for painless and accurate dental treatments near Dubagga."
      path="/dental-x-ray-lucknow"
      image="/cost1111.png"
      benefits={[
        "High-definition digital imaging",
        "Low radiation exposure",
        "Instant diagnostic results",
        "Precise treatment planning",
        "Comfortable and quick process"
      ]}
      content={
        <>
          <p>
            At Shalimar Dental Clinic Lucknow, we believe that accurate diagnosis is the first step toward successful dental treatment. Our clinic is equipped with advanced digital X-ray technology that provides high-resolution images of your teeth, bone structure, and roots.
          </p>
          <h3>Why are Dental X-Rays Necessary?</h3>
          <p>
            Standard visual examinations can only reveal so much. Dental X-rays allow our experts to see what's happening beneath the surface, including:
          </p>
          <ul>
            <li>Detecting cavities between teeth that aren't visible to the naked eye.</li>
            <li>Identifying infections or abscesses at the root of a tooth.</li>
            <li>Monitoring the health of the jawbone and surrounding structures.</li>
            <li>Assessing the position of wisdom teeth before extraction.</li>
            <li>Planning precise placements for dental implants and orthodontic treatments.</li>
          </ul>
          <h3>Is it Safe?</h3>
          <p>
            Our digital X-ray systems are designed with patient safety in mind. They emit significantly lower radiation compared to traditional film-based X-rays. The process is quick, painless, and provides our clinical team with instant data to create your personalized treatment plan.
          </p>
        </>
      }
    />
  );
};

export default DentalXRayLucknow;
