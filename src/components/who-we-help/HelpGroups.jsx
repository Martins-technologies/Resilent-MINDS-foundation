import Container from '../ui/Container';
import {
  FaUserFriends,
  FaHome,
  FaUser,
  FaHandsHelping,
  FaHeart,
} from 'react-icons/fa';

const topGroups = [
  {
    icon: FaUserFriends,
    color: '#6E2839',
    title: 'Youth & Young Adults',
    desc: "Helping young people build resilience, confidence, and emotional wellness skills so they can navigate life's challenges with strength.",
    points: ['Emotional resilience', 'Confidence building', 'Healthy coping strategies', 'Leadership & life skills'],
    image: '/updated/06_Who_We_Help_Youth_and_Young_Adults.webp',
    width: 1734,
    height: 907,
  },
  {
    icon: FaHome,
    color: '#2E5D49',
    title: 'Families',
    desc: 'Providing education and resources that help families communicate, support one another, and thrive through challenging seasons.',
    points: ['Strengthening relationships', 'Communication tools', 'Parenting & guidance', 'Support during difficult times'],
    image: '/updated/07_Who_We_Help_Families.webp',
    width: 1536,
    height: 1024,
  },
  {
    icon: FaUser,
    color: '#C79949',
    title: 'Individuals Facing Life Transitions',
    desc: 'Supporting people experiencing loss, uncertainty, stress, change, or other significant life challenges.',
    points: ['Grief & loss support', 'Stress management', 'Life change navigation', 'Emotional wellness support'],
    image: '/updated/09_Who_We_Help_Individuals_Facing_Life_Transitions.webp',
    width: 1599,
    height: 984,
  },
];

const bottomGroups = [
  {
    icon: FaHandsHelping,
    color: '#2E5D49',
    title: 'Communities Experiencing Hardship',
    desc: 'Creating accessible programs that strengthen connection, resilience, and hope in communities impacted by adversity.',
    points: ['Community outreach', 'Resilience-building programs', 'Safe spaces & support', 'Hope & connection'],
    image: '/updated/08_Who_We_Help_Communities_Experiencing_Hardship.webp',
    width: 1414,
    height: 1112,
  },
  {
    icon: FaHeart,
    color: '#6E2839',
    title: 'Caregivers & Support Networks',
    desc: 'Providing resources and education for those who give so much of themselves to care for and support others.',
    points: ['Caregiver support', 'Self-care resources', 'Support network guidance', 'Education & encouragement'],
    image: '/updated/10_Who_We_Help_Caregivers_and_Support_Networks.webp',
    width: 1448,
    height: 1086,
  },
];
const GroupCard = ({ group }) => (
  <div className="card overflow-hidden !p-0 flex flex-col h-full">
    <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#f7f4ef]">
      <img
        src={group.image}
        alt={group.title}
        width={group.width}
        height={group.height}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 p-3">
        <div
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-xl shadow-md"
          style={{ backgroundColor: group.color, color: '#fff' }}
        >
          <group.icon size={22} />
        </div>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h4 className="mb-2 text-forest">{group.title}</h4>
      <p className="text-sm mb-3">{group.desc}</p>
      <ul className="space-y-1.5">
        {group.points.map((point, i) => (
          <li key={i} className="text-sm text-ink-soft flex items-start gap-2">
            <span className="text-gold mt-1">&bull;</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const HelpGroups = () => {
  return (
    <section className="section section--band">
      <Container>
        <div className="max-w-[720px] mx-auto mb-10 text-center">
          <h2 className="mb-0">
            We walk alongside those who need support, education, and encouragement the most.
          </h2>
        </div>

        {/* Top row — 3 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {topGroups.map((group, i) => (
            <GroupCard key={i} group={group} />
          ))}
        </div>

        {/* Bottom row — 2 wider cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {bottomGroups.map((group, i) => (
            <GroupCard key={i} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HelpGroups;
