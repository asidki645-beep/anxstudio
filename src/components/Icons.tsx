import type { SVGProps } from 'react';
import type { CategoryKey } from '../types';

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16.5h.01" />
    </svg>
  );
}

export function CategoryIcon({ category, ...props }: IconProps & { category: CategoryKey }) {
  if (category === 'skills') {
    return (
      <svg {...defaults} {...props}>
        <path d="m12 3 7.5 4.3v9.4L12 21l-7.5-4.3V7.3L12 3Z" />
        <path d="m4.5 7.3 7.5 4.4 7.5-4.4M12 11.7V21" />
      </svg>
    );
  }

  if (category === 'prompts') {
    return (
      <svg {...defaults} {...props}>
        <path d="m5 3 13 8-6 1.5L9.5 19 5 3Z" />
        <path d="m12 12.5 4.5 4.5" />
      </svg>
    );
  }

  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4V8Z" />
    </svg>
  );
}
