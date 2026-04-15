import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import logo from '/src/assets/LogoDarck.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0B1F3A' }} className="text-gray-300">
      {/* Gold top accent line */}
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
                className="w-9 h-9 flex items-center justify-center rounded border transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  color: '#94A3B8',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
                  e.currentTarget.style.color = '#C9A84C';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
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
                  className="flex items-center gap-2 text-gray-400 hover:text-[#C9A84C] transition-colors group"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
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
            <li className="flex items-center gap-3">
              <PhoneIcon className="w-4 h-4 flex-shrink-0" style={{ color: '#C9A84C' }} />
              <a
                href="tel:+50200000000"
                className="text-gray-400 hover:text-[#C9A84C] transition-colors"
              >
                +502 0000-0000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="w-4 h-4 flex-shrink-0" style={{ color: '#C9A84C' }} />
              <span className="text-gray-400">info@ICPgt.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
              <span className="text-gray-400">Guatemala, Guatemala</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-4 text-center text-xs text-gray-600">
        © {year} ICP GT. Todos los derechos reservados.
      </div>
    </footer>
  );
}
