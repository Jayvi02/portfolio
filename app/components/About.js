'use client';

export default function About() {
  const skills = [
    'React & Next.js',
    'JavaScript & TypeScript',
    'Python',
    'UI/UX Design',
    'Digital Art',
    'Photography',
    'Photo Editing',
    'Graphic Design'
  ];

  return (
    <section id="about" className="relative py-20 pb-0 bg-transparent overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Passionate about creating digital experiences
            </h3>
            
            <div className="text-lg text-gray-300 space-y-4">
              <p>
                I&apos;m a digital artist and creative developer with a passion for creating 
                beautiful, functional, and user-centered digital experiences. My journey 
                spans across web development, digital art, and creative technology.
              </p>
              
              <p>
                I work mostly on digital arts with CSP and PS. Currently learning
                Blender for 3D modeling and animation, and ZBrush for sculpting.
                Eager to learn new things everyday, currently learning DaVinci
                Resolve for video editing as well.
              </p>
              <p>
                Currently pursuing a BSc(hons) IT in Interactive Media at SLIIT, 
                my goal is to contribute my creative vision and technical skills to 
                the game industry as a game developer or digital artist.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/CV- Jayavi.pdf" 
                download="Jayavi_CV.pdf"
                className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">Download Resume</span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 blur-xl transition-all duration-300"></div>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-6">Skills & Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-600/30 rounded-lg hover:bg-gray-700/60 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-200 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
