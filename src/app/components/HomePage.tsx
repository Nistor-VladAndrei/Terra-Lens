import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { DEFAULT_CITIES } from '../../../lib/cities';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const router = useRouter(); // Next.js router hook

  const handleClick = () => {
    router.push('/polution'); // Navigate to /pollution route
  };
  
  useEffect(() => {
    let phi = 0;

    if (canvasRef.current) {
      const markers = DEFAULT_CITIES.map((city) => ({
        location: [city.lat, city.lon] as [number, number], // Ensures the location is typed as a tuple
        size: 0.03, // You can adjust this size or make it dynamic based on population or another factor
      }));

      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 450 * 2,
        height: 450 * 2,
        phi: 0,
        theta: 0,
        dark: 0.9,
        diffuse: 3.0,
        mapSamples: 26000,
        mapBrightness: 15,
        baseColor: [0.5, 0.5, 0.5],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: markers,
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
    <div className="flex flex-col h-screen bg-[#222222]">
      {/* Top section */}
      <div className="flex justify-between items-center p-6 bg-[#222222] rounded-b-lg shadow-md">
        {/* Header buttons on the left (moved 200px to the right) */}
        <div className="flex space-x-4 ml-[200px]">
          <button className="bg-transparent text-white border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-in-out transform hover:scale-105 glow-effect">
            Home
          </button>
          <button className="bg-transparent text-white border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-in-out transform hover:scale-105 glow-effect">
            Learn
          </button>
          <button className="bg-transparent text-white border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-in-out transform hover:scale-105 glow-effect">
            About Us
          </button>
        </div>

        {/* Logo on the right (moved 200px to the left) */}
        <div className="text-3xl font-extrabold text-white transition-all transform hover:scale-105 mr-[200px] glow-effect">
          TERRA LENS
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-grow justify-between items-center p-6 space-x-10">
        {/* Left: Globe (moved 200px to the right) */}
        <div className="flex items-center justify-center w-1/2 ml-[200px]">
          <div className="bg-[#222222] rounded-lg w-full max-w-lg h-110">
            <canvas
              ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </div>

        {/* Right: Our Maps Section */}
        <div className="flex flex-col space-y-6 w-1/2 ml-[200px] sm:w-full md:w-1/2">
          <div className="bg-[#222222] p-6 rounded-xl w-full max-w-sm h-auto border-2 border-white">
            {/* Our Maps Text */}
            <div className="text-white text-2xl font-semibold mb-6 text-center">
              Our Maps
            </div>

            {/* Square 1 */}
            <div className="flex justify-center mb-6">
              <div
                className="bg-[#222222] p-4 rounded-lg w-full max-w-sm h-48 transform hover:scale-105 glow-effect transition-all duration-500 ease-in-out relative"
                onClick={handleClick}
              >
                {/* Image covering the whole square */}
                <img
                  src="firstMap.png"
                  alt="Image 1"
                  className="w-full h-full object-cover rounded-lg z-0"
                />
                {/* Text content with slight padding and background */}
                <div className="absolute inset-0 bg-transparent bg-opacity-50 p-4 flex flex-col items-center justify-center rounded-lg z-10">
                  <p className="text-black text-xl font-semibold mb-4">Polution Map</p>
                  <p className="text-black text-sm">Worldwide polution map index</p>
                </div>
              </div>
            </div>

            {/* Square 2 */}
            <div className="flex justify-center mb-6">
              <div
                className="bg-[#222222] p-4 rounded-lg w-full max-w-sm h-48 transform hover:scale-105 glow-effect transition-all duration-500 ease-in-out relative"
                onClick={handleClick}
              >
                {/* Image covering the whole square */}
                <img
                  src="map.png"
                  alt="Image 1"
                  className="w-full h-full object-cover rounded-lg z-0"
                />
                {/* Text content with slight padding and background */}
                <div className="absolute inset-0 bg-transparent bg-opacity-50 p-4 flex flex-col items-center justify-center rounded-lg z-10">
                  <p className="text-black text-xl font-semibold mb-4">Heat Map</p>
                  <p className="text-black text-sm">A detailed description of Vaults and Coats...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
