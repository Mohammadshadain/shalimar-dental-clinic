import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const SmileMakeoverLucknow = () => {
  return (
    <ServicePageTemplate
      title="Smile Makeover"
      seoTitle="Professional Smile Makeover in Lucknow | Cosmetic Dentistry"
      seoDescription="Transform your smile with a professional smile makeover in Lucknow at Shalimar Dental Clinic. Veneers, whitening, and aesthetic dentistry for a perfect smile."
      path="/smile-makeover-lucknow"
      image="/smile-after.webp"
      benefits={[
        "Completely transforms your facial appearance",
        "Corrects tooth discoloration and yellowing",
        "Fixes chipped, cracked, or worn teeth",
        "Closes unsightly gaps between teeth",
        "Boosts self-esteem and social confidence",
        "Customized treatment plan for your face shape"
      ]}
      content={
        <>
          <p>
            Do you hide your smile in photos? A <strong>Smile Makeover</strong> can change your life. At <strong>Shalimar Dental Clinic Lucknow</strong>, we combine art and science to design the perfect smile that complements your unique facial features.
          </p>
          <p>
            Cosmetic dentistry is about more than just aesthetics; it's about restoring harmony and function to your mouth. Our experts near Dubagga use digital smile design techniques to show you your future smile before we even begin!
          </p>
          <h3>Our Cosmetic Procedures</h3>
          <ul>
            <li><strong>Dental Veneers:</strong> Ultra-thin porcelain or composite shells that cover the front of teeth to fix chips, gaps, or stains.</li>
            <li><strong>Teeth Whitening:</strong> Professional-grade bleaching for a dramatically brighter smile in one session.</li>
            <li><strong>Dental Bonding:</strong> Using tooth-colored resin to repair minor imperfections.</li>
            <li><strong>Gum Contouring:</strong> Reshaping the gum line to fix a 'gummy' smile.</li>
            <li><strong>Full Mouth Rehabilitation:</strong> Combining multiple treatments for total oral reconstruction.</li>
          </ul>
          <h3>The Smile Design Process</h3>
          <p>
            We start with a detailed consultation where we listen to your goals. Using photographs and digital impressions, we create a roadmap for your transformation. Whether you want a 'Hollywood Smile' or a natural enhancement, we make it happen.
          </p>
        </>
      }
    />
  );
};

export default SmileMakeoverLucknow;
