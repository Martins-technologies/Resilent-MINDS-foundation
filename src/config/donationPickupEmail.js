/**
 * Inbox that receives every Donation Pickup Request.
 *
 * Change this to the Foundation info address when you go live.
 * Example: export const DONATION_PICKUP_EMAIL = 'info@resilientmindsfoundation.org';
 *
 * How mail is sent:
 * The form posts to FormSubmit (https://formsubmit.co), which delivers the
 * message to the address above. The first time a new address is used,
 * FormSubmit emails that inbox a one-time "Activate Form" link. Open it once.
 * After that, every submission arrives in this inbox with Reply-To set to the donor.
 */
export const DONATION_PICKUP_EMAIL = 'info@resilientmindsfoundation.ca';

const CONSENT_TEXT =
  'Yes. The donor confirms the items are approved charitable donations and understands that pickup is subject to Foundation availability and acceptance.';

function display(value) {
  const text = typeof value === 'string' ? value.trim() : '';
  return text || 'Not provided';
}

function formatPickupDate(value) {
  if (!value) return 'Not specified';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export async function sendDonationPickupRequest(fields) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${DONATION_PICKUP_EMAIL}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `Donation Pickup Request — ${fields.fullName.trim()}`,
        _template: 'box',
        _captcha: 'false',
        _replyto: fields.email.trim(),
        _honey: '',
        'Foundation Program': 'Donation Collection & Community Delivery',
        'Full Name': fields.fullName.trim(),
        'Organization Name': display(fields.organization),
        'Email Address': fields.email.trim(),
        'Phone Number': fields.phone.trim(),
        'Pickup Address': fields.address.trim(),
        'Type of Donation': fields.donationType,
        'Description of Items': fields.description.trim(),
        'Approximate Quantity': fields.quantity.trim(),
        'Preferred Pickup Date': formatPickupDate(fields.pickupDate),
        'Additional Information': display(fields.notes),
        'Donor Consent': CONSENT_TEXT,
      }),
    },
  );

  const data = await response.json().catch(() => ({}));
  const failed = !response.ok || data.success === false || data.success === 'false';

  if (failed) {
    const message = data.message || 'Unable to send your request. Please try again.';
    const error = new Error(message);
    error.needsActivation = /activat/i.test(message);
    throw error;
  }

  return data;
}
