import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-surface px-4 sm:px-6">
      <SEO 
        title="Contact Us | Best Dental Clinic in Dubagga Lucknow" 
        description="Contact Shalimar Dental Clinic in Lucknow for expert dental care. Visit us near Dubagga Chauraha or call +91 95981 12677 for appointments."
        canonicalPath="/contact"
      />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center font-headline mb-10 sm:mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm text-center sm:text-left items-center sm:items-start">
              <div className="p-4 bg-primary/10 rounded-2xl shrink-0">
                <MapPin className="text-primary w-7 sm:w-8 h-7 sm:h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-headline">Our Location</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
                  Shalimar Dental Clinic<br />
                  Near Dubagga Chauraha, Hardoi Road<br />
                  Lucknow, Uttar Pradesh 226003
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm text-center sm:text-left items-center sm:items-start">
              <div className="p-4 bg-primary/10 rounded-2xl shrink-0">
                <Phone className="text-primary w-7 sm:w-8 h-7 sm:h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-headline">Call Us</h3>
                <p className="text-sm sm:text-base text-on-surface-variant">
                  <a href="tel:9598112677" className="hover:text-primary transition-colors font-bold">+91 95981 12677</a>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm text-center sm:text-left items-center sm:items-start">
              <div className="p-4 bg-primary/10 rounded-2xl shrink-0">
                <Clock className="text-primary w-7 sm:w-8 h-7 sm:h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-headline">Opening Hours</h3>
                <p className="text-sm sm:text-base text-on-surface-variant font-bold">
                  Monday - Sunday: 11:00 AM - 05:00 PM<br/>
                  <span className="text-secondary">(Friday Closed)</span>
                </p>
              </div>
            </div>

            {/* Contact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-surface-container text-center sm:text-left">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <MessageCircle className="text-secondary w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <h4 className="font-bold text-primary mb-2 text-sm sm:text-base">Second Opinion</h4>
                <p className="text-on-surface-variant text-xs sm:text-sm font-medium">
                  Confused about your treatment plan? Contact us for a professional second opinion.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-surface-container text-center sm:text-left">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <Phone className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <h4 className="font-bold text-primary mb-2 text-sm sm:text-base">Emergency Care</h4>
                <p className="text-on-surface-variant text-xs sm:text-sm font-medium">
                  Experiencing tooth pain? Reach out immediately for emergency assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Action */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-surface-container flex flex-col h-fit text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-headline">Get in Touch</h2>
            <p className="text-sm sm:text-base text-on-surface-variant mb-8 font-medium">
              Don't compromise on your oral health. Reach out to the best dental clinic in Lucknow for painless treatments.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/919598112677?text=Hello%20Shalimar%20Dental%20Clinic%2C%20I%20have%20a%20query%20regarding%20dental%20treatment.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-[#128C7E] transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                WhatsApp Chat
              </a>
              
              <Link 
                to="/appointment"
                className="flex items-center justify-center gap-3 bg-primary text-white w-full py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-lg active:scale-95"
              >
                <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
                Book Now
              </Link>
            </div>
            
            <p className="mt-6 text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest text-center">We typically respond within 15 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
