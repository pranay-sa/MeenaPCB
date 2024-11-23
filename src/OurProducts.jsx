import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      title: "Single Sided PCB",
      year: "2024",
      description:
        "Single-sided PCBs feature one conductive layer, offering cost-effective and straightforward manufacturing for simple electronic designs across various industries.",
      tags: ["Simple Design", "Cost Effective", "Fast Production"],
      image: {
        src: "single sided.jpg",
        alt: "Single Sided PCB showing copper traces on one side",
        aspectRatio: "landscape"
      },
      path: "/singlepcb"
    },
    
    {
      id: 3,
      title: "Multilayer PCB",
      year: "2024",
      description:
        "Multilayer PCBs provide sophisticated circuit designs with multiple conductive layers, ideal for complex electronic devices and high-performance applications.",
      tags: ["4layer", "6 Layer", "8 Layer"],
      image: {
        src: "others_ind.jpg",
        alt: "Multilayer PCB showing complex layer structure",
        aspectRatio: "landscape"
      },
      path: "/fourlayer"
    },
    {
      id: 4,
      title: "Metal Core PCB",
      year: "2024",
      description:
        "Metal Core PCBs allow for versatile installation in confined spaces, offering reliable performance while adapting to dynamic mechanical requirements.",
      tags: ["Bendable Design", "Space Efficient", "Durable Build"],
      image: {
        src: "Metalcorepcb.jpg",
        alt: "Flexible PCB demonstrating its bendable properties",
        aspectRatio: "landscape"
      },
      path: "/metalcore"
    },
  ];

  return (
    <div className="relative min-h-screen font-inter antialiased">
      <div className="absolute inset-0 bg-[#f2f2eb]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight mb-6 md:mb-8 text-[#2c2c29] uppercase text-center">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a8a7b] to-[#5c5c52] font-bold ml-2 md:ml-3 uppercase pl-1">
              Products
            </span>
          </h2>

          <ul className="space-y-8 md:space-y-12">
            {products.map((product) => (
              <li
                key={product.id}
                className="sticky top-0"
                style={{
                  paddingTop: `${product.id * 1.5}rem`,
                }}
              >
                <div className="bg-white/60 backdrop-blur-sm border border-[#e5e5de] rounded-2xl shadow-lg shadow-[#7a7a6c]/10 transition-all duration-500 hover:shadow-xl hover:bg-white/80 h-[600px] p-8">
                  <div className="h-full flex flex-col">
                    <div className="relative w-full h-72 mb-6 overflow-hidden rounded-2xl">
                      <img
                        src={product.image.src}
                        alt={product.image.alt}
                        className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105  ${
                          product.image.aspectRatio === 'portrait' ? 'object-top' : 'object-center'
                        }`}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold text-[#2c2c29]">
                          {product.title}
                        </h2>
                        <span className="text-[#4d4d45]">{product.year}</span>
                      </div>

                      <p className="text-[#4d4d45]">{product.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-1 bg-[#f2f2eb] rounded-full text-sm text-[#4d4d45]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-4">
                        <Link 
                          to={product.path}
                          className="inline-flex items-center text-[#4d4d45] hover:text-[#2c2c29] transition-colors duration-300 group"
                        >
                          Learn more
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;