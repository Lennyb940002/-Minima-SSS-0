// Logo.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function Logo() {
  const location = useLocation();
  const isSportPage = location.pathname === '/sceance-sport';

  return (
    <Link
      to="/"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <img
        src={isSportPage ? "/src/image/lgogo.png" : "/src/image/logo.png"}
        alt="Logo"
        className="h-24 w-24"
      />
      <span
        className={`text-2xl font ${isSportPage ? 'text-black' : 'text-white'}`}
      >
        Minima
      </span>
    </Link>
  );
}