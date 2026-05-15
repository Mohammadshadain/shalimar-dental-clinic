import React from "react";
import { motion } from "motion/react";
import { Calendar, MessageSquare, Phone, MapPin, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

const AppointmentPage = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-surface px-4 sm:px-6">
      <SEO 
        title="Book Appointment | Best Dentist in Dubagga Lucknow | Online Booking" 
        description="Easy dental appointment booking at Shalimar Dental Clinic Lucknow. Schedule your visit for root canal, implants, or cleaning via WhatsApp or phone."
        canonicalPath="/appointment"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-headline mb-4">Book An Appointment</h1>
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">We make it easy for you to get the care you need. Choose your preferred booking method below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* WhatsApp Booking */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#25D366]/10 flex flex-col items-center text-center group"
          >
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-7 sm:w-8 h-7 sm:h-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 font-headline">WhatsApp Booking</h3>
            <p className="text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed font-medium">
              The fastest way to book! Send us a message and our team will get back to you with available slots.
            </p>
            <a 
              href="https://wa.me/919598112677?text=Hello%20Shalimar%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-[#25D366] text-white w-full py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              Book via WhatsApp
            </a>
          </motion.div>

          {/* Call Booking */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-primary/10 flex flex-col items-center text-center group"
          >
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-7 sm:w-8 h-7 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 font-headline">Call To Book</h3>
            <p className="text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed font-medium">
              Prefer to talk? Call our clinical front desk during working hours (11:00 AM - 5:00 PM).
            </p>
            <a 
              href="tel:9598112677"
              className="mt-auto bg-primary text-white w-full py-4 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              Call +91 95981 12677
            </a>
          </motion.div>
        </div>

        <div className="mt-12 sm:mt-16 bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8 text-center font-headline">What to Expect During Your Visit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Thorough initial consultation",
              "Digital X-rays if required",
              "Clear treatment plan and pricing",
              "Painless and safe procedures",
              "Highly sterilized environment",
              "Friendly and expert staff"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-on-surface-variant font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-center text-on-surface-variant">
          <div className="flex items-center justify-center gap-2 mb-2 font-bold text-primary">
            <MapPin className="w-5 h-5 text-secondary" />
            Clinic Location
          </div>
          <p className="text-sm sm:text-base max-w-sm mx-auto font-medium">Shalimar Dental Clinic, Near Dubagga Chauraha, Hardoi Road, Lucknow</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
