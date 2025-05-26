import React from 'react';
const Footer = () => {
  return <footer className="bg-amber-900 text-amber-100 py-12 font-roboto">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-montserrat">
              Sobre Don Pepe
            </h3>
            <p className="mb-4 font-roboto">
              Don José "Pepe" Rodríguez es un reconocido chef costarricense con
              más de 40 años preservando las recetas tradicionales de la región
              de Turrialba. Su pasión por la cocina autóctona lo ha convertido
              en un embajador de la gastronomía local.
            </p>
            <a href="https://ejemplo.com/don-pepe" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors inline-block font-opensans">
              Conocer más sobre Don Pepe →
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-montserrat">elguche.com</h3>
            <p className="mb-4 font-roboto">
              Plataforma dedicada a la preservación y difusión de la cultura
              gastronómica costarricense. Ofrecemos recetas, historias y
              conexiones con productores locales para mantener viva la tradición
              culinaria de Costa Rica.
            </p>
            <div className="space-y-2">
              <a href="https://elguche.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors block font-opensans">
                Visitar elguche.com
              </a>
              <a href="https://elguche.com/recetas" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors block font-opensans">
                Más recetas tradicionales
              </a>
              <a href="https://elguche.com/contacto" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors block font-opensans">
                Contactar con el equipo
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-amber-800 text-center">
          <p className="text-sm font-roboto">
            © {new Date().getFullYear()} elguche.com - Preservando la tradición
            culinaria de Costa Rica
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;