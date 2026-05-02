import { motion } from 'motion/react';
import { 
  Zap, 
  Settings, 
  Database, 
  Cpu, 
  Cloud, 
  Terminal, 
  CheckCircle2, 
  GitBranch, 
  Layers,
  Repeat,
  ShieldCheck,
  Server
} from 'lucide-react';

export default function Automation() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutions = [
    {
      id: 'terraform',
      name: 'Terraform',
      tagline: 'Infrastructure as Code (IaC)',
      description: 'La herramienta líder para aprovisionar, cambiar y versionar infraestructura de forma segura y eficiente. Terraform permite definir recursos de nube y on-premise en archivos de configuración legibles por humanos que puede versionar, reutilizar y compartir.',
      icon: Cloud,
      useCases: ['Aprovisionamiento Multi-Cloud', 'Gestión de Redes Virtuales', 'Escalado de Infraestructura Immutable'],
      highlights: ['Declarativo (HCL)', 'Agnóstico de Nube', 'Gestión de Estado', 'Planificación de Cambios'],
      specs: [
        { label: 'Desarrollador', value: 'HashiCorp' },
        { label: 'Lenguaje', value: 'HCL (HashiCorp Configuration Language)' },
        { label: 'Modelo', value: 'Declarativo / Push' },
        { label: 'Gestión de Estado', value: 'Terraform State (Local/Remote)' }
      ]
    },
    {
      id: 'ansible',
      name: 'Ansible',
      tagline: 'Configuración y Orquestación',
      description: 'Una plataforma de automatización de TI radicalmente simple que facilita la gestión de configuraciones, el despliegue de software y la orquestación de tareas complejas. Su arquitectura sin agentes (agentless) permite una implementación inmediata.',
      icon: Settings,
      useCases: ['Gestión de Configuraciones', 'Despliegue de Aplicaciones', 'Automatización de Parches de Seguridad'],
      highlights: ['Agentless (SSH/WinRM)', 'Basado en YAML', 'Idempotencia Nativa', 'Enorme ecosistema de módulos'],
      specs: [
        { label: 'Desarrollador', value: 'Red Hat' },
        { label: 'Lenguaje', value: 'YAML (Playbooks)' },
        { label: 'Arquitectura', value: 'Agentless / Push' },
        { label: 'Requisito Nodo', value: 'Python / PowerShell' }
      ]
    }
  ];

  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3 h-3" />
            Infrastructure Automation
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Automatización <br /> de <span className="text-cyan-accent">Procesos IT</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto text-justify">
            Eliminamos las tareas manuales propensas a errores para que su equipo se enfoque en la innovación. Implementamos flujos de trabajo automatizados que garantizan consistencia, velocidad y seguridad en cada despliegue.
          </p>
        </motion.div>
      </section>

      {/* The Duo Section */}
      <section className="py-24 bg-surface-container-low/30 border-y border-white/5 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            <div className="p-8 rounded-full bg-white/5 border border-white/10">
              <Cloud className="w-12 h-12 text-cyan-accent" />
            </div>
            <Repeat className="w-8 h-8 text-on-surface-variant opacity-30 animate-pulse" />
            <div className="p-8 rounded-full bg-white/5 border border-white/10">
              <Settings className="w-12 h-12 text-cyan-accent" />
            </div>
          </div>
          <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">El Equipo Perfecto: Terraform + Ansible</h2>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed text-justify">
              Mientras que **Terraform** se encarga de "construir la casa" (aprovisionar servidores, redes, bases de datos y balanceadores), **Ansible** se encarga de "amueblarla" (instalar software, configurar servicios, aplicar parches y usuarios). Juntos proporcionan un ciclo de vida completo de infraestructura como código (IaC).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Details */}
      {solutions.map((sol, index) => (
        <section key={sol.id} className="max-w-7xl mx-auto px-6 mb-32">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div {...fadeIn} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-cyan-accent/10 rounded-2xl flex items-center justify-center">
                  <sol.icon className="w-7 h-7 text-cyan-accent" />
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tighter">{sol.name}</h3>
                  <p className="text-cyan-accent font-bold text-sm uppercase tracking-widest">{sol.tagline}</p>
                </div>
              </div>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed text-justify">
                {sol.description}
              </p>
              
              <div className="space-y-4">
                 <h4 className="flex items-center gap-2 text-xs font-bold text-on-surface uppercase tracking-widest border-b border-white/10 pb-2">
                    <CheckCircle2 className="w-3 h-3 text-cyan-accent" />
                    Puntos Clave
                 </h4>
                 <div className="grid grid-cols-2 gap-4">
                    {sol.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2 text-sm text-on-surface-variant font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent/50" />
                        {h}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-4">
                 <h4 className="flex items-center gap-2 text-xs font-bold text-on-surface uppercase tracking-widest border-b border-white/10 pb-2">
                    <GitBranch className="w-3 h-3 text-cyan-accent" />
                    Casos de Uso Comunes
                 </h4>
                 <ul className="space-y-2">
                    {sol.useCases.map(u => (
                      <li key={u} className="text-sm font-medium text-on-surface/80 flex items-center gap-3">
                        <Terminal className="w-3 h-3 text-cyan-accent/40" />
                        {u}
                      </li>
                    ))}
                 </ul>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="p-10 rounded-[3rem] bg-surface-container border border-white/5 relative shadow-2xl"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-accent/5 blur-[100px] rounded-full" />
              <h4 className="text-xl font-black tracking-tight mb-8 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-accent" />
                Especificaciones Técnicas
              </h4>
              <div className="space-y-6">
                {sol.specs.map(spec => (
                  <div key={spec.label} className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{spec.label}</span>
                    <span className="text-sm font-bold text-on-surface">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Comparison/Synergy CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-20 rounded-[4rem] bg-gradient-to-br from-surface-container-highest to-surface-container border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute w-64 h-64 bg-cyan-accent/20 blur-[120px] -top-20 -left-20 rounded-full" />
            <div className="absolute w-64 h-64 bg-blue-500/10 blur-[120px] -bottom-20 -right-20 rounded-full" />
          </div>
          
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
               <ShieldCheck className="w-5 h-5 text-cyan-accent" />
               <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Seguridad Integrada en el Código</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Mueva su <span className="text-cyan-accent">Infraestructura</span> <br /> a la Velocidad del Software</h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium text-justify">
              Nuestros expertos certificados diseñan pipelines de CI/CD que integran Terraform y Ansible para lograr una automatización total desde el hardware hasta la aplicación final.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => window.location.href = '/#contacto'}
                className="bg-cyan-accent text-surface-container-lowest px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all glow-cyan"
              >
                Auditar mi Automatización
              </button>
              <button 
                 onClick={() => window.location.href = '/#contacto'}
                className="bg-transparent border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/5 transition-all"
              >
                Solicitar Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
