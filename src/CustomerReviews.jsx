import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Atik Vahora",
    role: "",
    rating: 5,
    text: "Good Company, excellent quality products delivered on time ..",
    source: "Google Reviews",
    photo: "customer1.jpg"
  },
  {
    id: 2,
    name: "Nilesh Bhatt",
    role: "",
    rating: 4,
    text: "Good Mantained Company for electronics.. and good service",
    source: "Google Reviews",
    photo: "customer2.jpg"
  },
  {
    id: 3,
    name: "Deepak Gupta",
    role: "",
    rating: 5,
    text: "Largest supplier of Pcb in india & USA with ultra modern machinery...",
    source: "Google Reviews",
    photo: "customer3.jpg"
  },
  {
    id: 4,
    name: "Vipul Patel",
    role: "",
    rating: 5,
    text: "Precise manufacturing and outstanding customer support make them my go-to PCB partner.",
    source: "Google Reviews",
    photo: "customer4.jpg"
  },
  {
    id: 5,
    name: "Harish Wadher",
    role: "",
    rating: 4,
    text: "Rapid prototyping and high-quality boards accelerated our product development timeline.",
    source: "Google Reviews",
    photo: "customer5.jpg"
  },
  {
    id: 6,
    name: "Darshil Kachchiya",
    role: "",
    rating: 3,
    text: "Cutting-edge PCB technologies that meet the most demanding technical specifications.",
    source: "Google Reviews",
    photo: "customer6.jpg"
  },
  {
    id: 7,
    name: "Iresh Patel",
    role: "",
    rating: 4,
    text: "one of the largest Printed Circuit Board Manufacturing plant in western India with latest technology based equipments and ultra modern process to deliver the best quality products that exceeds customer’s expectations.",
    source: "Google Reviews",
    photo: "customer7.jpg"
  },
];

const GoogleReviewIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="#4285F4"
    className="inline-block ml-2"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"/>
  </svg>
);

// Fallback avatar component
const FallbackAvatar = ({ name }) => {
  const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
  
  return (
    <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#5c5c52] flex items-center justify-center bg-[#5c5c52] text-white text-4xl">
      {initials}
    </div>
  );
};

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star 
            key={index} 
            className={`w-5 h-5 ${index < rating ? 'text-[#5c5c52]' : 'text-gray-300'}`} 
            fill={index < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
    );
  };

  const currentReviewData = reviews[currentReview] || reviews[0];

  return (
    <section className="py-16 bg-[#f2f2eb]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight mb-6 md:mb-8 text-[#2c2c29] uppercase">
          Customer 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a8a7b] to-[#5c5c52] font-bold ml-2 md:ml-3 uppercase pl-1">
            Reviews
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main Review Carousel */}
          <div className="relative max-w-2xl mx-auto lg:order-2">
            <div className="bg-white/60 rounded-2xl shadow-lg shadow-[#7a7a6c]/10 backdrop-blur-sm border border-[#e5e5de] p-8 text-center">
              <div className="flex justify-between absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-4 z-10">
                <button 
                  onClick={handlePrev} 
                  className="text-[#5c5c52] hover:bg-[#e5e5de] rounded-full p-2 transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={handleNext} 
                  className="text-[#5c5c52] hover:bg-[#e5e5de] rounded-full p-2 transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              {currentReviewData.photo ? (
                <img 
                  src={currentReviewData.photo} 
                  alt={currentReviewData.name} 
                  className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full border-4 border-[#5c5c52]"
                />
              ) : (
                <FallbackAvatar name={currentReviewData.name} />
              )}
              
              <div className="mb-6">
                {renderStars(currentReviewData.rating)}
              </div>
              
              <p className="text-lg lg:text-xl text-[#4d4d45] mb-6 italic min-h-[80px] lg:min-h-[120px] flex items-center justify-center">
                "{currentReviewData.text}"
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg lg:text-xl font-semibold text-[#2c2c29]">
                  {currentReviewData.name}
                </h3>
                <p className="text-[#4d4d45] lg:text-lg">
                  {currentReviewData.role}
                </p>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-sm text-[#4d4d45]">
                  {currentReviewData.source}
                </span>
                <GoogleReviewIcon />
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentReview ? 'bg-[#5c5c52]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Review Highlights */}
          <div className="hidden lg:block lg:order-1 space-y-4">
            <h3 className="text-3xl font-semibold text-[#2c2c29] mb-6">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {reviews.map((review, index) => (
                <div 
                  key={review.id} 
                  className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    index === currentReview 
                    ? 'bg-white/80 shadow-md border border-[#e5e5de]' 
                    : 'hover:bg-white/40'
                  }`}
                  onClick={() => setCurrentReview(index)}
                >
                  <div className="flex items-center mb-2">
                    {review.photo ? (
                      <img 
                        src={review.photo} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full mr-3 border-2 border-[#5c5c52]"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full mr-3 border-2 border-[#5c5c52] flex items-center justify-center bg-[#5c5c52] text-white">
                        {review.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-semibold">{review.name}</h4>
                      <p className="text-xs text-[#4d4d45]">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;