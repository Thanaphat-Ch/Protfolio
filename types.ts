// types.ts
export type Experience = {
  id: number
  role: string
  company: string
  period: string
  description: string
}

export type Project = {
  id: number
  title: string
  category: string
  image: string
  description: string
  tech: string[]
  link: string
  screenshots?: string[]
}



export type PortfolioProps = {
  experiences: Experience[]
  projects: Project[]
  skills: string[]
}