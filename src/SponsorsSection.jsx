import React from 'react';

const sponsors = [
  { name: 'Salesforce', logo: 'enabler1.png' },
  { name: 'Cummins', logo: 'enabler2.png' },
  { name: 'Twitter', logo: 'enabler3.png' },
  { name: 'Pinterest', logo: 'enabler4.png' },
  { name: 'Roche', logo: 'enabler5.png' },
  { name: 'Slack', logo: 'enabler6.png' },
  { name: 'IU', logo: 'enabler7.png' },
  { name: 'Lilly', logo: 'enabler8.png' },
  { name: 'Humana', logo: 'enabler9.png' },
];

const SponsorSection = () => {
  return (
    <section className="bg-[#f2f2eb] py-12 md:py-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-2">
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight mb-6 md:mb-8 text-[#2c2c29] uppercase">
          Our 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a8a7b] to-[#5c5c52] font-bold ml-2 md:ml-3 uppercase pl-1 mb">
            ENABLERS
          </span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex justify-center">
              <img src={sponsor.logo}  className="h-8 md:h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;