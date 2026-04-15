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
      <div className="flex items-baseline" style={{ paddingTop: 'clamp(3.5rem, 8vw, 6rem)' }}>

        {/* I with helmet above */}
        <div className="relative inline-block">
          <img
            src={cascoImg}
            alt="Casco de seguridad ICP"
            className="icp-helmet absolute"
            style={{
              /* Scale with viewport: ~80px mobile → ~130px desktop */
              width: 'clamp(4.5rem, 9vw, 8rem)',
              height: 'auto',
              bottom: '88%',
              left: '50%',
              /* translateX(-50%) is embedded in the CSS keyframe */
            }}
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
