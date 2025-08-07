'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Arts() {
  const [selectedArt, setSelectedArt] = useState(null);
  const [activeCategory, setActiveCategory] = useState('portraits');
  const [starredArtworks, setStarredArtworks] = useState({});

  const artworkCategories = {
    portraits: [
      {
        id: 1,
        title: "Beast Titan",
        image: "/art/beast titan.png",
        description: "Digital artwork featuring the Beast Titan from Attack on Titan",
        medium: "Digital Art",
        year: "2025"
      },
      {
        id: 2,
        title: "Caraxes The Blood Wyrm",
        image: "/art/caraxes and daemon.jpg",
        description: "Caraxes from House of the Dragon",
        medium: "Digital Art",
        year: "2024"
      },
      {
        id: 3,
        title: "Short Hair Portrait",
        image: "/art/shrthair.png",
        description: "Character portrait with short hair",
        medium: "Digital Art",
        year: "2024"
      },
      {
        id: 4,
        title: "2B",
        image: "/art/2b.png",
        description: "2B from NieR: Automata",
        medium: "Digital Art",
        year: "2024"
      },
      {
        id: 5,
        title: "Ada Wong",
        image: "/art/ada.png",
        description: "Ada Wong from Resident Evil",
        medium: "Digital Art",
        year: "2025"
      },
      {
        id: 6,
        title: "Atreides",
        image: "/art/atreides1.jpg",
        description: "Paul Atreides from Dune",
        medium: "Digital Art",
        year: "2023"
      },
      {
        id: 7,
        title: "Ciri",
        image: "/art/ciri 2.jpg",
        description: "Ciri from The Witcher III",
        medium: "Digital Art",
        year: "2024"
      },
      {
        id: 8,
        title: "Neymar Jr",
        image: "/art/ney.png",
        description: "Neymar in Brazil jersey",
        medium: "Digital Art",
        year: "2024"
      },
      {
        id: 9,
        title: "Rei",
        image: "/art/rei.png",
        description: "Rei Ayanami from Neon Genesis Evangelion",
        medium: "Digital Art",
        year: "2025"
      }
    ],
    concepts: [
      {
        id: 10,
        title: "Two Brothers",
        image: "/art/concept art/2 bros.1.jpg",
        description: "Concept art depicting two brothers",
        medium: "Concept Art",
        year: "2024"
      },
      {
        id: 11,
        title: "Tavern",
        image: "/art/concept art/bla bla1.png",
        description: "Tavern concept art",
        medium: "Concept Art",
        year: "2025"
      },
      {
        id: 12,
        title: "The Lake",
        image: "/art/concept art/boat.png",
        description: "Art of a Lake with boats",
        medium: "Concept Art",
        year: "2024"
      },
      {
        id: 13,
        title: "Sun God",
        image: "/art/concept art/g5.jpg",
        description: "Sun God Nika from One Piece",
        medium: "Concept Art",
        year: "2025"
      },
      {
        id: 14,
        title: "Nasjuro",
        image: "/art/concept art/gandhi1.png",
        description: "Ethanbaron V. Nasjuro from One Piece",
        medium: "Concept Art",
        year: "2024"
      },
      {
        id: 15,
        title: "Raven",
        image: "/art/concept art/raven.png",
        description: "Dark raven concept art",
        medium: "Concept Art",
        year: "2024"
      },
      {
        id: 16,
        title: "Shadow Monarch",
        image: "/art/concept art/sung.png",
        description: "Sung Jinwoo from Solo Leveling",
        medium: "Concept Art",
        year: "2024"
      }
    ],
    sketches: [
      {
        id: 17,
        title: "Indoraptor",
        image: "/art/sketch/1234.png",
        description: "Indoraptor from Jurassic World Sketch",
        medium: "Sketch",
        year: "2024"
      },
      {
        id: 18,
        title: "Game Architectural designs",
        image: "/art/sketch/ca1.png",
        description: "Fantasy building designs",
        medium: "Sketch",
        year: "2025"
      },
      {
        id: 19,
        title: "Opera House",
        image: "/art/sketch/opera house.png",
        description: "Architectural sketch of opera house",
        medium: "Sketch",
        year: "2024"
      },
      {
        id: 20,
        title: "Sketch Study 1",
        image: "/art/sketch/sketching111.png",
        description: "Choosen ones",
        medium: "Sketch",
        year: "2024"
      },
      {
        id: 21,
        title: "Sketch Study 2",
        image: "/art/sketch/sketching2222.png",
        description: "Targaryens",
        medium: "Sketch",
        year: "2024"
      },
      {
        id: 22,
        title: "Wolf x Eagle Sketch",
        image: "/art/sketch/wlfyy.png",
        description: "Concept Animal study sketch",
        medium: "Sketch",
        year: "2024"
      }
    ]
  };

  const currentArtworks = artworkCategories[activeCategory];

  const toggleStar = (artworkId) => {
    setStarredArtworks(prev => ({
      ...prev,
      [artworkId]: (prev[artworkId] || 0) + 1
    }));
  };

  const categories = [
    { id: 'portraits', label: 'Portraits' },
    { id: 'concepts', label: 'Concept Arts' },
    { id: 'sketches', label: 'Sketches' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unicorn Studio Background */}
      <div className="fixed inset-0 z-0">
        <iframe
          src="https://www.unicorn.studio/embed/FqI5DQ1A5Ocnupw2Fvb0"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 'none', width: '100%', height: '100vh', pointerEvents: 'auto' }}
          title="Interactive Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      
      {/* Overlay for better text readability - with pointer events none */}
      <div className="fixed inset-0 bg-black/20 z-1 pointer-events-none"></div>
      
      {/* Navigation */}
      <div className="relative z-50">
        <Navigation />
      </div>
      
      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              <span className="font-orpheus bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Digital</span>{' '}
              <span className="font-orpheus italic text-yellow-400">Arts</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-8 rounded"></div>
            
            {/* Category Buttons */}
            <div className="flex justify-center gap-8 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${
                    activeCategory === category.id
                      ? 'text-white/50 cursor-default'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Exploring creativity through digital mediums, bringing characters and stories to life
            </p>
          </div>

          {/* Art Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="art-card group relative bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedArt(artwork)}
              >
                {/* Art Image */}
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="art-image w-full h-full object-cover group-hover:scale-110 transition-all duration-700 cursor-pointer"
                  />
                  
                  {/* Star Button */}
                  <button
                    className="star-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStar(artwork.id);
                    }}
                  >
                    <svg className="star-icon" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                  
                  {/* Star Count */}
                  {starredArtworks[artwork.id] && (
                    <div className="star-count">
                      ⭐ {starredArtworks[artwork.id]}
                    </div>
                  )}
                </div>
                
                {/* Art Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{artwork.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{artwork.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-pink-400 text-sm font-medium">{artwork.medium}</span>
                      <span className="text-cyan-400 text-sm">{artwork.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated App Ticker */}
          <div className="mt-20 mb-16 overflow-hidden">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white/90 mb-2">Created with</h3>
              <p className="text-white/70">Professional digital art software</p>
            </div>
            
            {/* First row - moving right */}
            <div className="ticker-row ticker-right mb-6">
              <div className="ticker-content">
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
                    <span>Adobe Photoshop</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/Clip_Studio_Paint_app_logo.png" alt="Clip Studio Paint" />
                    <span>Clip Studio Paint</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/procreate-icon-search-display.png" alt="Procreate" />
                    <span>Procreate</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/Adobe_Fresco_CC_icon.svg.png" alt="Adobe Fresco" />
                    <span>Adobe Fresco</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
                    <span>Adobe Photoshop</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/Clip_Studio_Paint_app_logo.png" alt="Clip Studio Paint" />
                    <span>Clip Studio Paint</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/procreate-icon-search-display.png" alt="Procreate" />
                    <span>Procreate</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/Adobe_Fresco_CC_icon.svg.png" alt="Adobe Fresco" />
                    <span>Adobe Fresco</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second row - moving left */}
            <div className="ticker-row ticker-left">
              <div className="ticker-content">
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/Adobe_Fresco_CC_icon.svg.png" alt="Adobe Fresco" />
                    <span>Adobe Fresco</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
                    <span>Adobe Photoshop</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/procreate-icon-search-display.png" alt="Procreate" />
                    <span>Procreate</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/Clip_Studio_Paint_app_logo.png" alt="Clip Studio Paint" />
                    <span>Clip Studio Paint</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/Adobe_Fresco_CC_icon.svg.png" alt="Adobe Fresco" />
                    <span>Adobe Fresco</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
                    <span>Adobe Photoshop</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/procreate-icon-search-display.png" alt="Procreate" />
                    <span>Procreate</span>
                  </div>
                </div>
                <div className="ticker-item">
                  <div className="app-logo-box">
                    <img src="/logos/Clip_Studio_Paint_app_logo.png" alt="Clip Studio Paint" />
                    <span>Clip Studio Paint</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/20 p-8 max-w-2xl mx-auto shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                Interested in commissioning artwork?
              </h3>
              <p className="text-white/90 mb-6 drop-shadow-md">
                I'm available for digital art commissions including character designs, portraits, and fantasy artwork.
              </p>
              <a
                href="/#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged view */}
      {selectedArt && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div className="max-w-5xl max-h-[90vh] relative">
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-3xl font-bold z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
            >
              ✕
            </button>
            <div className="relative">
              <img
                src={selectedArt.image}
                alt={selectedArt.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <h3 className="text-3xl font-bold text-white mb-3">{selectedArt.title}</h3>
                <p className="text-white/90 text-lg mb-2">{selectedArt.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-400 font-medium">{selectedArt.medium}</span>
                  <span className="text-cyan-400">{selectedArt.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
