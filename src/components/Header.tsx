import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="bg-amber-800 text-white sticky top-0 z-50 shadow-md font-montserrat">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1
            className="text-2xl font-bold cursor-pointer hover:text-amber-300 transition-colors font-montserrat"
            onClick={() => scrollToSection('introduccion')}
          >
            Sabores de Turrialba
          </h1>
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          {/* Desktop navigation */}
          <nav className="hidden md:block font-opensans">
            <ul className="flex space-x-6">
              <li>
                <button onClick={() => scrollToSection('receta')} className="hover:text-amber-200 transition-colors">
                  Receta
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ingredientes')} className="hover:text-amber-200 transition-colors">
                  Ingredientes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pasos')} className="hover:text-amber-200 transition-colors">
                  Paso a Paso
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('registro')} className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded-md transition-colors font-opensans">
                  Registrarse
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {/* Mobile navigation */}
        {isMenuOpen && <nav className="md:hidden pb-4 font-opensans">
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('receta')} className="block w-full text-left py-2 hover:text-amber-200 transition-colors">
                  Receta
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ingredientes')} className="block w-full text-left py-2 hover:text-amber-200 transition-colors">
                  Ingredientes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pasos')} className="block w-full text-left py-2 hover:text-amber-200 transition-colors">
                  Paso a Paso
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('registro')} className="block w-full text-center bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded-md transition-colors font-opensans">
                  Registrarse
                </button>
              </li>
            </ul>
          </nav>}
      </div>
    </header>;
};
export default Header;