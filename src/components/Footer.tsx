import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2 space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter text-on-surface">Consoltics</Link>
          <p className="text-on-surface-variant max-w-sm leading-relaxed font-medium">
            Líderes en transformación digital y ciberseguridad avanzada. Protegiendo y escalando el futuro de las empresas globales.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest">Recursos</h4>
          <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
            <Link to="/#quienes-somos" className="hover:text-cyan-accent transition-colors">¿Quiénes somos?</Link>
            <Link to="/#certificaciones" className="hover:text-cyan-accent transition-colors">Certificaciones</Link>
            <Link to="/#casos-exito" className="hover:text-cyan-accent transition-colors">Casos de Éxito</Link>
            <Link to="/soluciones/glpi" className="hover:text-cyan-accent transition-colors">GLPI Solution</Link>
            <Link to="/clientes" className="hover:text-cyan-accent transition-colors">Nuestros Clientes</Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest">Legal</h4>
          <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
            <a href="#" className="hover:text-cyan-accent transition-colors">Privacidad</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">Términos</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-on-surface-variant font-semibold opacity-40 uppercase tracking-widest">
          © 2026 Consoltics S.A. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6">
          <div className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse" />
          <span className="text-[10px] font-bold text-cyan-accent uppercase tracking-[0.3em]">Sistemas Operativos 100%</span>
        </div>
      </div>
    </footer>
  );
}
