
import React from 'react';
import { Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          <div className="lg:w-1/2">
            <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl text-navy mb-8">Start Your Journey</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-slate-400">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border-b border-slate-200 py-3 px-1 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-slate-400">Company</label>
                  <input type="text" className="w-full bg-slate-50 border-b border-slate-200 py-3 px-1 focus:border-gold outline-none transition-colors" placeholder="Enter Company Name" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-slate-400">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border-b border-slate-200 py-3 px-1 focus:border-gold outline-none transition-colors" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-slate-400">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border-b border-slate-200 py-3 px-1 focus:border-gold outline-none transition-colors" placeholder="+971 00 000 0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-slate-400">Required Service</label>
                <select className="w-full bg-slate-50 border-b border-slate-200 py-3 px-1 focus:border-gold outline-none transition-colors appearance-none">
                  <option>Strategic Advisory</option>
                  <option>Market Intelligence</option>
                  <option>Advanced Insights</option>
                  <option>Other / Bespoke</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-slate-400">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border-b border-slate-200 py-3 px-1 focus:border-gold outline-none transition-colors resize-none" placeholder="Describe your strategic needs..."></textarea>
              </div>
              
              <button className="flex items-center space-x-3 px-10 py-4 bg-navy text-white font-bold rounded-sm hover:bg-gold transition-all group">
                <span>Submit Inquiry</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex-grow min-h-[400px] relative rounded-sm overflow-hidden bg-slate-100 grayscale hover:grayscale-0 transition-all duration-1000">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549247796-5d8f09e9034b?q=80&w=2009&auto=format&fit=crop")' }}
              />
              <div className="absolute inset-0 bg-navy/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy p-6 rounded-sm shadow-2xl flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-sm">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Headquarters</h4>
                  <p className="text-slate-300 text-xs">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-navy font-bold mb-2">Office Hours</h4>
                <p className="text-sm text-slate-500">Mon - Fri: 9:00 AM - 6:00 PM <br />Sat: 10:00 AM - 2:00 PM</p>
              </div>
              <div>
                <h4 className="text-navy font-bold mb-2">Regional Hub</h4>
                <p className="text-sm text-slate-500 italic">Connected across Riyadh, Abu Dhabi, Doha, and Cairo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
