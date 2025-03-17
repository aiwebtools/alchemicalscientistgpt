
import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqItems = [
    {
      question: "What is Alchemist Scientist GPT?",
      answer: "Alchemist Scientist GPT is an AI that immerses users in medieval alchemy to teach chemistry and early scientific methods through vivid storytelling and interactive experiments. It embodies the persona of a knowledgeable medieval alchemist, providing historically authentic context and engaging learning experiences."
    },
    {
      question: "How does it teach scientific concepts?",
      answer: "The AI teaches through realistic alchemical experiments, detailed storytelling, and vivid scenario-building. It explains chemistry concepts and early scientific methods by translating them into the context of medieval alchemy, making abstract ideas more tangible and memorable through historical perspective."
    },
    {
      question: "Is the historical information accurate?",
      answer: "Yes, the AI provides historically accurate information about medieval alchemy and early scientific practices, while clearly distinguishing between historical beliefs and modern scientific understanding. The alchemical context serves as an engaging framework to teach verified scientific concepts."
    },
    {
      question: "Can I use it for educational purposes?",
      answer: "Absolutely! Alchemist Scientist GPT is designed as an educational tool and can be particularly valuable for teaching chemistry, history of science, and interdisciplinary studies. It makes learning more engaging through its immersive storytelling approach."
    },
    {
      question: "What age group is this appropriate for?",
      answer: "While the content is accessible to various age groups, it's particularly suitable for high school students and above due to the complexity of some scientific concepts. The storytelling approach, however, can make chemistry more approachable for younger students with appropriate guidance."
    },
    {
      question: "Can it perform real-time experiments?",
      answer: "The AI provides detailed instructions and vivid descriptions of alchemical experiments that correspond to modern chemistry concepts. However, as a digital tool, it cannot perform physical experiments. All experiment descriptions are designed to be educational and engaging, though some may not be practical to reproduce."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center py-1 px-3 rounded-full bg-alchemist-purple/20 border border-alchemist-purple/30 mb-4">
            <HelpCircle size={14} className="text-alchemist-gold mr-2" />
            <span className="text-sm font-medium">Common Inquiries</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medieval font-bold mb-6 text-gradient-primary">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-300 text-lg">
            Discover answers to common questions about our mystical AI alchemist and its educational approach.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-panel rounded-xl overflow-hidden transition-all duration-300",
                openIndex === index ? "shadow-neon-purple" : ""
              )}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left font-medium text-white focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medieval text-lg">{item.question}</span>
                {openIndex === index ? 
                  <ChevronUp size={20} className="text-alchemist-purple ml-2 flex-shrink-0" /> : 
                  <ChevronDown size={20} className="text-gray-400 ml-2 flex-shrink-0" />
                }
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="p-6 pt-0 text-gray-300 border-t border-white/10">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
