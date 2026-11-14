/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { MotionConfig } from 'motion/react';
import { PageId } from './data/preschoolContent';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { HomeOverviewStrip } from './components/HomeOverviewStrip';
import { AboutUsPage } from './components/AboutUsPage';
import { ProgramsSection } from './components/ProgramsSection';
import { PedagogySection } from './components/PedagogySection';
import { InitiativesSection } from './components/InitiativesSection';
import { GallerySection } from './components/GallerySection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { AwardsCarousel } from './components/AwardsCarousel';
import { Footer } from './components/Footer';

const VALID_PAGES: PageId[] = ['home', 'about', 'services', 'gallery', 'social', 'contact'];

function getPageFromHash(): PageId {
  if (typeof window === 'undefined') return 'home';
  const rawHash = window.location.hash.replace(/^#/, '').toLowerCase() as PageId;
  return VALID_PAGES.includes(rawHash) ? rawHash : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = useCallback((page: PageId) => {
    setActivePage(page);
    if (typeof window !== 'undefined') {
      const nextHash = `#${page}`;
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FFFEFA] text-slate-900 overflow-x-clip">
        <Navbar activePage={activePage} onNavigate={handleNavigate} />

        <main className="flex-1">
          {activePage === 'home' && (
            <>
              <HeroSection onNavigate={handleNavigate} />
              <ProgramsSection onNavigate={handleNavigate} showPageHeader={false} />
              <WhyChooseSection />
              <HomeOverviewStrip onNavigate={handleNavigate} />
            </>
          )}

          {activePage === 'about' && <AboutUsPage onNavigate={handleNavigate} />}

          {activePage === 'services' && (
            <>
              <ProgramsSection onNavigate={handleNavigate} />
              <PedagogySection />
              <InitiativesSection onNavigate={handleNavigate} />
            </>
          )}

          {activePage === 'gallery' && <GallerySection onNavigate={handleNavigate} />}

          {activePage === 'social' && <SocialMediaSection onNavigate={handleNavigate} />}

          {activePage === 'contact' && <AdmissionsSection />}
        </main>

        <AwardsCarousel onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
      </div>
    </MotionConfig>
  );
}
