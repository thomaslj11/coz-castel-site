# Coz Castel - Site Web

Bienvenue sur le dépôt du site web de **Coz Castel**, une île privée à louer en Bretagne sur la Côte de Granit Rose.

Ce projet est un site vitrine moderne et responsive conçu pour présenter la propriété, son histoire, ses tarifs et permettre la prise de contact.

## 🌟 Fonctionnalités

*   **Design Responsive & Moderne** : Interface fluide adaptée aux mobiles, tablettes et ordinateurs.
*   **Galerie Photos** : Lightbox interactive pour visualiser les images de la propriété en haute qualité.
*   **Pages d'Information** :
    *   **Accueil** : Présentation générale et mise en avant des atouts.
    *   **Histoire** : Récit historique de l'île.
    *   **Infos & Tarifs** : Détails pratiques, équipements et grille tarifaire.
    *   **Contact** : Formulaire et coordonnées.
*   **SEO Optimisé** : Gestion des méta-données avec `react-helmet-async` pour le référencement.
*   **Navigation Fluide** : Utilisation de `react-router-dom` pour une expérience utilisateur sans rechargement de page.

## 🛠️ Stack Technique

Le projet est construit avec les technologies suivantes :

*   **[React](https://reactjs.org/)** (v18) : Bibliothèque JavaScript pour l'interface utilisateur.
*   **[Vite](https://vitejs.dev/)** : Outil de build ultra-rapide et serveur de développement.
*   **[TypeScript](https://www.typescriptlang.org/)** : Superset typé de JavaScript pour un code plus robuste.
*   **[Tailwind CSS](https://tailwindcss.com/)** : Framework CSS utilitaire pour le styling.
*   **Node.js** : Environnement d'exécution JavaScript.

## 🚀 Installation et Lancement

Pour lancer le projet localement sur votre machine :

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée) installé.

### Étapes

1.  **Cloner le dépôt** (si ce n'est pas déjà fait) :
    ```bash
    git clone https://github.com/votre-utilisateur/coz-castel-site.git
    cd coz-castel-site
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    Le site sera accessible à l'adresse indiquée dans le terminal (généralement `http://localhost:5173`).

4.  **Construire pour la production** :
    ```bash
    npm run build
    ```
    Les fichiers compilés seront générés dans le dossier `dist`.

## 📂 Structure du Projet

```
coz-castel-site/
├── public/              # Fichiers statiques (images, favicon, etc.)
├── src/
│   ├── components/      # Composants Réutilisables (Header, Footer, Hero...)
│   ├── pages/           # Composants de Pages (Home, Histoire, Contact...)
│   ├── App.tsx          # Point d'entrée de l'application React
│   ├── index.css        # Styles globaux et configuration Tailwind
│   └── main.tsx         # Montage de l'application
├── index.html           # Document HTML principal
├── package.json         # Dépendances et scripts
├── tailwind.config.js   # Configuration Tailwind CSS
├── tsconfig.json        # Configuration TypeScript
└── vite.config.ts       # Configuration Vite
```

---
*Développé pour Coz Castel.*
