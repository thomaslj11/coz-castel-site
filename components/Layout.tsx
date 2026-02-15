import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-bold border-b-2 border-primary' : 'text-gray-600 hover:text-primary transition-colors';
  };

  const navLinks = [
    { name: 'Photos', path: '/photos' },
    { name: 'Tarifs', path: '/tarifs' },
    { name: 'Infos Pratiques', path: '/infos' },
    { name: 'Histoire', path: '/histoire' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex flex-col justify-center">
              <Link to="/" className="group" onClick={() => setIsMobileMenuOpen(false)}>
                <h1 className="text-3xl font-display font-light text-primary group-hover:opacity-90 transition-opacity tracking-tight">
                  Coz Castel
                </h1>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 mt-0.5">
                  Location d'une île privée en Bretagne
                </p>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium ${isActive(link.path)}`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-primary focus:outline-none p-2"
                aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="material-icons-outlined text-3xl">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-medium text-center ${location.pathname === link.path ? 'bg-secondary text-primary' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-4">
              <Link to="/" className="block">
                <h2 className="text-3xl font-display font-light tracking-tight text-white">Coz Castel, une île en Bretagne</h2>
              </Link>
              <p className="text-blue-100 max-w-sm text-sm leading-relaxed">
                Location en Bretagne. Découvrez Coz Castel, une île privée à louer en Bretagne sur la Côte de Granit Rose. Vacances uniques en famille ou entre amis.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-end gap-6 md:gap-10 text-sm font-medium">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="hover:text-blue-200 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-blue-400/30 my-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
            <p>© 2026 Coz Castel - Tous droits réservés</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;