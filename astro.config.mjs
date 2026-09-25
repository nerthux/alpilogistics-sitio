// @ts-check
import { defineConfig } from 'astro/config';

// Español en `/` e inglés en `/en/` (DEC-008).
export default defineConfig({
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
