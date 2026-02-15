import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const CEOSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 -rotate-6 transform z-[-1] rounded-sm" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Anthony, CEO" 
                className="w-full grayscale rounded-sm shadow-xl"
              />
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Leadership</span>
            <h2 className="text-4xl text-navy mb-2 font-bold">Anthony</h2>
            <p className="text-lg text-slate-500 mb-8 font-medium">Chief Executive Officer</p>
            
            <div className="relative mb-10 pl-8 border-l-2 border-gold italic text-2xl text-navy leading-relaxed serif">
              "Data is powerful. Insight is transformational. In the MENA region, the difference between success and stagnation often lies in the depth of your local intelligence."
            </div>
            
            <p className="text-slate-600 mb-10 leading-relaxed">
              With over two decades of experience navigating emerging markets, Anthony has led Research Partners to become a trusted advisor for Fortune 500 companies and government entities across the MENA region.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <a href="tel:0500000520" className="group flex items-center space-x-3 text-navy font-bold transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                  <Phone size={18} />
                </div>
                <span className="group-hover:text-gold transition-colors duration-300">050 000 0520</span>
              </a>
              <a href="mailto:ah0000@mena-rp.com" className="group flex items-center space-x-3 text-navy font-bold transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                  <Mail size={18} />
                </div>
                <span className="group-hover:text-gold transition-colors duration-300">ah0000@mena-rp.com</span>
              </a>
              <a href="#" className="group flex items-center space-x-3 text-navy font-bold transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                  <Linkedin size={18} />
                </div>
                <span className="group-hover:text-gold transition-colors duration-300">Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;