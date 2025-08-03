'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
      isScrolled ? 'bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl' : 'bg-white/3 backdrop-blur-lg border border-white/10'
    }`}>
      <div className="px-8 py-4">
        {/* Navigation Menu - Centered */}
        <div className="flex items-center space-x-8">
          <Link 
            href="/arts"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Arts
          </Link>
          
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
      </div>
    </nav>
  );
}
