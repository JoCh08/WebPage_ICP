import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Reveal from '../components/Reveal';

const base = import.meta.env.BASE_URL;

const servicios = [
  {
    titulo: 'Instalaciones GLP',
    descripcion: 'Diseño e instalación de sistemas de gas licuado de petróleo para hogares y empresas.',
    imagen: `${base}img/underConstruction.jpg`,
    url: 'instalaciones-glp',
  },
  {
    titulo: 'Sistemas Contra Incendios',
    descripcion: 'Implementación de sistemas de prevención y combate contra incendios certificados.',
    imagen: `${base}img/underConstruction.jpg`,
    url: 'sistemas-contra-incendios',
  },
  {
    titulo: 'Hidrocarburos',
    descripcion: 'Infraestructura para el manejo seguro de hidrocarburos líquidos y gaseosos.',
    imagen: `${base}img/underConstruction.jpg`,
    url: 'hidrocarburos',
  },
  {
    titulo: 'Instalaciones Hidrosanitarias',
    descripcion: 'Soluciones eficientes en agua potable, drenaje y ventilación.',
    imagen: `${base}img/underConstruction.jpg`,
    url: 'hidrosanitarias',
  },
  {
    titulo: 'Plantas de Tratamiento PTAR-PTAP',
    descripcion: 'Diseño e instalación de plantas de tratamiento de aguas residuales y potables.',
    imagen: `${base}img/underConstruction.jpg`,
    url: 'plantas-tratamiento',
  },
  {
    titulo: 'Tanques Metálicos Elevados',
    descripcion: 'Sistemas de almacenamiento y distribución de agua en altura.',
    imagen: `${base}img/underConstruction.jpg`,
    url: 'tanques-metalicos',
  },
];

/* standalone=true → shown at /nuestros-servicios (includes page header)
   standalone=false (default) → embedded in Home (no header) */
export default function Service({ standalone = false }) {
  return (
    <>
      {/* Page header — only when route is /nuestros-servicios */}
      {standalone && (
        <section
          className="relative flex items-center justify-center"
          style={{ background: '#0B1F3A', minHeight: '42vh', paddingTop: 72 }}
        >
          <div className="absolute inset-0 blueprint-bg opacity-40" />
          <div
            className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
            style={{
              background:
                'repeating-linear-gradient(-55deg, rgba(201,168,76,0.05) 0px, rgba(201,168,76,0.05) 1px, transparent 1px, transparent 18px)',
            }}
          />
          <div className="relative z-10 text-center px-4">
            <p
              className="text-xs tracking-[0.45em] uppercase font-semibold mb-3"
              style={{ color: '#C9A84C', animation: 'fadeSlideUp 0.6s ease both' }}
            >
              Especialidades
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white section-title"
              style={{ animation: 'fadeSlideUp 0.6s ease 0.15s both' }}
            >
              Nuestros Servicios
            </h1>
            <span className="gold-accent mx-auto mt-4" />
          </div>
        </section>
      )}

      {/* Services grid */}
      <section
        className="py-24 px-4"
        style={{ background: standalone ? '#F4F6F9' : '#0B1F3A' }}
      >
        {!standalone && (
          <Reveal>
            <div className="max-w-6xl mx-auto text-center mb-14">
              <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-3" style={{ color: '#C9A84C' }}>
                Especialidades
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white section-title">Nuestros Servicios</h2>
              <span className="gold-accent mx-auto mt-4" />
              <p className="mt-5 text-gray-400 text-sm max-w-xl mx-auto">
                Soluciones integrales de ingeniería con los más altos estándares técnicos y de seguridad.
              </p>
            </div>
          </Reveal>
        )}

        {standalone && (
          <Reveal>
            <div className="max-w-6xl mx-auto text-center mb-14">
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Soluciones integrales de ingeniería con los más altos estándares técnicos y de seguridad.
              </p>
            </div>
          </Reveal>
        )}

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <Reveal key={s.url} delay={i * 80}>
              <Link
                to={`/nuestros-servicios/${s.url}`}
                className="group block rounded overflow-hidden transition-all duration-300 border hover:shadow-xl"
                style={{
                  background:     standalone ? '#FFFFFF' : 'rgba(255,255,255,0.04)',
                  borderColor:    standalone ? '#F0F0F0' : 'rgba(255,255,255,0.08)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.imagen}
                    alt={s.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{ background: 'rgba(11,31,58,0.4)' }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className="h-0.5 mb-3 rounded transition-all duration-300 group-hover:w-14"
                    style={{ width: 28, background: '#C9A84C' }}
                  />
                  <h3
                    className="font-bold text-base mb-2 section-title"
                    style={{ color: standalone ? '#0B1F3A' : '#FFFFFF' }}
                  >
                    {s.titulo}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: standalone ? '#6B7280' : '#9CA3AF' }}
                  >
                    {s.descripcion}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-2"
                    style={{ color: '#C9A84C' }}
                  >
                    Ver más <ArrowRightIcon className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
