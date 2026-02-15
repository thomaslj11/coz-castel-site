import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (Client-side immediate)
    if (formData.honeypot) {
      console.warn("Bot detected.");
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-secondary/30">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg animate-slide-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-icons text-green-500 text-5xl">check</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Message Envoyé</h2>
          <p className="text-gray-600 mb-8">Merci de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.</p>
          <button
            onClick={() => setStatus('idle')}
            className="text-primary font-bold hover:underline"
          >
            Retour au formulaire
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero
        title="Contact"
        subtitle="Écrivez-nous !"
        image="/images/hero-contact-coz-castel-bretagne.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Info Side */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-display font-bold text-primary">Une question ?</h2>
            <p className="text-gray-600 text-lg">
              Vous souhaitez en savoir plus sur les disponibilités ou l'organisation de votre séjour sur l'île de Coz Castel ? Écrivez nous.
              <br />
              Une <Link to="/infos" className="underline hover:text-primary-dark">FAQ (foire aux questions)</Link> est aussi disponible.
            </p>

            <div className="flex items-start gap-4 text-gray-700">
              <div className="bg-secondary p-3 rounded-full text-primary"><span className="material-icons">location_on</span></div>
              <div>
                <p className="font-bold">Île de Coz Castel</p>
                <p>22710 Penvénan, Bretagne</p>
              </div>
            </div>

            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.957304775212!2d-3.2913192178297943!3d48.84128908215592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48123b4e3aae1115%3A0xf4ab6af85cadd606!2s%C3%8Ele%20de%20Coz%20Castel!5e0!3m2!1sfr!2sca!4v1771116156934!5m2!1sfr!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-secondary p-8 md:p-10 rounded-2xl shadow-lg animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="visually-hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-primary focus:ring-primary py-3 px-4"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Adresse e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-primary focus:ring-primary py-3 px-4"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  className="block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-primary focus:ring-primary py-3 px-4 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
              >
                {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;