'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Code, Database, Globe, Smartphone } from "lucide-react";
import Projects from '@/components/Projects';
import projects from '@/data/projects';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="#home" className="text-xl font-bold text-zinc-900 dark:text-white hover:opacity-80 transition-opacity">
              Rodas Asmare Ayalew
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-zinc-900 dark:text-white'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
 <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 relative overflow-hidden">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-5 dark:opacity-10">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiM2YzcyOGQiIG9wYWNpdHk9IjAuMSIvPgogIDxwYXRoIGQ9Ik0zMCAxMEwxMCAzMEwzMCA1MEw1MCAzMEwzMCAxMHoiIHN0cm9rZT0iIzAwNzBmZiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')]"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white dark:border-zinc-800">
          RA
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6"
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rodas Asmare</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed"
      >
        Full-Stack Developer specializing in building modern web applications with <span className="font-medium text-zinc-800 dark:text-white">React</span>, <span className="font-medium text-zinc-800 dark:text-white">Node.js</span>, and <span className="font-medium text-zinc-800 dark:text-white">TypeScript</span>.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          View My Work
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-zinc-900 dark:text-white bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Get In Touch
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </motion.div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Full-stack developer with expertise in building scalable web applications. I specialize in creating seamless user experiences with robust backend systems and modern frontend technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <h4 className="font-medium text-zinc-900 dark:text-white">Frontend</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-blue-600" />
                        <span>React.js / Next.js</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-blue-600" />
                        <span>TypeScript / JavaScript</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-blue-600" />
                        <span>Tailwind CSS / Material UI</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-zinc-900 dark:text-white">Backend</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Database className="w-4 h-4 text-green-600" />
                        <span>Node.js / Express</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Database className="w-4 h-4 text-green-600" />
                        <span>MySQL / MongoDB</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Database className="w-4 h-4 text-green-600" />
                        <span>RESTful APIs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white mb-2">Integrations & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full">Payment Gateways</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm rounded-full">Email Services</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm rounded-full">SMS Gateways</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">AWS Services</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Professional Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-white">Full-Stack Developer</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Abyssinia Software Technology PLC • Oct 2024 - Present</p>
                  <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 mt-2 space-y-1">
                    <li>Develop and maintain full-stack web applications using modern JavaScript frameworks</li>
                    <li>Implement secure payment processing systems with multiple payment gateways</li>
                    <li>Design and optimize database schemas for high-performance applications</li>
                    <li>Integrate third-party services for email notifications and SMS alerts</li>
                    <li>Collaborate with cross-functional teams to deliver high-quality software solutions</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-medium text-zinc-900 dark:text-white">Key Achievements</h4>
                  <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 mt-2 space-y-1">
                    <li>Successfully delivered 4+ production-grade applications within tight deadlines</li>
                    <li>Implemented real-time features using WebSockets, improving user engagement</li>
                    <li>Optimized application performance, reducing load times by 40%</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a
              href="mailto:your.email@example.com"
              className="flex flex-col items-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Email</h3>
              <p className="text-zinc-600 dark:text-zinc-400">rodasayalewasmare@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/rodas-asmare-631362205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Linkedin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Connect with me</p>
            </a>

            <a
              href="https://github.com/Root-os"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Github className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">GitHub</h3>
              <p className="text-zinc-600 dark:text-zinc-400">View my code</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-zinc-600 dark:text-zinc-400">
            <p>&copy; 2024 Rodas Asmare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
