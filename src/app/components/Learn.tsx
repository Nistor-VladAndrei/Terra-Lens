import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface MapCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const mapCards: MapCard[] = [
  {
    id: "air-pollution",
    title: "Air Pollution",
    subtitle: "Urban growth and industrial activity increase air pollution, causing health risks, especially for vulnerable populations.",
    description: "As cities continue to expand, increased traffic, industrial activity, and energy consumption have led to rising air pollution levels. Air pollution remains one of the most serious environmental and health challenges in urban areas. Satellite data (e.g., NO₂, CO, and aerosol concentrations) show that industrial zones and high-traffic corridors consistently exceed safe pollution thresholds. This contributes to respiratory conditions, cardiovascular diseases, and a lower overall quality of life, particularly for vulnerable populations such as children, the elderly, and those with pre-existing health conditions.",
    image: "firstMap.png"
  },
  {
    id: "urban-heat",
    title: "Urban Heat Island",
    subtitle: "Satellite data shows high pollution levels in industrial and traffic areas, leading to health issues and lower quality of life.",
    description: "Urban heat islands occur when cities replace natural land cover with dense concentrations of pavement, buildings, and other surfaces that absorb and retain heat. This effect increases energy costs, air pollution levels, and heat-related illness and mortality. Satellite thermal data reveals temperature variations across urban areas, helping identify the hottest zones that require intervention through green infrastructure and urban planning strategies.",
    image: "map.png"
  }
];

export default function MapsPage() {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<MapCard | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAbout = () => {
    router.push('/about');
  };
  const handleLearn = () => {
    router.push('/learn');
  };
  const handleHome = () => {
    router.push('/')
  };
  const handleFeedBack = () =>{
    router.push('/feedback')
  }

  const handleCardClick = (card: MapCard) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCard(card);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCard(null);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    if (selectedCard) {
      setIsTransitioning(true);
      setTimeout(() => {
        const currentIndex = mapCards.findIndex(card => card.id === selectedCard.id);
        const nextIndex = (currentIndex + 1) % mapCards.length;
        setSelectedCard(mapCards[nextIndex]);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (selectedCard) {
      setIsTransitioning(true);
      setTimeout(() => {
        const currentIndex = mapCards.findIndex(card => card.id === selectedCard.id);
        const previousIndex = (currentIndex - 1 + mapCards.length) % mapCards.length;
        setSelectedCard(mapCards[previousIndex]);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#222222] overflow-hidden">
      {/* Top section - Modern Glassy Header */}
      <div className="sticky top-0 z-50 backdrop-blur-2xl bg-[#003314]/30 border-b border-white/10 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-4 md:py-5 gap-4 max-w-screen-2xl mx-auto">
          {/* Logo/Brand */}
          <div className="text-2xl md:text-3xl font-bold font-montserrat text-white tracking-wide order-1 md:order-1 hover:scale-105 transition-transform duration-300">
            TERRA LENS
          </div>

          {/* Navigation */}
          <nav className="flex gap-1 md:gap-2 order-2 md:order-2">
            <button className="relative px-4 md:px-6 py-2 text-white font-montserrat font-medium text-sm md:text-base rounded-full backdrop-blur-md bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden" onClick={handleHome}>
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button className="relative px-4 md:px-6 py-2 text-white font-montserrat font-medium text-sm md:text-base rounded-full backdrop-blur-md bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden" onClick={handleLearn}>
              <span className="relative z-10">Learn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button className="relative px-4 md:px-6 py-2 text-white font-montserrat font-medium text-sm md:text-base rounded-full backdrop-blur-md bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden" onClick={handleAbout}>
              <span className="relative z-10">About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button className="relative px-4 md:px-6 py-2 text-white font-montserrat font-medium text-sm md:text-base rounded-full backdrop-blur-md bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden" onClick={handleFeedBack}>
              <span className="relative z-10">Feedback</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className={`transition-opacity duration-300 flex-grow flex items-center justify-center ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {!selectedCard ? (
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 p-6 md:p-10 w-full max-w-6xl">
            {mapCards.map((card, index) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className="relative w-full max-w-lg h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 ease-out shadow-2xl hover:shadow-[0_20px_50px_rgba(0,255,0,0.3)] group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s backwards`
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-700 group-hover:from-black/95">
                  {/* Glassmorphism overlay for text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 backdrop-blur-md bg-white/10 border-t border-white/20 transition-all duration-700 group-hover:backdrop-blur-lg group-hover:bg-white/20">
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat mb-3 transition-all duration-500 group-hover:translate-x-2">
                      {card.title}
                    </h2>
                    <p className="text-white/90 text-sm md:text-base lg:text-lg font-montserrat leading-relaxed transition-all duration-500 group-hover:text-white">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#003314] transition-all duration-700"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-6 md:p-10 flex-grow">
            {/* Left: Text Section with Glassmorphism */}
            <div className="w-full lg:w-1/2 max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,255,0,0.2)]"
              style={{ animation: 'slideInLeft 0.6s ease-out' }}
            >
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-4 md:mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                {selectedCard.title}
              </h1>
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10">
                <p className="text-white/90 text-sm md:text-base lg:text-lg font-montserrat leading-relaxed text-justify">
                  {selectedCard.description}
                </p>
              </div>
            </div>

            {/* Right: Image with Navigation */}
            <div className="relative w-full lg:w-1/2 max-w-2xl"
              style={{ animation: 'slideInRight 0.6s ease-out' }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm hover:border-[#003314] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,255,0,0.3)]">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Glassmorphism overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Navigation Arrows with Glassmorphism */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-xl bg-white/20 hover:bg-white/40 text-white border border-white/30 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-x-1"
              >
                <span className="text-2xl font-bold">&lt;</span>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-xl bg-white/20 hover:bg-white/40 text-white border border-white/30 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-110 hover:translate-x-1"
              >
                <span className="text-2xl font-bold">&gt;</span>
              </button>

              {/* Back Button with Glassmorphism */}
              <button
                onClick={handleBack}
                className="mt-6 backdrop-blur-xl bg-[#003314]/80 hover:bg-[#003314] text-white border-2 md:border-4 border-white/50 py-2 px-6 rounded-full hover:border-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#003314]/50 font-montserrat font-semibold text-sm md:text-base w-full lg:w-auto"
              >
                Back to Maps
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}