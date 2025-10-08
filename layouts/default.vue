<template>
  <div class="flex min-h-screen flex-col bg-white text-text">
    <a class="skip-link" href="#contenu">Passer au contenu</a>
    <SiteHeader />
    <main id="contenu" class="flex-1">
      <slot />
    </main>
    <SiteFooter />
    <WhatsAppFloat />
  </div>
</template>
