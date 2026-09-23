import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconFacebook from '../components/icons/IconFacebook';
import IconInstagram from '../components/icons/IconInstagram';
import IconYouTube from '../components/icons/IconYouTube';
import styles from './HomeV1Page.module.css';

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: IconFacebook },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: IconInstagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: IconYouTube },
];

const WEEK = [
  {
    day: 'Sunday',
    highlight: true,
    lines: ['Community Healing Circles', 'Safe spaces to connect, share, and grow'],
  },
  {
    day: 'Monday',
    lines: ['Meal Delivery Support', 'Meals for people who cannot cook'],
  },
  {
    day: 'Tuesday',
    lines: ['Youth Strong Program', 'Mentorship and life skills'],
  },
  {
    day: 'Wednesday',
    lines: ['Food & Essentials', 'Pantry and household supplies', 'Workplace Wellness'],
  },
  {
    day: 'Friday',
    lines: ['Family Support', 'Prepared meals and baby supplies'],
  },
  {
    day: 'Saturday',
    lines: ['Community Support', 'Food, furniture, and home essentials'],
  },
];

const STORIES = [
  {
    kind: 'quote',
    quote:
      'Resilient Minds Foundation gave me tools and encouragement when I needed them most. I feel stronger, more hopeful, and ready for what’s next.',
    by: 'Youth Program Participant',
    caption: 'Stories of Strength',
  },
  {
    kind: 'photo',
    image: '/img1up.webp',
    alt: 'Donated food and essential items packed for families',
    title: 'Community Support',
    caption: 'Meal delivery, food packing, and family assistance',
  },
  {
    kind: 'photo',
    image: '/whowehelp/family.webp',
    alt: 'A family supported through community programs',
    title: 'Family Support',
    caption: 'Meals, essentials, and a more stable home',
  },
  {
    kind: 'feature',
    title: 'Give Hope Today',
    body: 'Sponsor a program, partner with us, or donate food, meals, baby supplies, and household essentials.',
    caption: 'Ways to help',
  },
  {
    kind: 'photo',
    image: '/PROGRAME%20updated/youth.webp',
    alt: 'Young people in a mentorship program',
    title: 'Youth Programs',
    caption: 'Mentorship for a brighter tomorrow',
  },
];

const HomeV1Page = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const onNewsletter = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  };

  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-label="Volunteer">
        <img
          className={styles.heroPhoto}
          src="/friendgroup.webp"
          alt=""
        />
        <div className={styles.heroFade} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>You can make a difference today!</h1>
          <p className={styles.heroKicker}>VOLUNTEER NOW</p>
          <p className={styles.heroBody}>
            Volunteer today to support those in need. Give your time to programs,
            events, and community support — by yourself, with your friends, or
            with co-workers — and make a difference in our community.
          </p>
          <Link className={styles.heroBtn} to="/get-involved#volunteer">
            Make a Change,
            <br />
            Volunteer Now!
          </Link>
        </div>
      </section>

      <section className={styles.mission} aria-labelledby="homev1-mission">
        <div className={styles.missionCard}>
          <p className={styles.missionLabel}>OUR MISSION</p>
          <p id="homev1-mission" className={styles.missionText}>
            To empower individuals and communities by providing mental wellness
            education, emotional resilience programs, and compassionate support
            for those in need.
          </p>
          <p className={styles.motto}>STRONGER MINDS. BRIGHTER FUTURES.</p>
        </div>
      </section>

      <section className={styles.actions} aria-label="Ways to take part">
        <article className={styles.actionCard}>
          <img
            src="/img2up.webp"
            alt="A care package prepared for a household in need"
          />
          <div className={styles.actionShade} />
          <div className={styles.actionCopy}>
            <p>Community Support</p>
            <h2>Meal &amp; Family Care</h2>
            <Link className={styles.pillLight} to="/community-support">
              Volunteer Now
            </Link>
          </div>
        </article>

        <article className={`${styles.actionCard} ${styles.actionCardRight}`}>
          <img
            src="/group.jpeg"
            alt="People meeting together in a community circle"
          />
          <div className={styles.actionShadeSoft} />
          <div className={styles.actionStack}>
            <Link className={styles.pillGold} to="/get-involved#donate">
              Donate Now
            </Link>
            <Link className={styles.pillLight} to="/get-involved">
              Register Now
            </Link>
          </div>
        </article>
      </section>

      <section className={styles.weekWrap} aria-label="Weekly programs">
        <div className={styles.week}>
          {WEEK.map((item) => (
            <div
              key={item.day}
              className={`${styles.day} ${item.highlight ? styles.dayOn : ''}`}
            >
              <h3>{item.day}</h3>
              {item.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.story} aria-labelledby="homev1-story">
        <div className={styles.storyCard}>
          <img
            src="/aboutourstory.jpeg"
            alt="People connecting through support and community programs"
          />
          <div className={styles.storyCopy}>
            <p>
              Resilient Minds Foundation creates pathways of hope for people
              facing stress, loss, isolation, and uncertainty. With the principle
              that no one should face life’s challenges alone, the organization
              established its promise — Stronger Minds. Brighter Futures. — and
              began offering education, community programs, and practical support
              for those in need.
            </p>
            <p>
              We are committed to supporting the community with mental wellness
              education, family assistance, and the essentials that steady daily
              life: meals, food, baby supplies, furniture, and household items.
              With the help of volunteers, mentors, and partners, we help people
              feel heard, supported, and ready to move forward. Because resilient
              minds create stronger individuals, stronger families, and stronger
              communities.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.gallery} aria-labelledby="homev1-social">
        <h2 id="homev1-social" className={styles.handle}>
          @ResilientMinds
        </h2>
        <div className={styles.galleryRow}>
          {STORIES.map((card) => {
            if (card.kind === 'quote') {
              return (
                <article key={card.caption} className={`${styles.tile} ${styles.tileQuote}`}>
                  <span className={styles.quoteMark} aria-hidden="true">
                    “
                  </span>
                  <p>{card.quote}</p>
                  <footer>
                    <strong>{card.caption}</strong>
                    <span>— {card.by}</span>
                  </footer>
                </article>
              );
            }
            if (card.kind === 'feature') {
              return (
                <article key={card.title} className={`${styles.tile} ${styles.tileFeature}`}>
                  <p className={styles.tileKicker}>COMMUNITY SUPPORT</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <footer>
                    <span>{card.caption}</span>
                  </footer>
                </article>
              );
            }
            return (
              <article key={card.title} className={`${styles.tile} ${styles.tilePhoto}`}>
                <img src={card.image} alt={card.alt} />
                <div className={styles.tileCaption}>
                  <strong>{card.title}</strong>
                  <span>{card.caption}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.stats} aria-label="Our impact">
        <div className={styles.stat}>
          <span className={styles.statIcon} aria-hidden="true">
            <PlateIcon />
          </span>
          <h3>1,000+ people</h3>
          <p>reached through education, programs, and community support</p>
        </div>
        <div className={styles.stat}>
          <span className={`${styles.statIcon} ${styles.iconBurgundy}`} aria-hidden="true">
            <HandsIcon />
          </span>
          <h3>100+ workshops</h3>
          <p>delivered to strengthen emotional health and resilience</p>
        </div>
        <div className={styles.stat}>
          <span className={`${styles.statIcon} ${styles.iconViolet}`} aria-hidden="true">
            <FamilyIcon />
          </span>
          <h3>50+ Volunteers</h3>
          <p>belong to the Resilient Minds family</p>
        </div>
        <div className={styles.stat}>
          <span className={`${styles.statIcon} ${styles.iconGreen}`} aria-hidden="true">
            <BasketIcon />
          </span>
          <h3>Free essentials</h3>
          <p>meals, food, and supplies from our dedicated volunteers</p>
        </div>
      </section>

      <section className={styles.connect} aria-label="Stay connected">
        <div className={styles.connectCol}>
          <h2>Resilient Minds Foundation</h2>
          <p className={styles.proud}>Programs we are proud to offer</p>
          <ul>
            <li>Community Support Services</li>
            <li>Mental Wellness Support</li>
            <li>Youth &amp; Family Programs</li>
          </ul>
          <h3>Connect With Social Links</h3>
          <div className={styles.socials}>
            {SOCIAL.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={16} color="#2E5D49" />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.connectCol}>
          <h2>Sign Up For Our Newsletter</h2>
          {joined ? (
            <p className={styles.thanks}>Thank you. You are on the list for program updates.</p>
          ) : (
            <form className={styles.news} onSubmit={onNewsletter}>
              <label className={styles.sr} htmlFor="homev1-email">
                Email address
              </label>
              <input
                id="homev1-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Enter Your Email Address Here"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">SUBMIT</button>
            </form>
          )}
          <h3 className={styles.volunteerHead}>Volunteer Now</h3>
          <Link className={styles.volunteerLink} to="/get-involved#volunteer">
            <span aria-hidden="true">→</span> General Volunteer
          </Link>
        </div>
      </section>
    </article>
  );
};

function PlateIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="22" stroke="#C79949" strokeWidth="3" />
      <path d="M26 24v16M32 22v18M38 24v16" stroke="#C79949" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function HandsIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden="true">
      <path d="M20 36c0-8 6-14 12-14s12 6 12 14" stroke="#6E2839" strokeWidth="3" />
      <path d="M16 40h8l4 8h8l4-8h8" stroke="#6E2839" strokeWidth="3" strokeLinejoin="round" />
      <path d="M24 28c-4 2-8 8-8 14M40 28c4 2 8 8 8 14" stroke="#6E2839" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden="true">
      <circle cx="24" cy="22" r="6" stroke="#7A5EA7" strokeWidth="3" />
      <circle cx="40" cy="24" r="5" stroke="#7A5EA7" strokeWidth="3" />
      <circle cx="32" cy="38" r="4" stroke="#7A5EA7" strokeWidth="3" />
      <path d="M14 46c1-8 6-12 10-12s9 4 10 12M30 46c1-6 4-9 8-9s7 3 8 9" stroke="#7A5EA7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function BasketIcon() {
  return (
    <svg viewBox="0 0 64 64" width="72" height="72" fill="none" aria-hidden="true">
      <path d="M16 28h32l-3 22H19L16 28z" stroke="#3E8F62" strokeWidth="3" strokeLinejoin="round" />
      <path d="M24 28c0-6 4-12 8-12s8 6 8 12" stroke="#3E8F62" strokeWidth="3" />
      <path d="M22 36h20M21 44h22" stroke="#3E8F62" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default HomeV1Page;
