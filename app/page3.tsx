import PortfolioClient from "@/components/PortfolioClient"
import { PROJECTS, EXPERIENCES, SKILLS } from "@/data/content"

export default function Page() {
  return (
    <PortfolioClient
      projects={PROJECTS}
      experiences={EXPERIENCES}
      skills={SKILLS}
    />
  )
}