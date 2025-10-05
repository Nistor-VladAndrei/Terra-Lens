import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Feedback {
  id: number;
  name: string;
  email: string;
  rating: number;
  message: string;
  date: string;
  avatar: string;
}

const mockFeedback: Feedback[] = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@urbanplanning.com",
    rating: 5,
    message: "TerraLens has been instrumental in our urban planning initiatives. The heat map data helped us identify critical areas for green infrastructure investment. Highly recommend!",
    date: "2025-09-28",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    email: "m.johnson@citycouncil.gov",
    rating: 4,
    message: "Great platform for visualizing environmental data. The pollution map is particularly useful for policy-making. Would love to see more historical data comparison features.",
    date: "2025-09-25",
    avatar: "MJ"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    email: "elena.r@environmental.org",
    rating: 5,
    message: "As an environmental consultant, I use TerraLens daily. The NASA satellite integration provides reliable, real-time data that our clients trust. Exceptional tool!",
    date: "2025-09-22",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Kim",
    email: "dkim@architecture.studio",
    rating: 4,
    message: "Excellent resource for sustainable architecture projects. The thermal data helps us optimize building placement and design. User interface could be more intuitive.",
    date: "2025-09-20",
    avatar: "DK"
  }
];

export default function FeedbackPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    message: ""
  });

  const handleHome = () => router.push('/');
  const handleLearn = () => router.push('/learn');
  const handleAbout = () => router.push('/about');

  const handleSubmit = () => {
    console.log("Feedback submitted:", formData);
    setFormData({ name: "", email: "", rating: 5, message: "" });
  };
  const handleFeedBack = () =>{
    router.push('/feedback')
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#222222] overflow-hidden">
      {/* Modern Glassy Header */}
      <div className="sticky top-0 z-50 backdrop-blur-2xl bg-[#003314]/30 border-b border-white/10 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-4 md:py-5 gap-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl md:text-3xl font-bold font-montserrat text-white tracking-wide order-1 md:order-1 hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={handleHome}>
            TERRA LENS
          </div>
          <nav className="flex gap-1 md:gap-2 order-2 md:order-2">
            <button onClick={handleHome} className="relative px-4 md:px-6 py-2 text-white font-montserrat font-medium text-sm md:text-base rounded-full backdrop-blur-md bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button onClick={handleLearn} className="relative px-4 md:px-6 py-2 text-white font-montserrat font-medium text-sm md:text-base rounded-full backdrop-blur-md bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden">
              <span className="relative z-10">Learn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button onClick={handleAbout} className="relative px-4 md:px-6 py-2 text-white font-montserrat font-medium text-sm md:text-base rounded-full backdrop-blur-md bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden">
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

      {/* Main Content */}
      <div className="flex-grow p-6 md:p-10 lg:p-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Feedback Form */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-all duration-700"
            style={{ animation: 'slideInLeft 0.8s ease-out' }}>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 font-montserrat bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Share Your Feedback
            </h2>
            <p className="text-white/70 text-sm md:text-base mb-6 font-montserrat">
              Help us improve TerraLens with your insights
            </p>

            <div className="space-y-5">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
                <label className="text-white font-montserrat font-medium text-sm mb-2 block">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300 font-montserrat"
                  placeholder="Your name"
                />
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
                <label className="text-white font-montserrat font-medium text-sm mb-2 block">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300 font-montserrat"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
                <label className="text-white font-montserrat font-medium text-sm mb-2 block">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="text-3xl hover:scale-110 transition-transform duration-200"
                    >
                      <span className={star <= formData.rating ? 'text-yellow-400' : 'text-gray-600'}>★</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
                <label className="text-white font-montserrat font-medium text-sm mb-2 block">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300 font-montserrat h-32 resize-none"
                  placeholder="Share your experience with TerraLens..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full backdrop-blur-md bg-[#003314]/80 hover:bg-[#003314] text-white border-2 border-white/50 py-3 rounded-full hover:border-white transition-all duration-500 font-montserrat font-semibold text-base hover:scale-105 hover:shadow-lg"
              >
                Submit Feedback
              </button>
            </div>
          </div>

          {/* Right: Previous Feedback */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-all duration-700"
            style={{ animation: 'slideInRight 0.8s ease-out' }}>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 font-montserrat bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Community Feedback
            </h2>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {mockFeedback.map((feedback, index) => (
                <div
                  key={feedback.id}
                  className="backdrop-blur-sm bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#003314] to-green-600 flex items-center justify-center text-white font-bold font-montserrat text-sm flex-shrink-0">
                      {feedback.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-white font-bold font-montserrat text-base">{feedback.name}</h3>
                          <p className="text-white/60 text-xs font-montserrat">{feedback.email}</p>
                        </div>
                        <span className="text-white/50 text-xs font-montserrat">{feedback.date}</span>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {renderStars(feedback.rating)}
                      </div>
                      <p className="text-white/80 text-sm font-montserrat leading-relaxed">
                        {feedback.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}