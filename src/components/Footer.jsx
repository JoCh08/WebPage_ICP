import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import logo from '/src/assets/Casco.webp';
import { CONTACTO, REDES } from '../constants/config';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: REDES.facebook,  icon: FaFacebook,  label: 'Facebook' },
    { href: REDES.instagram, icon: FaInstagram, label: 'Instagram' },
    { href: REDES.whatsapp,  icon: FaWhatsapp,  label: 'WhatsApp' },
  ];

  const contactItems = [
    { Icon: PhoneIcon,    value: CONTACTO.telefono,  href: CONTACTO.telefonoHref },
    { Icon: EnvelopeIcon, value: CONTACTO.email,     href: CONTACTO.emailHref },
    { Icon: MapPinIcon,   value: CONTACTO.direccion, href: null },
  ];

  return (
    <footer style={{ background: '#0B1F3A' }} className="text-gray-300">
      <div
        className="h-[3px]"
        style={{ background: 'linear-gradient(90deg, #C9A84C, #E2C97A, #C9A84C)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ── Brand ──────────────────────────────────── */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img src={logo} alt="ICP GT" className="h-10 w-auto" />
            <div>
              <span
                className="block text-white font-bold text-base"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ICP <span style={{ color: '#C9A84C' }}>GT</span>
              </span>
              <span className="block text-[10px] text-gray-500 tracking-[0.25em] uppercase">
                Ingeniería &amp; Construcción
              </span>
            </div>
          </Link>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Empresa especializada en ingeniería, construcción, supervisión y consultoría
            de proyectos con los más altos estándares técnicos.
          </p>

          <div className="flex gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded border transition-all duration-300"
                style={{
                  background:   'rgba(255,255,255,0.04)',
                  borderColor:  'rgba(255,255,255,0.1)',
                  color:        '#94A3B8',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
                  e.currentTarget.style.color       = '#C9A84C';
                  e.currentTarget.style.background  = 'rgba(201,168,76,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color       = '#94A3B8';
                  e.currentTarget.style.background  = 'rgba(255,255,255,0.04)';
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Navigation ─────────────────────────────── */}
        <div>
          <h4
            className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Navegación
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: '/',                   label: 'Inicio' },
              { to: '/sobre-nosotros',     label: 'Sobre Nosotros' },
              { to: '/nuestros-servicios', label: 'Nuestros Servicios' },
              { to: '/contactanos',        label: 'Contáctanos' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#C9A84C] transition-colors"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(201,168,76,0.3)' }}
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ────────────────────────────────── */}
        <div>
          <h4
            className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Contacto
          </h4>
          <ul className="space-y-4 text-sm">
            {contactItems.map(({ Icon, value, href }) => (
              <li key={value} className="flex items-center gap-3">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#C9A84C' }} />
                {href ? (
                  <a
                    href={href}
                    className="text-gray-400 hover:text-[#C9A84C] transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-gray-400">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-gray-600">
        © {year} ICP GT. Todos los derechos reservados.
      </div>
    </footer>
  );
}
