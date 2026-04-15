import { useParams, Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import Reveal from '../components/Reveal';

const base = import.meta.env.BASE_URL;

const servicios = [
  { id: 1, titulo: 'Instalaciones GLP', descripcion: 'Diseño e instalación de sistemas de gas licuado de petróleo para hogares y empresas.', imagen: `${base}img/underConstruction.jpg`, url: 'instalaciones-glp' },
  { id: 2, titulo: 'Sistemas Contra Incendios', descripcion: 'Implementación de sistemas de prevención y combate contra incendios certificados.', imagen: `${base}img/underConstruction.jpg`, url: 'sistemas-contra-incendios' },
  { id: 3, titulo: 'Hidrocarburos', descripcion: 'Infraestructura para el manejo seguro de hidrocarburos líquidos y gaseosos.', imagen: `${base}img/underConstruction.jpg`, url: 'hidrocarburos' },
  { id: 4, titulo: 'Instalaciones Hidrosanitarias', descripcion: 'Soluciones eficientes en agua potable, drenaje y ventilación.', imagen: `${base}img/underConstruction.jpg`, url: 'hidrosanitarias' },
  { id: 5, titulo: 'Plantas de Tratamiento PTAR-PTAP', descripcion: 'Diseño e instalación de plantas de tratamiento de aguas residuales y potables.', imagen: `${base}img/underConstruction.jpg`, url: 'plantas-tratamiento' },
  { id: 6, titulo: 'Tanques Metálicos Elevados', descripcion: 'Sistemas de almacenamiento y distribución de agua en altura.', imagen: `${base}img/underConstruction.jpg`, url: 'tanques-metalicos' },
];

const steps = [
  'Evaluación técnica del sitio',
  'Diseño técnico y planos',
  'Materiales certificados',
  'Instalación supervisada',
  'Pruebas y verificación',
  'Documentación y garantía',
];

export default function Servicios() {
  const { servicioId } = useParams();
  const servicio = servicios.find(s => s.url === servicioId);

  if (!servicio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F6F9]" style={{ paddingTop: 72 }}>
        <div className="text-center">
          <p className="text-gray-500 mb-4 text-sm">Servicio no encontrado.</p>
          <Link to="/nuestros-servicios" className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>
            Ver todos los servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ─── Hero Minimalista ─────────────────────────────────────── */}
      <section
        className="relative flex items-end"
        style={{ minHeight: '45vh', background: '#0B1F3A', paddingTop: 72 }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${servicio.imagen}')` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.95), rgba(11,31,58,0.4))' }} />
        <div className="absolute inset-0 blueprint-bg opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <Link
            to="/nuestros-servicios"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#C9A84C] mb-6 transition-all hover:-translate-x-1"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            Índice de Servicios
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white section-title leading-tight max-w-3xl">
            {servicio.titulo}
          </h1>
          <div className="w-16 h-1 mt-6" style={{ background: '#C9A84C' }} />
        </div>
      </section>

      {/* ─── Main + Sidebar ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">

      {/* ─── Contenido Principal ─── */}
        <main className="flex-1 min-w-0">
          
          {/* Fila 1: Imagen a la izquierda, Texto en medio */}
          <Reveal>
            <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
              
              {/* 1. Columna de Imagen Lateral (Ahora a la Izquierda) */}
              <div className="md:w-5/12 w-full relative">
                {/* Cuadro decorativo (ahora desfasado hacia la derecha) */}
                <div className="absolute top-4 -right-4 w-full h-full border border-gray-200" />
                <img 
                  src={servicio.imagen} 
                  alt={servicio.titulo} 
                  className="relative z-10 w-full h-[450px] object-cover shadow-sm"
                  style={{ borderBottom: '4px solid #C9A84C' }}
                />
              </div>

              {/* 2. Columna de Texto (Ahora en el Medio) */}
              <div className="md:w-7/12 md:pt-4">
                <p className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-4" style={{ color: '#C9A84C' }}>
                  Especificaciones del Servicio
                </p>
                <h2 className="text-2xl font-bold mb-6 section-title" style={{ color: '#0B1F3A' }}>
                  Soluciones a la medida de su proyecto
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {servicio.descripcion}
                </p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Desarrollamos soluciones profesionales, seguras y adaptadas a las necesidades específicas de cada instalación. Nuestro compromiso es garantizar la operatividad y el cumplimiento estricto de todas las normativas y estándares técnicos nacionales e internacionales.
                </p>
              </div>

            </div>
          </Reveal>

          {/* Fila 2: Metodología / Pasos (Se mantiene abajo del texto y la imagen) */}
          <Reveal delay={100}>
            <div className="bg-[#F4F6F9] p-10 border border-gray-100">
              <h3 className="text-xl font-bold mb-8 section-title" style={{ color: '#0B1F3A' }}>
                Metodología de Ejecución
              </h3>
              
              {/* Cuadrícula de pasos tipo "Planos" */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span 
                      className="w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: '#0B1F3A', color: '#C9A84C' }}
                    >
                      0{i + 1}
                    </span>
                    <p className="text-gray-700 text-sm mt-1.5 font-medium">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  ¿Requiere asesoría técnica?
                </p>
                <Link
                  to="/contactanos"
                  className="inline-flex items-center gap-2 btn-gold px-8 py-3 text-xs uppercase tracking-widest transition-all hover:gap-4"
                >
                  Solicitar Cotización
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </main>

        {/* ─── Sidebar (Índice Corporativo) ─── */}
        <aside className="lg:w-72 flex-shrink-0">
          <div className="sticky top-24">
            
            {/* Título del menú */}
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h4 className="text-[#0B1F3A] text-xs font-bold uppercase tracking-[0.2em]">
                Áreas de Especialidad
              </h4>
            </div>

            {/* Lista de enlaces */}
            <ul className="flex flex-col gap-2 mb-10">
              {servicios.map(s => {
                const active = s.url === servicioId;
                return (
                  <li key={s.id}>
                    <Link
                      to={`/nuestros-servicios/${s.url}`}
                      className="group flex items-center justify-between px-4 py-3 text-xs transition-all"
                      style={{
                        background: active ? '#0B1F3A' : '#F4F6F9',
                        color: active ? '#FFFFFF' : '#4B5563',
                        borderLeft: active ? '3px solid #C9A84C' : '3px solid transparent',
                      }}
                    >
                      <span className="font-semibold">{s.titulo}</span>
                      <ArrowRightIcon 
                        className={`w-3 h-3 transition-transform ${active ? 'text-[#C9A84C]' : 'text-gray-400 group-hover:translate-x-1'}`} 
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Tarjeta de Contacto Lateral */}
            <div className="p-6 text-center" style={{ background: '#0B1F3A', borderTop: '3px solid #C9A84C' }}>
              <h5 className="text-white font-bold text-sm mb-3">Atención Inmediata</h5>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                Nuestros ingenieros están listos para evaluar su proyecto y ofrecerle la mejor solución técnica.
              </p>
              <Link
                to="/contactanos"
                className="block w-full text-center border border-[#C9A84C] text-[#C9A84C] py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#C9A84C] hover:text-[#0B1F3A] transition-colors"
              >
                Contactar Ahora
              </Link>
            </div>

          </div>
        </aside>
      </div>

      {/* ─── Mobile: other services chips ────────────── */}
      <nav className="lg:hidden bg-[#F4F6F9] px-6 py-8 border-t border-gray-200">
        <h4 className="text-center text-xs font-bold text-[#0B1F3A] uppercase tracking-widest mb-6">
          Explorar especialidades
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {servicios.map(s => (
            <Link
              key={s.url}
              to={`/nuestros-servicios/${s.url}`}
              className="text-xs px-4 py-2 font-medium transition-all"
              style={{
                color: s.url === servicioId ? '#FFFFFF' : '#4B5563',
                background: s.url === servicioId ? '#0B1F3A' : 'white',
                border: s.url === servicioId ? '1px solid #0B1F3A' : '1px solid #E5E7EB',
              }}
            >
              {s.titulo}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}