
import React, { useState } from 'react';
import { Search, BrainCircuit, Lightbulb, ChevronRight } from 'lucide-react';

const pillars = [
  {
    id: 'research',
    icon: <Search className="w-8 h-8" />,
    title: 'Research',
    subtitle: 'Market Intelligence & Data Collection',
    description: 'Deep-dive data gathering including consumer behavior analysis, online surveys, and comprehensive financial data mapping.',
    bullets: ['Market intelligence', 'Consumer behavior', 'Data collection', 'Financial analysis']
  },
  {
    id: 'analyze',
    icon: <BrainCircuit className="w-8 h-8" />,
    title: 'Analyze',
    subtitle: 'Advanced Insights & Risk Mapping',
    description: 'Transforming raw data into meaningful patterns through risk mapping, digital media research, and market dynamics interpretation.',
    bullets: ['Analytics', 'Risk mapping', 'Market dynamics', 'Pattern recognition']
  },
  {
    id: 'recommend',
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Recommend',
    subtitle: 'Strategic Guidance & Roadmaps',
    description: 'Bespoke strategic guidance providing clear feasibility studies, market entry roadmaps, and sustainable business planning.',
    bullets: ['Strategic guidance', 'Feasibility studies', 'Market entry', 'Growth roadmaps']
  }
];

const Approach: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="approach" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Our Approach</span>
          <h2 className="text-4xl md:text-5xl text-navy mb-6">Intelligence Framework</h2>
          <p className="text-slate-600">Our structured methodology ensures that every insight we deliver is backed by rigorous data and local context.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Navigation */}
          <div className="lg:w-1/3 flex flex-col space-y-4">
            {pillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`p-8 rounded-sm text-left transition-all duration-300 flex items-center justify-between group ${activeTab === idx ? 'bg-navy text-white shadow-xl translate-x-4' : 'bg-white text-navy hover:bg-slate-100'}`}
              >
                <div className="flex items-center space-x-6">
                  <div className={`${activeTab === idx ? 'text-gold' : 'text-navy opacity-50'}`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{pillar.title}</h4>
                    <p className={`text-xs uppercase tracking-widest mt-1 text-slate-400`}>{pillar.subtitle}</p>
                  </div>
                </div>
                <ChevronRight className={`transition-transform duration-300 ${activeTab === idx ? 'rotate-90 text-gold' : 'group-hover:translate-x-1 opacity-20'}`} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-white p-12 rounded-sm shadow-sm border border-slate-100 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
            <div className="absolute top-0 right-0 p-12 text-9xl font-bold text-slate-50 pointer-events-none select-none">
              0{activeTab + 1}
            </div>
            
            <div key={activeTab} className="animate-in fade-in slide-in-from-right duration-500 relative z-10">
              <div className="mb-4 text-gold">{pillars[activeTab].icon}</div>
              <h3 className="text-3xl text-navy mb-6 font-bold">{pillars[activeTab].title}</h3>
              <p className="text-slate-600 text-lg mb-8 max-w-xl leading-relaxed">
                {pillars[activeTab].description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {pillars[activeTab].bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-slate-800 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
