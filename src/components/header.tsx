'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image 
            src="/images/EXPLORALOGO.JPG" 
            alt="Logo" 
            width={150} 
            height={40} 
            className="object-contain"
          />
        </div>

        {/* Menú de Navegación (Desktop) */}
        <nav className="hidden md:flex space-x-10">
          <ul className="flex space-x-10 text-gray-700">
            <li>
              <a href="#servicios" className="text-lg font-semibold hover:text-[#4ECDC4] transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#quienes-somos" className="text-lg font-semibold hover:text-[#4ECDC4] transition-colors">
                ¿Quiénes Somos?
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón de Acción (Desktop) */}
        <a
          href="#contacto"
          className="hidden md:block bg-[#4ECDC4] text-white px-6 py-3 rounded-full hover:bg-[#1A535C] transition-colors font-medium text-lg"
        >
          Contáctanos
        </a>

        {/* Menú Hamburguesa (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#2D2D2D] hover:text-[#4ECDC4] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Menú Desplegable (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-sm">
          <ul className="flex flex-col space-y-6 p-6">
            <li>
              <a
                href="#servicios"
                className="block text-lg font-semibold text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors"
                onClick={toggleMenu}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#quienes-somos"
                className="block text-lg font-semibold text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors"
                onClick={toggleMenu}
              >
                ¿Quiénes Somos?
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block bg-[#4ECDC4] text-white px-6 py-3 rounded-full hover:bg-[#1A535C] transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
