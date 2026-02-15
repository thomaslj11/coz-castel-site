import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Histoire: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const galerie = [
    { src: "/images/Coz-castel-premiere-maison.webp", alt: "coz-castel-premiere-maison" },
    { src: "/images/coz-castel-debut-XXe.webp", alt: "coz-castel-debut-XXe" },
    { src: "/images/coz-castel-1970.webp", alt: "coz-castel-1970" },
    { src: "/images/coz-castel-1990.webp", alt: "coz-castel-1990" },
    { src: "/images/Coz Castel marée haute HD-bretagne-location.webp", alt: "Coz Castel aujourd'hui" },
  ];

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < galerie.length - 1 ? prev + 1 : 0));
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galerie.length - 1));
  };

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && selectedIndex !== null) setSelectedIndex((prev) => (prev! < galerie.length - 1 ? prev! + 1 : 0));
      if (e.key === 'ArrowLeft' && selectedIndex !== null) setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galerie.length - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, galerie.length]);

  return (
    <>
      <Helmet>
        <title>L'Histoire de Coz Castel - Patrimoine Breton</title>
        <meta name="description" content="Découvrez l'histoire fascinante de Coz Castel, de poste de guet à maison de villégiature. Une âme ancrée dans la Côte de Granit Rose." />
      </Helmet>
      <Hero
        title="Histoire"
        subtitle="L'âme de Coz Castel"
        image="/images/hero-histoire.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <article className="animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                Histoire Familiale de Coz Castel
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify">
                Coz Castel a été acquis en 1967 par nos grands-parents, Louis et Nathalie. Après avoir vécu dans plusieurs villes européennes (notamment Paris et Bruxelles), ils souhaitaient retrouver leurs racines bretonnes et offrir à leurs enfants un lieu de vacances. À cette époque, la maison se composait principalement du rez-de-chaussée. Les travaux d'agrandissement ont débuté en 1974, et le moulin à pommes a été installé plus tard, en 1992.
              </p>
            </article>
            <article className="animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                Origines Historiques de l’Îlot
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify">
                L’Îlot de Coz Castel est un site d’occupation très ancien, comme l’atteste la découverte d'un atelier de silex. Le cadastre de 1834 (parcelle n° 764) montre l'existence d'une première maison d'habitation sur cet îlot côtier, qui comptait alors quatre parcelles cadastrées. Le nom nautique de la plage de sable située à l'ouest de l’îlot a été retenu sous l'appellation de « Trezenn ar C’hoz Kastell ».
              </p>
            </article>

            <article>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                Anecdotes familiales
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Littérature russe :</strong> La littérature russe occupe une place significative à Coz Castel, particulièrement au sein de la bibliothèque du bureau. Cet attachement provient de notre grand-mère, Nathalie Le Jouan, née à Moscou en 1914. Bien qu'elle ait quitté la Russie dès 1918, après la Révolution de 1917 et la fin de la Première Guerre mondiale, cette littérature lui permettait de se reconnecter avec une partie intégrante de son histoire et de ses origines. Plusieurs objets témoignent de cet héritage familial et de cet attachement : un calendrier russe, également situé dans le bureau, ainsi qu'une affiche d'exposition russe placée au bas de l'escalier.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Photos du bateau Terre-neuvas :</strong> La photo de la salle à manger est un hommage de notre grand-père à son propre père, qui était pêcheur à bord de ces navires emblématiques : les Terre-neuvas. Ces bateaux tirent leur nom de leur destination, puisqu'ils partaient pêcher la morue le long des côtes de Terre-Neuve-et-Labrador, au large du Canada, à la fin du XIXe et au début du XXe siècle. Originaires de Saint-Malo, un port d'où partaient de nombreux Terre-neuvas, notre grand-père et son père y sont nés et y ont vécu. Notre grand-père aimait raconter ses souvenirs d'enfance à Saint-Malo, ainsi que les expéditions maritimes de son père. Ces voyages duraient plusieurs mois et étaient souvent périlleux. Une violente tempête coûta d'ailleurs à son père une jambe, sectionnée par un cordage, mettant un terme définitif à sa vie de marin.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Le piano,</strong> a une histoire remarquable. Il provient du Ritz à Paris, où notre arrière-grand-père maternel exerçait les fonctions de gérant. C'est également sur ce piano que notre père a pris ses premières leçons. Au fil du temps, il a été un véritable voyageur, faisant l'aller-retour entre Paris et Bruxelles, avant de s'établir définitivement à Coz Castel.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>La carte de l’euratom et la plaque d’immatriculation belge dans la chaufferie :</strong> Ces éléments sont des vestiges de la carrière de notre grand-père, Louis, fonctionnaire européen. De 1958 à 1967, il a notamment exercé les fonctions de directeur financier de l'Euratom à Bruxelles. C'est pourquoi nous trouvons la grande carte de l'Euratom dans le couloir du deuxième étage et des plaques d'immatriculation belges dans la chaufferie.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Maquette de bateau :</strong> Achetée en juillet 2018, la maquette de bateau trônant sur la cheminée commémore un rassemblement familial important qui n'avait plus eu lieu depuis quinze ans.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Gravure de nos initiales :</strong>  Sur le dernier rocher de la jetée de l'île, du côté ouest (vers le coucher du soleil), sont gravées dans la pierre les initiales de Thomas Le Jouan ("TLJ") et d'Emeric Le Jouan ("ELJ"), ainsi que la date de gravure ("8.93" pour août 1993). Un souvenir sur cette jetée, haut lieu de pêche aux crabes à marée montante.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Coz Castel en BD :</strong> Un habitué de Coz Castel et bédéiste nous a fait l’honneur de faire apparaître Coz Castel dans l’une de ses BD. Celle-ci est d’ailleurs disponible sur place.
              </p>

              <div className="mb-12 rounded-xl overflow-hidden shadow-lg h-auto">
                <img src="https://i0.wp.com/cozcastel.fr/wp-content/uploads/2021/05/Capture-de%CC%81cran-le-2021-05-01-a%CC%80-23.54.42-min.png?resize=2048%2C824&ssl=1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Coz Castel en BD" loading="lazy" />
              </div>
            </article>

            <article>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6 border-l-4 border-accent pl-4">
                Informations sur le village de Buguélès
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                Le nom de <a href="https://fr.wikipedia.org/wiki/Bugu%C3%A9l%C3%A8s" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Buguélès</a> vient du mot Bugel ou Bugale qui veut dire enfant en breton.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                La côte naturellement préservée et au large le chapelet d’îlots sauvages a valu à Buguélès d’être remarqué parmi les plus beaux villages de France.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                De nombreux sites préhistoriques (menhirs, dolmen, etc.) présents sur les territoires des communes de Penvénan, Port-Blanc et Buguélès témoignent d’une occupation très ancienne des lieux.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                L’activité du village est liée, durant des années à celle des goémoniers. L’algue était ramassée principalement pour servir de fumier aux récoltes locales ou alors utilisée comme combustible avec de l’ajonc et encore brûlée pour en extraire l’iode et servir à l’industrie du verre ou de la médecine 3.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                Buguélès a été, en novembre 1943 et via les réseaux de résistances locaux, le théâtre d’une tentative d’évasion d’officiers, de résistants français et d’un aviateur américain vers l’Angleterre. Tentative malheureusement avortée à la suite d’une série d’événements imprévisibles. (source : wikipedia)
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Lindbergh et l’île Illiec :</strong> Cette île fut, dans un premier temps, la propriété du compositeur <a href="https://fr.wikipedia.org/wiki/Ambroise_Thomas" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ambroise Thomas</a>, puis du célèbre aviateur <a href="https://fr.wikipedia.org/wiki/Charles_Lindbergh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Charles Lindbergh</a> qui traversa le premier l’atlantique en avion entre New York et Paris en mai 1927. Charles Lindbergh quitte les États-Unis en 1935 suite à l’assassinat de son jeune fils et se rend à l’île Illiec de 1938 jusqu’au début des années 1960. Elle appartient aujourd’hui à la famille Heidsieck, les héritiers du célèbre champagne Piper-Heidsieck. Source : wikipedia
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Moulin à marée de Buguélès et Mur de Galet :</strong> L’origine du moulin à marée de Buguélès remonte à la fin du XVème siècle. Le moulin est placé au milieu d’une digue comportant deux ouvertures ou pertuis. Le premier orifice laisse entrer l’eau à marée montante, tandis que le second, sur lequel se trouve la roue à pales, la libère quand la mer redescend. Pittoresque avec son toit de tuiles rouges. Bien visible depuis la côte. Source : cote de granit rose
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                Le moulin est situé dans la continuité du sillon de galet ou mur de galet visible de Coz Castel
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Chapelle St Nicolas :</strong> Nichée sur son promontoire (le Crec’h Saint-Nicolas), au beau milieu du village de Buguélès, la chapelle Saint-Nicolas est minuscule : 15 mètres sur 5,80 mètres, et est entourée au sud et à l’ouest, par un enclos ayant contenu un cimetière, utilisé jusqu’au début du XVIIe siècle.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                La date de construction de la chapelle est totalement inconnue. Elle est dédié au culte, très ancien dans le Trégor, de saint Nicolas, patron des marins, mais aussi protecteur des enfants (Bugalé en breton, d’où le nom du village Buguélès). On y trouve notamment une magnifique maquette de trois-mâts, offert en ex-voto par deux marins de Buguélès, Yves-Marie Le Vot et Pierre Audren.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <strong>Port de Buguélès :</strong> A l’extrémité de la Presqu’île de Buguélès, le petit port séduit par son calme et son environnement pittoresque. Il a un capacité de 140 places. La profonde baie de Gouermel donne l’impression d’un lac intérieur. Au large, on peut observer un archipel de petites îles ( Baelaneg, Ile du Milieu, Saint-Gildas…).
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-sans text-justify mb-6">
                <a href="https://www.festivaldebugueles.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Le Festival du Buguélès</a> est un festival de musique bisannuel se déroulant fin juillet. Le domaine protégé de la presqu’île de Buguélès oblige l’événement à conserver une taille humaine tout en faisant venir des artistes reconnus dans des conditions professionnelles.
              </p>
            </article>
          </div >

          {/* Sidebar Images */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {galerie.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg h-64 md:h-72 cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox(idx)}
              >
                <img src={item.src} className="w-full h-full object-cover" alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>

        </div >
      </div >

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
              src={galerie[selectedIndex].src}
              alt={galerie[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-up"
            />
            <p className="absolute -bottom-10 left-0 right-0 text-center text-white/80 font-medium select-none">
              {galerie[selectedIndex].alt} ({selectedIndex + 1} / {galerie.length})
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

export default Histoire;