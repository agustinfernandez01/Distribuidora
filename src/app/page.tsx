'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const BebidasLanding: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = ['inicio', 'productos', 'marcas', 'contacto'];
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="assets/DISCOMEF_LOGO.png"
                alt="DISCOMEF"
                className="h-12 w-auto object-contain transition-transform hover:scale-105 duration-300"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a 
                href="#inicio" 
                onClick={(e) => smoothScroll(e, 'inicio')} 
                className={`text-sm font-medium transition-colors gradient-border pb-1 ${activeSection === 'inicio' ? 'text-[#2166b0]' : 'text-gray-700 hover:text-[#2166b0]'}`}
              >
                Inicio
              </a>
              <a 
                href="#productos" 
                onClick={(e) => smoothScroll(e, 'productos')} 
                className={`text-sm font-medium transition-colors gradient-border pb-1 ${activeSection === 'productos' ? 'text-[#2166b0]' : 'text-gray-700 hover:text-[#2166b0]'}`}
              >
                Productos
              </a>
              <a 
                href="#marcas" 
                onClick={(e) => smoothScroll(e, 'marcas')} 
                className={`text-sm font-medium transition-colors gradient-border pb-1 ${activeSection === 'marcas' ? 'text-[#2166b0]' : 'text-gray-700 hover:text-[#2166b0]'}`}
              >
                Marcas
              </a>
              <a 
                href="#contacto" 
                onClick={(e) => smoothScroll(e, 'contacto')} 
                className={`text-sm font-medium transition-colors gradient-border pb-1 ${activeSection === 'contacto' ? 'text-[#2166b0]' : 'text-gray-700 hover:text-[#2166b0]'}`}
              >
                Contacto
              </a>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-3">
              <a href="#inicio" onClick={(e) => smoothScroll(e, 'inicio')} className="block text-gray-700 hover:text-[#2166b0] text-sm">Inicio</a>
              <a href="#productos" onClick={(e) => smoothScroll(e, 'productos')} className="block text-gray-700 hover:text-[#2166b0] text-sm">Productos</a>
              <a href="#marcas" onClick={(e) => smoothScroll(e, 'marcas')} className="block text-gray-700 hover:text-[#2166b0] text-sm">Marcas</a>
              <a href="#contacto" onClick={(e) => smoothScroll(e, 'contacto')} className="block text-gray-700 hover:text-[#2166b0] text-sm">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight animate-fadeInUp">
              Distribución & Comercialización
              <span className="block font-normal text-[#2166b0] mt-2">Eficiente</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fadeInUp delay-100">
              Las mejores marcas de bebidas para tu negocio. Servicio confiable y entregas puntuales en Tucumán.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-200">
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
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="text-5xl font-light text-[#2166b0] mb-2 transition-transform duration-300 group-hover:scale-110">25+</div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-light text-[#76c043] mb-2 transition-transform duration-300 group-hover:scale-110">10K+</div>
              <div className="text-sm text-gray-600">Clientes Satisfechos</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-light text-gray-900 mb-2 transition-transform duration-300 group-hover:scale-110">4</div>
              <div className="text-sm text-gray-600">Categorías Premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Nuestros Productos</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#2166b0] to-[#76c043]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group border border-gray-200 hover:border-[#2166b0] transition-all duration-300 p-8 relative overflow-hidden"
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
      <section id="marcas" className="py-20 px-6 lg:px-12 bg-gray-50">
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

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Distribución profesional
                <span className="block text-[#76c043] mt-2">para tu negocio</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="border-l-2 border-[#2166b0] pl-4">
                  En DISCOMEF nos especializamos en la distribución de bebidas de las mejores marcas del mercado. 
                  Ofrecemos un servicio confiable con entregas puntuales.
                </p>
                <p className="border-l-2 border-[#76c043] pl-4">
                  Trabajamos con cervezas premium, aguas de primera calidad, vinos selectos y sidras tradicionales. 
                  Nuestro compromiso es la satisfacción de nuestros clientes.
                </p>
              </div>
              <button 
                onClick={(e) => smoothScroll(e, 'contacto')}
                className="mt-8 px-8 py-3 border border-gray-300 text-gray-700 hover:border-[#2166b0] hover:text-[#2166b0] transition-all duration-300 text-sm font-medium transform hover:scale-105"
              >
                Más Información
              </button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2166b0] to-[#76c043] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1560963689-28c278cb4928?w=800&h=600&fit=crop" 
                alt="Distribución"
                className="w-full h-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
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
                src="assets/DISCOMEF_LOGO.png" 
                alt="DISCOMEF" 
                className="h-12 w-auto object-contain mb-4 transition-transform hover:scale-105 duration-300"
              />
              <p className="text-sm text-gray-600">
                Distribución & Comercialización Eficiente
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-gray-900 mb-4 text-sm">Productos</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button onClick={(e) => smoothScroll(e, 'productos')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Cervezas</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'productos')} className="hover:text-[#76c043] transition-all hover:translate-x-1 inline-block">Aguas</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'productos')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Vinos</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'productos')} className="hover:text-[#76c043] transition-all hover:translate-x-1 inline-block">Sidras</button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-gray-900 mb-4 text-sm">Navegación</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button onClick={(e) => smoothScroll(e, 'inicio')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Inicio</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'productos')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Productos</button></li>
                <li><button onClick={(e) => smoothScroll(e, 'marcas')} className="hover:text-[#2166b0] transition-all hover:translate-x-1 inline-block">Marcas</button></li>
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