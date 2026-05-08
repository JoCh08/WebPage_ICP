import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiHomeModern, HiBuildingOffice, HiCog6Tooth } from 'react-icons/hi2';
import { FaRulerCombined, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Reveal from '../components/Reveal';
import ServiceSection from '../pages/Service.jsx';

const base = import.meta.env.BASE_URL;

const images = [
  `${base}img/Instalacion.webp`,
  `${base}img/Painter.webp`,
  `${base}img/underConstruction.jpg`,
];

/* ── Slide indicator dot ── */
function Dot({ active }) {
  return (
    <span
      className="inline-block rounded-full transition-all duration-500"
      style={{
        width: active ? 24 : 8,
        height: 8,
        background: active ? '#C9A84C' : 'rgba(255,255,255,0.3)',
      }}
    />
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % images.length);
        setFading(false);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
          1. HERO — Directo y Corporativo
          ════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        style={{ background: '#0B1F3A' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url("${images[current]}")`, opacity: fading ? 0 : 0.35 }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(11,31,58,0.78)' }} />
        
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-[72px]">
          <p
            className="text-xs tracking-[0.5em] uppercase font-semibold mb-6"
            style={{ color: '#C9A84C', animation: 'fadeSlideUp 0.5s ease 0.1s both' }}
          >
            ICP GUATEMALA &nbsp;·&nbsp; PRECISIÓN ABSOLUTA
          </p>

          <h1
            className="font-extrabold text-white leading-tight mb-5 section-title"
            style={{
              fontSize:   'clamp(2.25rem, 5.5vw, 3.75rem)',
              maxWidth:   800,
              animation:  'fadeSlideUp 0.5s ease 0.2s both',
              textShadow: '0 2px 24px rgba(0,0,0,0.45)',
            }}
          >
            Materializamos Proyectos<br className="hidden sm:block" /> de{' '}
            <span style={{ color: '#C9A84C' }}>Alta Complejidad.</span>
          </h1>

          <div
            style={{ width: 56, height: 2, background: 'linear-gradient(90deg, #C9A84C, #E2C97A)', marginBottom: 24, animation: 'fadeSlideUp 0.5s ease 0.28s both' }}
          />

          <p
            className="text-gray-200 font-light text-sm md:text-base max-w-2xl mb-10 leading-relaxed mx-auto"
            style={{ animation: 'fadeSlideUp 0.5s ease 0.35s both' }}
          >
            Soluciones integrales, supervisión y consultoría para el sector industrial y comercial.
            Ejecutamos bajo los estándares más estrictos, garantizando rigor estructural y seguridad en cada fase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'fadeSlideUp 0.5s ease 0.44s both' }}>
            <Link to="/nuestros-servicios" className="btn-gold px-8 py-3 rounded-sm text-xs uppercase tracking-widest">
              Ver Servicios
            </Link>
            <Link to="/contactanos" className="btn-outline-gold px-8 py-3 rounded-sm text-xs uppercase tracking-widest">
              Contáctanos
            </Link>
          </div>

          <div className="flex gap-2 mt-12">
            {images.map((_, i) => <Dot key={i} active={i === current} />)}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-500">
          <span className="text-[9px] tracking-[0.4em] uppercase">Explorar</span>
          <ArrowDownIcon className="w-4 h-4 arrow-nudge" />
        </div>

        {/* Corte que conecta con la sección de Servicios */}
        <div
          className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background: '#F4F6F9', clipPath: 'polygon(100% 40%, 100% 100%, 0 100%)' }}
        />
      </section>

      {/* ════════════════════════════════════════
          2. SERVICIOS — Lo más importante, arriba
          ════════════════════════════════════════ */}
      <section className="bg-[#F4F6F9] pt-20 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-3" style={{ color: '#C9A84C' }}>
                Nuestras Especialidades
              </p>
              <h2 className="font-bold text-[#0B1F3A] section-title" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                Soluciones Integrales de Ingeniería
              </h2>
            </div>
          </Reveal>
          
          <ServiceSection isHome={true} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. RESPALDO TÉCNICO — Fusión de "Pilares" y "Sobre Nosotros"
          ════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          
          <Reveal direction="left" className="md:w-1/2">
            <p className="text-[10px] tracking-[0.38em] uppercase font-semibold mb-3" style={{ color: '#C9A84C' }}>
              Respaldo y Metodología
            </p>
            <h2 className="font-bold mb-6 section-title text-[#0B1F3A]" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)' }}>
              Ejecución sin Margen de Error
            </h2>
            <div className="w-12 h-1 mb-6" style={{ background: '#C9A84C' }} />
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Cada proyecto es el cimiento de nuestra reputación. En <strong>ICP GT</strong> no dejamos espacio a la improvisación; operamos bajo un esquema de planificación rigurosa, garantizando que cada estructura y sistema cumpla con las normativas locales e internacionales vigentes.
            </p>

            {/* Viñetas de alto impacto en lugar de tarjetas repetitivas */}
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#0B1F3A]">
                  <FaShieldAlt className="text-[#C9A84C] w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-[#0B1F3A] uppercase tracking-wide">Protocolos Estrictos de Seguridad</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#0B1F3A]">
                  <FaRulerCombined className="text-[#C9A84C] w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-[#0B1F3A] uppercase tracking-wide">Precisión Técnica y Normativa</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#0B1F3A]">
                  <FaClipboardCheck className="text-[#C9A84C] w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-[#0B1F3A] uppercase tracking-wide">Supervisión y Control de Calidad</span>
              </li>
            </ul>

            <Link
              to="/sobre-nosotros"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:gap-4"
              style={{ color: '#C9A84C' }}
            >
              Conocer al equipo <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal direction="right" className="md:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full pointer-events-none" style={{ border: '1px solid rgba(201,168,76,0.3)' }} />
              <img
                src={`${base}img/underConstruction.jpg`}
                alt="Ingeniería profesional"
                className="w-full h-[450px] object-cover shadow-xl relative z-10"
              />
              <div className="absolute bottom-6 left-6 z-20 px-5 py-3 shadow-lg" style={{ background: '#0B1F3A', borderLeft: '3px solid #C9A84C' }}>
                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: '#C9A84C' }}>Garantía Total</p>
                <p className="text-sm font-semibold text-white">Calidad & Seguridad en Obra</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. ÁREAS DE ACCIÓN — Segmentación de mercado
          ════════════════════════════════════════ */}
      <section style={{ background: '#0B1F3A' }} className="py-24 px-6">
        <div style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
          <Reveal>
            <div className="max-w-6xl mx-auto text-center mb-14">
              <p className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-3" style={{ color: '#C9A84C' }}>Alcance</p>
              <h2 className="font-bold text-white section-title" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Áreas de Acción</h2>
              <span className="gold-accent mx-auto mt-4" />
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: HiHomeModern, title: 'Proyectos Residenciales', desc: 'Instalaciones seguras y eficientes que protegen tu hogar y a quienes más quieres.' },
              { icon: HiBuildingOffice, title: 'Proyectos Comerciales', desc: 'Diseño, instalación y mantenimiento de sistemas especializados para tu empresa.' },
              { icon: HiCog6Tooth, title: 'Proyectos Industriales', desc: 'Soluciones robustas y confiables para entornos industriales exigentes.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div
                  className="p-8 h-full transition-colors duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', borderTop: '2px solid rgba(201,168,76,0.35)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'}
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#C9A84C' }} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. CTA BANNER
          ════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1A3A6C 100%)' }}>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-white mb-4 section-title" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>
              ¿Listo para iniciar tu proyecto?
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
              Contáctanos hoy y recibe asesoría técnica profesional sin compromiso.
            </p>
            <Link to="/contactanos" className="btn-gold px-10 py-4 rounded-sm text-xs uppercase tracking-widest inline-block">
              Solicitar Consulta
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}