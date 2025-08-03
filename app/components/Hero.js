'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the 3D scene to avoid SSR issues
const GamepadScene3D = dynamic(() => import('./RobotScene3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
    </div>
  ),
});

export default function Hero() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="font-orpheus text-white">Creative Developer</span>
              <br />
              <span className="text-gray-400">& </span>
              <span className="font-orpheus italic text-yellow-400">Digital Artist</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-lg leading-relaxed"
          >
            Experience innovative web development, game design, and interactive digital art that brings ideas to life.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 group overflow-hidden">
              <span className="relative z-10">View My Work</span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 blur-xl transition-all duration-300"></div>
            </button>
          </motion.div>
        </div>

        {/* Right Content - 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          {/* 3D Model Container */}
          <div className="relative w-full max-w-lg aspect-square">
            {/* Glow Effect Behind Model */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            
            {/* 3D Scene */}
            <div className="relative z-10 w-full h-full">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white/30"></div>
                </div>
              }>
                <GamepadScene3D />
              </Suspense>
            </div>

            {/* Additional particle effects around the model */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
