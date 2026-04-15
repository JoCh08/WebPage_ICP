import Reveal from '../components/Reveal';
import { FaAward, FaUsers, FaHandshake, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const values = [
  {
    icon: FaAward,
    title: 'Excelencia',
    desc: 'Comprometidos con los más altos estándares técnicos en cada proyecto.',
  },
  {
    icon: FaUsers,
    title: 'Trabajo en Equipo',
    desc: 'Un equipo multidisciplinario enfocado en resultados y en el cliente.',
  },
  {
    icon: FaHandshake,
    title: 'Integridad',
    desc: 'Transparencia y honestidad en cada etapa de nuestros proyectos.',
  },
  {
    icon: FaLeaf,
    title: 'Sostenibilidad',
    desc: 'Soluciones de ingeniería responsables con el medio ambiente.',
  },
];

export default function About() {
  return (
    <>
      {/* ─── Page Header ──────────────────────────────── */}
      <section
        className="relative flex items-center justify-center"
        style={{ background: '#0B1F3A', minHeight: '42vh', paddingTop: 72 }}
      >
        <div className="absolute inset-0 blueprint-bg opacity-40" />

        {/* Diagonal stripe decoration */}
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
            Quiénes Somos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white section-title"
            style={{ animation: 'fadeSlideUp 0.6s ease 0.15s both' }}
          >
            Sobre Nosotros
          </h1>
          <span className="gold-accent mx-auto mt-4" />
        </div>
      </section>

      {/* ─── Historia ─────────────────────────────────── */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

          <Reveal direction="left" className="md:w-1/2">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded border-2 pointer-events-none"
                style={{ borderColor: 'rgba(201,168,76,0.3)' }}
              />
              <img
                src={`${import.meta.env.BASE_URL}img/underConstruction.jpg`}
                alt="Nuestra historia"
                className="w-full h-[380px] object-cover rounded shadow-xl relative z-10"
              />
            </div>
          </Reveal>

          <Reveal direction="right" className="md:w-1/2">
            <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-3" style={{ color: '#C9A84C' }}>
              Nuestra Historia
            </p>
            <h2 className="text-3xl font-bold mb-2 section-title" style={{ color: '#0B1F3A' }}>
              Trayectoria y Compromiso
            </h2>
            <span className="gold-accent mb-6" />

            <p className="text-gray-600 leading-relaxed mt-6 mb-4">
              Comenzamos con una visión clara: brindar soluciones de ingeniería seguras y eficientes
              para hogares, empresas e industrias. Con el paso del tiempo, hemos crecido junto a
              nuestros clientes, mejorando nuestros procesos y expandiendo nuestros servicios.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Nos comprometemos con la calidad, la responsabilidad y la innovación en cada proyecto
              que desarrollamos, asegurando los más altos estándares de la industria.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Misión & Visión ──────────────────────────── */}
      <section style={{ background: '#0B1F3A' }} className="blueprint-bg py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

          <Reveal direction="left" className="md:w-1/2 space-y-8">
            <div
              className="pl-6 border-l-4"
              style={{ borderColor: '#C9A84C' }}
            >
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Nuestra Misión
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Ofrecer un servicio de alta calidad, enfocado en la seguridad, eficiencia y
                profesionalismo, superando las expectativas de nuestros clientes en cada proyecto.
              </p>
            </div>

            <div
              className="pl-6 border-l-4"
              style={{ borderColor: 'rgba(201,168,76,0.35)' }}
            >
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Nuestra Visión
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Convertirnos en líderes del sector de ingeniería y construcción en Guatemala,
                innovando constantemente y contribuyendo con responsabilidad social al desarrollo sostenible.
              </p>
            </div>

            <Link
              to="/contactanos"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300"
              style={{ color: '#C9A84C' }}
            >
              Trabajemos juntos <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal direction="right" className="md:w-1/2">
            <img
              src={`${import.meta.env.BASE_URL}img/Instalacion.webp`}
              alt="Misión y Visión"
              className="w-full h-[380px] object-cover rounded shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* ─── Valores ──────────────────────────────────── */}
      <section className="py-24 bg-[#F4F6F9]">
        <Reveal>
          <div className="max-w-6xl mx-auto px-6 text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-3" style={{ color: '#C9A84C' }}>
              Lo que nos define
            </p>
            <h2 className="text-3xl font-bold section-title" style={{ color: '#0B1F3A' }}>
              Nuestros Valores
            </h2>
            <span className="gold-accent mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div
                className="bg-white rounded p-7 text-center shadow-sm hover:shadow-md transition-all border-b-4"
                style={{ borderBottomColor: '#C9A84C' }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4"
                  style={{ background: '#0B1F3A' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#C9A84C' }} />
                </div>
                <h3 className="font-bold text-base mb-2 section-title" style={{ color: '#0B1F3A' }}>
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
