'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md border border-white/10 shadow-xl' : 'bg-gray-900/60 backdrop-blur-sm border border-white/5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
            <span className="text-white font-semibold text-lg">Jayvi</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('arts')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Arts
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Web Dev
            </button>
            
            <button 
              onClick={() => scrollToSection('photography')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Photography
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
