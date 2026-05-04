import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Nosotros', 
      type: 'dropdown',
      items: [
        { name: '¿Quiénes somos?', href: '/#quienes-somos' },
        { name: 'Diferenciales', href: '/#diferenciales' },
        { name: 'Nuestros clientes', href: '/clientes' },
        { name: 'Certificaciones', href: '/#certificaciones' },
        { name: 'Casos de éxito', href: '/#casos-exito' },
      ]
    },
    { 
      name: 'Soluciones', 
      type: 'dropdown',
      items: [
        { name: 'ITSM & Gestión de Activos (GLPI)', href: '/soluciones/glpi' },
        { name: 'Monitorización de Infraestructura', href: '/soluciones/monitorizacion' },
        { name: 'Automatización de Procesos', href: '/soluciones/automatizacion' },
        { name: 'Redes y Conectividad', href: '/soluciones/redes' },
        { name: 'Seguridad y Vulnerabilidades', href: '/soluciones/seguridad' },
        { name: 'Backup y Almacenamiento', href: '/soluciones/backup' },
        { name: 'Virtualización y Contenedores', href: '/soluciones/virtualizacion' },
      ]
    },
    { name: 'Servicios', href: '/#servicios', type: 'link' },
    { name: 'Contacto', href: '/#contacto', type: 'link' }
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 h-[90px] flex items-center ${
      isScrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center group shrink-0"
        >
          <img 
            src="/image/Logov4.png" 
            alt="Consoltics Logo" 
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group lg:px-2 py-2"
              onMouseEnter={() => link.type === 'dropdown' && setActiveDropdown(link.name)}
              onMouseLeave={() => link.type === 'dropdown' && setActiveDropdown(null)}
            >
              {link.type === 'dropdown' ? (
                <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-cyan-accent transition-colors duration-300 py-1">
                  {link.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link 
                  to={link.href!} 
                  onClick={() => handleLinkClick(link.href!)}
                  className={`text-on-surface-variant hover:text-cyan-accent transition-colors duration-300 ${
                    location.pathname === link.href ? 'text-cyan-accent' : ''
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.type === 'dropdown' && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-surface-container-high border border-white/10 rounded-2xl shadow-2xl p-2 z-[60]"
                    >
                      <div className="flex flex-col gap-1">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => handleLinkClick(item.href)}
                            className="block px-4 py-2.5 rounded-xl hover:bg-white/5 text-on-surface-variant hover:text-cyan-accent transition-all duration-200 font-medium text-xs lg:text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <button 
            className="bg-cyan-accent text-surface-container-lowest px-6 py-2.5 rounded-xl font-bold hover:bg-white transition-all glow-cyan text-sm active:scale-95 shadow-lg shadow-cyan-accent/20"
            onClick={() => {
              const el = document.getElementById('contacto');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Agendar Consultoría
          </button>
        </div>

        <button className="md:hidden text-on-surface-variant p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[64px] md:hidden bg-surface-container-high z-40 overflow-y-auto"
          >
            <div className="p-8 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-4">
                  {link.type === 'dropdown' ? (
                    <div className="space-y-4 border-b border-white/5 pb-4">
                      <span className="text-on-surface font-bold text-lg">{link.name}</span>
                      <div className="pl-4 flex flex-col gap-4">
                        {link.items?.map((item) => (
                          <Link 
                            key={item.name}
                            to={item.href}
                            className="text-on-surface-variant hover:text-cyan-accent transition-colors"
                            onClick={() => handleLinkClick(item.href)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      key={link.name}
                      to={link.href!} 
                      className="block text-on-surface font-bold text-lg border-b border-white/5 pb-2 hover:text-cyan-accent transition-colors"
                      onClick={() => handleLinkClick(link.href!)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <button 
                className="w-full bg-cyan-accent text-surface-container-lowest py-5 rounded-2xl font-black text-xl glow-cyan"
                onClick={() => {
                   setIsMenuOpen(false);
                   const el = document.getElementById('contacto');
                   el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Agendar Consultoría
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
