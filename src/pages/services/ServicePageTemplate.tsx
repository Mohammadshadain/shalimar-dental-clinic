import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Calendar } from "lucide-react";
import SEO from "../../components/SEO";

interface ServicePageTemplateProps {
  title: string;
  seoTitle: string;
  seoDescription: string;
  path: string;
  image: string;
  benefits: string[];
  content: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  seoTitle,
  seoDescription,
  path,
  image,
  benefits,
  content,
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Shalimar Dental - ${title}`,
    "description": seoDescription,
    "image": image,
    "url": `https://shalimardentalclinic.online${path}`,
    "telephone": "+919598112677",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Dubagga Chauraha, Hardoi Rd",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226003",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <SEO 
        title={seoTitle} 
        description={seoDescription} 
        canonicalPath={path}
        schemaData={schemaData}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 group-hover:scale-110 transition-transform" />
          <span className="font-bold">Back to Services</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image and Highlights */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-surface-container">
              <h3 className="text-xl font-bold text-primary mb-6">Service Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-4">
                Specialized Treatment
              </span>
              <h1 className="text-5xl font-bold font-headline text-primary leading-tight mb-6">
                {title}
              </h1>
            </div>

            <div className="prose prose-slate lg:prose-lg max-w-none text-on-surface-variant leading-relaxed">
              {content}
            </div>

            <div className="pt-8">
              <a 
                href={`https://wa.me/919598112677?text=Hello%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(title)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-br from-primary to-primary-container text-white px-10 py-5 rounded-xl font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Book Appointment Now
                <Calendar className="w-5 h-5" />
              </a>
              <p className="mt-4 text-sm text-on-surface-variant italic">
                * Affordable and painless procedures at Shalimar Dental Lucknow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageTemplate;
