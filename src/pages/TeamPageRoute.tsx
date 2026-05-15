import React from "react";
import { TeamPage } from "../components/ClinicApp";
import SEO from "../components/SEO";

const TeamPageRoute = () => {
  return (
    <>
      <SEO 
        title="Meet Our Expert Dentists | Best Dental Team in Lucknow" 
        description="Meet Dr. Azim Ahmad and our team of expert dental surgeons in Lucknow. Specialized in oral surgery, implants, and painless dental care."
        canonicalPath="/team"
      />
      <TeamPage />
    </>
  );
};

export default TeamPageRoute;
