import React, { useState, useEffect } from 'react';
import { PhoneCall } from "lucide-react";
import { Link } from 'react-router-dom';


// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const currentCount = Math.min(
        Math.floor((progress / duration) * end),
        end
      );
      
      setCount(currentCount);
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span>{count}{suffix}</span>
  );
};

function App() {
  const stats = [
    { number: 3, label: "Countries", suffix: "+" },
    { number: 800, label: "Clients", suffix: "+" },
    { number: 99.15, label: "Delivery rate", suffix: "%" }
  ];

  return (
    <div className="relative min-h-screen font-inter antialiased">
      {/* Background layers in correct order */}
      <div className="absolute inset-0">
        {/* Base color */}
        <div className="absolute inset-0 bg-[#f2f2eb]" />
        
        {/* Video layer */}
        <div className="absolute inset-0">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="displayvideo.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="min-h-[calc(100vh-9rem)] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight mb-6 text-[#2c2c29] bg-clip-text bg-gradient-to-r from-[#8a8a7b] to-[#5c5c52] drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
            Leading PCB Manufacturer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a8a7b] to-[#5c5c52] font-semibold drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] uppercase">
              in India
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-[#4d4d45] max-w-2xl mb-8 leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] font-medium">
            Meena Circuits has been delivering excellence in PCB manufacturing since 2006. 
            We are your trusted partner for high-quality Printed Circuit Boards.
          </p>
          
          <div className="mt-8">
            <Link to='/contact'>
            <button className="h-14 px-8 text-lg bg-gradient-to-r from-[#7a7a6c] to-[#5c5c52] hover:from-[#6a6a5e] hover:to-[#4c4c44] text-[#f2f2eb] rounded-full shadow-xl shadow-[#7a7a6c]/20 hover:shadow-[#7a7a6c]/30 transition-all duration-200 flex items-center justify-center gap-2 font-medium">
              <PhoneCall className="h-5 w-5" />
              Request a Quote
            </button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-white/80 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-md border border-[#e5e5de]">
                <div className="text-3xl font-bold text-[#2c2c29] mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000} 
                  />
                </div>
                <div className="text-[#4d4d45] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;