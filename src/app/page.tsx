'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Award, TrendingUp, Users } from 'lucide-react';

const BebidasLanding: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // app/page.tsx
  const dynamic = 'force-static';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['inicio', 'historia', 'productos', 'marcas', 'ccu', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const categories = [
    {
      name: 'Cervezas',
      brands: ['Norte', 'Heineken', 'Imperial', 'Salta', 'Miller', 'Schneider', 'Amstel'],
      color: '#2166b0'
    },
    {
      name: 'Aguas',
      brands: ['Villavicencio', 'Levite', 'Villa del Sur', 'Brío'],
      color: '#76c043'
    },
    {
      name: 'Vinos',
      brands: ['Colón', 'La Celia'],
      color: '#2166b0'
    },
    {
      name: 'Sidras',
      brands: ['1888', 'La Victoria', 'Real'],
      color: '#76c043'
    },
  ];

  const brandLogos = [
    { name: 'Norte', image: '/assets/Cervezas/norte.png' },
    { name: 'Heineken', image: '/assets/Cervezas/heineken.png' },
    { name: 'Imperial', image: '/assets/Cervezas/imperial.png' },
    { name: 'Villavicencio', image: '/assets/Aguas/villavicencio.png' },
    { name: 'Levite', image: '/assets/Aguas/levite.png' },
    { name: 'Colón', image: '/assets/Vinos/colon.png' },
    { name: 'La Celia', image: '/assets/Vinos/lacelia.png' },
    { name: '1888', image: '/assets/Cidras/1888.png' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        .gradient-border {
          position: relative;
        }

        .gradient-border::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #2166b0, #76c043);
          transition: width 0.3s ease;
        }

        .gradient-border:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="assets/discomeflogo.png"
                alt="DISCOMEF"
                className="h-24 w-auto object-contain transition-transform hover:scale-105 duration-300"
              />
            </div>

            {/* Menu Desktop - Centrado */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#inicio"
                onClick={(e) => smoothScroll(e, 'inicio')}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#2166b0] ${activeSection === 'inicio' ? 'text-[#2166b0]' : 'text-gray-900'
                  }`}
              >
                INICIO
              </a>
              <a
                href="#historia"
                onClick={(e) => smoothScroll(e, 'historia')}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#2166b0] ${activeSection === 'historia' ? 'text-[#2166b0]' : 'text-gray-900'
                  }`}
              >
                HISTORIA
              </a>
              <a
                href="#productos"
                onClick={(e) => smoothScroll(e, 'productos')}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#2166b0] ${activeSection === 'productos' ? 'text-[#2166b0]' : 'text-gray-900'
                  }`}
              >
                PRODUCTOS
              </a>
              <a
                href="#marcas"
                onClick={(e) => smoothScroll(e, 'marcas')}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#2166b0] ${activeSection === 'marcas' ? 'text-[#2166b0]' : 'text-gray-900'
                  }`}
              >
                MARCAS
              </a>
              <a
                href="#ccu"
                onClick={(e) => smoothScroll(e, 'ccu')}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#2166b0] ${activeSection === 'ccu' ? 'text-[#2166b0]' : 'text-gray-900'
                  }`}
              >
                CCU
              </a>
            </div>

            {/* Botón de Contacto */}
            <div className="hidden md:flex items-center">
              <button
                onClick={(e) => smoothScroll(e, 'contacto')}
                className="px-6 py-2.5 bg-[#2166b0] text-white text-sm font-medium rounded hover:bg-[#1a5490] transition-all duration-300 transform hover:scale-105"
              >
                Contacto
              </button>
            </div>

            {/* Menú Móvil */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-900" />
              ) : (
                <Menu size={24} className="text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <a href="#inicio" onClick={(e) => smoothScroll(e, 'inicio')} className="block text-gray-900 hover:text-[#2166b0] text-sm font-medium">INICIO</a>
              <a href="#historia" onClick={(e) => smoothScroll(e, 'historia')} className="block text-gray-900 hover:text-[#2166b0] text-sm font-medium">HISTORIA</a>
              <a href="#productos" onClick={(e) => smoothScroll(e, 'productos')} className="block text-gray-900 hover:text-[#2166b0] text-sm font-medium">PRODUCTOS</a>
              <a href="#marcas" onClick={(e) => smoothScroll(e, 'marcas')} className="block text-gray-900 hover:text-[#2166b0] text-sm font-medium">MARCAS</a>
              <a href="#ccu" onClick={(e) => smoothScroll(e, 'ccu')} className="block text-gray-900 hover:text-[#2166b0] text-sm font-medium">CCU</a>
              <button
                onClick={(e) => smoothScroll(e, 'contacto')}
                className="w-full px-6 py-2.5 bg-[#2166b0] text-white text-sm font-medium rounded hover:bg-[#1a5490] transition-all duration-300"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-20">
        <div className="w-full">
          {/* Video Container - Full Width */}
          <div className="relative w-full overflow-hidden animate-fadeInUp" style={{ height: '70vh', minHeight: '500px', maxHeight: '800px' }}>
            {/* Overlay gradient para mejor legibilidad si se añade texto sobre el video */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10 pointer-events-none"></div>

            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="assets/Video/discomefvideo.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Content Below Video */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mt-16 text-center animate-fadeInUp delay-200">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Las mejores marcas de bebidas para tu negocio. Servicio confiable y entregas puntuales en Tucumán.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={(e) => smoothScroll(e, 'productos')}
                  className="px-8 py-3 bg-[#2166b0] text-white hover:bg-[#1a5490] transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-lg"
                >
                  Ver Productos
                </button>
                <button
                  onClick={(e) => smoothScroll(e, 'contacto')}
                  className="px-8 py-3 border border-gray-300 text-gray-700 hover:border-[#2166b0] hover:text-[#2166b0] transition-all duration-300 text-sm font-medium transform hover:scale-105"
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="text-5xl font-light text-[#2166b0] mb-2 transition-transform duration-300 group-hover:scale-110">65+</div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-light text-[#76c043] mb-2 transition-transform duration-300 group-hover:scale-110">600+</div>
              <div className="text-sm text-gray-600">Colaboradores</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-light text-gray-900 mb-2 transition-transform duration-300 group-hover:scale-110">3</div>
              <div className="text-sm text-gray-600">Centros de Distribución</div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section id="historia" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Nuestra Historia</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#2166b0] to-[#76c043]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-[#2166b0]/20">
                <div className="absolute left-0 top-0 w-4 h-4 bg-[#2166b0] rounded-full transform -translate-x-[9px]"></div>
                <div className="mb-2 text-sm font-medium text-[#2166b0]">1960 - Los Inicios</div>
                <p className="text-gray-600 leading-relaxed">
                  Vicente y Ernesto Evangelista comenzaron en el barrio de Villa Urquiza en Buenos Aires con una pequeña distribución del Grupo Peñaflor, sentando las bases de lo que hoy es DISCOMEF SRL.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-[#76c043]/20">
                <div className="absolute left-0 top-0 w-4 h-4 bg-[#76c043] rounded-full transform -translate-x-[9px]"></div>
                <div className="mb-2 text-sm font-medium text-[#76c043]">2003 - Crecimiento Estratégico</div>
                <p className="text-gray-600 leading-relaxed">
                  Pasamos a formar parte de la red de Distribuidores oficiales de CCU y DANONE en Argentina, consolidando nuestra presencia en Buenos Aires y expandiendo constantemente nuestros territorios.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-[#2166b0]/20">
                <div className="absolute left-0 top-0 w-4 h-4 bg-[#2166b0] rounded-full transform -translate-x-[9px]"></div>
                <div className="mb-2 text-sm font-medium text-[#2166b0]">2023 - Expansión al Norte</div>
                <p className="text-gray-600 leading-relaxed">
                  CCU en conjunto con ADO nos otorgaron la oportunidad de expandir nuestros negocios al norte argentino, tomando la distribución oficial de Tucumán y Catamarca. Así nace DISCOMEF SRL.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#2166b0] transition-all duration-300 hover:shadow-lg">
                <h3 className="text-2xl font-normal text-gray-900 mb-4">Empresa Familiar</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  DISCOMEF SRL es una empresa familiar perteneciente al mismo grupo que DISTRIBUIDORA SERVIMAR SRL en Buenos Aires.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Con más de 65 años de experiencia en la comercialización y distribución de consumo masivo, hemos crecido constantemente gracias a nuestros valores, dedicación y compromiso con el servicio brindado a nuestros proveedores y clientes.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 hover:border-[#76c043] transition-all duration-300 hover:shadow-lg">
                <h3 className="text-2xl font-normal text-gray-900 mb-4">Inversión y Profesionalización</h3>
                <p className="text-gray-600 leading-relaxed">
                  Año tras año hemos invertido en tecnología, recursos humanos, flota de camiones y centros logísticos, profesionalizando todas nuestras áreas y formando equipos cada vez mejores para cumplir nuestros objetivos.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#2166b0]/5 hover:bg-[#2166b0]/10 transition-colors duration-300">
                  <div className="text-3xl font-light text-[#2166b0] mb-1">600+</div>
                  <div className="text-xs text-gray-600">Colaboradores</div>
                </div>
                <div className="text-center p-4 bg-[#76c043]/5 hover:bg-[#76c043]/10 transition-colors duration-300">
                  <div className="text-3xl font-light text-[#76c043] mb-1">80</div>
                  <div className="text-xs text-gray-600">Camiones</div>
                </div>
                <div className="text-center p-4 bg-[#2166b0]/5 hover:bg-[#2166b0]/10 transition-colors duration-300">
                  <div className="text-3xl font-light text-[#2166b0] mb-1">25K m²</div>
                  <div className="text-xs text-gray-600">Capacidad</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#2166b0]/5 to-[#76c043]/5 border-l-4 border-[#2166b0]">
            <p className="text-gray-700 leading-relaxed text-center lg:text-left">
              Actualmente conformamos un grupo con presencia en Buenos Aires, Tucumán y Catamarca, con 3 centros de distribución que nos posicionan como uno de los principales actores de distribución de consumo masivo a nivel nacional.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Nuestros Productos</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#2166b0] to-[#76c043]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group border border-gray-200 hover:border-[#2166b0] transition-all duration-300 p-8 relative overflow-hidden bg-white"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-0 transition-all duration-300 group-hover:h-full"
                  style={{ backgroundColor: category.color }}
                ></div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4 transition-colors group-hover:text-[#2166b0]">{category.name}</h3>
                <div className="space-y-2">
                  {category.brands.map((brand, idx) => (
                    <div key={idx} className="text-sm text-gray-600 transition-all duration-200 hover:text-gray-900 hover:translate-x-1">{brand}</div>
                  ))}
                </div>
                <button
                  onClick={(e) => smoothScroll(e, 'contacto')}
                  className="mt-6 text-[#2166b0] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Consultar <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="marcas" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Marcas con las que trabajamos</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#76c043] to-[#2166b0] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {brandLogos.map((brand, index) => (
              <div
                key={index}
                className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:border-[#2166b0] transition-all duration-300 bg-white group hover:shadow-md transform hover:-translate-y-1"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CCU Partnership Section */}
      <section id="ccu" className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                  Alianza Estratégica
                  <span className="block text-[#2166b0] mt-2 font-normal">con CCU</span>
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#2166b0] to-[#76c043]"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  DISCOMEF trabaja en conjunto con CCU (Compañía Cervecerías Unidas), una de las empresas de bebidas más importantes de Latinoamérica, para brindar productos de la más alta calidad a nuestros clientes.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-[#2166b0]/10 rounded-lg transition-colors group-hover:bg-[#2166b0]/20">
                      <Award className="text-[#2166b0]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Calidad Premium</h3>
                      <p className="text-sm text-gray-600">Productos de las marcas líderes respaldadas por CCU</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-[#76c043]/10 rounded-lg transition-colors group-hover:bg-[#76c043]/20">
                      <TrendingUp className="text-[#76c043]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Logística Eficiente</h3>
                      <p className="text-sm text-gray-600">Red de distribución optimizada para entregas puntuales</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-[#2166b0]/10 rounded-lg transition-colors group-hover:bg-[#2166b0]/20">
                      <Users className="text-[#2166b0]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Soporte Integral</h3>
                      <p className="text-sm text-gray-600">Asesoramiento y acompañamiento constante para tu negocio</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => smoothScroll(e, 'contacto')}
                  className="mt-8 px-8 py-3 bg-[#2166b0] text-white hover:bg-[#1a5490] transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-lg"
                >
                  Conocer Más
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2166b0] to-[#76c043] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white p-12 border border-gray-200 group-hover:border-[#2166b0] transition-all duration-300 hover:shadow-xl">
                  <img
                    src="assets/CCU.png"
                    alt="CCU"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-[#2166b0] to-[#1a5490] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#76c043] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#76c043] rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6">¿Listo para trabajar juntos?</h2>
          <p className="text-lg text-white/80 mb-8">
            Contactanos y descubre cómo podemos ayudar a tu negocio
          </p>
          <button
            onClick={(e) => smoothScroll(e, 'contacto')}
            className="px-8 py-3 bg-white text-[#2166b0] hover:bg-gray-100 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-xl"
          >
            Contactar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-16 px-6 lg:px-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src="assets/discomeflogo.png"
                alt="DISCOMEF"
                className="h-22 w-auto object-contain mb-4 transition-transform hover:scale-105 duration-300"
              />
              <p className="text-sm text-gray-600">
                Distribución & Comercialización Eficiente
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 mb-4 text-sm">Navegación</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button onClick={(e) => smoothScroll(e, 'inicio')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Inicio</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'productos')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Productos</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'marcas')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Marcas</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'ccu')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">CCU</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'contacto')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Contacto</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 mb-4 text-sm">Contacto</h5>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2 hover:text-[#2166b0] transition-colors group">
                  <Phone size={16} className="text-[#2166b0] transition-transform group-hover:scale-110" />
                  +54 381 123-4567
                </li>
                <li className="flex items-center gap-2 hover:text-[#76c043] transition-colors group">
                  <Mail size={16} className="text-[#76c043] transition-transform group-hover:scale-110" />
                  info@discomef.com
                </li>
                <li className="flex items-center gap-2 hover:text-[#2166b0] transition-colors group">
                  <MapPin size={16} className="text-[#2166b0] transition-transform group-hover:scale-110" />
                  Tucumán, Argentina
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 DISCOMEF. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BebidasLanding;