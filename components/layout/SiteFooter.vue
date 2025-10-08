<template>
  <footer class="mt-24 border-t border-light bg-light/70" aria-label="Pied de page">
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-10 md:grid-cols-3">
        <div class="space-y-4">
          <p class="uppercase tracking-wide text-xs text-gray-500">À propos</p>
          <h3 class="text-xl font-semibold text-dark">AutoValley</h3>
          <p class="text-sm text-mute">
            AutoValley offre des services haut de gamme pour toutes marques, avec une expertise reconnue
            et un engagement durable.
          </p>
        </div>
        <div>
          <h4 class="mb-3 uppercase tracking-wide text-xs text-gray-500">Liens</h4>
          <ul class="mt-4 space-y-2 text-sm text-mute">
            <li><NuxtLink class="focus-ring" to="/">Accueil</NuxtLink></li>
            <li><NuxtLink class="focus-ring" to="/services">Services</NuxtLink></li>
            <li><NuxtLink class="focus-ring" to="/clients">Clients</NuxtLink></li>
            <li><a class="focus-ring" href="#blog">Blog</a></li>
            <li><NuxtLink class="focus-ring" to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink class="focus-ring" to="/mentions-legales">Mentions légales</NuxtLink></li>
          </ul>
        </div>
        <div class="space-y-4">
          <h4 class="mb-3 uppercase tracking-wide text-xs text-gray-500">Contact</h4>
          <address class="not-italic text-sm text-mute">
            <p>122, Zone Industrielle Sapino – Casablanca</p>
            <p>
              <a class="focus-ring" href="tel:+212623456789">+212 6 23 45 67 89</a>
            </p>
            <p>
              <a class="focus-ring" href="mailto:contact@autovalley.ma">contact@autovalley.ma</a>
            </p>
          </address>
          <div class="overflow-hidden rounded-xl shadow-md">
            <NuxtImg
              src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-7.62,33.57,12,0,0/400x200?access_token=pk.eyJ1IjoibnV4dCIsImEiOiJja2x6ZGdmdXUwMHdxMm9wZzltdDJhMWpiIn0.faketoken"
              alt="Plan statique de Casablanca"
              class="h-64 w-full object-cover"
              loading="lazy"
              sizes="(min-width: 768px) 320px, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-light bg-white/70">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-mute sm:flex-row sm:px-6 lg:px-8">
        <p>© 2025 AutoValley — Tous droits réservés.</p>
        <NuxtLink class="text-mute focus-ring" to="/mentions-legales">Mentions légales</NuxtLink>
      </div>
    </div>
  </footer>
</template>
