import React, { useState, useEffect, useRef } from "react";
import { X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState(new Set());
  const navRef = useRef(null);

  const handleDropdownClick = (e, dropdownId) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdowns((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(dropdownId)) {
          newSet.delete(dropdownId);
        } else {
          if (dropdownId === "products") {
            newSet.clear();
          } else if (dropdownId === "multilayer") {
            newSet.delete("multilayer");
          }
          newSet.add(dropdownId);
        }
        return newSet;
      });
    }
  };

  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
      setActiveDropdowns(new Set());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobileMenuOpen(false);
      setActiveDropdowns(new Set());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 bg-[#f2f2eb] shadow-md z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <div className="text-3xl font-bold text-[#2c2c29] transition-colors duration-300 hover:text-[#5c5c52]">
            Meena Circuits
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          <div
            className={`
            md:flex md:items-center md:gap-6
            ${
              isMobileMenuOpen
                ? "fixed right-0 top-0 h-full w-64 flex flex-col bg-white shadow-lg z-50 p-4 transition-transform duration-300 ease-in-out overflow-y-auto"
                : "hidden md:relative"
            }
          `}
          >
            {/* Close button for mobile */}
            {isMobileMenuOpen && (
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full md:hidden transition-colors duration-300"
                aria-label="Close menu"
              >
                <X size={24} className="text-[#2c2c29]" />
              </button>
            )}

            <div className="mt-14 md:mt-0 flex flex-col md:flex-row md:items-center md:gap-6 w-full">
            <Link to="/" className="block py-2 text-[#4d4d45] text-lg transition-all duration-300 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0  font-medium lg:font-semibold">
  Home
</Link>

              <div className="relative group">
                <a
                  onClick={(e) => handleDropdownClick(e, "products")}
                  className="flex items-center justify-between py-2 text-[#4d4d45] text-lg transition-all duration-300 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 font-medium group lg:font-semibold"
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`ml-1 w-5 h-5 transition-transform duration-300 
                    ${activeDropdowns.has("products") ? "rotate-180" : ""} 
                    md:group-hover:rotate-180`}
                  />
                </a>
                <div
                  className={`
                  ${activeDropdowns.has("products") ? "block" : "hidden"}
                  md:hidden md:group-hover:block
                  md:absolute md:left-0 md:mt-0 md:min-w-[200px]
                  md:bg-white md:shadow-lg md:rounded-md
                  transition-all duration-300 ease-in-out
                `}
                >
                  <Link
                    to="/singlepcb"
                    className="block px-4 py-2 text-[#4d4d45] text-base transition-all duration-300 hover:bg-[#e5e5de]/50 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 lg:font-semibold"
                  >
                    Single Sided PCBs
                  </Link>
                  <a
                    href="#double-sided"
                    className="block px-4 py-2 text-[#4d4d45] text-base transition-all duration-300 hover:bg-[#e5e5de]/50 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 lg:font-semibold"
                  >
                    Double Sided PCBs
                  </a>

                  <div className="relative group/nested">
                    <a
                      href="#"
                      onClick={(e) => handleDropdownClick(e, "multilayer")}
                      className="flex items-center justify-between px-4 py-2 text-[#4d4d45] text-base transition-all duration-300 hover:bg-[#e5e5de]/50 hover:text-[#5c5c52] lg:font-semibold"
                    >
                      <span>Multilayer PCBs</span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-300
                        ${activeDropdowns.has("multilayer") ? "rotate-90" : ""}
                        md:group-hover/nested:rotate-90`}
                      />
                    </a>
                    <div
                      className={`
                      ${
                        activeDropdowns.has("multilayer")
                          ? "block pl-4"
                          : "hidden"
                      }
                      md:pl-0 md:group-hover/nested:block
                      md:absolute md:left-full md:top-0 md:min-w-[160px]
                      md:bg-white md:shadow-lg md:rounded-md
                    `}
                    >
                      <Link
                        to="/fourlayer"
                        className="block px-4 py-2 text-[#4d4d45] text-base transition-all duration-300 hover:bg-[#e5e5de]/50 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 lg:font-semibold"
                      >
                        4 Layer PCBs
                      </Link>
                      <Link
                        to="/sixlayer"
                        className="block px-4 py-2 text-[#4d4d45] text-base transition-all duration-300 hover:bg-[#e5e5de]/50 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 lg:font-semibold"
                      >
                        6 Layer PCBs
                      </Link>
                      <Link
                        to="/eightlayer"
                        className="block px-4 py-2 text-[#4d4d45] text-base transition-all duration-300 hover:bg-[#e5e5de]/50 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 lg:font-semibold"
                      >
                        8 Layer PCBs
                      </Link>
                    </div>
                  </div>

                  <Link
                    to="/metalcore"
                    className="block px-4 py-2 text-[#4d4d45] text-base transition-all duration-300 hover:bg-[#e5e5de]/50 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 lg:font-semibold"
                  >
                    Metal Core PCBs
                  </Link>
                </div>
              </div>

              <Link
                to="/industries"
                className="block py-2 text-[#4d4d45] text-lg transition-all duration-300 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 font-medium lg:font-semibold"
              >
                Industries
              </Link>
              <Link
                to="/about"
                className="block py-2 text-[#4d4d45] text-lg transition-all duration-300 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 font-medium lg:font-semibold"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-[#4d4d45] text-lg transition-all duration-300 hover:text-[#5c5c52] hover:translate-x-1 md:hover:translate-x-0 font-medium lg:font-semibold"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to='/contact'
              className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-[#7a7a6c] to-[#5c5c52] text-[#f2f2eb] rounded-full transition-all duration-300 hover:from-[#6a6a5e] hover:to-[#4c4c44] hover:shadow-md text-lg"
            >
              Request a Quote
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 hover:bg-gray-100 rounded-full transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-[#2c2c29]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
