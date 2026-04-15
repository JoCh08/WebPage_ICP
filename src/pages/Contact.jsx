import { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Reveal from '../components/Reveal';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);

  const validar = () => {
    const e = {};
    if (!form.nombre.trim())   e.nombre   = 'El nombre es obligatorio.';
    if (!form.telefono.trim()) e.telefono = 'El teléfono es obligatorio.';
    else if (!/^\d{8,15}$/.test(form.telefono)) e.telefono = 'Teléfono inválido (solo dígitos).';
    if (!form.email.trim())    e.email    = 'El correo es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Correo electrónico inválido.';
    if (!form.mensaje.trim())  e.mensaje  = 'El mensaje es obligatorio.';
    return e;
  };

  const manejarCambio = e => setForm({ ...form, [e.target.name]: e.target.value });

  const manejarEnvio = e => {
    e.preventDefault();
    const v = validar();
    setErrores(v);
    if (Object.keys(v).length === 0) {
      setEnviando(true);
      setTimeout(() => {
        setEnviando(false);
        setExito(true);
        setForm({ nombre: '', telefono: '', email: '', mensaje: '' });
        setTimeout(() => setExito(false), 5000);
      }, 2000);
    }
  };

  const inputCls = field =>
    `w-full px-4 py-3 bg-white border rounded text-sm text-gray-800 focus:outline-none transition-colors ${
      errores[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-gray-200 focus:border-[#C9A84C]'
    }`;

  return (
    <>
      {/* ─── Page Header ──────────────────────────────── */}
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
            Hablemos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white section-title"
            style={{ animation: 'fadeSlideUp 0.6s ease 0.15s both' }}
          >
            Contáctanos
          </h1>
          <span className="gold-accent mx-auto mt-4" />
        </div>
      </section>

      {/* ─── Content ──────────────────────────────────── */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* ── Left: contact info ─────────────────────── */}
          <Reveal direction="left">
            <p className="text-xs tracking-[0.35em] uppercase font-semibold mb-3" style={{ color: '#C9A84C' }}>
              Información de Contacto
            </p>
            <h2 className="text-3xl font-bold mb-2 section-title" style={{ color: '#0B1F3A' }}>
              Estamos para Ayudarte
            </h2>
            <span className="gold-accent mb-6" />

            <p className="text-gray-600 mt-6 mb-8 leading-relaxed text-sm">
              Completa el formulario o contáctanos directamente.
              Respondemos en menos de 24 horas.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: PhoneIcon,   label: 'Teléfono',   value: '+502 4029-3857',    href: 'tel:+50240293857' },
                { icon: EnvelopeIcon,label: 'Correo',     value: 'info@ICPgt.com',href: 'mailto:info@ICPgt.com' },
                { icon: MapPinIcon,  label: 'Ubicación',  value: 'Guatemala, Guatemala', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                    style={{ background: '#0B1F3A' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#C9A84C' }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-700 font-medium text-sm hover:text-[#C9A84C] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { href: '#', icon: FaFacebook, label: 'Facebook' },
                { href: '#', icon: FaInstagram, label: 'Instagram' },
                { href: 'https://wa.me/5020000000', icon: FaWhatsapp, label: 'WhatsApp' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* ── Right: form ────────────────────────────── */}
          <Reveal direction="right">
            <div className="bg-white rounded shadow-sm border border-gray-100 p-8">

              {enviando ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-gray-100" />
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        borderWidth: 2,
                        borderStyle: 'solid',
                        borderColor: 'transparent',
                        borderTopColor: '#C9A84C',
                        animation: 'spin-cw 1s linear infinite',
                      }}
                    />
                  </div>
                  <p className="mt-4 text-gray-500 text-sm">Enviando mensaje...</p>
                </div>
              ) : (
                <>
                  {exito && (
                    <div className="mb-6 p-4 rounded text-sm font-medium text-center"
                         style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', color: '#059669' }}>
                      Mensaje enviado. Nos pondremos en contacto pronto.
                    </div>
                  )}

                  <form onSubmit={manejarEnvio} noValidate className="space-y-4">
                    {/* Nombre */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={manejarCambio}
                        className={inputCls('nombre')}
                        placeholder="Tu nombre"
                      />
                      {errores.nombre && <p className="text-[11px] text-red-500 mt-1">{errores.nombre}</p>}
                    </div>

                    {/* Tel + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          value={form.telefono}
                          onChange={manejarCambio}
                          className={inputCls('telefono')}
                          placeholder="Número"
                        />
                        {errores.telefono && <p className="text-[11px] text-red-500 mt-1">{errores.telefono}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Correo
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={manejarCambio}
                          className={inputCls('email')}
                          placeholder="email@ejemplo.com"
                        />
                        {errores.email && <p className="text-[11px] text-red-500 mt-1">{errores.email}</p>}
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Mensaje
                      </label>
                      <textarea
                        name="mensaje"
                        value={form.mensaje}
                        onChange={manejarCambio}
                        className={`${inputCls('mensaje')} h-32 resize-none`}
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                      {errores.mensaje && <p className="text-[11px] text-red-500 mt-1">{errores.mensaje}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-gold py-3 px-6 rounded text-xs uppercase tracking-widest"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
