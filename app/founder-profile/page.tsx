import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { OurTeam } from "@/components/our-team"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <OurTeam />
    </main>
  )
}
