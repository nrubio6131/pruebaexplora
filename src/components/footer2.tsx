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

export default function Footer() {
  return (
    <footer className="bg-[#1A535C] text-white py-25"> {/* Aumentamos el padding vertical */}
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8 mt-8"> {/* Añadimos margen superior */}
          {renderLogo('/images/EXPLORALOGO.JPG')}
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-[#4ECDC4] hover:text-[#F7FFF7] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56v14.91c0 .98-.81 1.78-1.78 1.78H1.78C.8 21.25 0 20.45 0 19.47V4.56C0 3.58.8 2.78 1.78 2.78h20.44c.98 0 1.78.8 1.78 1.78zM9.72 18.03V9.97H7.03v8.06h2.69zm-1.35-9.16c.93 0 1.51-.63 1.51-1.42-.02-.81-.58-1.42-1.48-1.42-.9 0-1.51.61-1.51 1.42 0 .79.57 1.42 1.45 1.42h.03zm10.43 9.16v-4.54c0-2.43-1.3-3.56-3.03-3.56-1.39 0-2 .78-2.34 1.32v-1.13h-2.69s.04.91 0 8.06h2.69v-4.5c0-.24.03-.48.09-.66.2-.48.64-.98 1.4-.98.98 0 1.38.75 1.38 1.85v4.29h2.69z"/>
            </svg>
          </a>
          <a href="#" className="text-[#4ECDC4] hover:text-[#F7FFF7] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 5.924c-.806.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.027 9.027 0 01-2.86 1.09 4.506 4.506 0 00-7.677 4.108 12.8 12.8 0 01-9.29-4.71 4.506 4.506 0 001.394 6.014 4.49 4.49 0 01-2.04-.563v.057a4.506 4.506 0 003.616 4.415 4.52 4.52 0 01-2.034.077 4.507 4.507 0 004.21 3.13 9.037 9.037 0 01-5.6 1.93c-.364 0-.724-.02-1.08-.063a12.75 12.75 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.195-.004-.39-.013-.584a9.172 9.172 0 002.26-2.34z"/>
            </svg>
          </a>
          <a href="#" className="text-[#4ECDC4] hover:text-[#F7FFF7] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 3.44 8.1 7.92 9.96v-7.03h-2.38v-2.93h2.38v-2.24c0-2.36 1.44-3.66 3.56-3.66 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.73-1.53 1.48v1.77h2.62l-.42 2.93h-2.2v7.03c4.48-1.86 7.92-5.54 7.92-9.96 0-5.5-4.46-9.96-9.96-9.96z"/>
            </svg>
          </a>
        </div>

        {/* Texto del Footer */}
        <p className="text-center text-sm text-[#F7FFF7] mb-8">
          &copy; 2025 Servicios Migratorios Canadá. Todos los derechos reservados.
        </p>

        {/* Enlaces Legales */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-[#4ECDC4] hover:text-[#F7FFF7] transition-colors text-sm">
            Aviso Legal
          </a>
          <a href="#" className="text-[#4ECDC4] hover:text-[#F7FFF7] transition-colors text-sm">
            Política de Privacidad y Cookies
          </a>
          <a href="#" className="text-[#4ECDC4] hover:text-[#F7FFF7] transition-colors text-sm">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
}