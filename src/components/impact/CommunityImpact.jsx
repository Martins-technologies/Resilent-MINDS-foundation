import Container from '../ui/Container';
import IconPeople from '../icons/IconPeople';
import IconCalendar from '../icons/IconCalendar';
import IconHandshake from '../icons/IconHandshake';
import IconVolunteer from '../icons/IconVolunteer';

const items = [
  {
    Icon: IconPeople,
    bg: '#2E5D49',
    label: 'People Supported',
  },
  {
    Icon: IconCalendar,
    bg: '#6E2839',
    label: 'Workshops Delivered',
  },
  {
    Icon: IconHandshake,
    bg: '#C79949',
    label: 'Communities Reached',
  },
  {
    Icon: IconVolunteer,
    bg: '#2E5D49',
    label: 'Volunteers Engaged',
  },
];

const CommunityImpact = () => {
  return (
    <section className="section section--band pt-0">
      <Container>
        <div className="text-center mb-10">
          <h2 className="mb-1">Community Impact</h2>
          <p className="mb-0">Measured across our programs and outreach.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ Icon, bg, label }) => (
            <div key={label} className="card text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: bg }}
              >
                <Icon size={28} color="#ffffff" strokeWidth={1.6} />
              </div>
              <h5 className="text-sm mb-0 font-bold">{label}</h5>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CommunityImpact;
