import React from "react";
import { Blog } from "../components/ClinicApp";
import SEO from "../components/SEO";

const BlogPage = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <SEO 
        title="Dental Blog | Oral Health Tips & Dental Treatment Guides Lucknow" 
        description="Read our dental blog for expert tips on oral hygiene, root canal benefits, implant care, and more. Stay informed with Shalimar Dental Clinic Lucknow."
        canonicalPath="/blog"
      />
      <Blog />
    </div>
  );
};

export default BlogPage;
