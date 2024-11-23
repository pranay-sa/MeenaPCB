import React from 'react';
import { ChevronDown, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const PCBInfoComponent = () => {
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
              src="sixlayer.jpg"
              alt="6 Layer PCB"
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-2 text-[#4d4d45]">MULTILAYER</div>
          </div>
          <div className="space-y-4">
            <span className="text-[#7a7a6c]">MULTILAYER PCB</span>
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight text-[#2c2c29]">6 Layer PCBs</h1>
            <p className="text-xl text-[#4d4d45]">Advanced Multi-Layer Circuit Board Technology</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Overview Section */}
          <div className="space-y-6 p-6 rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de]">
            <h2 className="text-2xl font-semibold text-[#2c2c29]">Overview</h2>
            <p className="text-[#4d4d45] leading-relaxed">
              A 6-layer PCB consists of six layers of circuit board material, essentially a 4-layer PCB with
              two additional signal layers between the planes. The structure includes two internal planes
              (power and ground), two internal signal layers, and two external signal layers for component
              connections.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="space-y-4 p-6 rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de]">
            <h2 className="text-2xl font-semibold text-[#2c2c29]">Key Features</h2>
            <div className="space-y-3">
              {[
                'Increased functionality and complex circuitry',
                'Higher component density in smaller space',
                'Improved signal integrity with reduced crosstalk',
                'Enhanced power distribution',
                'Better thermal management',
                'EMI/RFI shielding capabilities'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronDown className="text-[#7a7a6c] h-5 w-5" />
                  <span className="text-[#4d4d45]">{feature}</span>
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
                title: 'Computing & Storage',
                description: 'Computer motherboards and data storage devices'
              },
              {
                title: 'Medical Equipment',
                description: 'MRI machines and surgical robots'
              },
              {
                title: 'Aerospace & Defense',
                description: 'Satellites and advanced defense systems'
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
              'Design: CAD software layout creation for components and trace signals',
              'Material Selection: Choose substrate, copper foil, and laminate materials',
              'Drilling: Creating vias for layer interconnection',
              'Copper Plating: Application for conductive paths',
              'Solder Mask: Protective coating application',
              'Testing: Quality control and compliance verification'
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

        {/* Capabilities Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#2c2c29] mb-6">Technical Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'HDI Technology',
                description: 'High-density interconnect technology for reduced size and increased component density'
              },
              {
                title: 'Controlled Impedance',
                description: 'Consistent and predictable impedance throughout the board for high-speed circuits'
              },
              {
                title: 'Design Flexibility',
                description: 'Enhanced routing options and optimal layout for performance and manufacturability'
              }
            ].map((capability, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/60 shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#2c2c29] mb-2">{capability.title}</h3>
                <p className="text-[#4d4d45]">{capability.description}</p>
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

export default PCBInfoComponent;