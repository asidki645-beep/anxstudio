import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PUBLIC_LIBRARY_ENABLED } from '../config/features';
import { CATEGORIES } from '../data/categories';
import { CloseIcon, MenuIcon } from './Icons';
import { Logo } from './Logo';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-semibold transition ${
    isActive ? 'text-brand-600' : 'text-ink-700 hover:text-brand-600'
  }`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="relative z-50 border-b border-transparent">
      <div className="page-shell flex min-h-[5.25rem] items-center justify-between gap-5 lg:min-h-[6.25rem]">
        <Logo />

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary navigation">
          <NavLink to="/open-source" className={navLinkClass}>
            GitHub
          </NavLink>
          {PUBLIC_LIBRARY_ENABLED &&
            CATEGORIES.map((category) => (
              <NavLink key={category.key} to={category.route} className={navLinkClass}>
                {category.label}
              </NavLink>
            ))}
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          {PUBLIC_LIBRARY_ENABLED && (
            <NavLink to="/library" className="button-secondary ml-2">
              Browse library
            </NavLink>
          )}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink-900 shadow-sm lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute left-4 right-4 top-[4.9rem] rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition lg:hidden ${
          menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav className="flex flex-col" aria-label="Mobile navigation">
          <NavLink to="/open-source" className={navLinkClass}>
            GitHub
          </NavLink>
          {PUBLIC_LIBRARY_ENABLED && (
            <>
              <NavLink to="/library" className={navLinkClass}>
                All resources
              </NavLink>
              {CATEGORIES.map((category) => (
                <NavLink key={category.key} to={category.route} className={navLinkClass}>
                  {category.label}
                </NavLink>
              ))}
            </>
          )}
          <div className="my-2 border-t border-slate-100" />
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
