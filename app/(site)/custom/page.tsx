import type { Metadata } from 'next';
import BrandDivider from '@/components/BrandDivider';
import EnquiryForm from '@/components/EnquiryForm';
import { site, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Custom Websites & ERP',
  description:
    'Start a custom website or ERP project with Saahvik — tell us what you need and we respond the same day.',
};

const STEPS = [
  {
    title: 'Discover',
    body: 'A short call to understand your business, users and goals — no jargon, no obligation.',
  },
  {
    title: 'Design',
    body: 'Wireframes and visual direction you approve before a single line of code is written.',
  },
  {
    title: 'Build',
    body: 'Iterative development with weekly check-ins, so there are no surprises at delivery.',
  },
  {
    title: 'Launch & Support',
    body: 'Deployment, training and ongoing support — we stay with you after go-live.',
  },
];

export default function CustomPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Custom work</span>
          <h1 className="heading-xl">Built around your business.</h1>
          <BrandDivider width={280} />
          <p className="lede" style={{ margin: '10px auto 0' }}>
            When a template isn&apos;t enough: fully custom websites and ERP
            systems, designed and engineered by {site.name}.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 48,
              alignItems: 'start',
            }}
          >
            <div>
              <span className="kicker">How it works</span>
              <h2 className="heading-md" style={{ marginBottom: 26 }}>
                From first call to go-live.
              </h2>
              <ol style={{ listStyle: 'none', display: 'grid', gap: 18 }}>
                {STEPS.map((step, i) => (
                  <li key={step.title} style={{ display: 'flex', gap: 16 }}>
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.6rem',
                        color: 'var(--gold)',
                        lineHeight: 1.2,
                        minWidth: 34,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>
                        {step.title}
                      </strong>
                      <span style={{ opacity: 0.78, fontSize: '0.95rem' }}>{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p style={{ marginTop: 30, fontSize: '0.95rem', opacity: 0.8 }}>
                Prefer to talk right away?{' '}
                <a
                  href={whatsappLink("Hi Saahvik! I'd like to discuss a custom website / ERP project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--gold-deep)', textDecoration: 'underline' }}
                >
                  Message us on WhatsApp
                </a>{' '}
                or email{' '}
                <a href={`mailto:${site.email}`} style={{ color: 'var(--gold-deep)', textDecoration: 'underline' }}>
                  {site.email}
                </a>
                .
              </p>
            </div>
            <div
              style={{
                background: '#fffdf8',
                border: '1px solid var(--line-navy)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-card)',
                padding: '38px 34px',
              }}
            >
              <h2 className="heading-md" style={{ marginBottom: 8 }}>
                Tell us about your project
              </h2>
              <p style={{ opacity: 0.75, fontSize: '0.94rem', marginBottom: 24 }}>
                We reply the same day — usually within a few hours.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
