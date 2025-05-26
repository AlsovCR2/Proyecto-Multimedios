import React, { useRef, useEffect, useState } from 'react';

const Introduction = () => {
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

  useEffect(() => {
    if (!animate) return;
    const timeout = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timeout);
  }, [animate]);

  const handleScrollToReceta = () => {
    const recetaSection = document.getElementById('receta');
    if (recetaSection) {
      recetaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="introduccion"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-amber-50 rounded-xl shadow-lg mb-0"
      style={{ paddingTop: '0', paddingBottom: '0' }}
    >
      <div
        ref={sectionRef}
        className="w-full h-full flex flex-col items-center justify-center bg-amber-50"
      >
        {/* Título llamativo */}
        <h1
          className={`font-montserrat text-5xl md:text-7xl font-extrabold text-amber-900 text-center mb-6 leading-tight ${animate ? 'animate-fade-in-down' : ''}`}
        >
          Una Aventura Gastronómica <span className="text-amber-500">Turrialbeña</span>
        </h1>
        {/* Subtítulo */}
        <p
          className={`font-opensans text-2xl md:text-3xl text-amber-800 text-center mb-10 max-w-3xl mx-auto ${animate ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: animate ? '0.3s' : undefined, animationFillMode: 'both' }}
        >
          Descubre los auténticos sabores del <span className="font-semibold">Dulce de Tapa con Cuajada</span>, una receta ancestral que representa la esencia y dulzura de nuestra tierra.
        </p>
        {/* Botón llamativo */}
        <button
          onClick={handleScrollToReceta}
          className={`bg-amber-500 hover:bg-amber-600 text-white font-bold px-10 py-4 rounded-full text-xl shadow-xl transition-colors flex items-center gap-2 font-opensans ${animate ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: animate ? '0.6s' : undefined, animationFillMode: 'both' }}
        >
          Descubra la receta
          <span className="text-2xl animate-bounce-slow">↓</span>
        </button>
      </div>
    </section>
  );
};

export default Introduction;