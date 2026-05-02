import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Eye, 
  Lock, 
  Bug, 
  AlertTriangle, 
  Briefcase, 
  Fingerprint, 
  FileWarning, 
  Key, 
  Activity,
  Shield,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function Security() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const tools = [
    {
      id: 'wazuh',
      name: 'Wazuh',
      tagline: 'XDR & SIEM Open Source',
      description: 'Una plataforma unificada para la detección de amenazas, monitoreo de integridad, respuesta a incidentes y cumplimiento normativo. Wazuh protege workloads en nubes públicas, privadas y centros de datos on-premise.',
      icon: Eye,
      useCases: ['Detección de Intrusiones en Host', 'Análisis de Datos de Logs', 'Monitoreo de Integridad de Archivos (FIM)', 'Evaluación de Vulnerabilidades'],
      specs: [
        { label: 'Categoría', value: 'XDR / SIEM / EDR' },
        { label: 'Arquitectura', value: 'Indexado basado en OpenSearch' },
        { label: 'Cumplimiento', value: 'PCI DSS, HIPAA, NIST, GDPR' },
        { label: 'Agentes', value: 'Windows, Linux, macOS, Solaris' }
      ]
    },
    {
      id: 'suricata',
      name: 'Suricata',
      tagline: 'IDS / IPS de Próxima Generación',
      description: 'El motor de red más rápido y robusto para la detección de amenazas. Suricata realiza inspección profunda de paquetes (DPI) y análisis de red en tiempo real para detener ataques antes de que penetren su infraestructura.',
      icon: AlertTriangle,
      useCases: ['Detección de Intrusiones (IDS)', 'Prevención de Intrusiones (IPS)', 'Monitoreo de Seguridad de Red (NSM)'],
      specs: [
        { label: 'Rendimiento', value: 'Multi-hilo (Multi-threaded)' },
        { label: 'Capacidad', value: 'Inspección de Tráfico TLS/SSL' },
        { label: 'Integración', value: 'Salida JSON compatible con ELASTIC' },
        { label: 'Reglas', value: 'Compatible con VRT y Emerging Threats' }
      ]
    },
    {
      id: 'openvas',
      name: 'OpenVAS (GVM)',
      tagline: 'Escaneo de Vulnerabilidades',
      description: 'Un framework completo de escaneado y gestión de vulnerabilidades. Permite identificar debilidades en sus sistemas, evaluar riesgos y priorizar las acciones de remediación de forma proactiva.',
      icon: Bug,
      useCases: ['Auditorías de Seguridad Programadas', 'Descubrimiento de Servicios Expuestos', 'Gestión de Ciclo de Vida de Vulnerabilidades'],
      specs: [
        { label: 'Base de Datos', value: 'Greenbone Community Feed' },
        { label: 'Pruebas', value: '+50,000 Network Vulnerability Tests' },
        { label: 'Reportes', value: 'PDF, XML, HTML, CSV' },
        { label: 'Escalabilidad', value: 'Sensores de escaneo remotos' }
      ]
    },
    {
      id: 'vault',
      name: 'HashiCorp Vault',
      tagline: 'Gestión de Secretos & Cifrado',
      description: 'Protege, almacena y controla de forma estricta el acceso a tokens, contraseñas, certificados y claves de cifrado. Vault centraliza la seguridad de los secretos para aplicaciones dinámicas y modernas.',
      icon: Lock,
      useCases: ['Almacenamiento Seguro de Credenciales', 'Cifrado de Datos como Servicio', 'Gestión Dinámica de Identidades'],
      specs: [
        { label: 'Seguridad', value: 'Shamir Secret Sharing (Unsealing)' },
        { label: 'Integración', value: 'Kubernetes, AWS, Azure, GCP' },
        { label: 'Políticas', value: 'RBAC granular basado en Path' },
        { label: 'Auditoría', value: 'Logs de acceso inmutables' }
      ]
    },
    {
      id: 'thehive',
      name: 'TheHive',
      tagline: 'Respuesta a Incidentes (SOAR)',
      description: 'Una plataforma de respuesta a incidentes de seguridad (SIRP) diseñada para facilitar el trabajo de los analistas SOC. Permite colaborar, investigar y responder a alertas de seguridad de forma coordinada.',
      icon: Briefcase,
      useCases: ['Gestión de Casos SOC', 'Análisis de Artefactos (Cortex)', 'Colaboración en Tiempo Real para Analistas'],
      specs: [
        { label: 'Integración', value: 'Wazuh, Suricata, MISP' },
        { label: 'Investigación', value: 'Analizadores automatizados (Cortex)' },
        { label: 'Modelos', value: 'Plantillas de Casos Reutilizables' },
        { label: 'Escalabilidad', value: 'API-First para automatización' }
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
            <ShieldCheck className="w-3 h-3" />
            Zero-Trust Cyber Defense
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Seguridad y Gestión <br /> de <span className="text-cyan-accent">Vulnerabilidades</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto text-justify">
            Implementamos un ecosistema de defensa profunda. Desde la vigilancia de red hasta la gestión de identidades y la respuesta armada ante incidentes, protegemos cada capa de su infraestructura digital.
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
                  Capacidades Críticas
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
                <Fingerprint className="w-5 h-5 text-cyan-accent" />
                Ficha Técnica
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

      {/* Cyber Defense CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="p-20 rounded-[4rem] bg-gradient-to-br from-red-500/10 to-surface-container border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute w-96 h-96 bg-red-500/20 blur-[150px] -top-48 -left-48 rounded-full" />
            <div className="absolute w-96 h-96 bg-cyan-accent/20 blur-[150px] -bottom-48 -right-48 rounded-full" />
          </div>
          
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-red-500/10 border border-red-500/20">
               <Shield className="w-5 h-5 text-red-500" />
               <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Resiliencia ante Amenazas Modernas</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">No es si ocurrirá un ataque, <br /> sino <span className="text-cyan-accent">cuándo</span></h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium text-justify">
              Construimos Centros de Operaciones de Seguridad (SOC) modernos. Integramos visibilidad de red, inteligencia de endpoints y automatización de incidentes para que su empresa esté siempre un paso adelante de los ciber-atacantes.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => window.location.href = '/#contacto'}
                className="bg-cyan-accent text-surface-container-lowest px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all glow-cyan"
              >
                Solicitar Auditoría de Seguridad
              </button>
              <button 
                onClick={() => window.location.href = '/#contacto'}
                className="bg-transparent border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/5 transition-all flex items-center gap-2 group"
              >
                Obtener Security Assessment
                <Zap className="w-5 h-5 group-hover:text-cyan-accent transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
