import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Tarifs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tarifs - Coz Castel - une île à louer en Bretagne</title>
        <meta name="description" content="Consultez nos tarifs de location pour l'île de Coz Castel. Basse, moyenne et haute saison. Réservez votre séjour en Bretagne." />
      </Helmet>
      <Hero
        title="Tarifs"
        subtitle="Nos offres de séjour"
        image="/images/hero-tarifs-coz-castel-bretagne.jpg"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Table */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 mb-16 animate-slide-up">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-5 px-6 text-left font-display font-semibold uppercase tracking-wider text-sm w-1/4">Saison</th>
                  <th className="py-5 px-6 text-left font-display font-semibold uppercase tracking-wider text-sm w-1/4">Date</th>
                  <th className="py-5 px-6 text-center font-display font-semibold uppercase tracking-wider text-sm w-1/4">Par semaine</th>
                  <th className="py-5 px-6 text-center font-display font-semibold uppercase tracking-wider text-sm w-1/4">Par nuit *</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-gray-800 flex items-center gap-2">
                    <span className="material-icons text-blue-300">wb_sunny</span> Basse Saison
                  </td>
                  <td className="py-6 px-6 text-gray-600">1 novembre au 30 avril (hors période de Noël)</td>
                  <td className="py-6 px-6 text-center text-primary font-bold">1 650 €</td>
                  <td className="py-6 px-6 text-center text-gray-800">250 €</td>
                </tr>
                <tr className="bg-orange-50/50 hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-primary flex items-center gap-2">
                    <span className="material-icons text-accent">wb_sunny</span> Haute Saison
                  </td>
                  <td className="py-6 px-6 text-gray-600">1 mai au 31 octobre</td>
                  <td className="py-6 px-6 text-center text-primary font-bold text-lg">1 900 €</td>
                  <td className="py-6 px-6 text-center text-gray-800">290 €</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-6 px-6 font-bold text-gray-800 flex items-center gap-2">
                    <span className="material-icons text-green-700">park</span> Période de Noël
                  </td>
                  <td className="py-6 px-6 text-gray-600">15 décembre au 15 janvier</td>
                  <td className="py-6 px-6 text-center text-primary font-bold">1 900 €</td>
                  <td className="py-6 px-6 text-center text-gray-800">290 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 italic">* Minimum 2 nuits</p>
          </div>
        </div>

        {/* Details & Options */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary">
            <h3 className="text-xl font-display font-bold text-primary mb-2 flex items-center gap-2">
              <span className="material-icons">hotel</span> Options & Services
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Les draps de lits et serviettes ne sont pas fournis dans la location. Vous pouvez en louer aux tarifs suivants :
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span>Draps double (par lit)</span>
                <span className="font-bold text-gray-800">30 €</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span>Draps simple (par lit)</span>
                <span className="font-bold text-gray-800">25 €</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span>Serviette (par pers.)</span>
                <span className="font-bold text-gray-800">7 €</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span>Forfait ménage (sur demande)</span>
                <span className="font-bold text-gray-800">150 €</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Conditions de réservation</h3>
            <p className="text-gray-600">
              Un acompte de 30% est demandé à la réservation, le solde étant dû 30 jours avant votre arrivée. Une caution de 600€ sera demandée à l'arrivée.
            </p>
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-lg font-bold text-white transition-all bg-primary rounded-full shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1">
                Demander une réservation <span className="material-icons ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Tarifs;