import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';
import ImgPlaceholder from '../ui/ImgPlaceholder';

const FeaturedResources = () => {
  const resources = [
    { tag: 'Article', title: 'Building Emotional Resilience', desc: 'Simple steps to strengthen your mind and navigate stress with confidence.', link: 'Read More →', caption: 'Person journaling at a desk' },
    { tag: 'Guide', title: 'Self-Care Guide', desc: 'A practical guide to daily habits that support your mental and emotional well-being.', link: 'Download Guide →', caption: 'Self-care guide booklet' },
    { tag: 'Tool', title: 'Mindfulness Worksheet', desc: 'A simple worksheet to help you stay present, manage anxiety, and reduce overwhelm.', link: 'Use Worksheet →', caption: 'Worksheet and pen on a desk' },
    { tag: 'Video', title: 'Understanding Stress & How to Manage It', desc: 'Watch our expert-led webinar on understanding stress and building coping skills.', link: 'Watch Now →', caption: 'Presenter speaking during a webinar' },
    { tag: 'Support', title: 'Where to Get Help', desc: 'A list of trusted hotlines, organizations, and local resources for support.', link: 'View Resources →', caption: 'Hands holding a supportive note card' },
  ];

  return (
    <section id="featured-resources" className="section">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow>Featured Resources</Eyebrow>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {resources.map((res, index) => (
            <div key={index} className="card overflow-hidden p-0">
              <ImgPlaceholder minHeight="120px" className="rounded-none">
                {res.caption}
              </ImgPlaceholder>
              <div className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{res.tag}</span>
                <h4 className="text-sm mt-1 mb-1.5">{res.title}</h4>
                <p className="text-xs text-ink-soft mb-2">{res.desc}</p>
                <span className="text-xs font-bold text-burgundy">{res.link}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedResources;
