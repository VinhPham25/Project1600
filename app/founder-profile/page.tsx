import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { FounderProfile } from "@/components/founder-profile"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <FounderProfile />
    </main>
  )
}
