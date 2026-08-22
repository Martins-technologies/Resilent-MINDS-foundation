import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

const VALUES = [
  {
    num: '01',
    title: 'Compassion',
    desc: 'We meet people where they are with empathy, kindness, and understanding.',
    logo: '/compasion.jfif',
  },
  {
    num: '02',
    title: 'Resilience',
    desc: 'We believe every person has the ability to recover, adapt, and grow through adversity.',
    logo: '/Resilliance.jfif',
  },
  {
    num: '03',
    title: 'Empowerment',
    desc: 'We provide tools, education, and opportunities that help people take control of their wellbeing.',
    logo: '/empowerment1.webp',
  },
  {
    num: '04',
    title: 'Inclusion',
    desc: 'We create safe spaces where everyone feels valued, respected, and supported.',
    logo: '/empowermenet.svg',
  },
  {
    num: '05',
    title: 'Hope',
    desc: 'We believe hope is the foundation for healing, transformation, and positive change.',
    logo: '/star.jpeg',
  },
  {
    num: '06',
    title: 'Community',
    desc: 'We strengthen connections because no one should face life’s challenges alone.',
    logo: '/community.webp',
  },
];

const CoreValuesList = () => {
  return (
    <section className="bg-ivory py-16 md:py-20" aria-label="Our core values">
      <Container>
        <div className="text-center mb-12 md:mb-14">
          <Eyebrow>Our Core Values</Eyebrow>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {VALUES.map((value, index) => (
            <div
              key={value.title}
              className={`px-4 py-8 sm:py-6 text-center ${
                index < VALUES.length - 1 ? 'lg:border-r lg:border-[#E7DFD2]' : ''
              }`}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-[#EDE4D7] flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={value.logo}
                  alt=""
                  className="w-[46px] h-[46px] object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>

              <div className="flex items-baseline justify-center gap-1.5 mb-2">
                <span className="text-gold font-bold text-[13px] tracking-wide">
                  {value.num}
                </span>
                <h4 className="m-0 text-[17px] font-bold text-forest leading-none">
                  {value.title}
                </h4>
              </div>

              <p className="m-0 text-[13px] leading-[1.55] text-[#4A4A4A] max-w-[170px] mx-auto">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValuesList;
