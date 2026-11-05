import { Link } from 'react-router-dom';

interface LogoProps {
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className="inline-flex min-h-11 items-center rounded-lg"
      aria-label="ANX Studio Digital home"
    >
      <img
        src="/assets/brand/anx-logo.png"
        alt="ANX Studio"
        width="720"
        height="170"
        className={compact ? 'h-auto w-[8.5rem]' : 'h-auto w-[9.5rem] sm:w-[10.75rem]'}
      />
    </Link>
  );
}
