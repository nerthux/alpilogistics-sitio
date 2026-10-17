// Los textos en inglés de la página (DEC-008), con la forma de `es.ts`: la
// presentación sólo está en español, así que se traducen de él
// (PLAN_contenido D8).
import type { Textos } from './es';

export const en: Textos = {
  lang: 'en',
  titulo: 'ALPI Logistics',
  // Para buscadores (PLAN_sitio A8): «Who are we?» en una línea.
  descripcion:
    'ALPI Logistics is a binational logistics and transportation company. We support maquiladoras, customs agencies, brokerages and carriers.',

  menu: {
    abrir: 'Menu',
    enlaces: [
      { href: '#inicio', texto: 'Home' },
      { href: '#nosotros', texto: 'About us' },
      { href: '#servicios', texto: 'Services' },
      { href: '#contacto', texto: 'Contact' },
    ],
    idioma: { texto: 'ES', etiqueta: 'Ver en español', lang: 'es' },
  },

  portada: {
    lema: 'All your logistics and services in one place',
    fotoAlt: 'Red ALPI Logistics truck hauling an ocean shipping container',
    contactanos: 'Contact us',
    llamanos: 'Or call us at',
    quienesTitulo: 'Who are we?',
    quienes: [
      'ALPI Logistics LLC is a binational company providing comprehensive transportation, brokerage and international logistics solutions.',
      'We provide transportation and logistics services to facilitate the movement of goods between China, the United States, Mexico and other international destinations, with personalized attention and follow-up on every operation.',
    ],
  },

  nosotros: {
    titulo: 'About us',
    misionTitulo: 'Mission',
    mision:
      'Achieve total customer satisfaction through the most efficient procedures, exceeding their expectations with personalized, honest and professional service, and taking an active part in achieving their goals.',
    visionTitulo: 'Vision',
    vision:
      'Consolidate ourselves as the leading logistics company, offering all the essential services to achieve a quality global service, built on clear procedures and goals, and achieving the satisfaction of our customers, partners and collaborators.',
    areasTitulo: 'Company areas',
    areas: [
      {
        titulo: 'Operations',
        puntos: [
          'Port dispatch: Long Beach and Ensenada',
          'Air, consolidated and ground operations',
          'Import and export department',
          'Sales department',
          'Customer service',
          'CTPAT',
          'Unit monitoring',
          'Safety',
        ],
      },
      {
        titulo: 'Administration',
        puntos: [
          'Systems',
          'Accounting',
          'Human Resources',
          'Administration',
          'Document management',
          'Unit maintenance',
          'Purchasing',
          'Payroll',
        ],
      },
    ],
  },

  servicios: {
    titulo: 'Our services',
    grupos: [
      {
        titulo: 'Transportation and operations',
        icono: 'operaciones',
        puntos: [
          'Full import and export service',
          'Dispatch of shipments to the eastern and northern U.S.',
          'Dispatch of shipments to the interior of Mexico',
          'Units: box trucks, step vans, tractors with 53-foot dry vans, containers and flatbeds',
          'Pick-ups at origin, initially in China, with shipping to the U.S. and logistics to the final destination in Mexico',
          'Chassis operation: pick-ups at terminals and contracts with shipping lines and chassis companies',
          'Rail transportation from San Diego to the interior of Mexico',
        ],
      },
      {
        titulo: 'Documentation and customs',
        icono: 'documentacion',
        puntos: [
          'In Bond documentation (T&E)',
          'Customs clearance, pick-up, documents and payment coverage for the full release of transit orders in the U.S.: air, consolidated and ocean containers',
          'Documentation: ISF, manifest, shipper and In Bond',
        ],
      },
      {
        titulo: 'Warehouses and yards',
        icono: 'almacenes',
        puntos: [
          'Warehouse in San Diego and Tijuana',
          'Yard in San Diego and Tijuana',
          'Transit logistics at the ports of Long Beach, airlines and bonded warehouses at LAX and San Diego',
          'Bonded warehouse in San Diego, Calexico, Nogales and Douglas, AZ',
        ],
      },
    ],
    adicionalesTitulo: 'Additional services',
    adicionales: [
      {
        titulo: 'Invoicing in Mexico & USA',
        puntos: [
          'W9 form (USA)',
          'Mexican tax status certificate (constancia de situación fiscal)',
          'Positive tax compliance opinion from the SAT',
          'Service contract',
        ],
      },
      {
        titulo: 'CTPAT validation',
        puntos: [
          'Security and confidence in every import and export process',
          'CTPAT account: #52150535',
        ],
      },
      {
        titulo: 'Cargo coverage against losses',
        puntos: [
          'Insurance certificates for our customers and broad coverage against losses',
        ],
      },
      {
        titulo: 'Security and 24/7 monitoring',
        puntos: [
          'Live monitoring of our units',
          'K-9 inspection service',
          'Facilities with private security',
        ],
      },
      {
        titulo: 'Our own In Bond',
        puntos: [
          'We advise our customers on which In Bond best suits their type of operation',
          'We provide full follow-up from the moment the In Bond is issued until it is cancelled',
        ],
      },
    ],
  },

  contacto: {
    titulo: 'Do you have any questions?',
    intro:
      'Let us answer your questions: we want to support you so that all your processes are simple and easy to carry out.',
    directorioTitulo: 'Directory',
    departamentos: [
      {
        nombre: 'Operations',
        telefono: '(619) 734-8807',
        tel: '+16197348807',
        correo: 'operations.alpilogistics@outlook.com',
      },
      {
        nombre: 'Administration',
        telefono: '(664) 382 6352',
        tel: '+526643826352',
        correo: 'contabilidad.alpitransport@gmail.com',
      },
    ],
    llamar: 'Call us',
    escribir: 'Email us',
    ubicacionTitulo: 'Our location',
    direccion: ['2498 Roll Dr. #1169', 'San Diego, CA 92154'],
    mapa: 'View on the map',
    mapaUrl:
      'https://www.google.com/maps/search/?api=1&query=2498+Roll+Dr+%231169+San+Diego+CA+92154',
  },

  pie: {
    derechos: 'ALPI Logistics',
  },
};
