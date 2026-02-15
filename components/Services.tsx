
import React from 'react';
import { Compass, Globe, Zap } from 'lucide-react';

const services = [
  {
    title: "Strategic Advisory",
    icon: <Compass className="w-10 h-10" />,
    items: ["Market entry strategies", "Feasibility studies", "Long-term business plans", "Growth roadmaps"]
  },
  {
    title: "Market Intelligence",
    icon: <Globe className="w-10 h-10" />,
    items: ["Consumer behavior insights", "In-depth market research", "Online surveys & focus groups", "Web & digital analytics"]
  },
  {
    title: "Advanced Insights",
    icon: <Zap className="w-10 h-10" />,
    items: ["Business intelligence reports", "Digital media research", "R&D and trend analysis", "Macro-economic modeling"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl text-navy mb-4">Executive Level Services</h2>
            <p className="text-slate-600">Tailored solutions for complex market dynamics.</p>
          </div>
          <button className="text-navy font-bold border-b-2 border-gold pb-1 hover:text-gold transition-all duration-300">
            View All Services
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-slate-50 border border-slate-100 hover:border-gold/30 hover:bg-navy transition-all duration-500 rounded-sm hover:shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="text-gold mb-8 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 origin-left relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-navy group-hover:text-white transition-colors duration-500 relative z-10">
                {service.title}
              </h3>
              
              <ul className="space-y-4 relative z-10">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-sm text-slate-700 group-hover:text-slate-300 transition-colors duration-500">
                    <span className="w-1.5 h-[1px] bg-gold transition-all duration-500 group-hover:w-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-10 text-xs font-bold uppercase tracking-widest flex items-center space-x-2 text-navy group-hover:text-gold transition-all duration-500 relative z-10">
                <span>Learn More</span>
                <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
