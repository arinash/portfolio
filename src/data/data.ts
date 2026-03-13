import type {
  EducationItem,
  Language,
  ExperienceItem,
  SkillGroup,
  ProjectItem,
} from '../types'

export const education: EducationItem[] = [
  {
    degree: 'M.Sc. in Computer Science',
    school: 'Technische Universität Berlin',
    period: '2022 — 2026',
  },
  {
    degree: 'Erasmus Exchange',
    school: 'University of Bologna',
    period: 'Sep 2023 — Feb 2024',
    italic: true,
  },
  {
    degree: 'Erasmus Exchange',
    school: 'Polytechnical University of Milan',
    period: 'Feb 2023 — Jul 2023',
    italic: true,
  },
  {
    degree: 'B.Sc. in Computer Science',
    school: 'Karlsruhe Institute of Technology',
    period: '2017 — 2021',
  },
]

export const languages: Language[] = [
  { name: 'German', level: 'C1' },
  { name: 'English', level: 'C1' },
  { name: 'Italian', level: 'B1' },
  { name: 'Russian', level: 'Native' },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Web Development',
    company: 'IAV GmbH',
    period: 'Jul 2024 — present',
    bullets: [
      'Developed and optimized internal web applications to improve process and operational efficiency',
      'Built and maintained databases ensuring secure and reliable application functionality',
      'Designed and implemented backend systems and APIs for internal tools',
      'Enhanced usability and UX through iterative improvements',
    ],
  },
  {
    role: 'AI Toolkit Development',
    company: 'Biotronik SE & Co. KG',
    period: 'Apr 2022 — Apr 2023',
    bullets: [
      'Integrated an AI-based ECG analysis feature into a telemedicine platform',
      'Analyzed feature relevance and model interpretability using SHAP and feature importance methods',
      'Tested and documented third-party REST API for medical annotation tools',
    ],
  },
  {
    role: 'Student Assistant',
    company: 'Karlsruhe Institute of Technology',
    period: 'Aug 2021 — Nov 2021',
    bullets: [
      "Contributed to research analyzing diversity and regionality of Google's headline functionality",
      'Developed a web crawler for automated collection and evaluation of large datasets',
    ],
  },
  {
    role: 'Logistics Software Development',
    company: 'Dr. Thomas + Partner GmbH & Co. KG',
    period: 'Apr 2019 — Apr 2021',
    bullets: [
      'Processed, pseudonymized and analyzed large datasets using cloud-based technologies',
      'Enhanced the functionality of a portable data terminal (PDT) to improve logistics workflows',
      'Contributed to software modules development for warehouse management systems',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vue', 'TailwindCSS', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Django', 'Python', 'Java'],
  },
  {
    label: 'Database',
    skills: ['SQL', 'PostgreSQL', 'MySQL'],
  },
  {
    label: 'Tools',
    skills: ['Docker', 'GitHub', 'Postman', 'Grafana', 'Jira', 'Confluence'],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Project Submission & Review Tool',
    description: [
      'Full-stack web application for structured project submission and approval workflows.',
      'Automated reviewer handover, role-based access control, and authentication. Interactive dashboards with filtering, sorting, and timeline tracking.',
    ],
  },
  {
    title: 'Interactive Research & Collaboration Map',
    description: [
      'Interactive map visualizing global research collaborations for Prof. Dr. Rinke at FU Berlin.',
      'Dynamic filtering with real-time marker updates across the world map.',
    ],
  },
  {
    title: 'Master Thesis — Usability Heuristics for Public XR',
    description: [
      'AR application studying the effects of environmental distractions and spatial constraints on UX in public extended reality contexts.',
      'User study with quantitative and qualitative data analysis. Resulted in design guidelines for intuitive, context-aware XR systems.',
    ],
  },
]

export const papers: ProjectItem[] = [
  {
    title: 'Evaluating the Impact of Distractions and Spatial Constraints in Public XR',
    description: [
      "Peer-reviewed paper at IEEE VR 2026, based on my master's thesis at TU Berlin.",
    ],
  },
]