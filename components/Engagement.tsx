
import React from 'react';
import { Layers, UserPlus, Calendar, Briefcase } from 'lucide-react';

const models = [
  {
    title: "Ad-hoc Projects",
    icon: <Briefcase className="w-6 h-6" />,
    desc: "Single-objective strategic assignments with rapid turnaround."
  },
  {
    title: "End-to-End Leadership",
    icon: <Layers className="w-6 h-6" />,
    desc: "Comprehensive project ownership from initial design to execution."
  },
  {
    title: "Retainer Partnerships",
    icon: <Calendar className="w-6 h-6" />,
    desc: "Ongoing advisory and intelligence monitoring for stable growth."
  },
  {
    title: "Embedded Team",
    icon: <UserPlus className="w-6 h-6" />,
    desc: "Deployment of specialized researchers directly into your organization."
  }
];

const Engagement: React.FC = () => {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Deployment</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Flexible by Design, <br />
              <span className="italic">Strategic by Nature</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
              We understand that intelligence needs vary. Our engagement models are built to provide bespoke, executive-level service that integrates seamlessly with your organizational flow.
            </p>
            <button className="px-8 py-4 bg-white text-navy font-bold rounded-sm hover:bg-gold hover:text-white transition-all">
              Discuss Engagement
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {models.map((model, idx) => (
              <div key={idx} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm hover:border-gold/50 transition-colors group">
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform origin-left">
                  {model.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{model.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
