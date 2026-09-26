// La imagen para compartir el enlace (PLAN_sitio A8): el logo centrado en un
// lienzo de 1200×630 con fondo blanco, rasterizado en el build desde el SVG,
// así que cambia solo si cambia el logo. Una para los dos idiomas.
import type { APIRoute } from 'astro';
import sharp from 'sharp';
import logo from '../assets/logo.svg?raw';

// El logo, anidado: su `viewBox` lo escala y lo centra en la caja que se le da.
const anidado = logo.replace('<svg ', '<svg x="100" y="80" width="1000" height="470" ');

const lienzo = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#fff"/>
  ${anidado}
</svg>`;

export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(lienzo)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
