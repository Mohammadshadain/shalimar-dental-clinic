import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const ConsultationLucknow = () => {
  return (
    <ServicePageTemplate
      title="Expert Dental Consultation in Lucknow"
      seoTitle="Dental Consultation Lucknow | Personalized Dental Checkup | Shalimar Dental"
      seoDescription="Book a professional dental consultation in Lucknow at Shalimar Dental Clinic. Get personalized treatment plans and expert advice for your oral health."
      path="/consultation-lucknow"
      image="/main1.png"
      benefits={[
        "Comprehensive oral health assessment",
        "Personalized treatment planning",
        "Expert advice from senior dentists",
        "Transparent cost estimation",
        "Advanced diagnostic tools"
      ]}
      content={
        <>
          <p>
            Your journey to a healthy smile starts with a comprehensive dental consultation at Shalimar Dental Clinic Lucknow. Our expert dentists take the time to understand your concerns and provide a detailed assessment of your oral health.
          </p>
          <h3>What to Expect During Your Consultation?</h3>
          <p>
            We believe in a holistic approach to dental care. During your visit, our clinical team will:
          </p>
          <ul>
            <li><strong>Thorough Examination:</strong> Checking for decay, gum disease, and other oral health issues.</li>
            <li><strong>Oral Cancer Screening:</strong> A vital part of our preventive care protocol.</li>
            <li><strong>Imaging:</strong> Using digital X-rays if necessary to get a full view of your dental health.</li>
            <li><strong>Discussion:</strong> Understanding your dental history and any specific aesthetic or functional goals you have.</li>
            <li><strong>Custom Treatment Plan:</strong> Providing a clear roadmap for any necessary treatments, including timelines and transparent costs.</li>
          </ul>
          <h3>Why Choose us for Consultation?</h3>
          <p>
            At Shalimar Dental, we don't just treat symptoms; we treat people. Our consultations are designed to be informative and stress-free, empowering you with the knowledge you need to make the best decisions for your dental well-being.
          </p>
        </>
      }
    />
  );
};

export default ConsultationLucknow;
