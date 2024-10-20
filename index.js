import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-gray-800 shadow-md py-4' : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">𝔹𝕌𝕃𝕃 𝔽𝔸𝕄𝕀𝕃𝕐</a>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Servicios</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Nosotros</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contacto</a>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-800 p-4">
            <a href="#" className="block py-2 hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#" className="block py-2 hover:text-orange-500 transition-colors">Servicios</a>
            <a href="#" className="block py-2 hover:text-orange-500 transition-colors">Nosotros</a>
            <a href="#" className="block py-2 hover:text-orange-500 transition-colors">Contacto</a>
          </nav>
        )}
      </header>

      <main className="pt-24">
        <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img src="/placeholder.svg?height=1080&width=1920" alt="Fondo Metalico" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mejorando la Experiencia Gastronómica a Través de Menús Digitales</h1>
            <p className="text-xl md:text-2xl mb-8">Un enfoque innovador para la industria</p>
            <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Explorar más
            </a>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg?height=400&width=600" alt="Imagen de menú digital" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Menús Interactivos y Dinámicos</h2>
              <p className="text-gray-600 mb-6">
                Los menús digitales permiten una experiencia interactiva para los usuarios, adaptándose a cualquier dispositivo y con actualizaciones instantáneas de los platos y precios.
              </p>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors">
                Descubre más
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg?height=400&width=600" alt="Imagen de software de menú digital" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Facilidad de Uso para Restaurantes</h2>
              <p className="text-gray-600 mb-6">
                Implementar un menú digital es sencillo y eficiente. Nuestro software está diseñado para que cualquier restaurante pueda empezar a usarlo en minutos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-200">
          <div className="container mx-auto text-center">
            <blockquote className="text-xl italic text-gray-600 mb-4">
              "El menú digital de Bull Family ha transformado la forma en que nuestros clientes exploran los platos. ¡Es fácil de usar y muy dinámico!"
            </blockquote>
            <cite className="text-gray-800 font-semibold">- Restaurante Gourmet</cite>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Servicios</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li>Celular: 323 9604096</li>
                <li>Email: bullfamily00@gmail.com</li>
                <li>Ubicación: Las Ferias, Bogotá DC.</li>
              </ul>
            </div>
            <div>
              <img src="/placeholder.svg?height=100&width=200" alt="Logo Empresa" className="mb-4" />
              <p>&copy; 2024 Bull Family. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}