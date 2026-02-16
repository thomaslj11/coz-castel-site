import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Coz Castel - Location Bretagne. Location d'une île privée en Bretagne</title>
        <meta name="description" content="Location en Bretagne. Découvrez Coz Castel, une île privée à louer en Bretagne sur la Côte de Granit Rose. Vacances uniques en famille ou entre amis." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "VacationRental",
              "name": "Coz Castel",
              "description": "Une île privée à louer en Bretagne sur la Côte de Granit Rose.",
              "image": "https://cozcastel.fr/images/Coz-castel-bretagne-location-ile.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Île de Coz Castel",
                "addressLocality": "Penvénan",
                "postalCode": "22710",
                "addressRegion": "Bretagne",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.8413",
                "longitude": "-3.2913"
              },
              "url": "https://cozcastel.fr",
              "telephone": "+33123456789",
              "priceRange": "$$$"
            }
          `}
        </script>
      </Helmet>
      <Hero
        title="Coz Castel"
        subtitle="Une île en Bretagne. location Bretagne"
        image="/images/Coz-castel-bretagne-location-ile.jpg"
        heightClass="h-[calc(80vh-195px)]"
        hideContent={true}
        disableZoom={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 md:pt-11 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-display font-light text-primary leading-tight tracking-tight">
              Coz Castel, une île en Bretagne.
            </h1>
            <div className="prose prose-lg text-gray-600 max-w-none space-y-6 leading-relaxed font-sans">
              <p>
                Découvrez <strong>Coz Castel</strong>, une île privée à louer en Bretagne située sur la célèbre « Côte de Granit Rose » dans les Côtes d'Armor (22). Notre maison de vacances est un lieu calme, protégé et unique pour des vacances en famille ou entre amis.
              </p>
              <p>
                Située à 200 mètres du continent, l'île de Coz Castel est accessible en voiture à marée basse. À marée haute, l'île est entièrement entourée par la mer pendant 2 à 4 heures, offrant une véritable expérience insulaire. Une semaine par mois, lors des mortes-eaux, l'île reste accessible en voiture ou à pied toute la journée.
              </p>
              <p>
                Notre maison de location bretonne peut accueillir jusqu'à 10 personnes, avec ses 5 chambres confortables et ses équipements complets : cuisine équipée, électroménager, TV, WIFI, vaisselle. Vous serez également à proximité de nombreux sites touristiques bretons, de commerces et activités de loisirs.
              </p>
            </div>

            <div className="bg-secondary/50 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-primary font-medium flex items-start gap-3">
                <span className="material-icons text-accent">tips_and_updates</span>
                <span>Une question ? Consultez notre <Link to="/infos" className="underline hover:text-primary-dark">FAQ</Link> ou <Link to="/contact" className="underline hover:text-primary-dark">contactez-nous</Link>, nous serons ravis de vous aider !</span>
              </p>
            </div>

            <div className="pt-4">
              <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
                Réserver
              </Link>
            </div>
          </div>

          {/* Images / Visuals */}
          <div className="flex flex-col gap-8 max-w-md mx-auto lg:mx-0 w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg relative group h-64 md:h-80 w-full transform transition hover:scale-[1.02] duration-500">
              <img
                src="/images/carte-bretagne-location.webp"
                alt="Carte Localisation"
                loading="lazy"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl relative group h-64 md:h-80 w-full transform transition hover:scale-[1.02] duration-500 delay-100">
              <img
                src="/images/maison-moulin-pommes-coz-castel-bretagne.jpg"
                alt="Maison Coz Castel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;