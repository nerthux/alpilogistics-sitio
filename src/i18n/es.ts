// Los textos en español de la página. Salen de la presentación de ALPI
// Logistics (DEC-043): lo que no está en ella no entra. Van de usted y con
// las faltas corregidas, sin cambiar lo que dicen (PLAN_contenido D1).
// `en.ts` tiene la misma forma.

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
      { href: '#instalaciones', texto: 'Instalaciones' },
      { href: '#contacto', texto: 'Contacto' },
    ],
    // El selector lleva al otro idioma (DEC-008).
    idioma: { texto: 'EN', etiqueta: 'Read in English', lang: 'en' },
  },

  portada: {
    lema: 'Toda su logística y servicios en un solo lugar',
    fotoAlt: 'Tractocamión rojo de ALPI Logistics con un contenedor marítimo',
    contactanos: 'Contáctenos',
    llamanos: 'O llámenos al',
    quienesTitulo: '¿Quiénes somos?',
    quienes: [
      'ALPI Logistics LLC es una empresa binacional de soluciones integrales de transporte, brokerage y logística internacional.',
      'Brindamos servicios de transporte y logística para facilitar el movimiento de mercancías entre China, Estados Unidos, México y otros destinos internacionales, con atención personalizada y seguimiento en cada operación.',
    ],
  },

  nosotros: {
    titulo: 'Nosotros',
    misionTitulo: 'Misión',
    mision:
      'Lograr la satisfacción total del cliente mediante los procedimientos más eficientes, superando sus expectativas a través de una atención personalizada, honesta y profesional, y formando parte activa en la consecución de sus objetivos.',
    visionTitulo: 'Visión',
    vision:
      'Consolidarnos como la empresa líder en logística, ofreciendo todos los servicios indispensables para lograr un servicio global de calidad, con procedimientos y objetivos claros como base, y logrando la satisfacción de nuestros clientes, socios y colaboradores.',
    areasTitulo: 'Áreas de la empresa',
    areas: [
      {
        titulo: 'Áreas operativas',
        puntos: [
          'Despacho de puerto: Long Beach y Ensenada',
          'Operaciones aéreas, consolidadas y terrestres',
          'Departamento de importación y exportación',
          'Departamento de ventas',
          'Servicio al cliente',
          'CTPAT',
          'Monitoreo de unidades',
          'Safety',
        ],
      },
      {
        titulo: 'Áreas administrativas',
        puntos: [
          'Sistemas',
          'Contabilidad',
          'Recursos Humanos',
          'Administración',
          'Gestión de documentos',
          'Mantenimiento de unidades',
          'Compras',
          'Nóminas',
        ],
      },
    ],
  },

  servicios: {
    titulo: 'Nuestros servicios',
    // Los 14 de la presentación, agrupados en tres tarjetas con un ícono
    // cada una (DEC-038).
    grupos: [
      {
        titulo: 'Transporte y operaciones',
        icono: 'operaciones',
        puntos: [
          'Servicio completo de importación y exportación',
          'Despacho de envíos hacia el este y el norte de EE. UU.',
          'Despacho de envíos hacia el interior de la República Mexicana',
          'Unidades: rabón, step van, tractores con caja seca de 53", contenedores y plataformas',
          'Recolecciones desde el origen, inicialmente en China, con envío a EE. UU. y logística hasta el destino en México',
          'Operación de chasis: recolección en terminales y contratos con navieras y compañías de chasis',
          'Transporte ferroviario de San Diego al interior de la República Mexicana',
        ],
      },
      {
        titulo: 'Documentación y aduanas',
        icono: 'documentacion',
        puntos: [
          'Documentación In Bond (T&E)',
          'Liberación de aduana, recolección, documentos y cobertura de pagos para la liberación completa de órdenes de tránsito en EE. UU.: aéreas, consolidadas y contenedores marítimos',
          'Documentación: ISF, manifiesto, shipper e In Bond',
        ],
      },
      {
        titulo: 'Almacenes y yardas',
        icono: 'almacenes',
        puntos: [
          'Almacén en San Diego y Tijuana',
          'Yarda en San Diego y Tijuana',
          'Logística de tránsito en los puertos de Long Beach, aerolíneas y almacenes fiscales en LAX y San Diego',
          'Almacén bonded en San Diego, Calexico, Nogales y Douglas, AZ',
        ],
      },
    ],
    adicionalesTitulo: 'Servicios adicionales',
    // Sin el texto de relleno de la presentación (DEC-047).
    adicionales: [
      {
        titulo: 'Facturación México & USA',
        icono: 'facturacion',
        puntos: [
          'Forma W9 (USA)',
          'Constancia de situación fiscal',
          'Opinión positiva del SAT',
          'Entrega de contrato de servicios',
        ],
      },
      {
        titulo: 'Validación en CTPAT',
        icono: 'ctpat',
        puntos: [
          'Seguridad y confianza en cada proceso de importación y exportación',
          'Cuenta CTPAT: #52150535',
        ],
      },
      {
        titulo: 'Cobertura de carga ante siniestros',
        icono: 'cobertura',
        puntos: [
          'Entrega de certificados de aseguranza a los clientes y amplia cobertura ante siniestros',
        ],
      },
      {
        titulo: 'Seguridad y monitoreo 24/7',
        icono: 'monitoreo',
        puntos: [
          'Monitoreo en vivo de las unidades',
          'Servicio de inspección K‑9',
          'Instalaciones con seguridad privada',
        ],
      },
      {
        titulo: 'Fianza In Bond propia',
        icono: 'fianza',
        puntos: [
          'Asesoramos a nuestros clientes indicando cuál es el In Bond que más beneficia a su régimen de operación',
          'Ofrecemos total seguimiento desde que se genera el In Bond hasta su cancelación',
        ],
      },
    ],
  },

  instalaciones: {
    titulo: 'Instalaciones',
    // Las fotos de las diapositivas 7 a 10, en su orden (DEC-046); `archivo`
    // es el nombre en `src/assets/instalaciones/`, sin el `.png`.
    grupos: [
      {
        titulo: 'Yardas en Tijuana y San Diego',
        fotos: [
          {
            archivo: 'yarda-aerea',
            alt: 'Vista aérea de la yarda con cajas secas y contenedores estacionados en hileras',
          },
          {
            archivo: 'yarda-tractocamiones',
            alt: 'Tractocamiones y cajas secas estacionados en la yarda',
          },
          {
            archivo: 'yarda-seguridad',
            alt: 'Guardia de seguridad con un perro de inspección K-9 en la yarda',
          },
          {
            archivo: 'yarda-inspeccion',
            alt: 'Guardia con un espejo de inspección para revisar las unidades',
          },
          {
            archivo: 'yarda-acceso',
            alt: 'Tractocamión blanco en el acceso a la yarda, bajo una cámara de vigilancia',
          },
          {
            archivo: 'yarda-camion-caja',
            alt: 'Camión de caja seca de ALPI Logistics',
          },
        ],
      },
      {
        titulo: 'Broker y almacén en San Diego',
        fotos: [
          {
            archivo: 'almacen-andenes-interior',
            alt: 'Andenes de carga del almacén vistos desde dentro',
          },
          {
            archivo: 'almacen-montacargas',
            alt: 'Montacargas dentro del almacén',
          },
          {
            archivo: 'almacen-interior',
            alt: 'Interior del almacén con mercancía en tarimas',
          },
          {
            archivo: 'almacen-andenes-exterior',
            alt: 'Andenes del almacén por fuera, con cajas secas en las puertas',
          },
        ],
      },
    ],
  },

  contacto: {
    titulo: 'Contáctenos',
    // El equipo de ventas de la presentación, con `tel:` y WhatsApp
    // (DEC-047). La portada da el teléfono del primero.
    equipo: [
      {
        puesto: 'Gerente de Ventas',
        nombre: 'Miriam A. Reynoso',
        telefono: '+52 (664) 821 4157',
        tel: '+526648214157',
        whatsapp: 'https://wa.me/526648214157',
      },
      {
        puesto: 'Supervisor de Ventas',
        nombre: 'Sergio Ramírez',
        telefono: '+52 (664) 369 3359',
        tel: '+526643693359',
        whatsapp: 'https://wa.me/526643693359',
      },
      {
        puesto: 'Coordinador de Ventas',
        nombre: 'David Rivera',
        telefono: '+52 (664) 651 1956',
        tel: '+526646511956',
        whatsapp: 'https://wa.me/526646511956',
      },
    ],
    llamar: 'Llamar',
    whatsappTexto: 'WhatsApp',
    escribir: 'Escríbanos a',
    correo: 'ventas@alpilogistics.com.mx',
  },

  pie: {
    derechos: 'ALPI Logistics',
  },
};

export type Textos = typeof es;
