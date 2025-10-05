import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { DEFAULT_CITIES } from '../../../lib/cities';
import { redirect, RedirectType, useRouter } from 'next/navigation';

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const router = useRouter();

  const handleClick = () => {
    router.push('/polution');
  };
  const handleClickHeat = () =>{{
    //https://cathi-nonengrossing-janiyah.ngrok-free.dev/
    redirect('http://192.168.30.248:5006/', RedirectType.push)
  }}
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

  useEffect(() => {
    let phi = 0;
    const Markers = DEFAULT_CITIES.map((city) => ({
      location: [city.lat, city.lon] as [number, number],
      size: 0.03,
    }));

    console.log(Markers);

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 450 * 2,
        height: 450 * 2,
        phi: 0,
        theta: 0,
        dark: 0.9,
        diffuse: 1.2,
        mapSamples: 15000,
        mapBrightness: 15,
        baseColor: [0.5, 0.5, 0.5],
        markerColor: [0.1, 0.8, 1],
        glowColor: [0, 1, 0],
        markers: Markers,
        onRender: (state: any) => {
          state.phi = phi;
          phi += 0.004;
        },
      });

      return () => {
        globe.destroy();
      };
    }
  }, []);

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
      <div className="flex flex-col lg:flex-row flex-grow justify-center lg:justify-between items-center p-4 md:p-6 lg:p-10 gap-8 lg:gap-12">
        {/* Left: Globe */}
        <div className="flex items-center justify-center w-full lg:w-1/2 lg:ml-8 xl:ml-[200px] relative"
          style={{ animation: 'fadeInScale 0.8s ease-out' }}
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            <canvas
              ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                aspectRatio: '1',
              }}
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Right: Our Maps Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:mr-8 xl:mr-[200px] px-4 md:px-0"
          style={{ animation: 'slideInRight 0.8s ease-out' }}
        >
          {/* Glass container wrapping everything */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-white/10 transition-all duration-700 w-full">
            <div className="text-white text-2xl md:text-3xl font-bold mb-6 text-center font-montserrat bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Our Maps
            </div>

            <div className="flex flex-col gap-5">
              {/* Pollution Map Card */}
              <div
                className="relative rounded-2xl overflow-hidden h-44 md:h-52 lg:h-56 transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 ease-out shadow-xl  cursor-pointer group"
                onClick={handleClick}
                style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}
              >
                <img
                  src="firstMap.png"
                  alt="Pollution Map"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 backdrop-blur-md bg-white/10 border-t border-white/20 transition-all duration-700 group-hover:backdrop-blur-lg group-hover:bg-white/20">
                    <p className="text-white text-lg md:text-xl font-bold mb-1 transition-all duration-500 group-hover:translate-x-2 font-montserrat">
                      Pollution Map
                    </p>
                    <p className="text-white/90 text-sm md:text-base transition-all duration-500 group-hover:text-white font-montserrat">
                      Worldwide pollution map index
                    </p>
                  </div>
                </div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#003314] transition-all duration-700"></div>
              </div>

              {/* Heat Map Card */}
              <div
                className="relative rounded-2xl overflow-hidden h-44 md:h-52 lg:h-56 transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 ease-out shadow-xl cursor-pointer group"
                onClick={handleClickHeat}
                style={{ animation: 'fadeInUp 0.6s ease-out 0.4s backwards' }}
              >
                <img
                  src="map.png"
                  alt="Heat Map"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 backdrop-blur-md bg-white/10 border-t border-white/20 transition-all duration-700 group-hover:backdrop-blur-lg group-hover:bg-white/20">
                    <p className="text-white text-lg md:text-xl font-bold mb-1 transition-all duration-500 group-hover:translate-x-2 font-montserrat">
                      Heat Map
                    </p>
                    <p className="text-white/90 text-sm md:text-base transition-all duration-500 group-hover:text-white font-montserrat">
                      Urban heat island visualization
                    </p>
                  </div>
                </div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#003314] transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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