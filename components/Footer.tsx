
import React from 'react';
import { Twitter, Linkedin, Instagram, ArrowUpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 rounded-sm bg-gold flex items-center justify-center font-bold text-navy text-xl">RP</div>
              <span className="text-2xl font-bold tracking-tight">RESEARCH PARTNERS</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Decoding the complexities of the Middle East & North Africa market through advanced intelligence, localized research, and executive-level strategic foresight.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold hover:text-navy transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-gold">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Strategic Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Intelligence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advanced Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bespoke Research</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-gold">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Intelligence Hub</a></li>
              <li><a href="#approach" className="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; 2026 MENA Research Partners. All Rights Reserved. <br />
            Powered by <a href="http://www.nexaforgetech.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Nexaforge Technologies</a>
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-slate-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button onClick={scrollToTop} className="flex items-center space-x-2 text-gold group">
              <span className="uppercase tracking-widest font-bold">Back to top</span>
              <ArrowUpCircle className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
