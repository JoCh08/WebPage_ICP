import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Reveal from '../components/Reveal';
import { SERVICIOS } from '../constants/config';

function ServiceCard({ servicio, standalone }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const Icon = servicio.icono;

  const borderIdle  = standalone ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.08)';
  const borderHover = 'rgba(201,168,76,0.5)';

  return (
    <Link
      to={`/nuestros-servicios/${servicio.id}`}
      className="group block rounded overflow-hidden eng-card"
      style={{
        background:   standalone ? '#FFFFFF' : 'rgba(255,255,255,0.04)',
        border:       `1px solid ${borderIdle}`,
        transition:   'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = borderHover;
        e.currentTarget.style.boxShadow   = standalone
          ? '0 20px 48px rgba(0,0,0,0.12)'
          : '0 20px 48px rgba(0,0,0,0.35)';
        e.currentTarget.style.transform   = 'translateY(-5px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = borderIdle;
        e.currentTarget.style.boxShadow   = '';
        e.currentTarget.style.transform   = '';
      }}
    >
      {/* ── Image ── */}
      <div className="relative h-52 overflow-hidden">
        {!imgLoaded && (
          <div className={`absolute inset-0 ${standalone ? 'skeleton-light' : 'skeleton-dark'}`} />
        )}
        <img
          src={servicio.imagen}
          alt={servicio.titulo}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ opacity: imgLoaded ? 1 : 0 }}
        />
        {/* Gradient overlay — darkens from bottom for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(11,31,58,0.80) 0%, rgba(11,31,58,0.2) 55%, transparent 100%)',
          }}
        />
        {/* Icon badge — anchored bottom-left over the gradient */}
        <div
          className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center rounded transition-transform duration-300 group-hover:scale-110"
          style={{
            background:  '#C9A84C',
            boxShadow:   '0 4px 14px rgba(201,168,76,0.45)',
          }}
        >
          <Icon className="w-5 h-5" style={{ color: '#0B1F3A' }} />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-6">
        {/* Animated gold accent line */}
        <div
          className="h-0.5 mb-4 rounded transition-all duration-500 group-hover:w-14"
          style={{ width: 28, background: '#C9A84C' }}
        />
        <h3
          className="font-bold text-base mb-2.5 section-title leading-snug"
          style={{ color: standalone ? '#0B1F3A' : '#FFFFFF' }}
        >
          {servicio.titulo}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: standalone ? '#6B7280' : '#94A3B8' }}
        >
          {servicio.descripcionCorta}
        </p>
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
          style={{ color: '#C9A84C' }}
        >
          Ver más <ArrowRightIcon className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

/* standalone=true → shown at /nuestros-servicios (includes page header)
   isHome=true     → embedded in Home; suppresses internal header, uses light card styling */
export default function Service({ standalone = false, isHome = false }) {
  const lightCards = standalone || isHome;

  return (
    <>
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

      <section
        className="py-24 px-4"
        style={{ background: standalone ? '#F4F6F9' : 'transparent' }}
      >
        {!standalone && !isHome && (
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
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <ServiceCard servicio={s} standalone={lightCards} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
