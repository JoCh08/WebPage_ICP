import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import logo from '/src/assets/LogoDarck.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { path: '/',                  label: 'Inicio' },
    { path: '/sobre-nosotros',    label: 'Sobre Nosotros' },
    { path: '/nuestros-servicios',label: 'Servicios' },
    { path: '/contactanos',       label: 'Contáctanos' },
  ];

  // Track scroll position for transparent→solid transition on Home
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isTransparent ? 'transparent' : '#0B1F3A',
        boxShadow: isTransparent ? 'none' : '0 2px 24px rgba(0,0,0,0.4)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ─────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="ICP GT" className="h-11 w-auto" />
            <div className="leading-tight">
              <span
                className="block text-white font-bold text-base tracking-wide"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ICP <span style={{ color: '#C9A84C' }}>GT</span>
              </span>
              <span className="block text-[10px] text-gray-400 tracking-[0.25em] uppercase">
                Ingeniería &amp; Construcción
              </span>
            </div>
          </Link>

          {/* ── Desktop nav links ─────────────────────── */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(({ path, label }) => {
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className="relative group text-xs font-semibold tracking-widest uppercase"
                >
                  <span
                    className="transition-colors duration-300"
                    style={{ color: active ? '#C9A84C' : '#CBD5E1' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={e => (e.currentTarget.style.color = active ? '#C9A84C' : '#CBD5E1')}
                  >
                    {label}
                  </span>
                  <span
                    className="absolute -bottom-0.5 left-0 h-[2px] rounded transition-all duration-300"
                    style={{
                      background: '#C9A84C',
                      width: active ? '100%' : '0',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── Right: phone + socials ─────────────────── */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+50200000000"
              className="flex items-center gap-1.5 text-xs text-gray-300 transition-colors duration-300 hover:text-[#C9A84C]"
            >
              <PhoneIcon className="w-4 h-4" style={{ color: '#C9A84C' }} />
              +502 0000-0000
            </a>
            <div className="w-px h-4 bg-gray-700" />
            <a
              href="https://www.facebook.com/profile.php?id=61557099803974"
              target="_blank" rel="noreferrer" aria-label="Facebook"
              className="text-gray-500 hover:text-[#C9A84C] transition-colors"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5020000000"
              target="_blank" rel="noreferrer" aria-label="WhatsApp"
              className="text-gray-500 hover:text-[#C9A84C] transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>

          {/* ── Mobile toggle ─────────────────────────── */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden text-white p-2 rounded"
            aria-label="Menú"
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────── */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/10 px-4 py-4 space-y-1"
          style={{ background: '#0B1F3A' }}
        >
          {navLinks.map(({ path, label }) => {
            const active = pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="block px-4 py-2.5 rounded text-xs font-semibold tracking-widest uppercase transition-colors"
                style={{
                  color:      active ? '#C9A84C' : '#CBD5E1',
                  background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
                  borderLeft: active ? '3px solid #C9A84C' : '3px solid transparent',
                }}
              >
                {label}
              </Link>
            );
          })}
          <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10 px-4">
            <a href="tel:+50240293857" className="flex items-center gap-2 text-xs text-gray-400">
              <PhoneIcon className="w-4 h-4" style={{ color: '#C9A84C' }} />
              +502 0000-0000
            </a>
            <div className="flex gap-3">
              <a href="#" target="_blank" rel="noreferrer"
                 className="text-gray-500 hover:text-[#C9A84C] transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5020000000" target="_blank" rel="noreferrer"
                 className="text-gray-500 hover:text-[#C9A84C] transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
