import type { Metadata } from 'next';
import BrandDivider from '@/components/BrandDivider';
import WaitlistForm from '@/components/WaitlistForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Saahvik Hostel Management Software — Coming Soon',
  description:
    'Join the waitlist for Saahvik Hostel Management Software: bookings, beds, billing, mess, staff and insights in one platform.',
};

const MODULES = [
  { title: 'Bookings & Admissions', body: 'Enquiry to allotment in minutes, with a digital paper trail.' },
  { title: 'Beds & Occupancy', body: 'Live floor, room and bed availability — no more registers.' },
  { title: 'Billing & Dues', body: 'Automated rent cycles, receipts, late-fee rules and reminders.' },
  { title: 'Mess Management', body: 'Menus, headcounts and consumption without the guesswork.' },
  { title: 'Staff & Roles', body: 'Wardens, managers and owners each see exactly what they need.' },
  { title: 'Reports & Insights', body: 'Occupancy, collections and trends — in real time, on any device.' },
];

export default function ComingSoonPage() {
  return (
    <>
      <section className="section section--dark coming-soon" style={{ paddingTop: 110 }}>
        <div className="container center">
          <span className="coming-soon__badge">Coming Soon</span>
          <h1 className="heading-xl">Saahvik Hostel Management Software</h1>
          <p
            className="hero__tagline"
            style={{ margin: '18px auto 8px', textAlign: 'center' }}
          >
            {site.tagline}
          </p>
          <BrandDivider width={280} />
          <p className="lede" style={{ margin: '14px auto 40px' }}>
            One platform for everything your hostel runs on — built by the team
            that builds hostel websites and ERPs every day. Join the waitlist
            and be first in when we open the doors.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="center">
            <span className="kicker">What&apos;s inside</span>
            <h2 className="heading-lg">Every module your hostel needs.</h2>
            <BrandDivider color="var(--gold-deep)" width={260} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 22,
              marginTop: 46,
            }}
          >
            {MODULES.map((m) => (
              <article
                key={m.title}
                style={{
                  background: '#fffdf8',
                  border: '1px solid var(--line-navy)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-card)',
                  padding: '30px 28px',
                }}
              >
                <h3 className="heading-md" style={{ fontSize: '1.15rem', marginBottom: 8 }}>
                  {m.title}
                </h3>
                <p style={{ opacity: 0.78, fontSize: '0.95rem' }}>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
