import Navigation from "../components/navigation"
import HeroCountdownStack from "../components/hero-countdown-stack"
import AboutSection from "../components/about-section"
import GuestStarSection from "../components/guest-star-section"
import TicketingSection from "../components/ticketing-section"
import GallerySection from "../components/gallery-section"
import FAQSection from "../components/faq-section"
import MediaPartnerSection from "../components/media-partner-section"
import FooterSection from "../components/footer-section"
import AnimatedContent from "../components/AnimatedContent"
import SmoothScroll from "../components/smooth-scroll"

export default function Page() {
  return (
    <main className="royal-sky-bg min-h-screen">
      <SmoothScroll />
      <Navigation />
      <HeroCountdownStack />
      <AnimatedContent distance={45} duration={0.9} threshold={0.1}>
        <AboutSection />
      </AnimatedContent>
      <AnimatedContent direction="horizontal" distance={38} duration={0.9} reverse threshold={0.12}>
        <GuestStarSection />
      </AnimatedContent>
      <AnimatedContent distance={42} duration={0.85} threshold={0.1}>
        <TicketingSection />
      </AnimatedContent>
      <AnimatedContent distance={38} duration={0.9} threshold={0.12}>
        <GallerySection />
      </AnimatedContent>
      <AnimatedContent direction="horizontal" distance={32} duration={0.8} threshold={0.15}>
        <FAQSection />
      </AnimatedContent>
      <AnimatedContent distance={32} duration={0.85} threshold={0.1}>
        <MediaPartnerSection />
      </AnimatedContent>
      <AnimatedContent distance={24} duration={0.8} threshold={0.05}>
        <FooterSection />
      </AnimatedContent>
    </main>
  )
}
