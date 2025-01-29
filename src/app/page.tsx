import Footer from '../components/footer';
import Header from '../components/header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FFF7]">
      <Header />

      {/* Sección de Bienvenida */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#1A535C] to-[#4ECDC4]">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Bienvenidos a Explora Canadá</h1>
          <p className="text-xl">Tu guía confiable en trámites migratorios en Canadá.</p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-[#F7FFF7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#1A535C]">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-[#4ECDC4] text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-[#1A535C] mb-4">Consultoría Migratoria</h3>
              <p className="text-[#2D2D2D]">Asesoría personalizada para obtener tu visa, permiso de trabajo, y más.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-[#4ECDC4] text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-[#1A535C] mb-4">Renovación de Documentos</h3>
              <p className="text-[#2D2D2D]">Te ayudamos con la renovación de tu residencia permanente y otros documentos.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-[#4ECDC4] text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-[#1A535C] mb-4">Asesoría para Residencia Permanente</h3>
              <p className="text-[#2D2D2D]">Te guiamos en el proceso para obtener tu residencia permanente en Canadá.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-[#4ECDC4] text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold text-[#1A535C] mb-4">Visa de turismo</h3>
              <p className="text-[#2D2D2D]">Te ayudamos a gestionar tu visa de turismo para que puedas disfrutar de todo lo que Canadá tiene para ofrecer, desde paisajes impresionantes hasta una cultura diversa. Nuestro equipo te guía a través de todos los requisitos y pasos del proceso.s</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-[#4ECDC4] text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-[#1A535C] mb-4">Visa de estudiante</h3>
              <p className="text-[#2D2D2D]">¿Estás listo para estudiar en Canadá? Te asesoramos en el proceso de solicitud de la visa de estudiante para que puedas comenzar tu carrera académica en instituciones de renombre internacional.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-[#4ECDC4] text-4xl mb-4">👨‍⚖️</div>
              <h3 className="text-xl font-semibold text-[#1A535C] mb-4">Asesoría para Nacionalidad</h3>
              <p className="text-[#2D2D2D]">Si estás buscando obtener la ciudadanía canadiense, nuestro equipo te proporciona el apoyo necesario para completar tu solicitud de nacionalidad, asegurándote de cumplir con todos los requisitos legales y administrativos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#1A535C]">¿Quiénes Somos?</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-lg text-[#2D2D2D]">
                Somos un equipo de expertos en inmigración comprometidos a brindarte la mejor asesoría y acompañamiento en todo el proceso de inmigración a Canadá.
              </p>
            </div>
            <div className="flex-1">
              <img src="https://media.istockphoto.com/id/1443245439/es/foto/reuni%C3%B3n-de-negocios-empresaria-mujer-mujer-oficina-retrato-trabajo-carrera-feliz-hombre-de.jpg?s=1024x1024&w=is&k=20&c=H10s8W2bRPVxNlNpiKw6uwkZEGEuEYDL8kvPHCBGaFI=" alt="Equipo" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-[#F7FFF7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#1A535C]">Contáctanos</h2>
          <div className="max-w-md mx-auto">
            <form className="bg-white p-8 rounded-xl shadow-lg">
              <label className="block mb-6">
                <span className="text-[#1A535C]">Nombre</span>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]" />
              </label>
              <label className="block mb-6">
                <span className="text-[#1A535C]">Correo Electrónico</span>
                <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]" />
              </label>
              <label className="block mb-6">
                <span className="text-[#1A535C]">Mensaje</span>
                <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"></textarea>
              </label>
              <button type="submit" className="w-full bg-[#4ECDC4] text-white p-2 rounded-md hover:bg-[#1A535C] transition-colors">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}