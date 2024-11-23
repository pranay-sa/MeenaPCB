import React from 'react';

const certifications = [
  { 
    logo: 'iso.png',
    alt: 'ISO Certification Logo'
  },
  { 
    logo: 'reach.png',
    alt: 'RoHS Certification Logo'
  },
  { 
    logo: 'rohs.png',
    alt: 'REACH Certification Logo'
  },
  { 
    logo: 'ulcert.png',
    alt: 'UL Certification Logo'
  }
];

function CertificationsSection() {
  return (
    <div className="relative bg-[#f2f2eb] pb-8 pt-0 md:py-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight mb-6 md:mb-8 text-[#2c2c29] uppercase">
          Our 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a8a7b] to-[#5c5c52] font-bold ml-2 md:ml-3 uppercase pl-1">
            Certifications
          </span>
        </h2>
        
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center rounded-xl md:rounded-2xl bg-white/60 shadow-md md:shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] transition-all duration-300 hover:scale-105"
            >
              <img 
                src={cert.logo}
                alt={cert.alt}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificationsSection;