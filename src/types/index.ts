export interface EducationItem {
  degree: string
  school: string
  period: string
  italic?: boolean
}

export interface Language {
  name: string
  level: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface ProjectItem {
  title: string
  description: string[]
}
