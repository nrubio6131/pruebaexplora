import Header from '../components/header'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div>
      <Header />

      {/* Sección de bienvenida */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Bienvenidos a Servicios Migratorios Canadá</h1>
        <p className="mt-4 text-lg">Tu guía confiable en trámites migratorios en Canadá.</p>
      </section>

      {/* Servicios */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Consultoría Migratoria</h3>
            <p className="mt-4">Asesoría personalizada para obtener tu visa, permiso de trabajo, y más.</p>
          </div>
          <div className="bg-gray-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Renovación de Documentos</h3>
            <p className="mt-4">Te ayudamos con la renovación de tu residencia permanente y otros documentos.</p>
          </div>
          <div className="bg-gray-500 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Asesoría para Residencia Permanente</h3>
            <p className="mt-4">Te guiamos en el proceso para obtener tu residencia permanente en Canadá.</p>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">¿Quiénes Somos?</h2>
        <p className="text-center text-lg mx-auto max-w-2xl">
          Somos un equipo de expertos en inmigración comprometidos a brindarte la mejor asesoría y acompañamiento en todo el proceso de inmigración a Canadá.
        </p>
      </section>

      {/* Contacto */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Contáctanos</h2>
        <div className="max-w-md mx-auto">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <label className="block mb-4">
              <span className="text-gray-700">Nombre</span>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Correo Electrónico</span>
              <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Mensaje</span>
              <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded"></textarea>
            </label>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg">Enviar Mensaje</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}