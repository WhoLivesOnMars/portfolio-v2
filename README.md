# Portfolio — Daria

Site portfolio développeur, inspiré de la structure de gusta.studio.

## Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- React Router (pages)
- react-three-fiber + drei (scène 3D dans le hero)

## Démarrer en local

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:5173

## Build de production

```bash
npm run build
```

Les fichiers seront générés dans `dist/`.

## Structure

```
src/
  components/      → composants réutilisables (Hero, ProjectCard, Skills...)
  layout/           → Header, Footer, Layout général
  pages/            → Home, Projects, ProjectDetail, Services, About, Contact
  data/content.js   → tous les textes : projets, compétences, formation, expérience
  three/HeroScene.jsx → la scène 3D du hero (chargée en lazy loading)
```

## Personnaliser le contenu

Tout le texte (projets, compétences, formations, expériences) est centralisé
dans `src/data/content.js`. C'est le premier fichier à modifier pour
remplacer les exemples par tes vrais projets et infos.

Les images sont actuellement remplacées par des blocs de couleur
(`bg-deep`, `bg-accent`, `bg-mint`, `bg-ink` dans `ProjectCard.jsx` et
`ProjectDetail.jsx`) — à remplacer par de vraies images/captures d'écran
quand tu les auras.

## Page non encore connectée

Le formulaire de contact (`src/pages/Contact.jsx`) affiche actuellement un
message de succès simulé. Il faudra le connecter à un service d'envoi
d'email (ex: Formspree, EmailJS, ou un backend) avant la mise en ligne.
