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
  const baseClasses = "group relative inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variantClasses = {
    green: "bg-gradient-to-r from-green-400/20 to-green-500/20 border-2 border-green-400/50 text-green-400 hover:text-blue-400 hover:border-blue-400",
    pink: "bg-gradient-to-r from-pink-400/20 to-pink-500/20 border-2 border-pink-400/50 text-pink-400 hover:text-blue-400 hover:border-blue-400",
  } as const;

  return (
    <NavLink to={to} onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Inner animated flow layer (color-matched) */}
      <span className={`btn-inner-flow ${variant === 'green' ? 'btn-inner-green' : 'btn-inner-pink'}`} aria-hidden="true" />

      {/* Inner moving sweep highlight: green/pink base and blue on hover */}
      <span className="absolute inset-0 rounded-full overflow-hidden" aria-hidden="true">
        <span className={`h-full w-1/3 translate-x-[-150%] animate-sweep opacity-60 ${variant === 'green' ? 'bg-gradient-to-r from-green-400/40 via-green-300/30 to-transparent' : 'bg-gradient-to-r from-pink-400/40 via-pink-300/30 to-transparent'}`} />
        <span className="h-full w-1/3 translate-x-[-150%] animate-sweep opacity-0 group-hover:opacity-60 bg-gradient-to-r from-blue-400/40 via-blue-300/30 to-transparent transition-opacity duration-300" />
      </span>

      <span className="relative z-10">{children}</span>

      {/* Outer breathing glow: base color, turns blue on hover */}
      <span className={`absolute -inset-1 rounded-full blur-2xl pointer-events-none opacity-60 animate-breathe ${variant === 'green' ? 'bg-gradient-to-r from-green-400/50 to-green-500/50' : 'bg-gradient-to-r from-pink-400/50 to-pink-500/50'} group-hover:opacity-0 transition-opacity duration-300`} aria-hidden="true" />
      <span className="absolute -inset-1 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-60 bg-gradient-to-r from-blue-400/50 to-blue-500/50 animate-breathe transition-opacity duration-300" aria-hidden="true" />
    </NavLink>
  );
};

export default NavNeonButton;