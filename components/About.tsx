
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-50 rounded-full -z-1" />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Architecture" 
              className="rounded-sm shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-navy p-10 hidden md:block z-20">
              <div className="text-4xl text-gold font-bold mb-1">15+</div>
              <div className="text-white text-xs uppercase tracking-widest font-semibold">Years in MENA</div>
            </div>
          </div>
          
          <div>
            <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl text-navy mb-8 leading-tight">
              A Legacy of Precision & <br />Local Expertise
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              MENA Research Partners combines local expertise with advanced analytics to empower strategic decision-making across the Middle East and North Africa region.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our <span className="text-navy font-bold italic">Research – Analyze – Recommend</span> methodology ensures actionable insights and sustainable growth for global firms entering regional markets and local giants expanding their footprint.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-navy mb-2">Global Standards</h4>
                <p className="text-sm text-slate-500 italic">Rigorous methodologies aligned with international best practices.</p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">Regional Roots</h4>
                <p className="text-sm text-slate-500 italic">Deep cultural understanding and local stakeholder access.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
