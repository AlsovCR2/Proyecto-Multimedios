import React, { useRef, useEffect, useState } from 'react';

const Ingredients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const ingredientsList = [
    {
      name: 'Tapa de dulce',
      origin: 'Preferiblemente de Turrialba, elaborada con caña de azúcar local.',
      quantity: '1/4 de tapa grande (aprox. 125g)'
    },
    {
      name: 'Cuajada fresca',
      origin: 'Producida con leche de la región de Turrialba.',
      quantity: '125g, escurrida'
    },
    {
      name: 'Agua',
      origin: 'Para disolver el tapa de dulce.',
      quantity: '1/8 de taza (2 cucharadas)'
    },
    {
      name: 'Canela en polvo (opcional)',
      origin: 'Especia tradicional que realza el sabor.',
      quantity: 'Una pizca muy pequeña'
    },
    {
      name: 'Ralladura de cítricos (opcional)',
      origin: 'De limón o naranja fresca local.',
      quantity: 'Ralladura de 1/4 de fruta'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false); // Reset animation
          setTimeout(() => setAnimate(true), 10); // Trigger animation
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) return;
    const timeout = setTimeout(() => setAnimate(false), 1200);
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <section id="ingredientes" className="w-full min-h-screen flex items-center justify-center bg-amber-50">
      <div ref={sectionRef} className="w-full max-w-5xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-amber-900 mb-8 text-center font-montserrat ${animate ? 'animate-zoom-in' : ''}`}>
          Ingredientes
        </h2>
        <div className={`bg-white rounded-lg shadow-lg p-6 mb-8 ${animate ? 'animate-fade-in-scale' : ''}`}>
          <p className="text-gray-700 mb-4 font-roboto">
            Esta receta tradicional utiliza ingredientes locales de la más alta
            calidad, destacando el auténtico tapa de dulce de Turrialba y la
            cuajada fresca de la región. Los ingredientes opcionales permiten
            personalizar el sabor según los gustos individuales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {ingredientsList.map((ingredient, index) => (
              <div
                key={index}
                className={`border border-amber-200 rounded-lg p-4 bg-amber-50 transition-transform duration-700 ${
                  animate ? 'animate-slide-in-right' : ''
                }`}
                style={{ animationDelay: animate ? `${0.15 * index + 0.2}s` : undefined, animationFillMode: 'both' }}
              >
                <h3 className="font-bold text-amber-800 text-lg font-opensans">
                  {ingredient.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 font-roboto">
                  {ingredient.quantity}
                </p>
                <p className="text-gray-700 italic font-roboto">{ingredient.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;