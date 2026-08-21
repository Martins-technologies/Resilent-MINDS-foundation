import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import IconCircle from '../ui/IconCircle';
import IconHope from '../icons/IconHope';
import IconPeople from '../icons/IconPeople';
import IconEmpowerment from '../icons/IconEmpowerment';
import IconHeartDove from '../icons/IconHeartDove';
import IconResilience from '../icons/IconResilience';

const FocusAreas = () => {
  const areas = [
    { 
      Icon: IconHope,
      title: 'Education', 
      desc: 'Building knowledge and awareness for better mental wellness.',
      color: '#6E2839'
    },
    { 
      Icon: IconPeople,
      title: 'Connection', 
      desc: 'Creating supportive communities where no one has to face challenges alone.',
      color: '#2E5D49'
    },
    { 
      Icon: IconEmpowerment,
      title: 'Empowerment', 
      desc: 'Equipping individuals with tools and skills to take control of their wellbeing.',
      color: '#C79949'
    },
    { 
      Icon: IconHeartDove,
      title: 'Support', 
      desc: 'Providing compassionate resources and guidance at every step.',
      color: '#2E5D49'
    },
    { 
      Icon: IconResilience,
      title: 'Resilience', 
      desc: 'Helping individuals and communities thrive through every season.',
      color: '#6E2839'
    },
  ];

  return (
    <section className="section section--band pt-0" style={{ backgroundColor: '#FEF9F2' }}>
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>OUR CORE FOCUS AREAS</Eyebrow>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center items-stretch">
            {areas.map((area, index) => {
              const { Icon } = area;
              return (
                <div key={index} className="flex items-stretch">
                  <div className="text-center px-4 py-2 w-[200px]">
                    <IconCircle 
                      bgColor={area.color} 
                      textColor="#FFFFFF" 
                      className="mx-auto mb-3.5"
                    >
                      <Icon size={28} color="#FFFFFF" strokeWidth={1.8} />
                    </IconCircle>
                    <h4 className="font-body text-sm mb-1" style={{ color: '#2E5D49' }}>
                      {area.title}
                    </h4>
                    <p className="text-xs" style={{ color: '#2E5D49' }}>
                      {area.desc}
                    </p>
                  </div>
                  
                  {index < areas.length - 1 && (
                    <div className="hidden sm:block w-[2px] bg-[#C79949]/30 self-stretch min-h-[140px] mx-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FocusAreas;