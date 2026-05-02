import { motion } from 'motion/react';
import { Shield, Layout, Database, Smartphone, Globe, Briefcase } from 'lucide-react';

export default function Clients() {
  const clients = [
    { name: 'Banca Global', industry: 'Finanzas', icon: Shield, desc: 'Líder regional en servicios bancarios digitales.' },
    { name: 'Telco Connect', industry: 'Telecomunicaciones', icon: Smartphone, desc: 'Operador móvil con más de 10 millones de usuarios.' },
    { name: 'LogisTech', industry: 'Logística', icon: Globe, desc: 'Gigante de la distribución automatizada en Centroamérica.' },
    { name: 'EduCloud', industry: 'Educación', icon: Layout, desc: 'Plataforma de e-learning para universidades globales.' },
    { name: 'EnergyFlow', industry: 'Energía', icon: Database, desc: 'Distribuidora eléctrica con smart-grid avanzada.' },
    { name: 'RetailX', industry: 'E-commerce', icon: Briefcase, desc: 'El marketplace más grande de la región.' },
    { name: 'Healthcare Pro', industry: 'Salud', icon: Shield, desc: 'Red hospitalaria con registros médicos inmutables.' },
    { name: 'AgroNova', industry: 'Agricultura', icon: Globe, desc: 'Optimización de cultivos mediante IoT y AI.' },
    { name: 'SkyNav', industry: 'Transporte', icon: Globe, desc: 'Gestión de flotas aéreas a tiempo real.' },
  ];

  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="space-y-6"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-cyan-accent/10 text-cyan-accent text-xs font-bold uppercase tracking-widest border border-cyan-accent/20">
            Nuestros Aliados
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Colaboramos con los <br /> <span className="text-cyan-accent">Mejores del Mundo</span></h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
            Desde startups unicornio hasta corporaciones Fortune 500, ayudamos a las organizaciones a redefinir lo que es posible a través de la tecnología.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-10 rounded-[3rem] bg-surface-container-low border border-white/5 hover:border-cyan-accent/30 hover:bg-surface-container transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-accent text-on-surface-variant group-hover:text-surface transition-all duration-300">
                  <client.icon className="w-8 h-8" />
                </div>
                <div className="text-[10px] font-bold text-cyan-accent uppercase tracking-widest bg-cyan-accent/10 px-3 py-1 rounded-full">
                  {client.industry}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3 tracking-tight">{client.name}</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">{client.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="max-w-5xl mx-auto px-6 mt-32 text-center py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-accent/5 blur-[120px] rounded-full -z-10" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-6xl font-serif text-cyan-accent italic opacity-20">"</div>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface italic leading-snug">
            Consoltics no es solo un proveedor, es una extensión de nuestro equipo de ingeniería. Su nivel de compromiso y expertise es inigualable en la región.
          </p>
          <div className="space-y-1">
            <h5 className="text-lg font-black tracking-tight">Clemente Castillo</h5>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">CTO @ Banca Global</p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32 text-center">
        <div className="p-20 rounded-[4rem] bg-gradient-to-br from-cyan-accent/20 via-surface-container-highest to-surface-container border border-white/10 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">¿Listo para unirse a los <br /> líderes tecnológicos?</h2>
            <p className="text-xl text-on-surface-variant max-w-xl mx-auto font-medium">
              Agende su consultoría de diagnóstico sin costo hoy mismo.
            </p>
            <button 
              onClick={() => {
                window.location.href = '/#contacto';
              }}
              className="bg-cyan-accent text-surface-container-lowest px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all glow-cyan shadow-2xl shadow-cyan-accent/20 active:scale-95"
            >
              Empezar Ahora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
