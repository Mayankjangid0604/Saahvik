import Link from 'next/link';
import Monogram from './Monogram';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Saahvik home">
          <Monogram size={36} transparent />
          <span className="site-header__wordmark">
            Saahvi<span>k</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/#services">Services</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/coming-soon">Coming Soon</Link>
          <Link href="/custom" className="site-nav__cta">
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
