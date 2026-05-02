import { motion } from 'motion/react';
import { 
  Layers, 
  Cpu, 
  Database, 
  Globe, 
  Server, 
  HardDrive, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Box,
  Terminal,
  CheckCircle2,
  PieChart
} from 'lucide-react';

export default function Virtualization() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutions = [
    {
      id: 'proxmox',
      name: 'Proxmox VE',
      tagline: 'Virtualización Enterprise Open Source',
      description: 'Una plataforma completa para la gestión de servidores basada en Debian. Combina la virtualización KVM y contenedores LXC, almacenamiento definido por software y funcionalidades de red en una sola solución integrada.',
      icon: Server,
      useCases: ['Consolidación de Servidores Físicos', 'Clústeres de Alta Disponibilidad (HA)', 'Infraestructura de Nube Privada'],
      specs: [
        { label: 'Hipervisor', value: 'KVM (Kernal-based Virtual Machine)' },
        { label: 'Contenedores', value: 'LXC (Linux Containers)' },
        { label: 'Almacenamiento', value: 'ZFS, Ceph, GlusterFS' },
        { label: 'Gestión', value: 'Interfaz Web GUI + API' }
      ]
    },
    {
      id: 'docker',
      name: 'Docker',
      tagline: 'Estandarización de Aplicaciones',
      description: 'La plataforma que revolucionó el software permitiendo empaquetar aplicaciones y sus dependencias en contenedores ligeros y portables. Garantiza que el software se ejecute de la misma forma en cualquier entorno.',
      icon: Box,
      useCases: ['Empaquetado de Aplicaciones Microservicios', 'Entornos de Desarrollo Aislados', 'Despliegues CI/CD Rápidos'],
      specs: [
        { label: 'Tecnología', value: 'Aislamiento a nivel de SO (Cgroups/Namespaces)' },
        { label: 'Ecosistema', value: 'Docker Hub & Registries Privados' },
        { label: 'Seguridad', value: 'Imágenes Inmutables' },
        { label: 'Portabilidad', value: 'Cualquier Linux / Windows' }
      ]
    },
    {
      id: 'k8s',
      name: 'Kubernetes (K8s)',
      tagline: 'Orquestación de Contenedores',
      description: 'El estándar de la industria para automatizar el despliegue, el escalado y la gestión de aplicaciones en contenedores a gran escala. Especialistas en implementaciones ligeras y eficientes (K3s) para entornos diversos.',
      icon: Layers,
      useCases: ['Gestión de Aplicaciones a Escala Global', 'Auto-escalado Dinámico', 'Despliegues sin Tiempo de Inactividad (Zero-downtime)'],
      specs: [
        { label: 'Orquestación', value: 'Self-healing, Bin-packing, Rollouts' },
        { label: 'Red', value: 'Service Mesh, Balanceo de Carga' },
        { label: 'Storage', value: 'Gestión de Volúmenes Dinámicos' },
        { label: 'Versión', value: 'K8s Standard / K3s (Edge IT)' }
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
            <Cpu className="w-3 h-3" />
            Infrastructure Modernization
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Virtualización y <br /> <span className="text-cyan-accent">Contenedores</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto text-justify">
            Extracción máxima de valor de su hardware. Diseñamos ecosistemas computacionales que escalan bajo demanda, optimizan el consumo energético y simplifican radicalmente la gestión operativa.
          </p>
        </motion.div>
      </section>

      {/* Solutions Loop */}
      {solutions.map((sol, index) => (
        <section key={sol.id} className={`py-24 border-t border-white/5 ${index % 2 === 1 ? 'bg-surface-container-low/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              {...fadeIn} 
              className={`space-y-8 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-accent/10 flex items-center justify-center">
                  <sol.icon className="w-8 h-8 text-cyan-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tighter">{sol.name}</h2>
                  <p className="text-cyan-accent font-bold text-sm tracking-widest uppercase">{sol.tagline}</p>
                </div>
              </div>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed text-justify">
                {sol.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-xs font-bold text-on-surface uppercase tracking-widest border-b border-white/10 pb-2">
                  <Terminal className="w-3 h-3 text-cyan-accent" />
                  Ventajas Operativas
                </h4>
                <div className="grid gap-3">
                  {sol.useCases.map(u => (
                    <div key={u} className="text-sm text-on-surface/80 flex items-center gap-3 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
                      {u}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="p-10 rounded-[3rem] bg-surface-container border border-white/5 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <sol.icon className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-black tracking-tight mb-8 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-cyan-accent" />
                Ficha de Capacidades
              </h3>
              <div className="space-y-6">
                {sol.specs.map(spec => (
                  <div key={spec.label} className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{spec.label}</span>
                    <span className="text-sm font-bold text-on-surface text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Modernization CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="p-20 rounded-[4rem] bg-gradient-to-br from-surface-container-highest to-surface-container border border-white/10 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
               <Zap className="w-5 h-5 text-cyan-accent" />
               <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Agilidad de Negocio Real</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Su infraestructura <br /> debería ser <span className="text-cyan-accent">Elástico</span></h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium text-justify">
              Transformamos servidores estáticos en plataformas dinámicas. Implementamos clústeres de contenedores y entornos de virtualización que le permiten lanzar productos y escalar servicios en minutos, no en días.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => window.location.href = '/#contacto'}
                className="bg-cyan-accent text-surface-container-lowest px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all glow-cyan"
              >
                Modernizar mi Infraestructura
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
