import React, { useState } from 'react';
import NavNeonButton from './NavNeonButton';

interface NavItem {
  label: string;
  to: string;
}

const baseItems: NavItem[] = [
  { label: 'HOME', to: '/' },
  { label: 'OUR WORKS', to: '/works' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
  { label: 'LOGIN', to: '/login' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'green' | 'pink'>('green'); // toggle: all like Contact (green) or WhatsApp (pink)

  const toggleMode = () => setMode((m) => (m === 'green' ? 'pink' : 'green'));

  return (
    <nav className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md shadow-lg shadow-black/20">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="/" className="relative font-extrabold tracking-tight select-none">
              <span className="text-2xl bg-gradient-to-r from-green-400 to-pink-500 bg-clip-text text-transparent">MA</span>
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleMode}
                className="hidden md:inline-flex items-center justify-center h-9 px-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/20 bg-white/5 hover:bg-white/10 transition text-xs"
                title="Toggle nav buttons style"
              >
                {mode === 'green' ? 'All: Contact' : 'All: WhatsApp'}
              </button>

              <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
              >
                <span className="block w-5 h-0.5 bg-current" />
                <span className="block w-5 h-0.5 bg-current mt-1.5" />
                <span className="block w-5 h-0.5 bg-current mt-1.5" />
              </button>
            </div>

            <ul className="hidden md:flex items-center gap-3 text-sm font-semibold">
              {baseItems.map((item) => (
                <li key={item.to}>
                  <NavNeonButton to={item.to} variant={mode}>{item.label}</NavNeonButton>
                </li>
              ))}
            </ul>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex justify-end pb-3">
                <button
                  onClick={() => setMode((m) => (m === 'green' ? 'pink' : 'green'))}
                  className="inline-flex items-center justify-center h-9 px-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/20 bg-white/5 hover:bg-white/10 transition text-xs"
                >
                  {mode === 'green' ? 'All: Contact' : 'All: WhatsApp'}
                </button>
              </div>
              <ul className="grid gap-2">
                {baseItems.map((item) => (
                  <li key={item.to}>
                    <NavNeonButton to={item.to} variant={mode} className="w-full justify-center" onClick={() => setOpen(false)}>
                      {item.label}
                    </NavNeonButton>
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