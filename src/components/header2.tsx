'use client';

import { useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const renderLogo = (src: string | StaticImport) => {
  return (
    <div className="flex justify-center items-center">
      <Image 
        src={src} 
        alt="Logo" 
        width={150} 
        height={40} 
        className="object-contain"
      />
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Logo */}
        <div className="flex justify-center mb-4"> {/* Logo centrado y con margen inferior */}
          {renderLogo('/images/EXPLORALOGO.JPG')}
        </div>

        {/* Menú de Navegación (Desktop) */}
        <nav className="hidden md:flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium">
                HOME
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium">
                SOBRE MI
              </a>
            </li>
            <li>
              <a href="#asesoria" className="text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium">
                ASESORÍA
              </a>
            </li>
            <li>
              <a href="#libro" className="text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium">
                EL LIBRO
              </a>
            </li>
            <li>
              <a href="#blog" className="text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium">
                BLOG
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium">
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>

        {/* Menú Hamburguesa (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#2D2D2D] hover:text-[#4ECDC4] focus:outline-none absolute top-4 right-4"
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
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#home"
                className="block text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#sobre-mi"
                className="block text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                SOBRE MI
              </a>
            </li>
            <li>
              <a
                href="#asesoria"
                className="block text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                ASESORÍA
              </a>
            </li>
            <li>
              <a
                href="#libro"
                className="block text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                EL LIBRO
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="block text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block text-[#2D2D2D] hover:text-[#4ECDC4] transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}