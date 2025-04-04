# 🎤💬 Voicify - La magie de la parole en texte !

[![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?logo=open-source-initiative)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?logo=github)](https://github.com/yourusername/voicify/pulls)

Transformez votre voix en texte en un clic ! Une application web moderne de reconnaissance vocale développée en TypeScript.

![Demo Animation](https://example.com/path/to/your/demo.gif) <!-- Remplacez par votre gif -->

## ✨ Fonctionnalités qui vont vous souffler

- **🎙️ Transcription en direct** - Parlez, on écrit !
- **🌍 20+ langues supportées** - Parlez comme un local
- **📝 Export facile** - Copiez votre texte en un clic
- **⚡ Performant** - Léger et rapide
- **🔌 API moderne** - Utilisation de la Web Speech API

## 🚀 Démarrage express

```bash
# 1. Clonez le projet
git clone https://github.com/yourusername/voicify.git
cd voicify

# 2. Installez les dépendances
npm install  # ou yarn si vous préférez

# 3. Lancez l'application
npm start
```
 ## Ouvrez http://localhost:3000 et commencez à parler !

# 🎮 Mode d'emploi

- **Cliquez sur le micro 🎤**
- **Parlez clairement (comme à Siri ou Alexa)**
- **Admirez le texte qui apparaît comme par magie !**
- **Copiez ou sauvegardez votre transcription**

# 🏗️ Architecture du projet

voicify/
├── public/          # Fichiers statiques
│   └── index.html   # Point d'entrée HTML
├── src/             # Code source magique
│   ├── assets/      # Images, polices
│   ├── components/  # Briques UI
│   ├── hooks/       # Custom hooks
│   ├── styles/      # CSS/SCSS
│   ├── types/       # Définitions TypeScript
│   ├── utils/       # Helpers
│   ├── App.tsx      # Composant principal
│   └── index.tsx    # Point d'entrée JS
├── package.json     # Dépendances
└── tsconfig.json    # Config TypeScript
