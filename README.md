# Reconnaissance Vocale avec TypeScript

Ce projet est une application de reconnaissance vocale développée en TypeScript. Il utilise l'API Web Speech pour transcrire la parole en texte en temps réel. Le projet est conçu pour être facile à utiliser, modulaire et extensible.

## Fonctionnalités

- **Reconnaissance vocale en temps réel** : Transcription de la parole en texte.
- **Prise en charge de plusieurs langues** : Configuration facile pour différentes langues.
- **Interface utilisateur simple** : Affichage du texte transcrit en temps réel.
- **TypeScript** : Code fortement typé pour une meilleure maintenabilité.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gestionnaire de paquets)

## Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/votre-utilisateur/reconnaissance-vocale-typescript.git
   cd reconnaissance-vocale-typescript

   Installer les dépendances :

bash
Copy
npm install
ou

bash
Copy
yarn install
Démarrer l'application :

bash
Copy
npm start
ou

bash
Copy
yarn start
L'application sera disponible à l'adresse http://localhost:3000.

Utilisation
Autoriser l'accès au microphone : Lorsque vous ouvrez l'application, le navigateur vous demandera l'autorisation d'accéder à votre microphone. Cliquez sur "Autoriser".

Parlez : Une fois l'autorisation accordée, commencez à parler. Le texte transcrit apparaîtra en temps réel à l'écran.

Changer la langue : Vous pouvez changer la langue de reconnaissance vocale en modifiant la configuration dans le fichier src/config.ts.

Structure du projet
Copy
reconnaissance-vocale-typescript/
├── public/                  # Fichiers statiques (HTML, images, etc.)
├── src/                     # Code source de l'application
│   ├── components/          # Composants React
│   ├── hooks/               # Hooks personnalisés
│   ├── utils/               # Utilitaires et helpers
│   ├── App.tsx              # Composant principal
│   ├── index.tsx            # Point d'entrée de l'application
│   └── config.ts            # Configuration de l'application
├── package.json             # Dépendances et scripts
├── tsconfig.json            # Configuration TypeScript
└── README.md                # Documentation du projet