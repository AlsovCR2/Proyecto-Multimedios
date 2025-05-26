import React, { useRef, useEffect, useState } from 'react';

const StepByStep = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const steps = [
    {
      number: 1,
      title: 'Preparar la Tapa de Dulce',
      description:
        'En una olla pequeña, coloca el 1/4 de tapa de dulce y el agua. Cocina a fuego medio, revolviendo ocasionalmente, hasta que la tapa de dulce se disuelva por completo y se forme un almíbar espeso. Esto tomará aproximadamente 5-10 minutos.',
      tip: 'Si deseas, puedes agregar una pizca de canela o la ralladura de cítricos al almíbar para darle un toque especial.',
    },
    {
      number: 2,
      title: 'Añadir la Cuajada',
      description:
        'Reduce el fuego a bajo. Corta la cuajada en trozos pequeños y añádela al almíbar caliente. Cocina a fuego lento durante unos 3-5 minutos, revolviendo suavemente, hasta que la cuajada se caliente.',
      tip: 'Revuelve con cuidado para no deshacer demasiado la cuajada y mantener su textura.',
    },
    {
      number: 3,
      title: 'Servir el Postre',
      description:
        'Sirve el dulce de tapa con cuajada tibio o frío, según tu preferencia. La versatilidad de este postre permite disfrutarlo a cualquier temperatura.',
      tip: 'Si lo sirves frío, déjalo reposar a temperatura ambiente antes de refrigerar para que el almíbar no se cristalice.',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 10);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) return;
    const timeout = setTimeout(() => setAnimate(false), 1500);
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <section id="pasos" className="w-full min-h-screen flex items-center justify-center bg-amber-50">
      <div ref={sectionRef} className="w-full max-w-3xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-amber-900 mb-8 text-center font-montserrat ${animate ? 'animate-fade-in-down' : ''}`}>
          Preparación Paso a Paso
        </h2>
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className={`mb-10 transition-transform duration-700 ${
              animate ? 'animate-step-fade-in' : ''
            }`}
            style={{
              animationDelay: animate ? `${0.2 + idx * 0.2}s` : undefined,
              animationFillMode: 'both',
            }}
          >
            <div className="flex items-start">
              <div className="bg-amber-800 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-montserrat">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-2 font-opensans">
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-3 font-roboto">{step.description}</p>
                <div className="bg-amber-100 border-l-4 border-amber-500 p-3 rounded">
                  <p className="text-amber-800 font-medium text-sm font-roboto">
                    <span className="font-bold">Consejo:</span> {step.tip}
                  </p>
                </div>
              </div>
            </div>
            {step.number < steps.length && (
              <div className="ml-6 my-4 border-l-2 border-dashed border-amber-300 h-8"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepByStep;