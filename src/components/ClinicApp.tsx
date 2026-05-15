import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Stethoscope, 
  Calendar, 
  BadgeCheck, 
  CheckCircle2, 
  Scan, 
  Sparkles, 
  Pill, 
  Scissors, 
  Grid, 
  Wand2, 
  Baby, 
  ShieldCheck, 
  Microscope, 
  CreditCard, 
  ClipboardList, 
  Megaphone, 
  Star, 
  MapPin, 
  Home, 
  BriefcaseMedical, 
  Users, 
  Phone,
  Instagram,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MessageSquare,
  HelpCircle,
  Search,
  Clock,
  X
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || isMenuOpen 
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-3 sm:py-4" 
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Stethoscope className="text-primary w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary tracking-tighter font-headline leading-none">Shalimar Dental</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-black opacity-80 mt-1">Clinical Excellence</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
              { to: "/team", label: "Team" },
              { to: "/contact", label: "Contact" }
            ].map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`transition-all duration-300 px-4 py-2 rounded-xl text-sm font-bold tracking-wide ${
                  location.pathname === link.to 
                    ? "text-primary bg-primary/5" 
                    : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link 
            to="/appointment" 
            className="hidden sm:inline-flex bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all active:scale-95 whitespace-nowrap"
          >
            Book Appointment
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary active:scale-90 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col gap-1.5 items-end">
                <div className="w-6 h-0.5 bg-primary rounded-full"></div>
                <div className="w-4 h-0.5 bg-primary rounded-full"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-surface-container shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              <Link 
                to="/appointment" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-white p-4 rounded-2xl text-center font-black mb-4 shadow-xl shadow-primary/20 active:scale-95 transition-transform"
              >
                Book Appointment
              </Link>
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/team", label: "Our Team" },
                { to: "/contact", label: "Contact Us" },
                { to: "/faq", label: "FAQs" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-4 rounded-xl text-base font-bold transition-all flex items-center justify-between group ${
                    location.pathname === link.to 
                      ? "bg-primary/5 text-primary" 
                      : "text-on-surface-variant active:bg-primary/5"
                  }`}
                >
                  {link.label}
                  <ArrowRight className={`w-4 h-4 transition-transform ${location.pathname === link.to ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 subgroup-hover:opacity-100 group-hover:translate-x-0"}`} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-32 px-4 md:px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 z-10 text-center lg:text-left"
      >
        <h1 className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold font-headline leading-[1.1] tracking-tight mb-6">
          Shalimar Dental Clinic - <span className="text-secondary">Best Dentist in Lucknow.</span>
        </h1>
        <p className="text-base sm:text-lg text-on-surface-variant mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
          Experience premium dental care in a clinical sanctuary designed for your comfort and health. Trusted by thousands for painless treatments.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6">
          <Link 
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
          >
            Discover Treatments
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                <img src="https://picsum.photos/seed/dentist1/100/100" alt="Best Dentist in Lucknow - Dr. Azim Ahmad" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden shadow-sm">
                <img src="https://picsum.photos/seed/dentist2/100/100" alt="Top Dental Specialist near Dubagga Lucknow" referrerPolicy="no-referrer" />
              </div>
            </div>
            <span className="text-sm font-bold text-on-surface-variant">Trusted by 5000+ Patients</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 relative"
      >
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
          <img 
            alt="Dr. Azim Ahmad - Chief Oral & Maxillofacial Surgeon at Shalimar Dental Clinic Lucknow" 
            className="w-full h-full object-cover" 
            src="/main1.png"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
        </div>
        <div className="absolute -bottom-6 sm:-bottom-16 -left-4 sm:-left-6 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl max-w-[240px] sm:max-w-xs z-20">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <div className="p-2 bg-tertiary-container/10 rounded-lg">
              <BadgeCheck className="text-tertiary w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-bold text-primary text-sm sm:text-base">Expert Care</h4>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant font-medium">Advanced treatments like root canal and implants by our expert clinical team.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-16 sm:py-24 bg-surface-container-low overflow-hidden" id="team">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6">
            Clinical Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold font-headline text-primary mb-6 leading-tight">Painless and affordable care for every smile.</h2>
          <div className="space-y-4 mb-8 max-w-2xl mx-auto lg:mx-0">
            <p className="text-lg sm:text-xl text-primary font-bold leading-tight">
              Shalimar Dental Clinic is one of the best dental clinics in Lucknow.
            </p>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed font-medium">
              Providing <span className="text-secondary font-bold">advanced dental treatments</span> like root canal treatment, dental implants, teeth cleaning, tooth extraction and cosmetic dentistry. Our experienced dentists in Lucknow use <span className="text-primary font-bold">modern equipment</span> and painless procedures.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-xl mx-auto lg:mx-0">
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-surface-container">
              <CheckCircle2 className="text-secondary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-primary">Modern Tech</h4>
                <p className="text-xs sm:text-sm text-on-surface-variant">Equipped with the latest digital X-rays.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-surface-container">
              <CheckCircle2 className="text-secondary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-primary">Hygiene First</h4>
                <p className="text-xs sm:text-sm text-on-surface-variant">Strict international hygiene protocols.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="pt-8 sm:pt-12">
            <motion.img 
              whileHover={{ scale: 1.02 }}
              alt="Advanced Dental Care at Shalimar Dental Clinic Lucknow" 
              className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" 
              src="/sub-main.jpeg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="pb-8 sm:pb-12">
            <motion.img 
              whileHover={{ scale: 1.02 }}
              alt="Advanced Dental Tools for Painless Treatment in Lucknow" 
              className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" 
              src="/sub-main1.jpeg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-24 border-t border-surface-container pt-12 sm:pt-20">
        <h3 className="text-2xl sm:text-3xl font-bold font-headline text-primary text-center mb-10 sm:mb-12">Our Key Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { to: "/root-canal-treatment-lucknow", icon: <Pill className="w-10 h-10" />, title: "RCT", desc: "Painless root canal treatments to save natural teeth." },
            { to: "/tooth-extraction-lucknow", icon: <Scissors className="w-10 h-10" />, title: "Extraction", desc: "Gentle and safe tooth removal procedures." },
            { to: "/dental-implant-lucknow", icon: <Sparkles className="w-10 h-10" />, title: "Implants", desc: "Permanent tooth replacement solutions." }
          ].map((service, i) => (
            <Link 
              key={i}
              to={service.to} 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm text-center border border-surface-container hover:shadow-lg transition-all transform hover:-translate-y-1 group"
              title={`${service.title} in Lucknow`}
            >
              <div className="text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h4 className="text-xl sm:text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{service.title}</h4>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 sm:mt-12 text-center">
          <Link 
            to="/services" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-16 sm:py-24 bg-white overflow-hidden" id="services">
    <div className="max-w-7xl mx-auto px-4 md:px-6">

      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold font-headline text-primary mb-4">
          Our Specialized Dental Services
        </h2>

        <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto font-medium">
          Providing a comprehensive range of treatments to ensure your oral
          health is always at its best.
        </p>
      </div>

      {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { to: "/dental-x-ray-lucknow", icon: <Scan className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-6" />, title: "Dental X-Ray", desc: "High-definition digital diagnostics." },
            { to: "/teeth-cleaning-lucknow", icon: <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Cleaning", desc: "Professional scaling and polishing." },
            { to: "/root-canal-treatment-lucknow", icon: <Pill className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "RCT", desc: "Painless root canal treatments." },
            { to: "/tooth-extraction-lucknow", icon: <Scissors className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Extraction", desc: "Gentle and safe tooth removal." },
            { to: "/dental-implant-lucknow", icon: <BadgeCheck className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Implants", desc: "Permanent tooth replacement." },
            { to: "/braces-treatment-lucknow", icon: <Grid className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Braces", desc: "Align your smile with aligners." },
            { to: "/smile-makeover-lucknow", icon: <Wand2 className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Whitening", desc: "Professional teeth whitening." },
            { to: "/gum-treatment-lucknow", icon: <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Gum Treatment", desc: "Advanced care for gums disease." },
            { to: "/kids-dentistry-lucknow", icon: <Baby className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Kids Dentistry", desc: "Specially designed for children." },
            { to: "/oral-surgery-lucknow", icon: <BriefcaseMedical className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Oral Surgery", desc: "Advanced surgical procedures." },
            { to: "/consultation-lucknow", icon: <ClipboardList className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Consultation", desc: "Personalized dental checkups." },
            { to: "/cosmetic-dentistry-lucknow", icon: <Star className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Cosmetic", desc: "Improve your smile aesthetics." },
            { to: "/smile-makeover-lucknow", icon: <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Makeover", desc: "Complete smile enhancement." },
            { to: "/dentures-lucknow", icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Dentures", desc: "Comfortable teeth replacement." },
            { to: "/wisdom-tooth-removal-lucknow", icon: <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Wisdom Tooth", desc: "Safe and painless removal." },
            { to: "/dental-crowns-lucknow", icon: <BadgeCheck className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-6" />, title: "Dental Crown", desc: "Durable natural-looking crowns." }
          ].map((service, i) => (
            <Link 
              key={i}
              to={service.to} 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-container flex flex-col group active:scale-95 translate-y-0 hover:-translate-y-1"
            >
              <div className="group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-primary mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-on-surface-variant mb-4">
                {service.desc}
              </p>
              <span className="mt-auto text-primary font-bold text-xs sm:text-sm flex items-center gap-1">Read More <ArrowRight className="w-4 h-4" /></span>
            </Link>
          ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-16 sm:py-24 bg-primary text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container opacity-50 -skew-x-12 translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold font-headline mb-12 sm:mb-16 text-center leading-tight max-w-3xl mx-auto">Why Patients Trust Shalimar Dental Clinic</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-center lg:text-left">
        {[
          { icon: <Microscope className="w-8 h-8 text-tertiary-fixed" />, title: "Modern Equipment", desc: "We use top-tier technology to ensure diagnosis is 100% accurate." },
          { icon: <CreditCard className="w-8 h-8 text-tertiary-fixed" />, title: "Affordable Care", desc: "High-end dental treatments shouldn't break the bank." },
          { icon: <ClipboardList className="w-8 h-8 text-tertiary-fixed" />, title: "Expert Doctors", desc: "Our clinical team brings years of specialized experience." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center lg:items-start p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/70 leading-relaxed text-sm lg:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Banner = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 sm:-mt-12 relative z-20">
    <div className="bg-gradient-to-r from-tertiary to-tertiary-container p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0">
          <Megaphone className="w-7 h-7 sm:w-8 sm:h-8 text-tertiary-fixed" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Free Dental Camp</h3>
          <p className="text-tertiary-fixed/80 text-sm sm:text-base">Visit us for a comprehensive dental checkup this weekend.</p>
        </div>
      </div>
      <button 
        onClick={onOpenModal}
        className="w-full sm:w-auto bg-white text-tertiary px-10 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-md active:scale-95 cursor-pointer"
      >
        Register Now
      </button>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
 const results = [
  {
    id: 1,
    category: "Teeth Whitening",
    before: "/whitening-before.png",
    after: "/whitening-after.png",
    desc: "Advanced laser teeth whitening treatment for a brighter and stain-free smile.",
  },

  {
    id: 2,
    category: "Orthodontics (Braces)",
    before: "/braces--before.png",
    after: "/braces-after.png",
    desc: "Perfect dental alignment achieved with advanced braces treatment in Lucknow.",
  },

  {
    id: 3,
    category: "Smile Makeover",
    before: "/smile-before.png",
    after: "/smile-after.png",
    desc: "Complete smile reconstruction using veneers and cosmetic dentistry.",
  },

  {
    id: 4,
    category: "Teeth Cleaning",
    before: "/cleaning-before.png",
    after: "/cleaning-after.png",
    desc: "Professional dental cleaning and scaling treatment for healthier teeth and gums.",
  },

  {
    id: 5,
    category: "Dental Implants",
    before: "/implant--before.png",
    after: "/implant--after.png",
    desc: "Permanent tooth replacement using premium-quality dental implants.",
  },

  {
    id: 6,
    category: "Root Canal (RCT)",
    before: "/rct-before.png",
    after: "/rct-after.png",
    desc: "Painless root canal treatment to save damaged natural teeth.",
  },
];

  const next = () => setCurrentIndex((prev) => (prev + 1) % results.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 2000); // 2.5 seconds for a "little bit fast" feel
    return () => clearInterval(timer);
  }, [isPaused, results.length]);

  return (
    <section className="py-16 sm:py-24 bg-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MessageSquare className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-[10px] sm:text-sm font-bold text-secondary uppercase tracking-widest">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold font-headline text-primary mb-6 leading-tight">What Our Patients Say About <span className="text-secondary">Shalimar Dental</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                { name: "Rahul Verma", text: "Very good dentist in Lucknow. Root canal treatment was painless. Painless root canal treatment was done for my mother. Highly recommended!" },
                { name: "Fatima Khan", text: "The dentist is very patient and knowledgeable. The implants were done perfectly and affordably." },
                { name: "Amit Singh", text: "Best dental clinic in Dubagga. The staff is very professional and the clinic is extremely clean." }
              ].map((t, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border-l-4 border-secondary transition-all text-left"
                >
                  <div className="flex gap-1 text-secondary mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm sm:text-base text-on-surface-variant italic mb-4 font-medium leading-relaxed">"{t.text}"</p>
                  <div className="font-bold text-primary text-sm sm:text-base">— {t.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div 
            className="relative mt-8 lg:mt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-headline text-primary">Before & After</h2>
              <div className="flex gap-2">
                <button onClick={prev} className="p-3 rounded-full bg-white border border-surface-container hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90 cursor-pointer" aria-label="Previous story">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="p-3 rounded-full bg-white border border-surface-container hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90 cursor-pointer" aria-label="Next story">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl bg-white border border-surface-container">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col"
              >
                <div className="flex flex-row aspect-[4/3] sm:aspect-video w-full">
                  <div className="relative w-1/2 overflow-hidden">
                    <img src={results[currentIndex].before} alt={`Before ${results[currentIndex].category} Treatment - Shalimar Dental Clinic Lucknow`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/60 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-widest">Before</div>
                  </div>
                  <div className="relative w-1/2 overflow-hidden">
                    <img src={results[currentIndex].after} alt={`After ${results[currentIndex].category} Treatment - Best Dentist in Lucknow Results`} className="w-full h-full object-cover border-l-2 border-white" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-primary/90 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-widest">After</div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="font-bold text-primary text-lg sm:text-xl mb-2">{results[currentIndex].category}</h4>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">{results[currentIndex].desc}</p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {results.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-primary" : "w-2 bg-surface-container hover:bg-primary/30"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    // General Dentistry (1-20)
    { q: "Is root canal painful?", a: "With modern anesthesia and advanced techniques at Shalimar Dental, root canal treatment is virtually painless. Most patients feel immediate relief from the pain caused by the infection." },
    { q: "How much does teeth cleaning cost?", a: "Teeth cleaning costs in Lucknow vary depending on the level of scaling required. At our clinic, we offer affordable professional cleaning starting at competitive rates." },
    { q: "How long does dental implant take?", a: "The entire process for a dental implant can take anywhere from 3 to 6 months, allowing time for the implant to fuse with the jawbone. However, the surgical procedure itself is relatively quick." },
    { q: "When should I visit a dentist?", a: "You should visit a dentist every 6 months for a routine checkup and cleaning to prevent major dental issues and maintain optimal oral health." },
    { q: "How often should I clean my teeth?", a: "You should brush twice daily and floss once a day. Professional cleaning (scaling) by a dentist is recommended every 6 months." },
    { q: "What is a dental cavity?", a: "A cavity is a permanently damaged area in the hard surface of your teeth that develops into tiny openings or holes, caused by bacteria, snacking, and sugary drinks." },
    { q: "How can I prevent cavities?", a: "Brush twice a day with fluoride toothpaste, floss daily, eat a balanced diet, and visit your dentist regularly for checkups." },
    { q: "What is gingivitis?", a: "Gingivitis is a common and mild form of gum disease that causes irritation, redness, and swelling of your gingiva, the part of your gum around the base of your teeth." },
    { q: "Can gum disease be cured?", a: "Yes, early-stage gum disease (gingivitis) can usually be reversed with professional cleaning and good oral hygiene at home." },
    { q: "What are dental sealants?", a: "Sealants are thin, protective coatings that adhere to the chewing surface of your back teeth to prevent decay." },
    { q: "What is a dental crown?", a: "A crown is a tooth-shaped cap that's placed over a tooth to cover it to restore its shape and size, strength, and improve its appearance." },
    { q: "How long do dental crowns last?", a: "Dental crowns can last between 5 and 15 years, depending on the amount of wear and tear and how well you follow good oral hygiene practices." },
    { q: "What is a dental bridge?", a: "A bridge is a fixed dental restoration used to replace one or more missing teeth by joining an artificial tooth permanently to adjacent teeth or dental implants." },
    { q: "What causes bad breath?", a: "Bad breath can be caused by poor dental hygiene, dry mouth, certain foods, tobacco use, or underlying medical conditions." },
    { q: "How can I fix bad breath?", a: "Brush and floss regularly, clean your tongue, stay hydrated, and visit your dentist to rule out gum disease or other issues." },
    { q: "What is tooth sensitivity?", a: "Tooth sensitivity is pain or discomfort in the teeth as a response to certain stimuli, such as hot or cold temperatures." },
    { q: "What causes tooth sensitivity?", a: "Causes include worn tooth enamel, exposed tooth roots, cavities, gum disease, or a cracked tooth." },
    { q: "How is tooth sensitivity treated?", a: "Treatment options include desensitizing toothpaste, fluoride gel, crowns, inlays or bonding, surgical gum grafts, or a root canal." },
    { q: "What should I do in a dental emergency?", a: "Contact your dentist immediately. For a knocked-out tooth, keep it moist and try to place it back in the socket or in milk." },
    { q: "Are dental X-rays safe?", a: "Yes, dental X-rays use very low levels of radiation and are considered safe for adults and children." },

    // Root Canal (21-35)
    { q: "What are the signs I need a root canal?", a: "Signs include severe toothache, sensitivity to hot and cold, tooth discoloration, swelling in the gums, and a persistent pimple on the gums." },
    { q: "How many visits does a root canal take?", a: "Most root canals can be completed in one or two appointments, depending on the complexity of the tooth's structure." },
    { q: "Can I drive home after a root canal?", a: "Yes, since local anesthesia is used, you should be fine to drive yourself home after the procedure." },
    { q: "What happens during a root canal?", a: "The dentist removes the infected pulp, cleans and shapes the inside of the root canal, then fills and seals the space." },
    { q: "Is a crown necessary after a root canal?", a: "In most cases, yes. A crown protects the weakened tooth and restores its full function." },
    { q: "How long does a root canal last?", a: "With proper care, a tooth treated with a root canal can last a lifetime." },
    { q: "What is the success rate of root canals?", a: "Root canals have a very high success rate, typically over 95%." },
    { q: "Can a root canal fail?", a: "While rare, failure can occur due to undetected canals, cracks in the root, or a breakdown of the sealing material over time." },
    { q: "What is an endodontist?", a: "An endodontist is a dentist who specializes in treating the inside of the tooth, specifically root canal therapy." },
    { q: "Does a root canal kill the tooth?", a: "The procedure removes the nerves and blood supply, so the tooth is technically non-vital, but it remains functional in the jaw." },
    { q: "Can I eat after a root canal?", a: "Wait until the numbness wears off to avoid biting your cheek or tongue. Stick to soft foods for a few days." },
    { q: "Is there an alternative to a root canal?", a: "The only alternative is tooth extraction followed by a bridge, implant, or partial denture." },
    { q: "Why does my tooth hurt after a root canal?", a: "Some sensitivity or mild discomfort is normal for a few days as the surrounding tissues heal." },
    { q: "What is an apicoectomy?", a: "It's a minor surgical procedure to remove the tip of a tooth's root, often done if a root canal fails." },
    { q: "How much does a root canal cost in Lucknow?", a: "Costs vary based on the tooth (molar vs. incisor) and the complexity. We offer competitive pricing for high-quality care." },

    // Implants (36-50)
    { q: "Who is a candidate for dental implants?", a: "Anyone missing one or more teeth with healthy gums and enough bone to support the implant is generally a candidate." },
    { q: "Are dental implants painful?", a: "The procedure is performed under local anesthesia, so you shouldn't feel pain. Post-operative discomfort is usually manageable with over-the-counter meds." },
    { q: "How do I care for dental implants?", a: "Treat them like natural teeth: brush twice daily, floss, and visit your dentist for regular checkups." },
    { q: "What is the success rate of dental implants?", a: "Dental implants have a success rate of up to 98%." },
    { q: "Can dental implants fail?", a: "Failure is rare but can be caused by infection, insufficient bone, or smoking." },
    { q: "How long do dental implants last?", a: "The implant post itself can last a lifetime, while the crown may need replacement every 10-15 years." },
    { q: "What is a bone graft for implants?", a: "If your jawbone isn't thick enough, a bone graft adds volume to ensure the implant has a solid foundation." },
    { q: "How many teeth can an implant replace?", a: "A single implant replaces one tooth, but a few implants can support a bridge or even a full set of dentures." },
    { q: "What is 'All-on-4'?", a: "It's a technique where a full arch of teeth is supported by only four dental implants." },
    { q: "How long is the recovery after implant surgery?", a: "Initial healing takes about a week, but the process of osseointegration (bone fusing) takes 3-6 months." },
    { q: "Are dental implants better than dentures?", a: "Implants are more stable, prevent bone loss, and feel more like natural teeth compared to dentures." },
    { q: "Can I get implants if I smoke?", a: "Smoking increases the risk of implant failure, so it's highly recommended to quit before the procedure." },
    { q: "What is the cost of dental implants in Lucknow?", a: "Costs depend on the type of implant and if additional procedures like bone grafting are needed." },
    { q: "What is an abutment?", a: "The abutment is a connector piece that attaches the dental crown to the implant post." },
    { q: "Do dental implants look natural?", a: "Yes, the crowns are custom-made to match the color and shape of your surrounding teeth." },

    // Braces & Aligners (51-65)
    { q: "What is the best age for braces?", a: "While common in teens, people of all ages can benefit from orthodontic treatment as long as their teeth and gums are healthy." },
    { q: "How long does braces treatment take?", a: "Treatment typically lasts between 18 and 24 months, depending on the severity of the alignment issues." },
    { q: "Do braces hurt?", a: "You may feel some soreness after they are first applied or adjusted, but this usually fades within a few days." },
    { q: "What are clear aligners (Invisalign)?", a: "They are transparent, removable trays that gradually straighten your teeth without the need for metal wires or brackets." },
    { q: "Can I eat normally with braces?", a: "You should avoid sticky, hard, or crunchy foods that could damage the brackets or wires." },
    { q: "How often are braces adjusted?", a: "Adjustments are usually scheduled every 4 to 8 weeks." },
    { q: "What are the benefits of straight teeth?", a: "Easier cleaning, reduced risk of gum disease, improved speech, and a boost in self-confidence." },
    { q: "Do I need to wear a retainer after braces?", a: "Yes, retainers are essential to prevent your teeth from shifting back to their original positions." },
    { q: "Can I play sports with braces?", a: "Yes, but it's highly recommended to wear a mouthguard to protect your teeth and the braces." },
    { q: "What are ceramic braces?", a: "They are similar to metal braces but use clear or tooth-colored brackets to be less noticeable." },
    { q: "What are lingual braces?", a: "These are braces attached to the back side of the teeth, making them completely invisible from the front." },
    { q: "How do I clean my teeth with braces?", a: "Use a soft-bristled brush, floss threaders, or interdental brushes to clean around the brackets and wires." },
    { q: "What is an overbite?", a: "An overbite is when the upper front teeth overlap significantly with the lower front teeth." },
    { q: "What is an underbite?", a: "An underbite is when the lower front teeth sit in front of the upper front teeth when the jaw is closed." },
    { q: "How much do braces cost in Lucknow?", a: "Costs vary based on the type of braces (metal, ceramic, or clear aligners) and the duration of treatment." },

    // Pediatric Dentistry (66-75)
    { q: "When should a child first visit the dentist?", a: "The first visit should be by their first birthday or within six months of their first tooth appearing." },
    { q: "What are baby bottle tooth decay?", a: "It's decay caused by frequent, prolonged exposure of a child's teeth to liquids containing sugar, like milk or juice." },
    { q: "Are baby teeth important?", a: "Yes, they help children chew and speak clearly, and they hold space for permanent teeth." },
    { q: "When do children start losing baby teeth?", a: "Most children start losing their baby teeth around age 6." },
    { q: "How can I help my child brush?", a: "Make it fun with music or a timer, and supervise them until they are about 8 years old." },
    { q: "What are pediatric dental sealants?", a: "They are protective coatings applied to the permanent molars to prevent cavities in children." },
    { q: "Should my child use fluoride toothpaste?", a: "Yes, but use only a tiny smear for children under 3 and a pea-sized amount for children 3 to 6." },
    { q: "What is thumb sucking's effect on teeth?", a: "Prolonged thumb sucking can cause issues with tooth alignment and the roof of the mouth." },
    { q: "How do I handle a child's dental anxiety?", a: "Start visits early, use positive language, and choose a pediatric-friendly clinic like ours." },
    { q: "What is a space maintainer?", a: "It's a device used if a baby tooth is lost too early, to keep the space open for the permanent tooth." },

    // Cosmetic Dentistry (76-85)
    { q: "What is teeth whitening?", a: "A process that uses bleaching agents to remove stains and discoloration from the teeth." },
    { q: "Is professional whitening better than OTC kits?", a: "Yes, professional whitening is faster, safer, and provides more dramatic and long-lasting results." },
    { q: "What are dental veneers?", a: "Thin shells of porcelain or composite resin custom-made to fit over the front surface of a tooth to improve its appearance." },
    { q: "How long do veneers last?", a: "Porcelain veneers can last 10-15 years, while composite veneers typically last 5-7 years." },
    { q: "What is dental bonding?", a: "A procedure where a tooth-colored resin is applied and hardened with a special light to repair or improve a tooth's appearance." },
    { q: "Can cosmetic dentistry fix gaps?", a: "Yes, options include bonding, veneers, or orthodontic treatment like clear aligners." },
    { q: "What is a 'smile makeover'?", a: "A comprehensive plan involving one or more cosmetic procedures to achieve your ideal smile." },
    { q: "Does whitening damage enamel?", a: "When done professionally, whitening is safe and does not damage the tooth enamel." },
    { q: "How long does professional whitening take?", a: "In-office whitening usually takes about 60 to 90 minutes." },
    { q: "What is gum contouring?", a: "A procedure to reshape the gum line to create a more balanced or less 'gummy' smile." },

    // Oral Hygiene & Prevention (86-100)
    { q: "What is the best toothbrush?", a: "Most dentists recommend a soft-bristled brush, whether manual or electric, to avoid damaging the gums." },
    { q: "How often should I replace my toothbrush?", a: "Every 3 to 4 months, or sooner if the bristles are frayed." },
    { q: "Is an electric toothbrush better?", a: "Electric toothbrushes can be more effective at removing plaque, especially for people with limited dexterity." },
    { q: "What is the best way to floss?", a: "Use about 18 inches of floss, wind it around your middle fingers, and gently guide it between your teeth in a C-shape." },
    { q: "Does mouthwash replace brushing?", a: "No, mouthwash is an addition to, not a replacement for, brushing and flossing." },
    { q: "What is plaque?", a: "A sticky film of bacteria that constantly forms on your teeth." },
    { q: "What is tartar (calculus)?", a: "Plaque that has hardened on your teeth; it can only be removed by a dental professional." },
    { q: "How does diet affect dental health?", a: "Sugary and acidic foods promote decay, while crunchy fruits and veggies can help clean teeth." },
    { q: "Is charcoal toothpaste safe?", a: "It can be abrasive and may wear down enamel over time; consult your dentist before using it." },
    { q: "What is dry mouth (xerostomia)?", a: "A condition where the mouth doesn't produce enough saliva, increasing the risk of decay and infection." },
    { q: "How can I treat dry mouth?", a: "Drink plenty of water, chew sugar-free gum, and avoid tobacco and alcohol." },
    { q: "What is the link between oral and overall health?", a: "Poor oral health is linked to heart disease, diabetes, and other systemic conditions." },
    { q: "Can stress cause dental problems?", a: "Yes, stress can lead to teeth grinding (bruxism) and can weaken your immune system's ability to fight gum infections." },
    { q: "What is bruxism?", a: "A condition where you grind or clench your teeth, often during sleep." },
    { q: "How is bruxism treated?", a: "Common treatments include wearing a custom-made nightguard to protect your teeth." }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const sanitizedSearch = searchTerm.trim().toLowerCase();
    if (!sanitizedSearch) return true;
    return faq.q.toLowerCase().includes(sanitizedSearch) || 
           faq.a.toLowerCase().includes(sanitizedSearch);
  });

  return (
    <section className="py-16 sm:py-24 bg-surface-container-low overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="text-primary w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold font-headline text-primary mb-6 leading-tight">Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base text-on-surface-variant mb-10 max-w-xl mx-auto font-medium">Everything you need to know about our dental treatments and care.</p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-surface-container focus:ring-2 focus:ring-primary focus:outline-none transition-all shadow-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-surface-container">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer active:bg-primary/5 transition-colors"
                >
                  <span className="font-bold text-primary text-base sm:text-lg pr-4">{faq.q}</span>
                  {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-on-surface-variant shrink-0" />}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-on-surface-variant leading-relaxed font-medium text-sm sm:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <p className="text-center text-on-surface-variant py-12 font-bold">No questions found matching your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const blogs = [
    { 
      title: "Root canal cost in Lucknow", 
      excerpt: "Find out the average cost and benefits of root canal treatment in Lucknow.", 
      date: "May 10, 2024",
      image: "cost1111.png",
      link: "/blog/root-canal-cost-lucknow"
    },
    { 
      title: "How to stop tooth pain", 
      excerpt: "Immediate steps you can take to manage toothache before seeing a dentist.", 
      date: "May 12, 2024",
      image: "cost4.png",
      link: "/blog/how-to-stop-tooth-pain-immediately"
    },
    { 
      title: "Dental implant cost in Lucknow", 
      excerpt: "Understanding the investment required for permanent tooth replacement.", 
      date: "May 14, 2024",
      image: "cost3.png",
      link: "/blog/dental-implant-vs-bridge"
    },
    { 
      title: "How to maintain oral hygiene", 
      excerpt: "Daily habits that will keep your smile bright and healthy for years.", 
      date: "May 16, 2024",
      image: "cost8.png",
      link: "/blog/benefits-of-teeth-cleaning"
    },
    { 
      title: "Tooth extraction aftercare", 
      excerpt: "Essential tips for a quick and painless recovery after a tooth removal.", 
      date: "May 18, 2024",
      image: "cost77.png",
      link: "/blog/wisdom-tooth-extraction-recovery"
    },
    { 
      title: "Braces treatment cost", 
      excerpt: "Comparing different types of braces and their costs in the local area.", 
      date: "May 20, 2024",
      image: "cost6.png",
      link: "/blog/types-of-braces-cost-lucknow"
    },
    { 
      title: "Best dentist in Lucknow", 
      excerpt: "What to look for when choosing the right dental professional for your family.", 
      date: "May 22, 2024",
      image: "cost5.png",
      link: "/blog/how-to-choose-best-dentist"
    },
    { 
      title: "Child's first dental visit", 
      excerpt: "Expert guidance for your child's first step towards oral health.", 
      date: "May 24, 2024",
      image: "main1.png",
      link: "/blog/child-first-dental-visit"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <BookOpen className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-[10px] sm:text-sm font-bold text-secondary uppercase tracking-widest">Our Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold font-headline text-primary mb-2 leading-tight">Latest Dental Insights</h2>
          </div>
          <Link to="/blog" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-primary font-bold hover:gap-3 transition-all active:scale-95">
            View All Posts <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {blogs.map((blog, i) => (
            <Link 
              key={i} 
              to={blog.link}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-surface-container hover:shadow-xl transition-all hover:-translate-y-1"
              title={blog.title}
            >
              <div className="bg-surface-container-low aspect-[4/3] overflow-hidden shadow-sm">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src={blog.image} 
                  alt={`${blog.title} - Dental Health Blog Lucknow`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-[10px] font-bold text-secondary mb-2 uppercase tracking-widest">{blog.date}</p>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors min-h-[3rem] line-clamp-2">{blog.title}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-2 font-medium">{blog.excerpt}</p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-primary text-xs sm:text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="w-full bg-surface-container-low pt-16 sm:pt-24 pb-24 sm:pb-32 px-4 md:px-6 relative overflow-hidden" id="contact">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start mb-16">
        <div className="text-center md:text-left">
          <Link to="/" className="flex items-center justify-center md:justify-start gap-2 mb-6 group">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Stethoscope className="text-primary w-6 h-6" />
            </div>
            <span className="text-2xl font-bold font-headline text-primary tracking-tighter">Shalimar Dental</span>
          </Link>
          <p className="text-on-surface-variant leading-relaxed mb-8 font-medium text-sm sm:text-base">
            Providing advanced dental treatments like root canal, implants, and braces in the heart of Lucknow. Expert care for your family since 2004.
          </p>
          <div className="flex flex-col gap-4">
            <a href="tel:9598112677" className="flex items-center justify-center md:justify-start gap-3 text-primary font-bold hover:underline group w-fit mx-auto md:mx-0">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 9598112677
            </a>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-on-surface-variant font-bold">
              <Clock className="w-4 h-4 text-secondary" /> <span>11:00 AM — 05:00 PM <span className="text-red-500 font-black ml-1">(Fri Closed)</span></span>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left lg:col-span-2">
          <h4 className="text-lg sm:text-xl font-bold text-primary mb-6 sm:mb-8 font-headline">Find Our Clinic</h4>
          <a 
            href="https://share.google/laMthH7fjRDAWLwXj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-[2rem] shadow-sm border border-surface-container hover:shadow-xl hover:border-primary/20 transition-all text-left"
          >
            <div className="shrink-0 w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center group-hover:bg-primary/5 transition-colors mx-auto sm:mx-0 border border-surface-container">
              <img 
                src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" 
                alt="Google Maps" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="font-black text-primary text-base sm:text-lg mb-2 group-hover:text-secondary transition-colors">Shalimar Dental Clinic Lucknow</p>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-bold">
                Near Dubagga Chauraha, Hardoi Rd, Lucknow, Uttar Pradesh 226003. <span className="text-primary/60">Expert dentists near Hardoi road and Dubagga.</span>
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-[10px] sm:text-xs text-secondary font-black uppercase tracking-widest bg-secondary/5 px-3 py-1 rounded-full">Get Directions</span>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="mb-16 pb-12 border-b border-surface-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] whitespace-nowrap">Quick Navigation</h4>
          <ul className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Treatments" },
              { to: "/blog", label: "Insights" },
              { to: "/team", label: "Specialists" },
              { to: "/faq", label: "FAQs" },
              { to: "/appointment", label: "Booking" }
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-all font-black uppercase tracking-widest flex items-center gap-1.5 group">
                  <div className="w-1 h-1 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform"></div>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-surface-container flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <p className="text-sm text-on-surface-variant font-bold">© {new Date().getFullYear()} Shalimar Dental Clinic. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-sm font-bold text-primary">
          <a href="/sitemap.xml" className="hover:text-secondary transition-colors uppercase tracking-widest text-[10px]">Sitemap</a>
          <span className="text-on-surface-variant/30 hidden sm:inline">|</span>
          <span className="text-on-surface-variant/70 text-xs font-medium">Expert Dentistry in Lucknow near Dubagga & Hardoi Road.</span>
        </div>
      </div>
    </div>
  </footer>
);

const MobileNav = () => {
  const location = useLocation();
  
  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50 flex justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,63,135,0.15)] border border-white/50 rounded-[2.5rem]">
      <Link 
        to="/" 
        className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${location.pathname === "/" ? "text-primary" : "text-on-surface-variant/60 hover:text-primary/60"}`}
      >
        <div className={`p-2 rounded-2xl transition-colors ${location.pathname === "/" ? "bg-primary/5" : ""}`}>
          <Home className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.1em]">Home</span>
      </Link>
      
      <div className="px-2">
        <Link 
          to="/appointment" 
          className="flex flex-col items-center justify-center -mt-12 group transition-all"
        >
          <div className="bg-primary p-4.5 rounded-full shadow-[0_10px_25px_rgba(0,63,135,0.4)] border-4 border-white group-hover:scale-110 group-active:scale-95 transition-all">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <span className="text-[10px] font-black text-primary mt-2 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full border border-primary/5">Book</span>
        </Link>
      </div>

      <a 
        href="https://www.instagram.com/shalimar_dentalclinic_dubagga?igsh=em0ybnlhemh1d3Rs" 
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all active:scale-90 text-on-surface-variant/60 hover:text-primary/60`}
      >
        <div className={`p-2 rounded-2xl transition-colors`}>
          <Instagram className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.1em]">Insta</span>
      </a>
    </nav>
  );
};

const WhatsAppButton = () => (
  <a 
    className="fixed bottom-28 md:bottom-8 right-6 md:right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 transition-transform hover:scale-110 active:scale-95"
    href="https://wa.me/919598112677?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment.%20Please%20let%20me%20know%20your%20available%20time%20slots.%20Thank%20you."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact us on WhatsApp"
  >
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
    </svg>
  </a>
);

const TeamPage = () => (
  <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mb-20 sm:mb-32 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="text-center max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6">
            Our Legacy of Care
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline text-primary leading-[1.1] tracking-tight mb-8">
            Excellence in <span className="text-secondary italic">Dentistry.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            Providing world-class dental care that is painless and accessible to everyone in Lucknow. Best dentists in Dubagga.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Experience", value: "20+" },
              { label: "Patients", value: "5000+" },
              { label: "Specialists", value: "5" },
              { label: "Modern Clinics", value: "1" }
            ].map((stat, i) => (
              <div key={i} className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-surface-container">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="space-y-24 sm:space-y-32 pb-16 sm:pb-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary inline-block relative px-4">
            Meet Our Specialists
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1.5 sm:h-2 bg-secondary/30 rounded-full"></div>
          </h2>
        </div>
        
        {[
          { 
            name: "Dr. Azim Ahmad", 
            role: "Chief Dental Surgeon", 
            degree: "MDS (Oral & Maxillofacial)", 
            image: "azeem2.png",
            expertise: "Implants, Trauma",
            focus: "Complex Extractions",
            description: "Chief specialist in Oral & Maxillofacial Surgery, specializing in complex extractions, implants, and corrective jaw surgeries with clinical precision.",
            bg: "primary"
          },
          { 
            name: "Dr. Mohd Nadeem", 
            role: "Surgery Specialist", 
            degree: "MDS (Oral & Maxillofacial)", 
            image: "Nadeem.png",
            expertise: "Maxillofacial Surgery",
            focus: "Surgical Precision",
            description: "Expert in advanced surgical techniques for dental restoration and facial reconstruction, prioritizing patient safety and optimal clinical outcomes.",
            bg: "secondary"
          },
          { 
            name: "Dr. Shahnawaz Alam", 
            role: "Surgery Specialist", 
            degree: "MDS (Oral & Maxillofacial)", 
            image: "shanawaz1.png",
            expertise: "Oral Surgery, Trauma",
            focus: "Specialist Surgeon",
            description: "Dedicated to high-quality surgical care, from routine extractions to complex reconstructive procedures with a patient-centered approach.",
            bg: "primary"
          },
          { 
            name: "Dr. Mohammad Aamir Khan", 
            role: "Dental Surgeon", 
            degree: "General Dentistry", 
            image: "amir.png",
            expertise: "General Care, Scaling",
            focus: "Patient Wellness",
            description: "Specializing in comprehensive general dentistry and preventive care, ensuring long-term oral health for all patients in Dubagga.",
            bg: "secondary"
          }
        ].map((doctor, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}
          >
            <div className="w-full lg:w-1/2 relative px-4">
              <div className={`absolute inset-0 ${doctor.bg === 'primary' ? 'bg-primary/5 rotate-3' : 'bg-secondary/5 -rotate-3'} rounded-3xl -z-10`} />
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-xl lg:shadow-2xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute -bottom-6 ${index % 2 === 0 ? 'right-10' : 'left-10'} bg-white p-4 rounded-2xl shadow-lg hidden sm:block`}>
                <div className="flex items-center gap-2 text-primary">
                  <Star className="w-5 h-5 fill-current text-secondary" />
                  <span className="font-bold text-sm">Top Rated Surgeon</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
              <div className="flex flex-col items-center lg:items-start">
                <span className={`inline-block px-4 py-1.5 rounded-lg ${doctor.bg === 'primary' ? 'bg-primary' : 'bg-secondary'} text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6`}>
                  {doctor.role}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-headline text-primary mb-3 leading-tight">{doctor.name}</h3>
                <p className="text-secondary font-bold text-base sm:text-lg mb-6">{doctor.degree}</p>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
                  {doctor.description}
                </p>
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
                  <div className="p-4 sm:p-5 bg-white border border-surface-container rounded-2xl shadow-sm">
                    <h5 className="font-bold text-primary text-xs sm:text-sm mb-2">Expertise</h5>
                    <p className="text-xs text-on-surface-variant font-medium">{doctor.expertise}</p>
                  </div>
                  <div className="p-4 sm:p-5 bg-white border border-surface-container rounded-2xl shadow-sm">
                    <h5 className="font-bold text-primary text-xs sm:text-sm mb-2">Focus</h5>
                    <p className="text-xs text-on-surface-variant font-medium">{doctor.focus}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const RegistrationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict Validation & Sanitization
    const sanitizedName = name.trim().replace(/[<>]/g, ""); 
    const sanitizedPhone = phone.trim().replace(/[^0-9+]/g, ""); 
    
    if (sanitizedPhone.length < 10 || sanitizedPhone.length > 15) {
      alert("Please enter a valid phone number (10-15 digits).");
      return;
    }
    
    if (sanitizedName.length < 2) {
      alert("Please enter a valid name (at least 2 characters).");
      return;
    }

    const message = `Hello, I would like to register for the Free Dental Camp.
Patient Details:
Name: ${sanitizedName}
Phone: ${sanitizedPhone}
Please confirm my registration. Thank you!`;
    const whatsappUrl = `https://wa.me/919598112677?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
    setName("");
    setPhone("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-primary/40 backdrop-blur-md overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 sm:p-10 max-w-md w-full shadow-2xl relative my-auto border border-surface-container"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 text-on-surface-variant hover:bg-red-50 hover:text-red-600 transition-all z-10 active:scale-90"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-tertiary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-7 h-7 text-tertiary" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2 font-headline leading-tight">Camp Registration</h3>
          <p className="text-xs sm:text-sm text-on-surface-variant font-medium">Enter your details to register for our upcoming free dental camp.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="group">
            <label className="block text-[10px] font-black text-primary mb-1.5 px-1 uppercase tracking-widest">Full Name</label>
            <input 
              required
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 sm:py-4 rounded-xl bg-surface-container-low border border-surface-container focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:bg-white focus:outline-none transition-all font-bold text-sm sm:text-base shadow-sm"
              placeholder="e.g. Rahul Sharma"
            />
          </div>
          <div className="group">
            <label className="block text-[10px] font-black text-primary mb-1.5 px-1 uppercase tracking-widest">Phone Number</label>
            <input 
              required
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 sm:py-4 rounded-xl bg-surface-container-low border border-surface-container focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:bg-white focus:outline-none transition-all font-bold text-sm sm:text-base shadow-sm"
              placeholder="e.g. 9876543210"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <button 
              type="submit"
              className="flex-1 px-6 py-4 rounded-xl font-black bg-primary text-white hover:bg-primary/90 transition-all shadow-lg active:scale-95 text-base sm:text-lg"
            >
              Confirm Registration
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="px-6 py-4 rounded-xl font-bold text-on-surface-variant hover:bg-surface-container transition-all text-sm"
            >
              Later
            </button>
          </div>
          <p className="text-[10px] text-center text-on-surface-variant/60 font-bold uppercase tracking-tighter">No Payment Required • Instant Confirmation</p>
        </form>
      </motion.div>
    </div>
  );
};

export { Navbar, Hero, About, Services, WhyChooseUs, Banner, Testimonials, FAQ, Blog, Footer, MobileNav, WhatsAppButton, RegistrationModal, TeamPage };
