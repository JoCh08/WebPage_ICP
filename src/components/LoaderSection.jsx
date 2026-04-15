import ICPLogo from '../animation/ICPLogo.jsx';

/**
 * Branded splash / preloader.
 * `fading` prop triggers a 0.5 s opacity-out before the parent unmounts.
 */
export default function LoaderSection({ fading = false }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: '#0B1F3A',
        opacity:       fading ? 0 : 1,
        transition:    'opacity 0.5s ease',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* Blueprint grid — very subtle */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ICP logo with animated helmet */}
      <div className="relative z-10">
        <ICPLogo />
      </div>

      {/* Progress bar */}
      <div
        className="relative z-10 mt-14 h-px overflow-hidden"
        style={{ width: 160, background: 'rgba(255,255,255,0.08)' }}
      >
        <div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, #C9A84C, #E2C97A)',
            animation: 'loader-bar 2s ease-out forwards',
          }}
        />
      </div>
    </div>
  );
}
