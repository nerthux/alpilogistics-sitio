// Los textos en inglés de la página (DEC-008), con la forma de `es.ts`: la
// presentación sólo está en español, así que se traducen de él
// (PLAN_contenido D8).
import type { Textos } from './es';

export const en: Textos = {
  lang: 'en',
  titulo: 'ALPI Logistics',

  menu: {
    abrir: 'Menu',
    enlaces: [
      { href: '#inicio', texto: 'Home' },
      { href: '#nosotros', texto: 'About us' },
      { href: '#servicios', texto: 'Services' },
      { href: '#instalaciones', texto: 'Facilities' },
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
      'To achieve total customer satisfaction through the most efficient procedures, exceeding their expectations with personalized, honest and professional service, and taking an active part in achieving their goals.',
    visionTitulo: 'Vision',
    vision:
      'To establish ourselves as the leading logistics company, offering all the essential services to provide quality global service, built on clear procedures and goals, and achieving the satisfaction of our customers, partners and collaborators.',
    areasTitulo: 'Our areas',
    areas: [
      {
        titulo: 'Operational areas',
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
        titulo: 'Administrative areas',
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
          'Pickups at origin, initially in China, with shipping to the U.S. and logistics to the final destination in Mexico',
          'Chassis operation: pickups at terminals and contracts with shipping lines and chassis companies',
          'Rail transportation from San Diego to the interior of Mexico',
        ],
      },
      {
        titulo: 'Documentation and customs',
        icono: 'documentacion',
        puntos: [
          'In Bond documentation (T&E)',
          'Customs clearance, pickup, documents and payment coverage for the full release of transit orders in the U.S.: air, consolidated and ocean containers',
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
        icono: 'facturacion',
        puntos: [
          'W9 form (USA)',
          'Mexican tax status certificate (constancia de situación fiscal)',
          'Positive tax compliance opinion from the SAT',
          'Service contract',
        ],
      },
      {
        titulo: 'CTPAT validation',
        icono: 'ctpat',
        puntos: [
          'Security and confidence in every import and export process',
          'CTPAT account: #52150535',
        ],
      },
      {
        titulo: 'Cargo coverage against losses',
        icono: 'cobertura',
        puntos: [
          'Insurance certificates for our customers and broad coverage against losses',
        ],
      },
      {
        titulo: 'Security and 24/7 monitoring',
        icono: 'monitoreo',
        puntos: [
          'Live monitoring of our units',
          'K‑9 inspection service',
          'Facilities with private security',
        ],
      },
      {
        titulo: 'Our own In Bond surety',
        icono: 'fianza',
        puntos: [
          'We advise our customers on which In Bond best suits their type of operation',
          'We provide full follow-up from the moment the In Bond is issued until it is cancelled',
        ],
      },
    ],
  },

  instalaciones: {
    titulo: 'Facilities',
    grupos: [
      {
        titulo: 'Yards in Tijuana and San Diego',
        fotos: [
          {
            archivo: 'yarda-aerea',
            alt: 'Aerial view of the yard with dry vans and containers parked in rows',
          },
          {
            archivo: 'yarda-tractocamiones',
            alt: 'Tractor-trailers and dry vans parked in the yard',
          },
          {
            archivo: 'yarda-seguridad',
            alt: 'Security guard with a K-9 inspection dog in the yard',
          },
          {
            archivo: 'yarda-inspeccion',
            alt: 'Guard with an inspection mirror for checking the units',
          },
          {
            archivo: 'yarda-acceso',
            alt: 'White tractor at the yard entrance, under a security camera',
          },
          {
            archivo: 'yarda-camion-caja',
            alt: 'ALPI Logistics box truck',
          },
        ],
      },
      {
        titulo: 'Broker and warehouse in San Diego',
        fotos: [
          {
            archivo: 'almacen-andenes-interior',
            alt: 'Loading docks of the warehouse seen from inside',
          },
          {
            archivo: 'almacen-montacargas',
            alt: 'Forklift inside the warehouse',
          },
          {
            archivo: 'almacen-interior',
            alt: 'Inside the warehouse, with goods on pallets',
          },
          {
            archivo: 'almacen-andenes-exterior',
            alt: 'Warehouse loading docks from outside, with dry vans at the doors',
          },
        ],
      },
    ],
  },

  contacto: {
    titulo: 'Contact us',
    equipo: [
      {
        puesto: 'Sales Manager',
        nombre: 'Miriam A. Reynoso',
        telefono: '+52 (664) 821 4157',
        tel: '+526648214157',
        whatsapp: 'https://wa.me/526648214157',
      },
      {
        puesto: 'Sales Supervisor',
        nombre: 'Sergio Ramírez',
        telefono: '+52 (664) 369 3359',
        tel: '+526643693359',
        whatsapp: 'https://wa.me/526643693359',
      },
      {
        puesto: 'Sales Coordinator',
        nombre: 'David Rivera',
        telefono: '+52 (664) 651 1956',
        tel: '+526646511956',
        whatsapp: 'https://wa.me/526646511956',
      },
    ],
    llamar: 'Call',
    whatsappTexto: 'WhatsApp',
    escribir: 'Email us at',
    correo: 'ventas@alpilogistics.com.mx',
  },

  pie: {
    derechos: 'ALPI Logistics',
  },
};
