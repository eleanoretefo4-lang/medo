import React from 'react';

const LogoMark: React.FC = () => {
  return (
    <a href="/" className="group relative inline-block select-none">
      {/* Outer soft glow */}
      <span className="absolute -inset-3 rounded-2xl blur-2xl opacity-70 pointer-events-none bg-gradient-to-tr from-green-400/30 via-pink-400/25 to-green-400/30 group-hover:opacity-90 transition" aria-hidden="true" />

      {/* Badge container with glass effect */}
      <span className="relative inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner shadow-black/20 group-hover:shadow-black/10 transition will-change-transform group-hover:-translate-y-0.5">
        {/* Animated gradient text */}
        <span className="relative z-10 text-2xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-pink-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
          MA
        </span>

        {/* Shine sweep */}
        <span className="pointer-events-none absolute inset-x-[-20%] -top-1 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="block h-full w-1/3 bg-white/25 blur-md rounded-full animate-sweep" />
        </span>

        {/* Inner ring highlight */}
        <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/15" aria-hidden="true" />
      </span>
    </a>
  );
};

export default LogoMark;