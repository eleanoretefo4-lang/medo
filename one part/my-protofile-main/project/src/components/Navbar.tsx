import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', to: '/' },
  { label: 'OUR WORKS', to: '/works' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
  { label: 'LOGIN', to: '/login' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md shadow-lg shadow-black/20">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <NavLink to="/" className="relative font-extrabold tracking-tight select-none">
              <span className="text-2xl bg-gradient-to-r from-green-400 to-pink-500 bg-clip-text text-transparent">MA</span>
            </NavLink>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current mt-1.5" />
              <span className="block w-5 h-0.5 bg-current mt-1.5" />
            </button>

            <ul className="hidden md:flex items-center gap-2 text-sm font-semibold">
              {navItems.map((item) => (
                <li key={item.to} className="relative">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative block px-4 py-2 rounded-xl transition backdrop-blur-sm
                      ${isActive ? 'text-white' : 'text-white/85 hover:text-white'}`
                    }
                  >
                    {/* Active gradient pill */}
                    <span
                      className={({ isActive }: { isActive?: boolean }) =>
                        `pointer-events-none absolute inset-0 rounded-xl -z-10 transition-opacity duration-300
                        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}` as unknown as string
                      }
                    />
                    <span className="relative z-10">{item.label}</span>
                    {/* Underline gradient */}
                    <span className="pointer-events-none absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-green-400 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <ul className="grid gap-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block w-full rounded-xl px-4 py-3 text-sm font-semibold transition
                        ${isActive ? 'text-white bg-white/10 border border-white/15' : 'text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white'}`
                      }
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;