import { useState, useEffect } from 'react';
import HomePage from '@/landing/pages/HomePage';
import PlatformPage from '@/landing/pages/PlatformPage';
import PricingPage from '@/landing/pages/PricingPage';
import AboutPage from '@/landing/pages/AboutPage';
import ContactPage from '@/landing/pages/ContactPage';
import PrivacyPage from '@/landing/pages/PrivacyPage';
import TermsPage from '@/landing/pages/TermsPage';

export default function LandingApp() {
  const [hash, setHash] = useState(window.location.hash || '#/landing');

  useEffect(() => {
    const handler = () => setHash(window.location.hash || '#/landing');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  if (hash === '#/platform') return <PlatformPage />;
  if (hash === '#/pricing')  return <PricingPage />;
  if (hash === '#/about')    return <AboutPage />;
  if (hash === '#/contact')  return <ContactPage />;
  if (hash === '#/privacy')  return <PrivacyPage />;
  if (hash === '#/terms')    return <TermsPage />;
  return <HomePage />;
}
