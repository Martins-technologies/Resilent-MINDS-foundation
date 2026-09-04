import Stat from '../ui/Stat';

const InvolvementImpact = () => {
  const stats = [
    { number: '1,000+', label: 'People Reached' },
    { number: '100+', label: 'Workshops Delivered' },
    { number: '50+', label: 'Community Volunteers' },
    { number: 'Countless', label: 'Lives Encouraged' },
  ];

  return (
    <section className="relative w-full min-h-[500px] bg-green-900 overflow-hidden">
      {/* Image on the left - full height */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <img 
          src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          alt="Person in a peaceful, hopeful moment"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content on the right */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex items-center">
        <div className="px-8 sm:px-10 lg:px-12 xl:px-16 w-full">
          <h3 className="text-white mb-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Your involvement creates real change.
            <br />
            Stronger minds. Brighter futures.
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-green-200 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvolvementImpact;