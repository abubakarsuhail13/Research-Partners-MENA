
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const dummyData = Array.from({ length: 20 }, (_, i) => ({ 
  value: Math.sin(i / 2) * 20 + 50 + Math.random() * 10 
}));

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance on high-refresh rate displays
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // background moves at 25% of scroll speed for a subtle deep sense of depth
  const parallaxOffset = scrollY * 0.25;

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-navy"
    >
      {/* Parallax Background Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop")',
            // Using translate3d triggers hardware acceleration for smoother rendering
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 gradient-overlay" />
        </div>
      </div>

      {/* Animated Data Visualization Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-1">
        <div className="absolute top-1/4 right-0 w-1/3 h-64">
           <ResponsiveContainer width="100%" height="100%">
             <LineChart data={dummyData}>
               <Line type="monotone" dataKey="value" stroke="#D4AF37" strokeWidth={2} dot={false} isAnimationActive />
             </LineChart>
           </ResponsiveContainer>
        </div>
        <div className="absolute bottom-1/4 left-10 w-1/4 h-32">
           <ResponsiveContainer width="100%" height="100%">
             <LineChart data={[...dummyData].reverse()}>
               <Line type="step" dataKey="value" stroke="#D4AF37" strokeWidth={1} dot={false} isAnimationActive />
             </LineChart>
           </ResponsiveContainer>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge - Slide Right */}
          <div className={`flex items-center space-x-2 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold tracking-[0.2em] uppercase text-sm font-bold">MENA Strategic Intelligence</span>
          </div>
          
          {/* Heading - Slide Up */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Decoding MENA’s Future <br /> 
            <span className="italic">Before It Happens</span>
          </h1>
          
          {/* Subheadline - Fade In */}
          <p className={`text-slate-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Strategic intelligence, market foresight, and actionable insights for organizations shaping tomorrow in the Middle East & North Africa.
          </p>
          
          {/* Buttons - Slide Up Staggered */}
          <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <button className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gold text-white font-bold rounded-sm hover:scale-105 transition-all shadow-lg shadow-gold/20">
              <span>Schedule Consultation</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-sm hover:bg-white hover:text-navy transition-all">
              <BarChart3 size={20} />
              <span>Explore Our Intelligence</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative side text */}
      <div className={`absolute right-10 bottom-10 hidden xl:block transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}>
        <div className="rotate-90 origin-right text-white text-xs tracking-[0.5em] uppercase font-bold">
          Market Intelligence &middot; Strategic Advisory &middot; DUBAI UAE
        </div>
      </div>
    </section>
  );
};

export default Hero;
