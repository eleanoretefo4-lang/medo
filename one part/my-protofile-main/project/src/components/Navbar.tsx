import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'OUR WORKS', href: '#works' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
  { label: 'LOGIN', href: '#login' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md shadow-lg shadow-black/20">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="relative font-extrabold tracking-tight select-none">
              <span className="text-2xl bg-gradient-to-r from-green-400 to-pink-500 bg-clip-text text-transparent">MA</span>
            </a>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current mt-1.5" />
              <span className="block w-5 h-0.5 bg-current mt-1.5" />
            </button>

            <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative text-white/85 hover:text-white transition"
                  >
                    <span>{item.label}</span>
                    <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <ul className="grid gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block w-full rounded-xl px-4 py-3 text-sm font-semibold text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
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