import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps & { id: string }> = ({ question, answer, isOpen, onClick, id }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm mb-4 transition-all duration-300 hover:shadow-md">
    <button
      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:bg-gray-50 bg-white"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={id}
      id={`accordion-button-${id}`}
    >
      <span className={`font-bold text-lg ${isOpen ? 'text-primary' : 'text-gray-800'}`}>{question}</span>
      <span className={`material-icons text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
    </button>
    <div
      id={id}
      role="region"
      aria-labelledby={`accordion-button-${id}`}
      className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
    >
      <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
        {answer}
      </div>
    </div>
  </div>
);

const Infos: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    { icon: 'wifi', title: 'Wifi', desc: 'Internet inclus' },
    { icon: 'directions_car', title: 'Parking', desc: 'Stationnement sur place' },
    { icon: 'groups', title: 'Capacité', desc: '10 personnes (5 chambres)' },
    { icon: 'kitchen', title: 'Cuisine', desc: 'Toute équipée' },
    { icon: 'pets', title: 'Animaux', desc: 'Bienvenus sous conditions' },
    { icon: 'thermostat', title: 'Chauffage', desc: 'Chauffage central' },
    { icon: 'local_laundry_service', title: 'Buanderie', desc: 'Lave-linge' },
    { icon: 'schedule', title: 'Horaires', desc: 'Arrivée 17h / Départ 12h' },
  ];

  const faqs = [
    { q: "Comment accède-t-on à l'île ?", a: "L'île est accessible en voiture la majorité de la journée. À marée haute, l'île est entourée pendant environ 2 à 4 heures selon le coefficient. Une barque à rames est disponible si vous devez quitter l'île pendant la marée haute. " },
    { q: "Est-il possible de stationner sur Coz Castel ?", a: "oui. Plusieurs voitures peuvent stationner sur Coz Castel." },
    { q: "Les draps sont-ils fournis avec la location ?", a: "Vous devez apporter vos propres draps et serviettes. Sinon, vous pouvez aussi louer le linge de maison sur demande (voir la page des tarifs)." },
    { q: "Le ménage est-il inclus dans la location ?", a: "Non. Vous pouvez faire appel à un service de ménage. Des frais de 150 € s’appliquent. La maison doit être restituée dans l’état de propreté dans lequel vous l’avez trouvée afin de garantir une hygiène parfaite à chaque locataire." },
    { q: "Peut-on venir avec son chien ?", a: "Oui, les animaux sont les bienvenus sous conditions. Merci de nous contacter pour plus d’informations." },
    { q: "Y a-t-il des commerces à proximité?", a: "Oui. À Penvenan, à 10 minutes en voiture, vous trouverez tous les services et commerce : boulangerie, supérette, Hypermarché, marché (samedi matin)..." },
    { q: "Comment fonctionnent les marées ?", a: "Coz Castel est accessible en voiture ou à pied la majorité du temps. Elle est entourée à marée haute. Pour calculer les heures de passage en voiture vers le continent ou l’île, il faut consulter l’heure de la pleine mer et ajouter ou retirer environ 1h30 à 2h à cette heure (ex : avec un coefficient de 90, si la pleine mer est à 18h, on peut passer en voiture avant 16h et à partir de 20h). Jusqu’à un coefficient de 55, l’île n’est pas totalement entourée (période de “mortes eaux”) et le passage en voiture est possible toute la journée. Pour connaître les horaires et les coefficients consultez https://maree.info/" },
    { q: "Faut-il verser un dépôt de garantie ?", a: "Oui, il y a un dépôt de garantie de 600 euros pour toutes les locations. Celui-ci est restitué à la fin de la location si l’inventaire ne révèle pas de problème." },
    { q: "Est-il possible d’installer des tentes sur le terrain pour accueillir plus de monde pendant la location ?", a: "Non, il n’est pas possible d’installer des tentes sur le terrain pour accueillir plus de monde pendant la location." },
    { q: "Est-il possible de faire des barbecues sur Coz Castel ?", a: "NON 🚫 Les barbecues sont interdits sur Coz Castel. C’est un règlement pour toute la côte du fait des risques d’incendies." },
    { q: "Est-ce que la location est pour la totalité de l’île ? Il y a une deuxième maison sur les photos.", a: "Vous serez seuls sur Coz Castel. Il y a une autre petite maison mais elle n’est pas accessible à la location et n’est pas habitée." },
    { q: "Est-ce qu’il y a un bateau ou une barque à Coz Castel ?", a: "Oui. Il y a une barque et des rames dans le cagibi si vous devez quitter l’île et que la mer entoure Coz Castel." },
    {
      q: "Quels sont les liens utiles pour en savoir plus sur la région ?",
      a: (
        <>
          <a href="https://www.tourismebretagne.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tourisme Bretagne</a>,{' '}
          <a href="http://www.bretagne-cotedegranitrose.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Office de tourisme de la côte de granit rose</a>,{' '}
          <a href="https://www.france-voyage.com/guide/cotes-d-armor-departement.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">France voyage côtes d’Armor</a>
        </>
      )
    },
  ];

  return (
    <>
      <Helmet>
        <title>Infos Pratiques & FAQ - Coz Castel - Une île à louer en Bretagne</title>
        <meta name="description" content="Tout savoir pour préparer votre séjour à Coz Castel : accès, équipements, horaires et questions fréquentes." />
      </Helmet>
      <Hero
        title="Infos Pratiques"
        subtitle="Préparer votre séjour"
        image="/images/hero-infos-coz-castel-bretagne.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Services Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold text-primary mb-4">Équipements</h3>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {services.map((item, idx) => (
            <div key={idx} className="bg-secondary p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                <span className="material-icons">{item.icon}</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-display font-bold text-primary mb-4">Questions Fréquentes</h3>
            <p className="text-gray-600">Tout ce qu'il faut savoir sur la vie insulaire.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                id={`faq-${idx}`}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === idx}
                onClick={() => toggleAccordion(idx)}
              />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Infos;