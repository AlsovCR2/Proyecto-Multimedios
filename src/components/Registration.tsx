import React, { useRef, useEffect, useState } from 'react';

const Registration = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Mapea los nombres a los que espera el backend
  const payload = {
  idUsuario: "",
  nombre: formData.name,
  correoElectronico: formData.email,
  numeroTelefono: formData.phone
};
  try {
    const response = await fetch('https://api-backend-a4crheeqdbcxf4e3.canadacentral-01.azurewebsites.net/multimedios/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.text();
    if (response.ok) {
      alert('¡Gracias por registrarte! Pronto recibirás más recetas tradicionales.');
      setFormData({ name: '', email: '', phone: '' });
    } else {
      alert('Hubo un error al registrar: ' + data);
    }
  } catch (error) {
    alert('Error de conexión. Intenta más tarde.');
  }
};

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
    const timeout = setTimeout(() => setAnimate(false), 1200);
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <section id="registro" className="w-full min-h-screen flex items-center justify-center bg-amber-50">
      <div
        ref={sectionRef}
        className={`w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden ${
          animate ? 'animate-fade-in-scale' : ''
        }`}
      >
        <div className="md:flex">
          <div className={`md:w-1/2 bg-amber-800 text-white p-8 ${animate ? 'animate-slide-in-left' : ''}`} style={{ animationDelay: animate ? '0.2s' : undefined, animationFillMode: 'both' }}>
            <h2 className="text-2xl font-bold mb-4 font-montserrat">
              Únete a Nuestra Comunidad
            </h2>
            <p className="mb-6 font-roboto">
              Regístrate para recibir más recetas tradicionales, invitaciones a
              eventos gastronómicos y contenido exclusivo sobre la cocina
              costarricense.
            </p>
            <ul className="space-y-2 font-roboto">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-amber-300 mr-2"></div>
                <span>Recetas exclusivas cada semana</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-amber-300 mr-2"></div>
                <span>Consejos de chefs tradicionales</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-amber-300 mr-2"></div>
                <span>Información sobre ingredientes locales</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-amber-300 mr-2"></div>
                <span>Invitaciones a eventos culinarios</span>
              </li>
            </ul>
          </div>
          <div className={`md:w-1/2 p-8 ${animate ? 'animate-slide-in-right' : ''}`} style={{ animationDelay: animate ? '0.4s' : undefined, animationFillMode: 'both' }}>
            <h3 className="text-xl font-bold text-amber-900 mb-4 font-opensans">
              Formulario de Registro
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1 font-opensans">
                  Nombre completo
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-roboto" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1 font-opensans">
                  Correo electrónico
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-roboto" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1 font-opensans">
                  Teléfono (opcional)
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-roboto" />
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-md transition-colors font-opensans">
                Registrarme Ahora
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;