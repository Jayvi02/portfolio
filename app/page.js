import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
