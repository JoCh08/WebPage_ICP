import { FaFire, FaShieldAlt, FaIndustry, FaTint, FaLeaf, FaDatabase } from 'react-icons/fa';

export const CONTACTO = {
  telefono:      '+502 4029-3857',
  telefonoHref:  'tel:+50240293857',
  whatsapp:      'https://wa.me/50240293857',
  email:         'info@ICPgt.com',
  emailHref:     'mailto:info@ICPgt.com',
  direccion:     'Guatemala, Guatemala',
};

export const REDES = {
  facebook:  'https://www.facebook.com/profile.php?id=61557099803974',
  instagram: '#',
  whatsapp:  CONTACTO.whatsapp,
};

const BASE = import.meta.env.BASE_URL;

export const SERVICIOS = [
  {
    id:               'instalaciones-glp',
    titulo:           'Instalaciones GLP',
    descripcionCorta: 'Diseño e instalación de sistemas de gas licuado de petróleo para hogares y empresas.',
    descripcionLarga: 'Ejecutamos proyectos de GLP con materiales certificados y estricto cumplimiento normativo. Desde el dimensionamiento del sistema hasta las pruebas de presión y la entrega de documentación técnica completa.',
    imagen:           `${BASE}img/underConstruction.jpg`,
    icono:            FaFire,
  },
  {
    id:               'sistemas-contra-incendios',
    titulo:           'Sistemas Contra Incendios',
    descripcionCorta: 'Implementación de sistemas de prevención y combate contra incendios certificados.',
    descripcionLarga: 'Diseñamos e instalamos redes de rociadores, gabinetes, detectores y alarmas bajo las normas NFPA vigentes, garantizando protección efectiva para instalaciones residenciales, comerciales e industriales.',
    imagen:           `${BASE}img/underConstruction.jpg`,
    icono:            FaShieldAlt,
  },
  {
    id:               'hidrocarburos',
    titulo:           'Hidrocarburos',
    descripcionCorta: 'Infraestructura para el manejo seguro de hidrocarburos líquidos y gaseosos.',
    descripcionLarga: 'Construimos estaciones de servicio, oleoductos y sistemas de distribución de combustibles con los más altos estándares de seguridad operacional y protección ambiental.',
    imagen:           `${BASE}img/underConstruction.jpg`,
    icono:            FaIndustry,
  },
  {
    id:               'hidrosanitarias',
    titulo:           'Instalaciones Hidrosanitarias',
    descripcionCorta: 'Soluciones eficientes en agua potable, drenaje y ventilación.',
    descripcionLarga: 'Proyectamos e instalamos redes de agua fría, caliente, drenaje y ventilación para edificios residenciales, comerciales e industriales, asegurando eficiencia y durabilidad en cada sistema.',
    imagen:           `${BASE}img/underConstruction.jpg`,
    icono:            FaTint,
  },
  {
    id:               'plantas-tratamiento',
    titulo:           'Plantas de Tratamiento PTAR-PTAP',
    descripcionCorta: 'Diseño e instalación de plantas de tratamiento de aguas residuales y potables.',
    descripcionLarga: 'Desarrollamos soluciones sostenibles para el tratamiento de aguas residuales (PTAR) y potables (PTAP), optimizando el uso del recurso hídrico y garantizando el cumplimiento de normativas ambientales.',
    imagen:           `${BASE}img/underConstruction.jpg`,
    icono:            FaLeaf,
  },
  {
    id:               'tanques-metalicos',
    titulo:           'Tanques Metálicos Elevados',
    descripcionCorta: 'Sistemas de almacenamiento y distribución de agua en altura.',
    descripcionLarga: 'Fabricamos e instalamos tanques metálicos elevados con diseño estructural certificado y tratamiento anticorrosivo, garantizando una larga vida útil para el almacenamiento y distribución de agua.',
    imagen:           `${BASE}img/underConstruction.jpg`,
    icono:            FaDatabase,
  },
];
