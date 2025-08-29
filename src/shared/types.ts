export enum SelectedPage {
    About = "about",
    Experiences = "experiences",
    Skills = "skills",
    Projects = "projects",
    Contact = "contact"
  }

export interface ExperienceType {
  title: string;
  time: string;
  company: string;
  place: string;
  direction: number;
  description: string;
}

export interface SkillType {
  icon: JSX.Element;
  title: string;
}

export interface ProjectType {
  title: string;
  time: string;
  description: string;
  skills: string;
  direction: number;
  link: string;
}