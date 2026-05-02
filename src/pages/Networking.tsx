import { motion } from 'motion/react';
import { 
  Network, 
  ShieldCheck, 
  Search, 
  Database, 
  Globe, 
  Lock, 
  Activity, 
  FileSearch, 
  Cpu, 
  Server,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function Networking() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const tools = [
    {
      id: 'netbox',
      name: 'NetBox',
      tagline: 'Source of Truth para Redes',
      description: 'La herramienta líder para el modelado y gestión de infraestructura de red. NetBox combina la gestión de activos de centros de datos (DCIM) con el manejo de direcciones IP (IPAM) para proporcionar una visión única y veraz de su red.',
      icon: Database,
      useCases: ['Documentación de Racks y Cableado', 'Gestión de Direccionamiento IP (IPAM)', 'Inventario de Circuitos y VLANs'],
      specs: [
        { label: 'Arquitectura', value: 'Django / PostgreSQL / Redis' },
        { label: 'Capacidades', value: 'DCIM, IPAM, Circuitos, Virtualización' },
        { label: 'API', value: 'REST & GraphQL (Altamente integrable)' },
        { label: 'Modelado', value: 'Jerárquico y Relacional' }
      ]
    },
    {
      id: 'opnsense',
      name: 'OPNsense',
      tagline: 'Seguridad Perimetral Enterprise',
      description: 'Una plataforma de firewall y enrutamiento basada en FreeBSD, de código abierto y fácil de usar. Ofrece características de gama alta que solo se encuentran en firewalls comerciales costosos, con la ventaja de ser transparente y auditable.',
      icon: ShieldCheck,
      useCases: ['Firewall de Próxima Generación (NGFW)', 'VPN (OpenVPN, WireGuard, IPsec)', 'Prevención de Intrusos (Suricata)'],
      specs: [
        { label: 'Base', value: 'HardenedBSD / FreeBSD' },
        { label: 'Seguridad', value: '2FA, Filtrado Web, IDS/IPS' },
        { label: 'Interfaz', value: 'Web Moderna y Responsiva' },
        { label: 'Hardware', value: 'Físico, Virtual o Nube' }
      ]
    },
    {
      id: 'wireshark',
      name: 'Wireshark',
      tagline: 'Análisis de Protocolos de Red',
      description: 'El analizador de protocolos de red más importante y utilizado del mundo. Permite ver lo que sucede en su red a un nivel microscópico, siendo el estándar de facto para la resolución de problemas (troubleshooting) y el análisis de seguridad.',
      icon: Search,
      useCases: ['Resolución de Problemas de Latencia', 'Análisis de Tráfico Malicioso', 'Auditoría de Protocolos de Aplicación'],
      specs: [
        { label: 'Inspección', value: 'Cientos de protocolos soportados' },
        { label: 'Captura', value: 'Tiempo real o archivos (pcap)' },
        { label: 'Filtrado', value: 'Poderoso lenguaje de visualización' },
        { label: 'Plataformas', value: 'Multiplataforma (Win, Mac, Linux)' }
      ]
    }
  ];

  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent text-xs font-bold uppercase tracking-widest">
            <Network className="w-3 h-3" />
            Core Connectivity & Security
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Redes y <br /> <span className="text-cyan-accent">Conectividad</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto text-justify">
            Diseñamos infraestructuras de red resilientes, documentadas y seguras. Desde la gestión precisa del direccionamiento hasta la seguridad perimetral avanzada, garantizamos que su flujo de datos sea ininterrumpido y blindado.
          </p>
        </motion.div>
      </section>

      {/* Tools Loop */}
      {tools.map((tool, index) => (
        <section key={tool.id} className={`py-24 border-t border-white/5 ${index % 2 === 1 ? 'bg-surface-container-low/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              {...fadeIn} 
              className={`space-y-8 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-accent/10 flex items-center justify-center">
                  <tool.icon className="w-8 h-8 text-cyan-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tighter">{tool.name}</h2>
                  <p className="text-cyan-accent font-bold text-sm tracking-widest uppercase">{tool.tagline}</p>
                </div>
              </div>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed text-justify">
                {tool.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-xs font-bold text-on-surface uppercase tracking-widest border-b border-white/10 pb-2">
                  <Activity className="w-3 h-3 text-cyan-accent" />
                  Casos de Uso Principales
                </h4>
                <div className="grid sm:grid-cols-1 gap-3">
                  {tool.useCases.map(u => (
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
                <tool.icon className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-black tracking-tight mb-8 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-accent" />
                Especificaciones
              </h3>
              <div className="space-y-6">
                {tool.specs.map(spec => (
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

      {/* Network Security CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="p-20 rounded-[4rem] bg-gradient-to-br from-surface-container-highest to-surface-container border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-cyan-accent/10 border border-cyan-accent/20">
               <Lock className="w-5 h-5 text-cyan-accent" />
               <span className="text-xs font-bold text-cyan-accent uppercase tracking-widest">Seguridad Blindada de Extremo a Extremo</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Su Red es el Sistema <br /> <span className="text-cyan-accent">Nervioso</span> de su Negocio</h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium text-justify">
              No deje la conectividad al azar. Combinamos la precisión de NetBox para la documentación técnica, la potencia de OPNsense para el blindaje perimetral y el análisis granular de Wireshark para mantener su flujo de datos impecable.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => window.location.href = '/#contacto'}
                className="bg-cyan-accent text-surface-container-lowest px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all glow-cyan"
              >
                Auditar mi Red
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
