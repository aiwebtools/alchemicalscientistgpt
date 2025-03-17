
import React from 'react';
import { Flame, Flask, BookOpen, Sparkles, Brain, Beaker, ScrollText } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen size={24} className="text-alchemist-gold" />,
      title: "Interactive Teaching",
      description: "Learn chemistry through realistic alchemical experiments, storytelling, and vivid scenario-building that engages your imagination."
    },
    {
      icon: <Sparkles size={24} className="text-alchemist-green" />,
      title: "Medieval Immersion",
      description: "Experience deep immersion in medieval-era settings with vivid sensory descriptions of laboratory environments and processes."
    },
    {
      icon: <Brain size={24} className="text-alchemist-blue" />,
      title: "Historical Context",
      description: "Discover authentic historical context and methods interwoven with famous alchemical pursuits like the Philosopher's Stone and Elixir of Life."
    },
    {
      icon: <Beaker size={24} className="text-alchemist-purple" />,
      title: "Experimental Guidance",
      description: "Follow detailed, step-by-step alchemical experiment instructions with descriptions of laboratory settings and mystical symbolism."
    },
    {
      icon: <ScrollText size={24} className="text-alchemist-red" />,
      title: "Rich Storytelling",
      description: "Enjoy rich narratives that combine historical anecdotes, myths, and legends to create engaging learning experiences."
    },
    {
      icon: <Flame size={24} className="text-alchemist-gold" />,
      title: "Authentic Persona",
      description: "Interact with a convincing medieval alchemist who uses authentic vocabulary, expressions, and displays period-accurate characteristics."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-alchemist-grid bg-[size:30px_30px] opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-alchemist-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-alchemist-dark to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center py-1 px-3 rounded-full bg-alchemist-purple/20 border border-alchemist-purple/30 mb-4">
            <Flask size={14} className="text-alchemist-gold mr-2" />
            <span className="text-sm font-medium">Mystical Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medieval font-bold mb-6 text-gradient-primary">
            Uncover the Secrets of Alchemy
          </h2>
          
          <p className="text-gray-300 text-lg">
            Embark on a journey through time with our AI Alchemist, blending ancient wisdom with modern science through these mystical abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:shadow-neon-purple hover:border-alchemist-purple/30 opacity-0 animate-slide-up" 
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-alchemist-darker border border-white/5 mb-5">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-medieval font-semibold mb-3 text-white">{feature.title}</h3>
              
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
