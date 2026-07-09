import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';
import BrandDivider from './BrandDivider';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <BrandDivider color="rgba(201,166,108,0.5)" width={260} />
        <div className="site-footer__grid" style={{ marginTop: 36 }}>
          <div>
            <div className="site-footer__wordmark">
              Saahvi<span>k</span>
            </div>
            <p className="site-footer__tagline">{site.tagline}</p>
            <p style={{ opacity: 0.75, fontSize: '0.94rem', maxWidth: '36ch' }}>
              Websites, custom ERP systems, and the upcoming Saahvik Hostel
              Management Software — built for the business of hospitality.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/templates">Template Marketplace</Link></li>
              <li><Link href="/custom">Custom Websites &amp; ERP</Link></li>
              <li><Link href="/coming-soon">Hostel Management SaaS</Link></li>
              <li><Link href="/tiers/10">Masterpiece Collection</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                {site.founder} — {site.founderTitle}
              </li>
              <li>
                <a href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={whatsappLink('Hi Saahvik! I would like to know more about your services.')} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Websites · ERP · Hostel Management</span>
        </div>
      </div>
    </footer>
  );
}
