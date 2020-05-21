export interface Department {
  id: string;
  name: string;
  description: string;
  satisfaction: string;
  skills: { name: string }[];
  universities: { name: string }[];
  jobs: { name: string }[];
  courses: { name: string }[];
}
