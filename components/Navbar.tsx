
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className={`w-8 h-8 rounded-sm bg-gold flex items-center justify-center font-bold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-navy'}`}>RP</div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'} group-hover:text-gold`}>RESEARCH PARTNERS</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {['About', 'Services', 'Approach', 'Insights', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium hover:text-gold transition-colors duration-300 ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 bg-gold text-white text-sm font-semibold rounded-sm hover:bg-navy transition-all duration-300 shadow-lg shadow-gold/10">
            Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {['About', 'Services', 'Approach', 'Insights', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-slate-800 border-b border-slate-100 pb-2 hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-3 bg-navy text-white font-bold rounded-sm hover:bg-gold transition-colors">
            Schedule Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
