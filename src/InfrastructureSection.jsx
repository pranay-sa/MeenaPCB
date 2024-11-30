import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const InfrastructureSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Using placeholder images for demonstration
  // Replace these URLs with your actual image paths - make sure they're relative to your public directory
  const images = [
    "infra1.png",  
    "infra2.png",  
    "infra3.png",
    "infra4.jpg",
    "infra5.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <section className="bg-[#f2f2eb] py-8 md:py-16 w-full">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight mb-6 md:mb-8 text-[#2c2c29] uppercase text-center">
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a8a7b] to-[#5c5c52] font-bold ml-2 md:ml-3 uppercase pl-1 mb">
            Infrastructure
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 md:pr-8">
            <p className="text-lg md:text-xl lg:text-2xl text-[#4d4d45] leading-relaxed font-inter">
              Our state-of-the-art infrastructure facility is equipped with the
              latest machines and equipment that enable us to manufacture
              world-class products. We partner with leading PCB fabrication
              technology providers across the world to remain on the cutting
              edge of fabrication processes.<br className="hidden md:block" /><br/>
              Our products are known for their high quality, precision, and
              durability. Our PLC-based auto-plating line ensures uniform copper
              distribution throughout the circuit, and a vertical double-side
              solder mask coating machine enables us to have both sides of the
              solder mask coated at one time.
              <br className="hidden md:block" /><br/>
              Our glass-to-glass exposing offers high accuracy in solder masks,
              while our horizontal Hot Air Leveling machine helps to provide
              uniform levelling on SMT pads.
            </p>
          </div>
          <div className="w-full md:flex-1"> {/* Modified width handling */}
            <div 
              className="relative w-full h-[300px] md:h-auto md:aspect-[4/3] rounded-lg shadow-lg bg-white/60 shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="absolute inset-0 w-full h-full"> {/* Explicit dimensions */}
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                      index === currentSlide 
                        ? "opacity-100 translate-x-0" 
                        : index < currentSlide 
                          ? "opacity-0 -translate-x-full" 
                          : "opacity-0 translate-x-full"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Infrastructure ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        console.error(`Error loading image: ${img}`);
                        e.target.src = "/api/placeholder/400/300"; // Fallback placeholder
                      }}
                    />
                  </div>
                ))}
              </div>
              
              
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;