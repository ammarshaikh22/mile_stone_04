import { AboutContact } from "@/components/about-contact"
import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutStats } from "@/components/about-stats"
import { AboutTeam } from "@/components/about-team"
import { AboutTimeline } from "@/components/about-timeline"

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
      <AboutTimeline />
      <AboutContact />
    </div>
  )
}
