import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2">

      {/* Mission - Left */}
      <div className="bg-[#2E5D49] text-white text-[#ffffff] px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-6 md:py-10 lg:py-14">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <FaBullseye className="text-[#C79949] text-2xl sm:text-3xl" />
          </div>
          {/* Content */}
          <div>
            <span className="text-[#C79949] font-bold text-xs sm:text-sm tracking-[0.12em] uppercase block mb-2 sm:mb-3">
              Our Mission
            </span>
            <div className="text-white text-[#ffffff] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
              To empower individuals and communities by providing mental wellness education, emotional resilience programs, and compassionate support that helps people overcome challenges, rebuild confidence, and create healthier futures.
            </div>
          </div>
        </div>
      </div>

      {/* Flower divider icon — centered between panels */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-[#C79949] items-center justify-center shadow-lg overflow-hidden">
        <img
          src="/flowericon.jpeg"
          alt="Flower icon"
          className="w-full h-full object-cover rounded-full"
          style={{
            mixBlendMode: 'multiply',
            filter: 'brightness(4) saturate(0)',
          }}
        />
      </div>

      {/* Vision - Right */}
      <div className="bg-[#6E2839] text-white text-[#ffffff] px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-6 md:py-10 lg:py-14">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <FaEye className="text-[#C79949] text-2xl sm:text-3xl" />
          </div>
          {/* Content */}
          <div>
            <span className="text-[#C79949] font-bold text-xs sm:text-sm tracking-[0.12em] uppercase block mb-2 sm:mb-3">
              Our Vision
            </span>
            <div className="text-white text-[#ffffff] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
              A world where every person has the support, knowledge, and inner strength to navigate life&rsquo;s challenges with hope, dignity, and resilience.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MissionVision;