import React from 'react';
import { personalInfo, services, techStack, about, projects } from '../data/mockData';

const Portfolio = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {personalInfo.role}
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            {personalInfo.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* What I Can Help With Section */}
      <section className="bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 text-center">
            What I Can Help With
          </h2>
          <div className="grid gap-4 max-w-2xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 text-sm underline transition-colors duration-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 text-sm underline transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 text-center">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 text-center">
          About
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
          {about}
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 text-center">
            Contact
          </h2>
          <div className="text-center space-y-4">
            <div>
              <p className="text-gray-600 mb-2">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-900 hover:text-gray-600 text-lg underline transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Upwork</p>
              <a
                href={personalInfo.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 text-lg underline transition-colors duration-200"
              >
                {personalInfo.upworkId}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 {personalInfo.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
