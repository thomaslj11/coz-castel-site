import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Photos: React.FC = () => {
  const photos = [
    { src: "/images/Coz Castel marée haute HD-bretagne-location.jpg", alt: "Vue de Coz Castel à marée haute", title: "Coz Castel à marée haute" },
    { src: "/images/maison-moulin-pommes-coz-castel-bretagne.jpg", alt: "Maison principale et moulin à pommes", title: "La Maison et le Moulin" },
    { src: "/images/facade maison-cz-castel-bretagne.jpg", alt: "Façade de la maison de Coz Castel", title: "Façade de la Maison" },
    { src: "/images/Terrasse-coz-castel-bretagne.jpg", alt: "Terrasse avec vue sur mer", title: "La Terrasse protégée" },
    { src: "/images/Chambre ouest lit double.jpg", alt: "Chambre Ouest avec lit double", title: "Chambre Ouest" },
    { src: "/images/Chambre ouest-2lits simples-coz-castel-bretagne.jpg", alt: "Chambre Ouest avec deux lits simples", title: "Chambre Ouest (Lits Jumeaux)" },
    { src: "/images/Chambre bleue -coz castel - bretagne.webp", alt: "Chambre Bleue", title: "La Chambre Bleue" },
    { src: "/images/chambre miliieu-coz-castel-bretagne.jpg", alt: "Chambre du Milieu", title: "Chambre du Milieu" },
    { src: "/images/chambre RDC-coz-castel-bretagne.jpg", alt: "Chambre au Rez-de-Chaussée", title: "Chambre rez-de-chaussée" },
    { src: "/images/Chambre enfant-coz-castel-bretagne.jpg", alt: "Chambre Enfant", title: "Chambre Enfant" },
    { src: "/images/salle à manger-coz-castel-bretagne.jpg", alt: "Salle à manger", title: "La Salle à Manger" },
    { src: "/images/salon-coz-castel-bretagne.jpg", alt: "Salon confortable", title: "Le Salon" },
    { src: "/images/cuisine2-coz-castel-bretagne.jpg", alt: "Cuisine équipée (vue 1)", title: "La Cuisine" },
    { src: "/images/Cuisine-coz-castel-bretagne.jpg", alt: "Cuisine équipée (vue 2)", title: "La Cuisine + coin repas" },
    { src: "/images/sdbhaut-coz-castel-bretagne.jpg", alt: "Salle de bain à l'étage", title: "Salle de Bain à l'étage" },
    { src: "/images/marée basse-coz-castel-bretagne.jpg", alt: "Paysage à marée basse", title: "Marée Basse" },
    { src: "/images/Drone - Coz Castel marée montante-bretagne.jpg", alt: "Vue drone marée montante", title: "Marée Montante (Drone)" },
    { src: "/images/Drone mur de galet-bretagne.jpg", alt: "Mur de galets vu par drone", title: "Mur de Galets" },
    { src: "/images/Couché de soleil-coz-castel-bretagne.jpg", alt: "Coucher de soleil sur Coz Castel", title: "Coucher de Soleil" },
    { src: "/images/Phare ploumanach-bretagne.jpg", alt: "Phare de Ploumanac'h", title: "Phare de Ploumanac'h" },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
  };

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && selectedIndex !== null) setSelectedIndex((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
      if (e.key === 'ArrowLeft' && selectedIndex !== null) setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, photos.length]);

  return (
    <>
      <Helmet>
        <title>Photos - Coz Castel - une île à louer en Bretagne</title>
        <meta name="description" content="Explorez Coz Castel en images : la maison principale, les chambres, le jardin et les paysages époustouflants de la Côte de Granit Rose." />
      </Helmet>
      <Hero
        title="Photos"
        subtitle="Entre terre et mer"
        image="/images/hero-photos-coz-castel-bretagne.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-[4/3] bg-gray-100"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="material-icons text-white text-4xl drop-shadow-lg">zoom_in</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reservation Button */}
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
            Réserver
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <span className="material-icons text-4xl">close</span>
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all z-50 flex items-center justify-center"
          >
            <span className="material-icons text-4xl md:text-6xl">chevron_left</span>
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
          >
            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-up"
            />
            <p className="absolute -bottom-10 left-0 right-0 text-center text-white/80 font-medium select-none">
              {photos[selectedIndex].title} ({selectedIndex + 1} / {photos.length})
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all z-50 flex items-center justify-center"
          >
            <span className="material-icons text-4xl md:text-6xl">chevron_right</span>
          </button>
        </div>
      )}

      <style>{`
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;  
        }
      `}</style>
    </>
  );
};

export default Photos;