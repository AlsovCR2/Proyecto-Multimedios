import React, { useRef, useEffect, useState } from 'react';
import imgReceta from '../assets/Receta_ Dulce de Tapa con Cuajada 2.jpg';

const Receta = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

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

  // Reinicia la animación cada vez que la sección entra en pantalla
  useEffect(() => {
    if (!animate) return;
    const timeout = setTimeout(() => setAnimate(false), 1000); // Duración de la animación
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <section id="receta" className="w-full min-h-screen flex items-center justify-center bg-amber-50">
      <div ref={sectionRef} className="flex flex-col md:flex-row gap-8 items-center w-full max-w-5xl mx-auto px-4">
        <div className="md:w-1/2">
          <h2 className={`text-3xl font-bold text-amber-900 mb-4 font-montserrat ${animate ? 'animate-fade-in-down' : ''}`}>
            Tapa de Dulce con Cuajada
          </h2>
          <p
            className={`text-lg mb-4 text-gray-700 font-roboto ${animate ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: animate ? '0.2s' : undefined, animationFillMode: 'both' }}
          >
            Este postre tradicional mezcla el sabor dulce del "tapa de dulce"
            con la textura cremosa de la cuajada fresca,
            un tipo de queso suave. Es una delicia sencilla pero inolvidable que
            resalta los sabores de la región.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imgReceta}
            alt="Dulce de Tapa con Cuajada tradicional"
            className={`rounded-lg shadow-lg w-full h-[400px] object-cover ${animate ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: animate ? '0.4s' : undefined, animationFillMode: 'both' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Receta;