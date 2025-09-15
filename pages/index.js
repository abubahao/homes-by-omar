import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import LeadMagnetSection from '../components/LeadMagnetSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Newly added sections
import FeaturedListingsSection from '../components/FeaturedListingsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LeadFlowSection from '../components/LeadFlowSection';

// Top navigation and MLS feed
import NavigationBar from '../components/NavigationBar';
import MlsSection from '../components/MlsSection';

/**
 * The main landing page that assembles all sections together.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Homes by Omar – Edmonton Luxury Real Estate</title>
        <meta
          name="description"
          content="Omar Abubaha is an Edmonton REALTOR® specializing in luxury homes, first‑time buyers and investment properties. Download our free eBook and book a consult today."
        />
        <meta
          property="og:title"
          content="Homes by Omar – Edmonton Luxury Real Estate"
        />
        <meta
          property="og:description"
          content="Omar Abubaha is an Edmonton REALTOR® specializing in luxury homes, first‑time buyers and investment properties."
        />
      </Head>
      {/* Sticky navigation bar at the very top */}
      <NavigationBar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      {/* Display featured properties for inspiration */}
      <FeaturedListingsSection />
      {/* Embed the live MLS feed */}
      <MlsSection />
      {/* Interactive multi‑step enquiry form */}
      <LeadFlowSection />
      {/* Traditional lead magnet form for eBook download */}
      <LeadMagnetSection />
      {/* Client testimonials to build trust */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}