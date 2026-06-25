# Daria KHANINA — Portfolio

Site portfolio personnel développé en React.

🔗 [wholivesonmars.github.io/portfolio-v2](https://wholivesonmars.github.io/portfolio-v2/)

---

## Stack technique

- **React** + **Vite** — framework et bundler
- **Tailwind CSS v4** — styles via configuration CSS-first (`@theme`)
- **Framer Motion** — animations au scroll et transitions de pages
- **EmailJS** — envoi de formulaire de contact sans backend

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero animé, carousel de projets, services, teasers |
| `/projets` | Liste des projets avec filtres par catégorie |
| `/projets/:slug` | Détail d'un projet — compétences MMI, galerie, navigation |
| `/a-propos` | Parcours, compétences, formation, expérience |
| `/contact` | Formulaire connecté à EmailJS |

---

## Lancer en local

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173`.

---

## Build et déploiement

```bash
# Build de production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

---

## Personnalisation du contenu

Tout le contenu est centralisé dans `src/data/`. Pour modifier les projets, compétences ou expériences, éditer les fichiers correspondants sans toucher aux composants.

---

## Variables d'environnement

Copier `.env.example` et renseigner les valeurs :

```bash
cp .env.example .env
```

---

## Tokens de design

Les couleurs et polices sont définies dans `src/index.css` via `@theme` :

```css
--color-cream: #f7f3ec;
--color-cream-dark: #efe9de;
--color-ink: #16161a;
--color-ink-soft: #3a3a42;
--color-accent: #ff5a36;
--color-accent-soft: #ffd9cc;
--color-deep: #1e1b4b;
--color-deep-light: #2e2a6b;
--color-mint: #c8f284;
--color-pale-yellow: #fff1d6;
--color-sky: #29c5e6;
--color-sage: #b9e7b9;
--color-blush: #f1a3a3;
--font-display: "Fraunces", serif;
--font-sans: "Inter", sans-serif;
```
