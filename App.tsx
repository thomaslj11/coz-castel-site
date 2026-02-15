import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Tarifs from './pages/Tarifs';
import Infos from './pages/Infos';
import Histoire from './pages/Histoire';
import Contact from './pages/Contact';

import ReactGA from 'react-ga4';

// Initialize Google Analytics with a placeholder ID
// Replace 'G-XXXXXXXXXX' with your actual Measurement ID
ReactGA.initialize("G-ET1W3WZSN0");

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTracker = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <PageTracker />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="photos" element={<Photos />} />
            <Route path="tarifs" element={<Tarifs />} />
            <Route path="infos" element={<Infos />} />
            <Route path="histoire" element={<Histoire />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;