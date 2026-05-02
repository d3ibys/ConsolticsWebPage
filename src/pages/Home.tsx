import { motion } from 'motion/react';
import { 
  Cloud, 
  ShieldCheck, 
  LayoutDashboard, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  ChevronRight,
  Award,
  Users,
  Trophy,
  Zap,
  Globe
} from 'lucide-react';

const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDI2_e7AWqf9SP6qQxCJMF7dJGy6YT1qvFtgWiIBRXEeT3vfraJeUfJv6grJI40Ghw9Qc9aZxR9kTy805mOJH2MdflfRk6xFey6cB9-CgVwKAvyTVtOVFFzD8IoKyDWql4css16pkHap4YRpJRAFHm1P2o3OxR97h1pjE9B3EDe-eeTH93uxN_CXt_SHvnVmQGgN5RB4evwCJ_5dvDseOeOAEkJlGbU4xV9R4_cQjywC-7pixOFOyBtB8J6asAsl6YA_bDVs21RlNEC";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Infraestructura de Alto Rendimiento',
      desc: 'Escalabilidad Sin Límites. Maximizamos el potencial de su empresa mediante la optimización avanzada de centros de datos.',
      icon: Cloud,
      features: ['Multi-Cloud Orchestration', 'Edge Computing Solutions']
    },
    {
      title: 'Seguridad de Élite',
      desc: 'Blindaje Integral 360°. Protegemos el activo más valioso de su empresa: su información. Implementamos protocolos avanzados.',
      icon: ShieldCheck,
      features: ['Zero-Trust Architecture', 'Proactive Monitoring'],
      highlight: true
    },
    {
      title: 'Desarrollo a Medida',
      desc: 'Transformamos ideas en software de alto rendimiento. Desarrollo ágil de aplicaciones robustas y escalables.',
      icon: LayoutDashboard,
      features: ['Microservices Design', 'AI Integration']
    },
  ];

  const certifications = [
    { name: 'ISO/IEC 27001', issuer: 'Information Security Management', icon: ShieldCheck },
    { name: 'AWS Certified', issuer: 'Advanced Networking & Security', icon: Cloud },
    { name: 'Google Cloud Partner', issuer: 'Premier Enterprise Partner', icon: Globe },
    { name: 'Certified Ethical Hacker', issuer: 'EC-Council Elite Team', icon: Award },
  ];

  const successStories = [
    { 
      client: 'Banca Global S.A.', 
      result: 'Reducción del 45% en latencia de transacciones mediante optimización edge.',
      icon: Zap
    },
    { 
      client: 'Telco Connect', 
      result: 'Implementación de arquitectura Zero-Trust para +50,000 empleados.',
      icon: ShieldCheck
    },
    { 
      client: 'LogisTech Systems', 
      result: 'Escalado masivo de infraestructura ante picos de demanda del 400%.',
      icon: Trophy
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src={HERO_IMAGE_URL} 
            alt="Digital Network visualization" 
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-surface"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20 font-semibold text-xs tracking-widest uppercase">
              Tecnología de Vanguardia
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
              Impulsamos el <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-blue-500">
                Futuro Digital
              </span> <br />
              de tu Empresa
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-medium text-justify">
              Desarrollamos ecosistemas digitales resilientes y escalables para las organizaciones que lideran la transformación tecnológica global.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-cyan-accent text-surface-container-lowest px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all glow-cyan hover:scale-105 active:scale-95 shadow-xl shadow-cyan-accent/20">
                Agendar Consultoría
              </button>
              <button 
                onClick={() => document.getElementById('casos-exito')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/5 transition-all flex items-center gap-2 group"
              >
                Ver Impacto
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 max-w-7xl mx-auto px-6">
        <motion.div {...fadeIn} className="mb-20 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Arquitectura de Servicios Elite</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-medium">
            Soluciones de ingeniería diseñadas para superar los desafíos técnicos más complejos del mercado actual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-10 rounded-[2.5rem] group hover:border-cyan-accent/50 transition-all duration-500 relative overflow-hidden`}
            >
              {service.highlight && (
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-accent/10 blur-3xl rounded-full" />
              )}
              <div className="w-16 h-16 rounded-2xl bg-cyan-accent/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-cyan-accent/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-cyan-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-on-surface-variant mb-10 leading-relaxed font-medium">
                {service.desc}
              </p>
              <ul className="space-y-4">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm font-semibold text-on-surface/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us (Nosotros) */}
      <section id="quienes-somos" className="py-32 bg-surface-container-low/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Users className="w-3 h-3" />
              Nuestra Identidad
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Pasión por la <br /> Excelencia Técnica</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed font-medium text-justify">
              En Consoltics, no solo implementamos tecnología; orquestamos el cambio. Fundada con la visión de cerrar la brecha entre la complejidad técnica y el valor comercial, nos hemos convertido en el socio estratégico preferido de las empresas que no aceptan menos que la perfección.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-black text-cyan-accent">15+</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Años de Innovación</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-cyan-accent">100+</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Master Architects</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            {...fadeIn}
            className="relative aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-cyan-accent/20 to-blue-500/10 rounded-[3rem] p-1 border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
              alt="Team collaboration" 
              className="w-full h-full object-cover rounded-[2.9rem] opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificaciones" className="py-24 max-w-7xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">Estándares Internacionales</h2>
            <p className="text-on-surface-variant font-medium">Avalados por los líderes globales de la industria tecnológica.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={cert.name}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-surface-container border border-white/5 flex flex-col items-center text-center group hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cert.icon className="w-6 h-6 text-cyan-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
              <p className="text-xs text-on-surface-variant tracking-wider font-semibold uppercase">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories (Casos de Éxito) */}
      <section id="casos-exito" className="py-24 bg-surface-container-highest/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-4xl font-black tracking-tighter">Casos que Definen una Era</h2>
              <p className="text-on-surface-variant font-medium">Impacto tangible en organizaciones líderes a través de la innovación disruptiva.</p>
            </div>
            <button className="flex items-center gap-2 text-cyan-accent font-bold group">
                Explorar todos los casos
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <motion.div 
                key={story.client}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-surface-container border border-white/5 relative group cursor-default"
              >
                <div className="text-cyan-accent/20 absolute top-6 right-6 group-hover:text-cyan-accent/40 transition-colors">
                  <story.icon className="w-12 h-12" />
                </div>
                <div className="text-xs font-bold text-cyan-accent uppercase tracking-widest mb-4">{story.client}</div>
                <p className="text-xl font-bold leading-tight group-hover:text-white transition-colors">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="diferenciales" className="py-24 bg-surface-container-low border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Proyectos Exitosos', value: '+500' },
            { label: 'Uptime Garantizado', value: '99.9%' },
            { label: 'Soporte Crítico', value: '24/7' },
            { label: 'Años de Innovación', value: '15+' },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="text-5xl font-black text-cyan-accent mb-3 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div {...fadeIn} className="space-y-10">
          <h2 className="text-5xl font-black tracking-tighter leading-tight">Hablemos de su <br /> Próximo Desafío</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
            Nuestro equipo de especialistas está listo para diseñar la solución tecnológica que su negocio necesita. 
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-8 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-cyan-accent/10 transition-colors">
                <MapPin className="text-cyan-accent w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 opacity-60">Ubicación</div>
                <p className="text-on-surface font-black text-lg">Consoltics, Panamá</p>
              </div>
            </div>
            <div className="flex items-center gap-8 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-cyan-accent/10 transition-colors">
                <Mail className="text-cyan-accent w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 opacity-60">Email Pro</div>
                <p className="text-on-surface font-black text-lg">contacto@consoltics.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          {...fadeIn}
          className="glass-card p-12 rounded-[3.5rem] border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent/5 blur-[100px] rounded-full" />
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Nombre</label>
                <input 
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-surface-container-highest border border-white/10 rounded-2xl focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent/20 outline-none p-4 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Correo Electrónico</label>
                <input 
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-surface-container-highest border border-white/10 rounded-2xl focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent/20 outline-none p-4 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Servicio de Interés</label>
              <select className="w-full bg-surface-container-highest border border-white/10 rounded-2xl focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent/20 outline-none p-4 transition-all appearance-none cursor-pointer">
                <option>Infraestructura Cloud</option>
                <option>Ciberseguridad</option>
                <option>Desarrollo de Software</option>
                <option>Consultoría Transformacional</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">Mensaje</label>
              <textarea 
                rows={4}
                placeholder="Describa brevemente su requerimiento técnico..."
                className="w-full bg-surface-container-highest border border-white/10 rounded-2xl focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent/20 outline-none p-4 transition-all resize-none"
              />
            </div>
            <button className="w-full bg-primary text-on-primary py-5 rounded-2xl font-black text-xl hover:bg-white transition-all glow-cyan active:scale-95 shadow-xl shadow-white/5">
              Enviar Consulta
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
