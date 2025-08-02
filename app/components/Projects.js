'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'art', label: 'Digital Art' },
    { id: 'design', label: 'Design' },
  ];

  // Sample projects - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution built with Next.js and Stripe integration',
      category: 'web',
      image: '/api/placeholder/400/300',
      tags: ['Next.js', 'React', 'Stripe', 'Tailwind'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 2,
      title: 'Digital Portrait Series',
      description: 'Collection of digital portraits exploring modern identity',
      category: 'art',
      image: '/api/placeholder/400/300',
      tags: ['Digital Art', 'Photoshop', 'Illustration'],
      demoUrl: '#',
      codeUrl: null,
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      description: 'Complete brand identity for a tech startup',
      category: 'design',
      image: '/api/placeholder/400/300',
      tags: ['Branding', 'Logo Design', 'UI/UX'],
      demoUrl: '#',
      codeUrl: null,
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      category: 'web',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 5,
      title: 'Abstract Art Collection',
      description: 'Generative art pieces created with code and creativity',
      category: 'art',
      image: '/api/placeholder/400/300',
      tags: ['Generative Art', 'P5.js', 'Creative Coding'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 6,
      title: 'Mobile App UI Design',
      description: 'User interface design for a fitness tracking mobile application',
      category: 'design',
      image: '/api/placeholder/400/300',
      tags: ['Mobile UI', 'Figma', 'Prototyping'],
      demoUrl: '#',
      codeUrl: null,
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of my latest work spanning web development, digital art, and creative design
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <div className="text-6xl text-blue-300 dark:text-blue-700">🎨</div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      View Demo
                    </a>
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
