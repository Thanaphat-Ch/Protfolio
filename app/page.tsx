import PortfolioView from "@/components/PortfolioView";
import { PROJECTS, EXPERIENCES, SKILLS } from "@/data/content"

export default function Page() {
  return (
    <PortfolioView
      projects={PROJECTS}
      experiences={EXPERIENCES}
      skills={SKILLS}
    />
  )
}