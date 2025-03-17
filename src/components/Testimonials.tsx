
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Professor Emily Richardson",
      role: "Chemistry Educator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      stars: 5,
      content: "This AI has revolutionized how I teach chemistry. Students are completely engaged by the alchemical perspective, making complex concepts far more accessible and memorable."
    },
    {
      name: "Dr. Michael Chen",
      role: "Historical Scholar",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop",
      stars: 5,
      content: "As a historian, I'm impressed by the historical accuracy. The AI seamlessly blends period-appropriate language with scientific knowledge, creating an authentic medieval alchemist experience."
    },
    {
      name: "Sarah Johnson",
      role: "Science Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
      stars: 5,
      content: "I've always struggled with chemistry, but learning through the lens of medieval alchemy makes everything fascinating! The storytelling aspect helps me retain information in ways textbooks never could."
    },
    {
      name: "Thomas Wright",
      role: "Educational Technologist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
      stars: 4,
      content: "The immersive approach this AI takes to science education represents the future of learning. It transforms abstract concepts into memorable experiences through storytelling and historical context."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-alchemist-darker">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-alchemist-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-alchemist-dark to-transparent z-10"></div>
      <div className="absolute inset-0 bg-alchemist-glow opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Quote className="w-12 h-12 mx-auto text-alchemist-purple opacity-20 mb-4" />
          
          <h2 className="text-3xl md:text-4xl font-medieval font-bold mb-6 text-gradient-primary">
            Voices of the Enlightened
          </h2>
          
          <p className="text-gray-300 text-lg">
            Discover how scholars, educators, and knowledge-seekers have transformed their understanding through the Alchemist Scientist's guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-neon-purple opacity-0 animate-slide-up"
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-alchemist-purple/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
                
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.stars ? "text-alchemist-gold" : "text-gray-600"} 
                      fill={i < testimonial.stars ? "#ffb86c" : "none"} 
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
