import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FAQSection } from "@/components/faq-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chatbox"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FAQSection />
      <RegistrationSection />
      <Footer />
      <ChatBot />
    </main>
  )
}
