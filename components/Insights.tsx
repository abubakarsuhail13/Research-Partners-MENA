
import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';

const reports = [
  {
    tag: "Market Report",
    title: "Real Estate Dynamics in GCC 2026",
    excerpt: "An in-depth look at residential and commercial shifts across major regional hubs like Dubai, Riyadh, and Doha.",
    image: "https://images.unsplash.com/photo-1578895210405-907db486c111?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tag: "Trend Analysis",
    title: "The Rise of Digital Sovereignty",
    excerpt: "How MENA nations are positioning themselves in the global tech landscape through data localization and AI infrastructure.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tag: "Economic Commentary",
    title: "Post-Oil Diversification Strategies",
    excerpt: "Mapping the success metrics of major regional development visions and the transition to a knowledge-based economy.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
  }
];

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Thought Leadership</span>
          <h2 className="text-4xl md:text-5xl text-navy mb-4 font-bold">Intelligence That Shapes Conversations</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Expert perspectives on the trends defining the Middle East's economic trajectory.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reports.map((report, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[16/10] rounded-sm shadow-sm">
                <img 
                  src={report.image} 
                  alt={report.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-navy px-3 py-1 text-[10px] text-white font-bold uppercase tracking-widest">
                  {report.tag}
                </div>
              </div>
              <h3 className="text-2xl text-navy mb-4 group-hover:text-gold transition-colors leading-snug font-bold">
                {report.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                {report.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button className="flex items-center space-x-2 text-navy text-sm font-bold uppercase tracking-widest group-hover:text-gold transition-colors">
                  <span>Read Full Report</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <div className="flex space-x-4 text-slate-400">
                  <Share2 size={18} className="hover:text-navy transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
