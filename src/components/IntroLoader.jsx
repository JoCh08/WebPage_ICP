import { useState, useEffect } from 'react';
import ICPLogo from '../animation/ICPLogo.jsx';

export const SESSION_KEY = 'icp_intro_shown';

export default function IntroLoader({ onDone }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const tFade = setTimeout(() => setExiting(true), 1900);
    const tDone = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1');
      onDone?.();
    }, 2600);
    return () => { clearTimeout(tFade); clearTimeout(tDone); };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:    '#0B1F3A',
        opacity:       exiting ? 0 : 1,
        transition:    'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-bg" style={{ opacity: 0.35 }} />

      {/* Diagonal stripe */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(-55deg, rgba(201,168,76,0.04) 0px, rgba(201,168,76,0.04) 1px, transparent 1px, transparent 28px)',
        }}
      />

      {/* Scan line — engineering aesthetic */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.25) 40%, rgba(201,168,76,0.25) 60%, transparent 100%)',
          animation:  'scanLine 2.8s ease-in-out 0.3s both',
        }}
      />

      {/* ICP Logo — scales in with spring */}
      <div
        className="relative z-10"
        style={{ animation: 'introScale 0.65s cubic-bezier(0.34,1.56,0.64,1) 0.1s both' }}
      >
        <ICPLogo />
      </div>

      {/* Progress bar */}
      <div
        className="relative z-10 mt-12 overflow-hidden rounded-full"
        style={{ width: 140, height: 1, background: 'rgba(255,255,255,0.07)' }}
      >
        <div
          style={{
            height:     '100%',
            background: 'linear-gradient(90deg, #C9A84C, #E2C97A)',
            animation:  'loader-bar 1.9s ease-out forwards',
          }}
        />
      </div>

      {/* Corner accents — frame de ingeniería */}
      {[
        { top: 24,    left:  24,    borderRadius: '2px 0 0 0', border: '2px solid',  borderRight: 'none', borderBottom: 'none' },
        { top: 24,    right: 24,    borderRadius: '0 2px 0 0', border: '2px solid',  borderLeft:  'none', borderBottom: 'none' },
        { bottom: 24, left:  24,    borderRadius: '0 0 0 2px', border: '2px solid',  borderRight: 'none', borderTop:    'none' },
        { bottom: 24, right: 24,    borderRadius: '0 0 2px 0', border: '2px solid',  borderLeft:  'none', borderTop:    'none' },
      ].map((style, i) => (
        <div
          key={i}
          className="absolute w-7 h-7 pointer-events-none"
          style={{
            ...style,
            borderColor: 'rgba(201,168,76,0.45)',
            animation:   `cornerFadeIn 0.5s ease ${0.3 + i * 0.07}s both`,
          }}
        />
      ))}
    </div>
  );
}
