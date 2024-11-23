import React from 'react';
import { ChevronDown, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';


const MetalCorePCBComponent = () => {
  const relatedProducts = [
    {
      title: '4 Layer PCBs',
      image: 'fourlayer.jpg',
      description: 'Standard multilayer PCBs for general applications',
      path: '/fourlayer'
    },
    {
      title: '6 Layer PCBs',
      image: 'sixlayer.jpg',
      description: 'Advanced multilayer PCBs for complex circuits',
      path: '/sixlayer'
    },
    {
      title: 'Metal Core PCBs',
      image: 'Metalcorepcb.jpg',
      description: 'Custom metal core PCB solutions',
      path: '/metalcore'
    }
  ];

  return (
    <div className="relative min-h-screen font-inter antialiased">
      <div className="absolute inset-0 bg-[#f2f2eb]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Header Section with Image */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div className="rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] p-4">
            <img 
              src="Metalcorepcb.jpg"
              alt="Metal Core PCB"
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-2 text-[#4d4d45]">SUPERIOR THERMAL MANAGEMENT</div>
          </div>
          <div className="space-y-4">
            <span className="text-[#7a7a6c]">THERMAL PCB</span>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight text-[#2c2c29]">Metal Core PCBs</h1>
            <p className="text-xl text-[#4d4d45]">Advanced Thermal Management Solutions</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Overview Section */}
          <div className="space-y-6 p-6 rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de]">
            <h2 className="text-2xl font-semibold text-[#2c2c29]">Overview</h2>
            <p className="text-[#4d4d45] leading-relaxed">
              Metal Core PCBs (MCPCBs) are specialized circuit boards designed for superior thermal performance. 
              Using either aluminum or copper as the base material, these boards excel at heat dissipation, 
              making them ideal for high-power applications. The metal layer acts as a heat spreader, 
              ensuring optimal component performance and reliability in demanding environments.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="space-y-4 p-6 rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de]">
            <h2 className="text-2xl font-semibold text-[#2c2c29]">Key Benefits</h2>
            <div className="space-y-3">
              {[
                'Improved heat dissipation efficiency',
                'Increased reliability and performance',
                'Reduced production costs',
                'Enhanced electrical performance',
                'Better strength and stability',
                'Improved design flexibility',
                'Extended component lifetime',
                'Better thermal management'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronDown className="text-[#7a7a6c] h-5 w-5" />
                  <span className="text-[#4d4d45]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#2c2c29] mb-6">Common Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'LED Lighting',
                description: 'High-power LED arrays and lighting systems'
              },
              {
                title: 'Automotive Electronics',
                description: 'Power devices and control systems'
              },
              {
                title: 'Power Supplies',
                description: 'High-power conversion and distribution'
              }
            ].map((app, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#2c2c29] mb-2">{app.title}</h3>
                <p className="text-[#4d4d45]">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Process Section */}
        <div className="p-6 rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] mb-12">
          <h2 className="text-2xl font-semibold text-[#2c2c29] mb-6">Manufacturing Process</h2>
          <div className="space-y-4">
            {[
              'Material Selection: Choose metal core and dielectric materials',
              'Drilling: Create precise holes in the layers',
              'Dry Film Image Transfer: Apply photosensitive film',
              'Solder Mask: Apply protective coating',
              'Routing: Create component connections',
              'V-Cut: Remove excess material',
              'Testing: Verify functionality',
              'HiPot: Perform high-potential testing'
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="bg-gradient-to-r from-[#7a7a6c] to-[#5c5c52] text-[#f2f2eb] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-[#4d4d45]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Properties Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#2c2c29] mb-6">Technical Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Thermal Performance',
                description: 'Superior heat dissipation through metal core layer'
              },
              {
                title: 'Structural Integrity',
                description: 'Enhanced durability and resistance to thermal stress'
              },
              {
                title: 'Electrical Properties',
                description: 'Improved conductivity and signal integrity'
              }
            ].map((property, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#2c2c29] mb-2">{property.title}</h3>
                <p className="text-[#4d4d45]">{property.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#2c2c29] mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <Link 
                key={index} 
                to={product.path}
                className="group"
              >
                <div className="rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#2c2c29] mb-2">{product.title}</h3>
                    <p className="text-[#4d4d45] text-sm">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalCorePCBComponent;