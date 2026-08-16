import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {/* Mission - Left */}
      <div className="bg-[#2E5D49] text-white px-8 md:px-14 lg:px-20 py-16 md:py-20 lg:py-24">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-5">
          <FaBullseye className="text-[#C79949] text-3xl" />
        </div>
        <span className="text-[#C79949] font-bold text-sm tracking-[0.12em] uppercase block mb-4">
          Our Mission
        </span>
        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-md">
          To empower individuals and communities by providing mental wellness education, emotional resilience programs, and compassionate support that helps people overcome challenges, rebuild confidence, and create healthier futures.
        </p>
      </div>

      {/* Vision - Right */}
      <div className="bg-[#6E2839] px-8 md:px-14 lg:px-20 py-16 md:py-20 lg:py-24">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-5">
          <FaEye className="text-[#C79949] text-3xl" />
        </div>
        <span className="text-[#C79949] font-bold text-sm tracking-[0.12em] uppercase block mb-4">
          Our Vision
        </span>
        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-md">
          A world where every person has the support, knowledge, and inner strength to navigate life&rsquo;s challenges with hope, dignity, and resilience.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;