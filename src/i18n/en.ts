// Los textos en inglés de la página (DEC-008), con la forma de `es.ts`. Salen
// de la portada de 2019 EN del WordPress, puestos al día con lo que cambió en
// 2022 (DEC-006) y con las correcciones del español (DEC-018, DEC-019): se
// arreglaron las faltas y las frases mal traducidas, sin cambiar lo que dicen.
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
      { href: '#tramites', texto: 'Formalities' },
      { href: '#rutas', texto: 'Routes' },
      { href: '#contacto', texto: 'Contact' },
    ],
    idioma: { texto: 'ES', etiqueta: 'Ver en español', lang: 'es' },
  },

  portada: {
    lema: 'We offer you the delivery of goods in a timely manner',
    reconocidos:
      'We are recognized for working with good quality companies that have enjoyed our services and are pleased with the results.',
    fotoAlt: 'Red ALPI Logistics truck hauling an ocean shipping container',
    contactanos: 'Contact us',
    llamanos: 'Or call us at',
    quienesTitulo: 'Who are we?',
    quienes: [
      'ALPI Logistics is a binational logistics and transportation company with a leading role in the Mexican logistics sector.',
      'We support small, medium and large companies in the private sector:',
    ],
    clientes: ['Maquiladoras', 'Customs agencies', 'Brokerages', 'Carriers'],
  },

  nosotros: {
    titulo: 'About us',
    historiaTitulo: 'History',
    historia: [
      'We are a young and innovative company founded by its C.E.O., who has extensive experience: more than 15 years back us.',
      'ALPI Logistics has experience in warehousing and bonds to import goods from China to the United States and Mexico, with a team of professionally trained staff to provide excellent service to its customers.',
      'We operate at the Tijuana, B.C., border customs office, and we have operations representation at the ports of San Diego and Long Beach, CA.',
    ],
    misionTitulo: 'Mission',
    mision:
      'Achieve total customer satisfaction through the most efficient procedures, exceeding their expectations with personalized, honest and professional service, and taking an active part in achieving their goals.',
    visionTitulo: 'Vision',
    vision:
      'Consolidate ourselves as the leading logistics company, offering all the essential services to achieve a quality global service and the satisfaction of our customers, partners and collaborators.',
    valoresTitulo: 'Values',
    valores: ['Honesty', 'Punctuality', 'Teamwork', 'Empathy', 'Commitment'],
    departamentosTitulo: 'Departments',
    departamentos: ['Dispatch', 'Operations', 'Accounting', 'Human Resources', 'Administration'],
  },

  servicios: {
    titulo: 'What services do we offer?',
    intro:
      'The following services provide the support our clients need to meet their expectations with us.',
    grupos: [
      {
        titulo: 'Operations',
        icono: 'operaciones',
        puntos: [
          'Chassis operation',
          'Operations services at the port of Ensenada',
          'Pick-ups at terminals',
          'Contracts with shipping lines and chassis companies',
          'Pick-ups in China',
          'Shipments to the U.S. and crossings to San Diego',
          'Import and export of box trucks, step vans and tractors with 53-foot dry vans',
          'Dispatch of shipments to the northern and southern U.S.',
          'Air shipments at the San Diego and Los Angeles airports',
        ],
      },
      {
        titulo: 'Documentation and permits',
        icono: 'documentacion',
        puntos: [
          'In-Bond documentation (T&E)',
          'U.S. transit permits',
          'Import permits',
          'Bond and ISF documentation',
          'Trading company and customs agency in Tijuana and Ensenada',
          'Documentation: manifests, shippers, T&E',
        ],
      },
      {
        titulo: 'Benefits',
        icono: 'beneficios',
        puntos: [
          'Warehouse in San Diego and Tijuana',
          'Yard in San Diego',
          'Transit logistics at the ports of Long Beach and Los Angeles',
          'Customs clearance at the San Diego and Los Angeles airports',
        ],
      },
    ],
    ademasTitulo: 'All logistics and services in one place',
    ademas: [
      'Imports from China to the United States and Mexico',
      'Security in your shipments: cross your merchandise without paying taxes in the U.S.',
      'Deliveries in Tijuana and San Diego, and pick-ups in Long Beach and LAX',
      'Safe shipping throughout California',
      'Deliveries to any state in the United States',
      'All our units are monitored by GPS 24/7',
    ],
  },

  tramites: {
    titulo: 'Our main formalities',
    intro: 'We advise our clients so they can complete the necessary documentation, legally.',
    grupos: [
      {
        titulo: 'USA',
        icono: 'usa',
        puntos: [
          { sigla: 'PNP', nombre: 'Pull Notice Program' },
          { sigla: 'SCAC', nombre: 'Standard Carrier Alpha Code' },
          { sigla: 'Form 2290', nombre: 'Heavy Highway Vehicle Use Tax Return' },
          { sigla: 'IFTA', nombre: 'International Fuel Tax Agreement' },
          { sigla: 'UCR', nombre: 'Unified Carrier Registration' },
          { sigla: 'US Customs', nombre: 'US Customs Decal' },
          { sigla: 'Diesel', nombre: 'Interstate User Diesel Fuel Tax Return' },
        ],
      },
      {
        titulo: 'DMV',
        icono: 'dmv',
        puntos: [
          { nombre: 'Renewals' },
          { nombre: 'Change of ownership' },
          { nombre: 'Registration of Mexican vehicles' },
          { nombre: 'Duplicate registrations, stickers and plates' },
        ],
      },
      {
        titulo: 'SCT',
        icono: 'sct',
        puntos: [
          { nombre: 'Renewals' },
          { nombre: 'Change of ownership' },
          { nombre: 'Vehicle additions' },
          { nombre: 'Vehicle removals' },
          { nombre: 'New registrations' },
        ],
      },
    ],
  },

  rutas: {
    titulo: 'What routes do we offer?',
    intro: 'Our main goal is to keep expanding our routes throughout the United States.',
    ciudades: ['Tijuana', 'Mexicali', 'San Diego', 'Los Angeles'],
    todo: 'Deliveries throughout the United States',
    mapa: 'Route map: from Tijuana to Mexicali, San Diego and Los Angeles, and on to the rest of the United States',
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
    facebook: 'Facebook',
    facebookUrl: 'https://www.facebook.com/pg/alpilogistics/about/',
    derechos: 'ALPI Logistics',
  },
};
