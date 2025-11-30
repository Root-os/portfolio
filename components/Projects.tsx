'use client';

import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/app/types';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-opacity-20 text-xs rounded"
                      style={{
                        backgroundColor: getTagBackgroundColor(tag, 'bg'),
                        color: getTagBackgroundColor(tag, 'text')
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <Link 
                      href={project.demoUrl} 
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Link>
                  )}
                  {project.codeUrl && (
                    <Link 
                      href={project.codeUrl} 
                      className="flex items-center text-zinc-600 dark:text-zinc-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to get consistent tag colors
type ColorType = 'bg' | 'text';

function getTagBackgroundColor(tag: string, type: ColorType): string {
  const colors: Record<string, { bg: string; text: string }> = {
    'Next.js': { bg: 'rgba(0, 112, 243, 0.2)', text: 'rgb(0, 112, 243)' },
    'PostgreSQL': { bg: 'rgba(41, 121, 255, 0.2)', text: 'rgb(41, 121, 255)' },
    'Stripe': { bg: 'rgba(124, 58, 237, 0.2)', text: 'rgb(124, 58, 237)' },
    'React': { bg: 'rgba(0, 172, 193, 0.2)', text: 'rgb(0, 172, 193)' },
    'Node.js': { bg: 'rgba(72, 187, 120, 0.2)', text: 'rgb(72, 187, 120)' },
    'Socket.io': { bg: 'rgba(255, 65, 84, 0.2)', text: 'rgb(255, 65, 84)' },
    'Vue.js': { bg: 'rgba(66, 184, 131, 0.2)', text: 'rgb(66, 184, 131)' },
    'API Integration': { bg: 'rgba(255, 159, 67, 0.2)', text: 'rgb(255, 159, 67)' },
    'Chart.js': { bg: 'rgba(255, 99, 132, 0.2)', text: 'rgb(255, 99, 132)' }
  };

  const defaultColor = { bg: 'rgba(156, 163, 175, 0.2)', text: 'rgb(156, 163, 175)' };
  const color = colors[tag] || defaultColor;
  
  return type === 'bg' ? color.bg : color.text;
}
