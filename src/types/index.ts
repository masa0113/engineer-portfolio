export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface ExperienceType {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}
