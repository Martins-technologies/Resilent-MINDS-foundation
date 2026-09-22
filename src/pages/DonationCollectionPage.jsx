import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Apple,
  Backpack,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Droplets,
  Gift,
  HandHeart,
  Heart,
  HeartHandshake,
  House,
  MapPin,
  Package,
  ShieldCheck,
  Shirt,
  Sprout,
  Truck,
  Users,
} from 'lucide-react';
import { DONATION_PICKUP_EMAIL, sendDonationPickupRequest } from '../config/donationPickupEmail';
import PageHero from '../components/layout/PageHero';
import Button from '../components/ui/Button';
import styles from './DonationCollectionPage.module.css';

/**
 * Photo slots for this page.
 * Put image files in public/donation/ and set the paths below.
 * Leave a value as '' to keep the placeholder in that frame.
 */
const PHOTOS = {
  collection: '/img1up.webp',
  delivery: '/img2up.webp',
};

const HELP_ITEMS = [
  { icon: Package, label: 'Collect donated goods from donors and organizations' },
  { icon: Truck, label: 'Transport donations to offices, storage locations or program sites' },
  { icon: MapPin, label: 'Deliver essential items to eligible beneficiaries' },
  { icon: HeartHandshake, label: 'Support community drives and outreach campaigns' },
  {
    icon: Sprout,
    label: 'Transport educational materials, hygiene products, clothing, food supplies and more',
  },
  { icon: CalendarDays, label: 'Deliver program materials to events and workshops' },
  { icon: Users, label: 'Coordinate pickups and deliveries with partners' },
  { icon: ClipboardList, label: 'Maintain collection and delivery records' },
  { icon: ShieldCheck, label: 'Ensure donations are handled safely and efficiently' },
];

const STEPS = [
  { icon: Heart, label: 'You Donate' },
  { icon: Package, label: 'We Collect' },
  { icon: Users, label: 'We Organize' },
  { icon: Truck, label: 'We Deliver' },
  { icon: Heart, label: 'Communities Benefit' },
];

const COLLECTIBLE_ITEMS = [
  { icon: Backpack, label: 'School and educational supplies' },
  { icon: Shirt, label: 'Clothing and winter essentials' },
  { icon: Droplets, label: 'Hygiene and personal-care products' },
  { icon: Apple, label: 'Non-perishable food items' },
  { icon: Gift, label: 'Care packages' },
  { icon: House, label: 'Household essentials' },
  { icon: BookOpen, label: 'Program and workshop materials' },
  { icon: HandHeart, label: 'Other approved charitable donations' },
];

function PhotoFrame({ src, label, className }) {
  if (src) {
    return <img src={src} alt={label || ''} className={`${styles.photo} ${className || ''}`} />;
  }

  return (
    <div className={`${styles.placeholder} ${className || ''}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}

function Field({ id, label, required = false, wide = false, children }) {
  return (
    <div className={`${styles.field} ${wide ? styles.span2 : ''}`}>
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className={styles.req} aria-hidden="true">
            {' '}
            *
          </span>
        ) : null}
      </label>
      {children}
    </div>
  );
}

const DonationCollectionPage = () => {
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!data.get('consent')) {
      setStatus('error');
      setStatusMessage('Please confirm that the items are approved charitable donations.');
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    try {
      await sendDonationPickupRequest({
        fullName: data.get('fullName'),
        organization: data.get('organization'),
        email: data.get('email'),
        phone: data.get('phone'),
        address: data.get('address'),
        donationType: data.get('donationType'),
        description: data.get('description'),
        quantity: data.get('quantity'),
        pickupDate: data.get('pickupDate'),
        notes: data.get('notes'),
      });
      form.reset();
      setStatus('success');
      setStatusMessage(
        'Your pickup request was sent. A member of our team will review it and contact you about availability.',
      );
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error.needsActivation
          ? `This inbox still needs a one-time activation. Check ${DONATION_PICKUP_EMAIL} for the FormSubmit activation email, open the link, then submit again.`
          : error.message || 'Something went wrong. Please try again.',
      );
    }
  };

  return (
    <article className={styles.page}>
      <PageHero image="/hero.webp" ariaLabel="Donation Collection hero" className={styles.donationHero}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link to="/get-involved">Get Involved</Link>
          <span aria-hidden="true">›</span>
          <span className={styles.crumbCurrent} aria-current="page">
            Donation Collection & Community Delivery
          </span>
        </nav>

        <span className="eyebrow block mb-5">Get Involved</span>

        <h1
          id="donation-hero-title"
          className="mb-4 font-heading font-bold text-forest leading-tight text-4xl md:text-5xl lg:text-[3.25rem]"
        >
          Donation Collection &amp;{' '}
          <span className="text-burgundy">Community Delivery</span>
        </h1>

        <p className="mb-4 font-heading italic text-burgundy text-lg md:text-xl leading-snug">
          From generous donors to stronger communities.
        </p>

        <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-8">
          At Resilient Minds Foundation, receiving a donation is only the beginning. Our goal is to
          make sure donated items reach the individuals and communities who need them most.
        </p>

        <Button variant="primary" href="#pickup-request" className="!rounded-xl">
          Request a Donation Pickup →
        </Button>
      </PageHero>

      <section className={styles.program} aria-labelledby="program-intro-title">
        <div className={styles.wrap}>
          <div className={styles.programGrid}>
            <div>
              <span className={styles.eyebrow}>Our Program</span>
              <h2 id="program-intro-title" className={styles.programTitle}>
                Connecting Generosity with Greater Impact
              </h2>
              <p className={styles.programBody}>
                Our Donation Collection &amp; Community Delivery Program helps us collect approved
                donations from individuals, businesses, community partners, fundraising campaigns,
                and designated collection locations.
              </p>
              <p className={styles.programBody}>
                Through this service, we help bridge the gap between generous donors and the people
                who can benefit from their support.
              </p>
            </div>
            <div className={styles.programPhotos}>
              <div className={styles.programFrame}>
                <PhotoFrame src={PHOTOS.collection} label="Volunteers packing donation boxes" />
              </div>
              <div className={styles.programFrame}>
                <PhotoFrame src={PHOTOS.delivery} label="Volunteers delivering care package to family" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.helpsSection} aria-labelledby="helps-title">
        <div className={styles.wrap}>
          <div className={styles.helps}>
            <h2 id="helps-title" className={styles.helpsTitle}>
              How Our Community Delivery Team Helps
            </h2>
            <div className={styles.helpsGrid}>
              {HELP_ITEMS.map((item) => (
                <div key={item.label} className={styles.helpItem}>
                  <div className={styles.iconCircle}>
                    <item.icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <p className={styles.helpLabel}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className={styles.wrap}>
          <h2 id="process-title" className={styles.processTitle}>
            From Donation to Delivery
          </h2>
          <p className={styles.processSubtitle}>A simple process. A big difference.</p>
          <div className={styles.processRow}>
            {STEPS.map((step, index) => (
              <div key={step.label} style={{ display: 'contents' }}>
                <div className={styles.step}>
                  <div className={styles.iconCircle}>
                    <step.icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <p className={styles.stepLabel}>{step.label}</p>
                </div>
                {index < STEPS.length - 1 ? (
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className={styles.processNote}>
            Our delivery activities form an important part of our charitable outreach by helping
            ensure donated resources are accessible to individuals who may otherwise face
            transportation, financial, or accessibility barriers.
          </p>
        </div>
      </section>

      <section className={styles.request} aria-labelledby="collect-title">
        <div className={styles.wrap}>
          <div className={styles.requestGrid}>
            <div>
              <h2 id="collect-title" className={styles.requestTitle}>
                Need Us to Collect Your Donation?
              </h2>
              <p className={styles.requestBody}>
                If you or your organization would like to donate approved goods but are unable to
                deliver them to us, Resilient Minds Foundation may be able to arrange a collection.
              </p>
              <p className={styles.requestBody}>
                Depending on availability, location, donation size, and program needs, our Donation
                Collection &amp; Community Delivery Team can coordinate pickup of approved items.
              </p>

              <div className={styles.itemsCard}>
                <h3 className={styles.itemsTitle}>Items We May Be Able to Collect</h3>
                <div className={styles.itemsGrid}>
                  {COLLECTIBLE_ITEMS.map((item) => (
                    <div key={item.label} className={styles.itemTile}>
                      <item.icon size={26} strokeWidth={1.75} aria-hidden="true" />
                      <p className={styles.itemLabel}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.formCard} id="pickup-request">
              <h2 className={styles.formTitle}>Request a Donation Pickup</h2>
              <p className={styles.formIntro}>
                Please complete the form below. A member of our team will review your request and
                contact you regarding availability and collection arrangements.
              </p>

              <form onSubmit={handleSubmit} noValidate={false}>
                <div className={styles.formGrid}>
                  <Field id="fullName" label="Full Name" required>
                    <input id="fullName" name="fullName" type="text" autoComplete="name" required />
                  </Field>
                  <Field id="organization" label="Organization Name (if applicable)">
                    <input id="organization" name="organization" type="text" autoComplete="organization" />
                  </Field>
                  <Field id="email" label="Email Address" required>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </Field>
                  <Field id="phone" label="Phone Number" required>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                  </Field>
                  <Field id="address" label="Pickup Address" required wide>
                    <input id="address" name="address" type="text" autoComplete="street-address" required />
                  </Field>
                  <Field id="donationType" label="Type of Donation" required>
                    <select id="donationType" name="donationType" defaultValue="" required>
                      <option value="" disabled>
                        Select an option
                      </option>
                      {COLLECTIBLE_ITEMS.map((item) => (
                        <option key={item.label} value={item.label}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="quantity" label="Approximate Quantity" required>
                    <input id="quantity" name="quantity" type="text" required />
                  </Field>
                  <Field id="description" label="Description of Items" required wide>
                    <textarea id="description" name="description" required />
                  </Field>
                  <Field id="pickupDate" label="Preferred Pickup Date" required>
                    <input id="pickupDate" name="pickupDate" type="date" required />
                  </Field>
                  <Field id="notes" label="Additional Information">
                    <input id="notes" name="notes" type="text" />
                  </Field>
                </div>

                <label className={styles.consent}>
                  <input type="checkbox" name="consent" required />
                  <span>
                    I confirm that the items are approved charitable donations and understand that
                    pickup is subject to Foundation availability and acceptance.
                  </span>
                </label>

                <button className={styles.submit} type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit Request →'}
                </button>

                {statusMessage ? (
                  <p
                    className={`${styles.status} ${status === 'success' ? styles.statusOk : styles.statusErr}`}
                    role="status"
                  >
                    {statusMessage}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DonationCollectionPage;
