import cascoImg from '../assets/Casco.webp';
import './animationcss.css';

export default function ICPLogo() {
  const letterStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 'clamp(5rem, 12vw, 9rem)',
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: '-0.02em',
  };

  return (
    <div className="flex flex-col items-center" style={{ animation: 'fadeSlideUp 0.7s ease 0.1s both' }}>
      {/* ICP letters — padding-top reserves room for the floating helmet */}
      <div className="flex items-baseline pt-28 sm:pt-36 md:pt-44 lg:pt-48">

        {/* I with helmet above */}
        <div className="relative inline-block">
          <img
            src={cascoImg}
            alt="Casco de seguridad ICP"
            className="icp-helmet absolute h-auto w-28 sm:w-36 md:w-44 lg:w-48"
            style={{ bottom: '90%', left: '50%' }}
          />
          <span style={{ ...letterStyle, color: '#ffffff' }}>I</span>
        </div>

        <span style={{ ...letterStyle, color: '#C9A84C' }}>C</span>
        <span style={{ ...letterStyle, color: '#ffffff' }}>P</span>
      </div>

      {/* Subtitle */}
      <p
        className="text-xs md:text-sm tracking-[0.42em] uppercase font-semibold mt-3"
        style={{ color: '#C9A84C' }}
      >
        Ingeniería &nbsp;·&nbsp; Consultoría &nbsp;·&nbsp; Profesional
      </p>
    </div>
  );
}
