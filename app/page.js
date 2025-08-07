import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Unicorn Studio Background for entire page */}
      <div className="fixed inset-0 w-full h-full z-0">
        <iframe
          src="https://www.unicorn.studio/embed/Nb3axn5ZWwJrVU10GyBy"
          className="w-full h-full border-0"
          style={{ 
            pointerEvents: 'none',
            transform: 'scale(1.1)',
            transformOrigin: 'center center'
          }}
          title="Homepage Background Animation"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navigation />
        <div id="home">
          <Hero />
        </div>
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
