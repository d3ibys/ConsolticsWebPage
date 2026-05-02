import { motion } from 'motion/react';
import { 
  Activity, 
  BarChart3, 
  Search, 
  Bell, 
  Terminal, 
  LineChart, 
  Database, 
  ShieldCheck, 
  Globe,
  Cpu,
  Layers,
  Network,
  CheckCircle2
} from 'lucide-react';

export default function Monitoring() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutions = [
    {
      id: 'prometheus',
      name: 'Prometheus',
      tagline: 'Métricas y Alertas de Tiempo Real',
      desc: 'El estándar de la industria Cloud Native para la monitorización de sistemas y servicios. Basado en un modelo de pull de métricas y bases de datos de series temporales (TSDB) altamente eficientes.',
      icon: Activity,
      useCases: ['Monitorización de Microservicios', 'Auto-discovery de Nodos', 'Alertas de Infraestructura Crítica'],
      deployment: ['Kubernetes', 'Docker Swarm', 'Bare Metal', 'Multi-cloud'],
      specs: [
        { label: 'Lenguaje de Consulta', value: 'PromQL (Potente y flexible)' },
        { label: 'Almacenamiento', value: 'TSDB Local & Remote Write' },
        { label: 'Tipo de Datos', value: 'Muestreos de Series Temporales' },
        { label: 'Integración', value: 'Consul, Kubernetes, GCP, AWS' }
      ]
    },
    {
      id: 'grafana',
      name: 'Grafana',
      tagline: 'Visualización y Observabilidad',
      desc: 'La plataforma abierta definitiva para la analítica y monitorización. Permite consultar, visualizar, alertar y comprender sus métricas independientemente de dónde estén almacenadas.',
      icon: BarChart3,
      useCases: ['Dashboards Operativos', 'Dashboards Ejecutivos', 'Correlación de Logs y Métricas'],
      deployment: ['SaaS', 'On-premise', 'Contenedores', 'Cloud'],
      specs: [
        { label: 'Fuentes de Datos', value: '+100 (SQL, NoSQL, Cloud)' },
        { label: 'Panelismo', value: 'Drag & Drop, Altamente Custom' },
        { label: 'Alerting', value: 'Unificado (Slack, PagerDuty, Email)' },
        { label: 'Autenticación', value: 'OAuth, LDAP, SAML, Auth Proxy' }
      ]
    },
    {
      id: 'checkmk',
      name: 'Checkmk',
      tagline: 'Monitorización IT Integral',
      desc: 'Una solución de monitorización de infraestructura moderna y automatizada que combina la flexibilidad de lo abierto con el rendimiento empresarial para entornos híbridos complejos.',
      icon: Search,
      useCases: ['Hardware & SNMP', 'Redes Enterprise', 'Monitoreo Híbrido Windows/Linux'],
      deployment: ['Appliance Virtual', 'Docker', 'Instalación Nativa'],
      specs: [
        { label: 'Núcleo', value: 'Micro Core de Alto Rendimiento' },
        { label: 'Automatización', value: 'Auto-discovery Completo' },
        { label: 'Escalabilidad', value: '+100,000 servicios por sitio' },
        { label: 'Agentes', value: 'Lightweight (Push/Pull)' }
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
            <Activity className="w-3 h-3" />
            Full-Stack Observability
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Monitorización <br /> de <span className="text-cyan-accent">Infraestructura</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto text-justify">
            Dominamos las herramientas líderes del mercado para garantizar que su infraestructura tecnológica sea transparente, predecible y resiliente. Transformamos datos brutos en inteligencia operativa.
          </p>
        </motion.div>
      </section>

      {/* Solutions Loop */}
      {solutions.map((sol, index) => (
        <section key={sol.id} className={`py-24 border-t border-white/5 ${index % 2 === 1 ? 'bg-surface-container-low/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn} className="space-y-8">
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
                {sol.desc}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-xs font-bold text-on-surface uppercase tracking-widest border-b border-white/10 pb-2">
                    <Globe className="w-3 h-3 text-cyan-accent" />
                    Casos de Uso
                  </h4>
                  <ul className="space-y-2">
                    {sol.useCases.map(u => (
                      <li key={u} className="text-sm text-on-surface-variant flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-cyan-accent/50" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-xs font-bold text-on-surface uppercase tracking-widest border-b border-white/10 pb-2">
                    <Layers className="w-3 h-3 text-cyan-accent" />
                    Entornos de Despliegue
                  </h4>
                  <ul className="space-y-2">
                    {sol.deployment.map(d => (
                      <li key={d} className="text-sm text-on-surface-variant flex items-center gap-2">
                        <Terminal className="w-3 h-3 text-cyan-accent/50" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="p-10 rounded-[3rem] bg-surface-container border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <sol.icon className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-black tracking-tight mb-8">Ficha Técnica</h3>
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

      {/* Comparison/Integration CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="p-16 rounded-[4rem] bg-gradient-to-br from-cyan-accent/20 to-surface-container-highest border border-white/10 relative overflow-hidden text-center">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Observabilidad Unificada</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium text-justify">
              No se limite a una sola herramienta. Diseñamos stacks de monitorización híbridos integrando Prometheus para métricas de nube, Checkmk para infraestructura física y Grafana como el cerebro visual único para su equipo.
            </p>
            <button 
              onClick={() => {
                window.location.href = '/#contacto';
              }}
              className="bg-cyan-accent text-surface-container-lowest px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all glow-cyan shadow-xl shadow-cyan-accent/20"
            >
              Solicitar Consultoría de Monitoreo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
