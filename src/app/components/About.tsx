import React from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/polution');
  };
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
      <div className="flex flex-col justify-center items-center p-4 md:p-6 lg:p-10 space-y-8 md:space-y-12 w-full max-w-7xl mx-auto">
        {/* Image Section with Glassmorphism */}
        <div className="w-full rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border-2 border-white/10 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,255,0,0.3)] transition-all duration-700 hover:bg-white/10"
          style={{ animation: 'fadeInScale 0.8s ease-out' }}
        >
          <div className="relative group">
            <img
              src="heatmap.jpg"
              alt="Full Width Image"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ height: "300px", maxHeight: "450px" }}
            />
            {/* Glass overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Optional: Floating badge */}
            <div className="absolute top-4 right-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2 shadow-lg">
              <p className="text-white text-sm font-montserrat font-semibold">Featured</p>
            </div>
          </div>
        </div>

        {/* Text Section with Enhanced Glassmorphism */}
        <div className="flex justify-center w-full px-4 md:px-6"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.3s backwards' }}
        >
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 p-6 md:p-8 lg:p-10 rounded-3xl w-full max-w-5xl shadow-2xl hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,255,0,0.3)] transition-all duration-700">
            {/* Title with gradient */}
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center font-montserrat bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              About TerraLens
            </h2>
            
            {/* Inner glass container for text */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-5 md:p-6 border border-white/10">
              <p className="text-white/90 text-base md:text-lg lg:text-xl font-medium font-montserrat text-center leading-relaxed">
                TerraLens is a web-based platform designed to help urban planners make smarter, data-informed decisions for climate-resilient city development. It integrates NASA Earth observation data into two interactive maps: a heatmap that visualizes urban heat islands using thermal satellite data, and an air pollution map displaying real-time air quality levels for over 300 cities worldwide. These features allow planners to identify critical hotspots and prioritize interventions where they are most needed.
              </p>
            </div>

            {/* Feature highlights with glass cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                <h3 className="text-white font-bold text-lg mb-2 font-montserrat">🌡️ Heat Mapping</h3>
                <p className="text-white/80 text-sm font-montserrat">Visualize urban heat islands with thermal satellite data</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                <h3 className="text-white font-bold text-lg mb-2 font-montserrat">🌫️ Air Quality</h3>
                <p className="text-white/80 text-sm font-montserrat">Real-time air quality data for 300+ cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

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
      `}</style>
    </div>
  );
}