export interface Project {
  id: number;
  title: string;
  description: string;
  details?: string[];
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  gradientFrom: string;
  gradientTo: string;
  icon?: React.ReactNode;
}
