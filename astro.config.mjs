// @ts-check
import { defineConfig } from 'astro/config';

// Español en `/` e inglés en `/en/` (DEC-008).
export default defineConfig({
  // Dónde se sirve (PLAN_publicacion C5): la CI pone lo de GitHub Pages; sin
  // variables, en local, se sirve en la raíz como hasta ahora.
  site: process.env.SITIO_URL,
  base: process.env.SITIO_BASE,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
