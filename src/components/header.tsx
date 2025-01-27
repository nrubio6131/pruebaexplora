export default function Header() {
    return (
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Explora Canada</h1>
          <nav>
            <a href="#home" className="px-4 hover:underline">Inicio</a>
            <a href="#services" className="px-4 hover:underline">Servicios</a>
            <a href="#contact" className="px-4 hover:underline">Contacto</a>
          </nav>
        </div>
      </header>
    )
  }