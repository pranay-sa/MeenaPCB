import React from 'react';

const IndustriesWeServe = () => {
  const industries = [
    {
      title: 'Automotive',
      image: 'indu1.jpg',
      description: 'Robotic assembly and automotive manufacturing solutions'
    },
    {
      title: 'Consumer Electronics',
      image: 'consumerelec_ind.jpg',
      description: 'Electronic component assembly and testing'
    },
    {
      title: 'Industrial Electronics',
      image: 'industrialpower_ind.jpg',
      description: 'Industrial automation and control systems'
    },
    {
      title: 'Instrumentation & Medical',
      image: 'instrumentationandmedical_industries.jpg',
      description: 'Precision medical devices and instruments'
    },
    {
      title: 'Telecommunication & RF',
      image: 'telecomind.jpg',
      description: 'Wireless communication solutions'
    },
    {
      title: 'Lighting',
      image: 'lighting_ind.jpg',
      description: 'Advanced lighting systems'
    },
    {
      title: 'Space & Defence',
      image: 'spaceanddefence_ind.jpg',
      description: 'Aerospace and defense technology'
    }
  ];

  return (
    <div className="relative w-full px-4 py-16">
      {/* Background with subtle gradient and pattern */}
      <div className="absolute inset-0 bg-[#f2f2eb]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-12 text-[#2c2c29]">
          Industries We{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a8a7b] to-[#5c5c52]">
            Serve
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.slice(0, 4).map((industry) => (
            <div 
              key={industry.title} 
              className="rounded-lg overflow-hidden group transition-all duration-300 bg-white/60 backdrop-blur-sm border border-[#e5e5de] hover:shadow-xl hover:shadow-[#7a7a6c]/20"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c29]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-[#2c2c29] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8a8a7b] group-hover:to-[#5c5c52] transition-all duration-300">
                  {industry.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {industries.slice(4).map((industry) => (
            <div 
              key={industry.title} 
              className="rounded-lg overflow-hidden group transition-all duration-300 bg-white/60 backdrop-blur-sm border border-[#e5e5de] hover:shadow-xl hover:shadow-[#7a7a6c]/20"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c29]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-[#2c2c29] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8a8a7b] group-hover:to-[#5c5c52] transition-all duration-300">
                  {industry.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;