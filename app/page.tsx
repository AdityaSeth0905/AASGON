import Hero from "@/components/hero"
import MissionSection from "@/components/mission-section"
import SummitBanner from "@/components/summit-banner"
import SDGSection from "@/components/sdg-section"
import NewsSection from "@/components/news-section"
import EventsSection from "@/components/events-section"
import PartnersSection from "@/components/partners-section"
import ImpactSection from "@/components/impact-section"
import DigitalPartner from "@/components/digital-partner"
import { Particles } from "@/components/particles"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>
      <Particles className="absolute inset-0 z-0" quantity={120} />
      <div className="relative z-10">
        <Hero />
        <BackgroundGradient className="w-full">
          <SummitBanner />
        </BackgroundGradient>
        <MissionSection />
        <SDGSection />
        <ImpactSection />
        <EventsSection />
        <NewsSection />
        <PartnersSection />
        <DigitalPartner />
      </div>
    </div>
  )
}
