// Los textos en español de la página (PLAN_sitio A2). Salen del WordPress
// (DEC-006): la versión 2022 manda y lo que sólo está en la de 2019 entra
// también (empresa.md, B4). Se corrigieron faltas y se partieron las frases
// largas, sin cambiar lo que dicen. `en.ts` tiene la misma forma.

export const es = {
  lang: 'es',
  titulo: 'ALPI Logistics',
  // Para buscadores (PLAN_sitio A8): «¿Quiénes somos?» en una línea.
  descripcion:
    'ALPI Logistics es una empresa binacional de logística y transporte. Brindamos apoyo a maquiladoras, agencias aduanales, brokerages y transportistas.',

  menu: {
    abrir: 'Menú',
    enlaces: [
      { href: '#inicio', texto: 'Inicio' },
      { href: '#nosotros', texto: 'Nosotros' },
      { href: '#servicios', texto: 'Servicios' },
      { href: '#tramites', texto: 'Trámites' },
      { href: '#rutas', texto: 'Rutas' },
      { href: '#contacto', texto: 'Contacto' },
    ],
    // El selector lleva al otro idioma (DEC-008).
    idioma: { texto: 'EN', etiqueta: 'Read in English', lang: 'en' },
  },

  portada: {
    lema: 'Le ofrecemos la entrega de mercancía en tiempo y forma',
    reconocidos:
      'Somos reconocidos por trabajar con empresas de buena calidad, que han disfrutado de nuestros servicios y quedan complacidas con lo realizado.',
    fotoAlt: 'Tractocamión rojo de ALPI Logistics con un contenedor marítimo',
    contactanos: 'Contáctenos',
    llamanos: 'O llámenos al',
    quienesTitulo: '¿Quiénes somos?',
    quienes: [
      'ALPI Logistics es una empresa binacional de logística y transporte con un papel de liderazgo dentro del sector logístico mexicano.',
      'Brindamos apoyo a empresas chicas, medianas y grandes del sector privado:',
    ],
    clientes: ['Maquiladoras', 'Agencias aduanales', 'Brokerages', 'Transportistas'],
  },

  nosotros: {
    titulo: 'Nosotros',
    historiaTitulo: 'Historia',
    historia: [
      'Somos una empresa joven e innovadora, fundada por su C.E.O., quien cuenta con una amplia experiencia: más de 15 años nos avalan.',
      'ALPI Logistics tiene experiencia en almacenaje y fianzas para importar mercancía de China a Estados Unidos y México, con un equipo de colaboradores profesionalmente capacitados para brindar un excelente servicio a sus clientes.',
      'Realizamos operaciones en la Aduana Fronteriza de Tijuana, B.C., y tenemos representación de operaciones en los puertos de San Diego y Long Beach, CA.',
    ],
    misionTitulo: 'Misión',
    mision:
      'Lograr la satisfacción total del cliente mediante los procedimientos más eficientes, superando sus expectativas con una atención personalizada, honesta y profesional, y formando parte activa en la consecución de sus objetivos.',
    visionTitulo: 'Visión',
    vision:
      'Consolidarnos como la empresa líder en logística, ofreciendo todos los servicios indispensables para lograr un servicio global de calidad y la satisfacción de nuestros clientes, socios y colaboradores.',
    valoresTitulo: 'Valores',
    valores: ['Honestidad', 'Puntualidad', 'Trabajo en equipo', 'Empatía', 'Compromiso'],
    departamentosTitulo: 'Departamentos',
    departamentos: ['Despacho', 'Operaciones', 'Contabilidad', 'Recursos Humanos', 'Administración'],
  },

  servicios: {
    titulo: '¿Qué servicios ofrecemos?',
    intro:
      'Los siguientes servicios brindan el apoyo necesario para que nuestros clientes cumplan sus expectativas junto a nosotros.',
    grupos: [
      {
        titulo: 'Operaciones',
        puntos: [
          'Operación de chasis',
          'Servicios de operaciones en el puerto de Ensenada',
          'Recolección en terminales',
          'Contratos con navieras y compañías de chasis',
          'Recolecciones en China',
          'Envíos a EE. UU. y cruces a San Diego',
          'Importación y exportación de rabones, step vans y tractores con caja seca de 53',
          'Despacho de envíos hacia el norte y el sur de EE. UU.',
          'Envíos aéreos en San Diego y el aeropuerto de Los Ángeles',
        ],
      },
      {
        titulo: 'Documentación y permisos',
        puntos: [
          'Documentación In-Bond (T&E)',
          'Permisos de tránsito en EE. UU.',
          'Permisos de importación',
          'Fianza y documentación ISF',
          'Comercializadora y agencia aduanal en Tijuana y Ensenada',
          'Documentación: manifiestos, shippers, T&E',
        ],
      },
      {
        titulo: 'Beneficios',
        puntos: [
          'Almacén en San Diego y Tijuana',
          'Yarda en San Diego',
          'Logística de tránsito en los puertos de Long Beach y Los Ángeles',
          'Liberación de aduanas en los aeropuertos de San Diego y Los Ángeles',
        ],
      },
    ],
    ademasTitulo: 'Toda la logística y servicios en un solo lugar',
    ademas: [
      'Importaciones desde China a Estados Unidos y México',
      'Seguridad en sus envíos: cruce su mercancía sin pagar impuestos en EE. UU.',
      'Entregas en Tijuana y San Diego, y recolección en Long Beach y LAX',
      'Envíos seguros en todo California',
      'Entregas en cualquier estado de los Estados Unidos',
      'Todas nuestras unidades se monitorean por GPS las 24 horas, los 7 días',
    ],
  },

  tramites: {
    titulo: 'Nuestros principales trámites',
    intro:
      'Asesoramos a nuestros clientes para realizar la documentación necesaria y de forma legal.',
    grupos: [
      {
        titulo: 'USA',
        puntos: [
          { sigla: 'PNP', nombre: 'Pull Notice Program' },
          { sigla: 'SCAC', nombre: 'Standard Carrier Alpha Code' },
          { sigla: 'Forma 2290', nombre: 'Heavy Highway Vehicle Use Tax Return' },
          { sigla: 'IFTA', nombre: 'International Fuel Tax Agreement' },
          { sigla: 'UCR', nombre: 'Unified Carrier Registration' },
          { sigla: 'US Customs', nombre: 'US Customs Decal' },
          { sigla: 'Diésel', nombre: 'Interstate User Diesel Fuel Tax Return' },
        ],
      },
      {
        titulo: 'DMV',
        puntos: [
          { nombre: 'Renovaciones' },
          { nombre: 'Cambio de propietario' },
          { nombre: 'Registro de vehículos mexicanos' },
          { nombre: 'Duplicado de registros, stickers y láminas' },
        ],
      },
      {
        titulo: 'SCT',
        puntos: [
          { nombre: 'Renovaciones' },
          { nombre: 'Cambio de propietario' },
          { nombre: 'Altas' },
          { nombre: 'Bajas' },
          { nombre: 'Nuevos registros' },
        ],
      },
    ],
  },

  rutas: {
    titulo: '¿Qué rutas ofrecemos?',
    intro: 'Nuestro principal objetivo es seguir expandiendo recorridos por todo Estados Unidos.',
    ciudades: ['Tijuana', 'Mexicali', 'San Diego', 'Los Ángeles'],
    todo: 'Entregas en todo Estados Unidos',
  },

  contacto: {
    titulo: '¿Tiene alguna pregunta?',
    intro:
      'Resuelva sus dudas con nosotros: queremos apoyarle para que todos sus procesos sean sencillos y fáciles de realizar.',
    directorioTitulo: 'Directorio',
    departamentos: [
      {
        nombre: 'Operaciones',
        telefono: '(619) 734-8807',
        tel: '+16197348807',
        correo: 'operations.alpilogistics@outlook.com',
      },
      {
        nombre: 'Administración',
        telefono: '(664) 382 6352',
        tel: '+526643826352',
        correo: 'contabilidad.alpitransport@gmail.com',
      },
    ],
    llamar: 'Llámenos',
    escribir: 'Escríbanos',
    ubicacionTitulo: 'Nuestra ubicación',
    direccion: ['2498 Roll Dr. #1169', 'San Diego, CA 92154'],
    mapa: 'Ver en el mapa',
    mapaUrl:
      'https://www.google.com/maps/search/?api=1&query=2498+Roll+Dr+%231169+San+Diego+CA+92154',
  },

  pie: {
    facebook: 'Facebook',
    facebookUrl: 'https://www.facebook.com/pg/alpilogistics/about/',
    derechos: 'ALPI Logistics',
  },
};

export type Textos = typeof es;
