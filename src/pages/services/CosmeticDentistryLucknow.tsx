import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const CosmeticDentistryLucknow = () => {
  return (
    <ServicePageTemplate
      title="Cosmetic Dentistry in Lucknow"
      seoTitle="Cosmetic Dentistry Lucknow | Smile Enhancement | Shalimar Dental"
      seoDescription="Transform your smile with expert cosmetic dentistry in Lucknow. Shalimar Dental Clinic offers veneers, bonding, and total smile makeovers near Dubagga."
      path="/cosmetic-dentistry-lucknow"
      image="/cost4.png"
      benefits={[
        "Customized smile design",
        "High-quality porcelain veneers",
        "Expert composite bonding",
        "Natural-looking results",
        "Modern aesthetic techniques"
      ]}
      content={
        <>
          <p>
            Shalimar Dental Clinic specializes in aesthetic transformations through advanced cosmetic dentistry in Lucknow. We combine art and science to create smiles that are not only healthy but also beautiful and balanced.
          </p>
          <h3>Our Cosmetic Solutions</h3>
          <p>
            We offer a variety of procedures to address imperfections and enhance your smile's natural beauty:
          </p>
          <ul>
            <li><strong>Dental Veneers:</strong> Ultra-thin shells of porcelain or resin that hide chips, stains, or gaps for a flawless look.</li>
            <li><strong>Cosmetic Bonding:</strong> Using tooth-colored resin to repair minor cracks or reshape teeth in a single visit.</li>
            <li><strong>Gum Contouring:</strong> Reshaping the gum line to create a more symmetrical and pleasing smile.</li>
            <li><strong>Teeth Whitening:</strong> Professional-grade whitening for a dramatically brighter smile.</li>
            <li><strong>Full Smile Makeovers:</strong> A comprehensive combination of treatments tailored to your unique facial features.</li>
          </ul>
          <h3>The Art of a Beautiful Smile</h3>
          <p>
            Our cosmetic specialists consider factors like tooth color, alignment, shape, and even facial structure to ensure your results look completely natural. A smile makeover at Shalimar Dental is more than just a procedure—it's a boost in confidence that can transform your life.
          </p>
        </>
      }
    />
  );
};

export default CosmeticDentistryLucknow;
