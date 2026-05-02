import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Settings, 
  Database, 
  Users, 
  ClipboardList, 
  BarChart3, 
  CheckCircle2, 
  Download,
  Server,
  Code2,
  Cpu
} from 'lucide-react';

export default function Glpi() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'Gestión de Incidencias (Helpdesk)',
      desc: 'Gestión completa de tickets basada en ITIL, con cumplimiento de SLA y escalado automático.',
      icon: ClipboardList
    },
    {
      title: 'Inventario IT Avanzado',
      desc: 'Seguimiento automático de hardware, software, licencias y ciclo de vida de activos.',
      icon: Database
    },
    {
      title: 'Base de Conocimiento',
      desc: 'Repositorio centralizado para resolver problemas frecuentes y documentar procesos.',
      icon: Settings
    }
  ];

  const technicalSpecs = [
    { label: 'Arquitectura', value: 'Web (PHP / MySQL-MariaDB)' },
    { label: 'Compatibilidad ITIL', value: 'Soporte completo ITIL v2 / v3' },
    { label: 'Seguimiento de Activos', value: 'Hardware, Software, Redes, Virtualización' },
    { label: 'Integración', value: 'LDAP, Directorio Activo, OCS Inventory' },
    { label: 'Seguridad', value: 'ACL por perfiles, Autenticación multi-factor' },
    { label: 'Multi-entidad', value: 'Gestión de múltiples departamentos o clientes' },
  ];

  return (
    <main className="pt-32 pb-24">
      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 lg:grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent text-xs font-bold uppercase tracking-widest">
            <Server className="w-3 h-3" />
            ITS Management
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            GLPI: El Estándar <br /> EN <span className="text-cyan-accent">Gestión IT</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed text-justify">
            La solución de código abierto más completa para la gestión de infraestructura tecnológica y mesas de ayuda profesionales.
          </p>
          <div className="flex gap-4">
             <button onClick={() => document.getElementById('ficha-tecnica')?.scrollIntoView({ behavior: 'smooth' })} className="bg-cyan-accent text-surface-container-lowest px-8 py-4 rounded-2xl font-bold hover:bg-white transition-all glow-cyan">
               Ver Ficha Técnica
             </button>
             <button className="flex items-center gap-2 text-on-surface hover:text-cyan-accent transition-colors font-bold px-6">
               Descargar Case Study
               <Download className="w-4 h-4" />
             </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 lg:mt-0 relative"
        >
          <div className="absolute inset-0 bg-cyan-accent/10 blur-[120px] rounded-full" />
          <div className="glass-card p-2 rounded-[3rem] border-white/5 relative z-10 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
              alt="Digital Infrastructure GLPI" 
              className="w-full h-full object-cover rounded-[2.9rem] opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="bg-surface-container-low/50 py-24 mb-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <motion.div {...fadeIn} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">¿Qué es GLPI y por qué su empresa lo necesita?</h2>
            <p className="text-on-surface-variant font-medium leading-relaxed text-justify">
              GLPI es una herramienta poderosa de gestión de activos y de mesa de ayuda (ITSM). Permite a las organizaciones centralizar toda su información de infraestructura en una sola plataforma, eliminando silos de datos y mejorando drásticamente el tiempo de respuesta ante incidentes.
            </p>
            <p className="text-on-surface-variant font-medium leading-relaxed text-justify">
              Desde el seguimiento de una simple laptop hasta la gestión de complejos clústeres de servidores y contratos de mantenimiento, GLPI proporciona visibilidad total sobre sus activos digitales.
            </p>
          </motion.div>
          <motion.div {...fadeIn} className="grid grid-cols-2 gap-6">
            {[
              { label: 'Incidentes', value: 'Soporte' },
              { label: 'Problemas', value: 'ITIL' },
              { label: 'Cambios', value: 'Control' },
              { label: 'Activos', value: 'Visibilidad' },
            ].map(item => (
              <div key={item.label} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                <div className="text-cyan-accent font-black text-2xl">{item.value}</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-2">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div {...fadeIn} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black tracking-tighter">Funcionalidades Core</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto font-medium text-justify">Una plataforma integral diseñada para equipos de IT de alto rendimiento.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div 
              key={f.title}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-surface-container border border-white/5 group hover:border-cyan-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-cyan-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-cyan-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{f.title}</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Sheet */}
      <section id="ficha-tecnica" className="max-w-5xl mx-auto px-6">
        <motion.div 
          {...fadeIn}
          className="p-12 rounded-[3.5rem] bg-surface-container-highest/30 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-accent to-transparent opacity-50" />
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 bg-cyan-accent/20 rounded-xl flex items-center justify-center">
              <Code2 className="text-cyan-accent w-5 h-5" />
            </div>
            <h2 className="text-3xl font-black tracking-tighter">Ficha Técnica</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-16 border-t border-white/10 pt-12">
            {technicalSpecs.map(spec => (
              <div key={spec.label} className="space-y-1">
                <div className="text-[10px] font-bold text-cyan-accent uppercase tracking-[0.2em]">{spec.label}</div>
                <div className="text-on-surface font-bold text-lg">{spec.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-between border-t border-white/10 pt-12">
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant bg-white/5 px-4 py-2 rounded-full">
                 <Cpu className="w-4 h-4 text-cyan-accent" />
                 v10.x Compatible
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant bg-white/5 px-4 py-2 rounded-full">
                 <ShieldCheck className="w-4 h-4 text-cyan-accent" />
                 Ready for Enterprise
               </div>
            </div>
            <p className="text-xs text-on-surface-variant font-medium opacity-40 uppercase tracking-widest">Update: May 2026</p>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="p-16 rounded-[4rem] bg-gradient-to-br from-cyan-accent/10 to-transparent border border-white/5 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">¿Listo para retomar el control de su IT?</h2>
            <p className="text-lg text-on-surface-variant max-w-xl mx-auto font-medium">
              Implementamos GLPI con las mejores prácticas corporativas para su empresa.
            </p>
            <button 
              onClick={() => {
                window.location.href = '/#contacto';
              }}
              className="bg-white text-surface-container-lowest px-12 py-5 rounded-2xl font-black text-xl hover:bg-cyan-accent transition-all glow-cyan shadow-white/5"
            >
              Consultar Implementación
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
