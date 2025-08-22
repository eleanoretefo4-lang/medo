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
  const baseClasses = "group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3";
  const variantClasses = {
    green: "bg-gradient-to-r from-green-400/20 to-green-500/20 border-2 border-green-400/50 text-green-400 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25",
    pink: "bg-gradient-to-r from-pink-400/20 to-pink-500/20 border-2 border-pink-400/50 text-pink-400 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-400/25",
  } as const;

  const gleamClass = variant === 'green' ? 'btn-gleam-green' : 'btn-gleam-pink';

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className} group-hover:text-blue-400 group-hover:border-blue-400`}
    >
      {/* Match NeonButton structure: gleam + beam */}
      <span className={`btn-gleam ${gleamClass} group-hover:opacity-0 transition-opacity duration-300`} aria-hidden="true" />
      <span className="btn-gleam btn-gleam-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      <span className="btn-beam opacity-0 group-hover:opacity-60 transition-opacity duration-300" aria-hidden="true" />

      <span className="relative z-10">{children}</span>

      {/* Outer breathing glow matching variant + blue hover overlay */}
      <span className={`absolute -inset-1 rounded-full blur-2xl pointer-events-none opacity-60 animate-breathe ${variant === 'green' ? 'bg-gradient-to-r from-green-400/50 to-green-500/50' : 'bg-gradient-to-r from-pink-400/50 to-pink-500/50'} group-hover:opacity-0 transition-opacity duration-300`} aria-hidden="true" />
      <span className="absolute -inset-1 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-60 bg-gradient-to-r from-blue-400/50 to-blue-500/50 animate-breathe transition-opacity duration-300" aria-hidden="true" />
    </NavLink>
  );
};

export default NavNeonButton;