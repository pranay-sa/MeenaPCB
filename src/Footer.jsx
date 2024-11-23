import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Mail, 
  Phone, 
  Clock 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#2c2c29] text-[#f2f2eb]">
      <div className="absolute inset-0 bg-[#f2f2eb] opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
      
      <div className="relative container mx-auto px-4 pt-4 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4 mt-2">
          <h2 className="text-2xl font-bold text-[#8a8a7b]">Meena Circuits</h2>
          <p className="text-[#f2f2eb]/70">Leading PCB manufacturer in India since 2006</p>
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-2">
            {[
              { Icon: Facebook, color: 'hover:text-[#8a8a7b]' },
              { Icon: Instagram, color: 'hover:text-[#5c5c52]' },
              { Icon: Linkedin, color: 'hover:text-[#4d4d45]' },
              { Icon: Twitter, color: 'hover:text-[#7a7a6c]' }
            ].map(({ Icon, color }, index) => (
              <a key={index} href="#" className={`${color} transition-colors`}>
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Indian Office */}
        <div className="space-y-3 mt-2">
          <h3 className="text-xl font-semibold text-[#8a8a7b]">Indian Office</h3>
          {[
            { Icon: MapPin, text: "Survey #99/1, Village Vadadala, Jarod-Savli Road, Tal:Savli, Vadodara" },
            { Icon: Mail, text: "sales@meenacircuits.co.in" },
            { Icon: Phone, text: "+91 99250-36831" }
          ].map(({ Icon, text }, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon className="w-5 h-5 text-[#f2f2eb]/50" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* USA Office */}
        <div className="space-y-3 mt-2">
          <h3 className="text-xl font-semibold text-[#8a8a7b]">USA Office</h3>
          {[
            { Icon: MapPin, text: "Atlantic Overseas – INC 100 Duffy Avenue Suite 510 Hicksville New York 11801" },
            { Icon: Mail, text: "info@atlanticoverseas.net" },
            { Icon: Phone, text: "+15167387288" }
          ].map(({ Icon, text }, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon className="w-5 h-5 text-[#f2f2eb]/50" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="space-y-3 mt-2">
          <h3 className="text-xl font-semibold text-[#8a8a7b]">Business Hours</h3>
          {[
            { Icon: Clock, text: "Monday – Saturday: 9:00 AM to 5:30 PM" },
            { Icon: Clock, text: "Sunday: Closed" }
          ].map(({ Icon, text }, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon className="w-5 h-5 text-[#f2f2eb]/50" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="relative bg-[#5c5c52] text-center py-4 mt-8">
        <p className="text-[#f2f2eb]/70">&copy; 2024 Meena Circuits. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;