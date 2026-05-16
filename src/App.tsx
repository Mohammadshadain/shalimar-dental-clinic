import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  Navbar,
  Footer,
  MobileNav,
  WhatsAppButton,
  RegistrationModal,
} from "./components/ClinicApp";

// Import Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import TeamPageRoute from "./pages/TeamPageRoute";
import ContactPage from "./pages/ContactPage";
import AppointmentPage from "./pages/AppointmentPage";

// Import Service Sub-pages
import RootCanalLucknow from "./pages/services/RootCanalLucknow";
import DentalImplantLucknow from "./pages/services/DentalImplantLucknow";
import TeethCleaningLucknow from "./pages/services/TeethCleaningLucknow";
import ToothExtractionLucknow from "./pages/services/ToothExtractionLucknow";
import BracesTreatmentLucknow from "./pages/services/BracesTreatmentLucknow";
import KidsDentistryLucknow from "./pages/services/KidsDentistryLucknow";
import SmileMakeoverLucknow from "./pages/services/SmileMakeoverLucknow";
import GumTreatmentLucknow from "./pages/services/GumTreatmentLucknow";
import DentalXRayLucknow from "./pages/services/DentalXRayLucknow";
import OralSurgeryLucknow from "./pages/services/OralSurgeryLucknow";
import ConsultationLucknow from "./pages/services/ConsultationLucknow";
import CosmeticDentistryLucknow from "./pages/services/CosmeticDentistryLucknow";
import DenturesLucknow from "./pages/services/DenturesLucknow";
import WisdomToothRemovalLucknow from "./pages/services/WisdomToothRemovalLucknow";
import DentalCrownsLucknow from "./pages/services/DentalCrownsLucknow";

// Import Blog Sub-pages
import RootCanalCostLucknow from "./pages/blog/RootCanalCostLucknow";
import HowToStopToothPain from "./pages/blog/HowToStopToothPain";
import ImplantVsBridge from "./pages/blog/ImplantVsBridge";
import BenefitsOfCleaning from "./pages/blog/BenefitsOfCleaning";
import WisdomToothRecovery from "./pages/blog/WisdomToothRecovery";
import TypesOfBracesCost from "./pages/blog/TypesOfBracesCost";
import HowToChooseDentist from "./pages/blog/HowToChooseDentist";
import ChildFirstVisit from "./pages/blog/ChildFirstVisit";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-surface overflow-x-hidden flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route
              path="/"
              element={<HomePage onOpenModal={() => setIsModalOpen(true)} />}
            />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/team" element={<TeamPageRoute />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />

            {/* Service Sub-pages */}
            <Route
              path="/root-canal-treatment-lucknow"
              element={<RootCanalLucknow />}
            />

            <Route
              path="/dental-implant-lucknow"
              element={<DentalImplantLucknow />}
            />

            <Route
              path="/teeth-cleaning-lucknow"
              element={<TeethCleaningLucknow />}
            />

            <Route
              path="/tooth-extraction-lucknow"
              element={<ToothExtractionLucknow />}
            />

            <Route
              path="/braces-treatment-lucknow"
              element={<BracesTreatmentLucknow />}
            />

            <Route
              path="/kids-dentistry-lucknow"
              element={<KidsDentistryLucknow />}
            />

            <Route
              path="/smile-makeover-lucknow"
              element={<SmileMakeoverLucknow />}
            />

            <Route
              path="/gum-treatment-lucknow"
              element={<GumTreatmentLucknow />}
            />

            <Route
              path="/dental-x-ray-lucknow"
              element={<DentalXRayLucknow />}
            />

            <Route
              path="/oral-surgery-lucknow"
              element={<OralSurgeryLucknow />}
            />

            <Route
              path="/consultation-lucknow"
              element={<ConsultationLucknow />}
            />

            <Route
              path="/cosmetic-dentistry-lucknow"
              element={<CosmeticDentistryLucknow />}
            />

            <Route
              path="/dentures-lucknow"
              element={<DenturesLucknow />}
            />

            <Route
              path="/wisdom-tooth-removal-lucknow"
              element={<WisdomToothRemovalLucknow />}
            />

            <Route
              path="/dental-crowns-lucknow"
              element={<DentalCrownsLucknow />}
            />

            {/* Blog Sub-pages */}
            <Route
              path="/blog/root-canal-cost-lucknow"
              element={<RootCanalCostLucknow />}
            />

            <Route
              path="/blog/how-to-stop-tooth-pain-immediately"
              element={<HowToStopToothPain />}
            />

            <Route
              path="/blog/dental-implant-vs-bridge"
              element={<ImplantVsBridge />}
            />

            <Route
              path="/blog/benefits-of-teeth-cleaning"
              element={<BenefitsOfCleaning />}
            />

            <Route
              path="/blog/wisdom-tooth-extraction-recovery"
              element={<WisdomToothRecovery />}
            />

            <Route
              path="/blog/types-of-braces-cost-lucknow"
              element={<TypesOfBracesCost />}
            />

            <Route
              path="/blog/how-to-choose-best-dentist"
              element={<HowToChooseDentist />}
            />

            <Route
              path="/blog/child-first-dental-visit"
              element={<ChildFirstVisit />}
            />
          </Routes>
        </main>

        <Footer />
        <MobileNav />
        <WhatsAppButton />

        <RegistrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Router>
  );
}