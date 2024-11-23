import React, { useEffect, useState } from 'react';
import './AboutPage.css'; 

const AboutPage = () => {
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const statsSection = document.querySelector('.stats');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    observer.observe(statsSection);

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuActive(false);
        setActiveDropdowns([]);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const animateStats = () => {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => item.classList.add('active'));

    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const duration = 2000;
      const steps = 100;
      const increment = target / steps;
      let currentValue = 0;

      const updateCounter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= target) {
          currentValue = target;
          clearInterval(updateCounter);
        }

        if (target === 99.15) {
          counter.textContent = currentValue.toFixed(2) + "%";
        } else {
          counter.textContent = Math.floor(currentValue) + "+";
        }
      }, duration / steps);
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const toggleDropdown = (index) => {
    if (window.innerWidth <= 768) {
      setActiveDropdowns(prev => 
        prev.includes(index) 
          ? prev.filter(item => item !== index)
          : [...prev, index]
      );
    }
  };

  const handleOutsideClick = (e) => {
    const navContainer = document.querySelector('.navigationLinksContainer');
    const mobileMenuToggle = document.querySelector('.mobileMenuToggleButton');
    
    if (
      navContainer && 
      !navContainer.contains(e.target) && 
      !mobileMenuToggle.contains(e.target)
    ) {
      setIsMobileMenuActive(false);
      setActiveDropdowns([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <main className="relative font-inter antialiased">
      <section className="relative h-96 flex items-center justify-center text-gray-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("aboutandcontact.JPG")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-90" />
        <h1 className="relative text-4xl md:text-7xl font-semibold tracking-tight z-10">About Us</h1>
      </section>

      <section className="who-we-are container bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/20 backdrop-blur-sm border border-[#e5e5de] my-16">
        <img 
          src="aboutandcontact.JPG" 
          alt="PCB Manufacturing"
        />
        <div className="who-we-are-content">
          <h2 className="text-[#2c2c29] font-semibold">Who Are We?</h2>
          <p className="text-[#4d4d45]">
            Meena Circuit Pvt Ltd is an ISO-certified manufacturer of PCBs with a long-standing legacy. We have been supplying high-quality PCBs to our customers since 2006, and we strive to be the best by continuously innovating our processes and providing excellent customer service.
          </p>
          <p className="text-[#4d4d45]">
            At Meena Circuits Private Limited, we have established one of the largest Printed Circuit Board manufacturing plants in western India. With cutting-edge technology and modern processes, we are able to deliver professionally graded PCBs on time globally.
          </p>
        </div>
      </section>

      <section className="stats bg-[#f2f2eb]">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/20 backdrop-blur-sm border border-[#e5e5de]">
              <h3 className="stat-number text-[#2c2c29] font-bold" data-target="3">0</h3>
              <p className="text-[#4d4d45]">Countries</p>
            </div>
            <div className="stat-item bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/20 backdrop-blur-sm border border-[#e5e5de]">
              <h3 className="stat-number text-[#2c2c29] font-bold" data-target="800">0</h3>
              <p className="text-[#4d4d45]">Satisfied Clients</p>
            </div>
            <div className="stat-item bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/20 backdrop-blur-sm border border-[#e5e5de]">
              <h3 className="stat-number text-[#2c2c29] font-bold" data-target="700">0+</h3>
              <p className="text-[#4d4d45]">Jobs</p>
            </div>
            <div className="stat-item bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/20 backdrop-blur-sm border border-[#e5e5de]">
              <h3 className="stat-number text-[#2c2c29] font-bold" data-target="99.15">0%</h3>
              <p className="text-[#4d4d45]">Delivery Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-culture container my-16">
        <h2 className="section-title text-[#2c2c29] font-semibold">Company Culture</h2>
        <div className="culture-grid">
          <div className="culture-card bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/20 backdrop-blur-sm border border-[#e5e5de]">
            <h3 className="text-[#2c2c29] font-semibold">Our Mission</h3>
            <p className="text-[#4d4d45]">
              Our Mission Is To Be The Best In The Business By Offering Fast, Efficient And Affordable PCBs That Meet Our Customer's Highest Standards Of Quality And Reliability By Utilising Advanced Technology.
            </p>
          </div>
          <div className="culture-card bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/20 backdrop-blur-sm border border-[#e5e5de]">
            <h3 className="text-[#2c2c29] font-semibold">Our Values</h3>
            <p className="text-[#4d4d45]">
              Our Values Include Integrity, Quality, Innovation, And Service Excellence. These Core Values Are The Foundation Of Our Success And Help Us Maintain High Standards At All Times.
            </p>
          </div>
          <div className="culture-card bg-white/60 p-8 rounded-2xl shadow-lg shadow-[#7a7a6c]/20 backdrop-blur-sm border border-[#e5e5de]">
            <h3 className="text-[#2c2c29] font-semibold">Our Vision</h3>
            <p className="text-[#4d4d45]">
              Our Vision Is To Become The Leading Provider Of High-Quality PCBs In All Over India. Our Goal Is To Make The Custom Design, Manufacture And Assembly Of PCBs Easier And More Cost-Effective For Everyone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;