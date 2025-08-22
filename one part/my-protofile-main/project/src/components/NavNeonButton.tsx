import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavNeonButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'green' | 'pink';
  className?: string;
  onClick?: () => void;
}

const NavNeonButton: React.FC<NavNeonButtonProps> = ({ to, children, variant = 'green', className = '', onClick }) => {
  const baseClasses = "group relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-2";
  const variantClasses = {
    green: "bg-gradient-to-r from-green-400/20 to-green-500/20 border-2 border-green-400/50 text-green-400",
    pink: "bg-gradient-to-r from-pink-400/20 to-pink-500/20 border-2 border-pink-400/50 text-pink-400",
  } as const;

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {/* base gleam + beam */}
      <span className={`btn-gleam ${variant === 'green' ? 'btn-gleam-green' : 'btn-gleam-pink'} group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-150`} aria-hidden="true" />
      <span className="btn-gleam btn-gleam-blue opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-150" aria-hidden="true" />
      <span className="btn-beam opacity-0 group-hover:opacity-60 group-active:opacity-70 transition-opacity duration-150" aria-hidden="true" />

      {/* blue moving sweep only on hover/active */}
      <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="h-full w-1/3 translate-x-[-150%] animate-sweep opacity-0 group-hover:opacity-70 group-active:opacity-80 bg-gradient-to-r from-blue-400/50 via-blue-300/40 to-transparent transition-opacity duration-150" />
      </span>

      <span className="relative z-10 group-hover:text-blue-400 group-active:text-blue-400">{children}</span>

      {/* outer glow swap */}
      <span className={`absolute -inset-1 rounded-full blur-2xl pointer-events-none opacity-60 animate-breathe ${variant === 'green' ? 'bg-gradient-to-r from-green-400/50 to-green-500/50' : 'bg-gradient-to-r from-pink-400/50 to-pink-500/50'} group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-150`} aria-hidden="true" />
      <span className="absolute -inset-1 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-60 group-active:opacity-70 bg-gradient-to-r from-blue-400/50 to-blue-500/50 animate-breathe transition-opacity duration-150" aria-hidden="true" />

      {/* full blue hover/active overlay for bg/border */}
      <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-blue-400 group-active:ring-blue-400 transition duration-150" aria-hidden="true" />
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-150 bg-gradient-to-r from-blue-400/20 to-blue-500/20" aria-hidden="true" />
    </NavLink>
  );
};

export default NavNeonButton;