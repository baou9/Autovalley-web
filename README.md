# AutoValley — Template Nuxt 3

Template marketing pour l’atelier AutoValley (Casablanca).

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — serveur de développement Nuxt 3 avec hot reload.
- `npm run build` — build de production statique/SSR.
- `npm run preview` — prévisualisation après build.
- `npm run lint` — analyse ESLint.
- `npm run format` — formatage Prettier.

## Stack

- Nuxt 3 (Vue 3, Vite)
- Tailwind CSS (+ plugins Forms & Typography)
- Lucide Icons
- yup pour la validation client
- Module analytics stub pour intégration GA4 future
- i18n prêt pour internationalisation (fr par défaut)

## Structure

Consultez les sections `components/home` et `pages/` pour les sections principales : Hero, Services, Clients, Initiatives, Témoignages et CTA Réservation.

Les formulaires utilisent `useBookingForm` (réservation) et une validation dédiée sur la page Contact. Les soumissions postent sur l’endpoint stub `/api/booking`.
