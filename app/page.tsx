import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-zinc-900 dark:text-white">
              Your Name
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                YN
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer passionate about creating innovative web solutions that make a difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Get In Touch
              </a>
            </div>
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
              I'm a passionate developer with expertise in modern web technologies. I love building scalable applications and learning new technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-zinc-700 dark:text-zinc-300">React/Next.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-green-600" />
                  <span className="text-zinc-700 dark:text-zinc-300">Node.js/Express</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="text-zinc-700 dark:text-zinc-300">TypeScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-orange-600" />
                  <span className="text-zinc-700 dark:text-zinc-300">Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-white">Full-Stack Developer</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Company Name • 2022 - Present</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                    Developing modern web applications using React, Node.js, and cloud technologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-white">Frontend Developer</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Previous Company • 2020 - 2022</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                    Built responsive user interfaces and improved application performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
            {/* Project 1 */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">PostgreSQL</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Stripe</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a href="#" className="flex items-center text-zinc-600 dark:text-zinc-400 hover:underline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Task Management App
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  A collaborative task management application with real-time updates and team features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">Socket.io</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a href="#" className="flex items-center text-zinc-600 dark:text-zinc-400 hover:underline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Weather Dashboard
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  A beautiful weather dashboard with location-based forecasts and interactive maps.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">API Integration</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Chart.js</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a href="#" className="flex items-center text-zinc-600 dark:text-zinc-400 hover:underline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <p className="text-zinc-600 dark:text-zinc-400">your.email@example.com</p>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Linkedin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Connect with me</p>
            </a>

            <a
              href="https://github.com/yourusername"
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
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
