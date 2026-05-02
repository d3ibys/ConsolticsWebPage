import { motion } from 'motion/react';
import { 
  Database, 
  HardDrive, 
  ShieldCheck, 
  RotateCcw, 
  Cloud, 
  Lock, 
  Zap, 
  Server,
  FileCheck,
  CheckCircle2,
  Clock,
  History
} from 'lucide-react';

export default function Backup() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const tools = [
    {
      id: 'borg',
      name: 'BorgBackup',
      tagline: 'Deduplicación y Cifrado de Élite',
      description: 'Una herramienta de backup de alto rendimiento que realiza deduplicación masiva de datos para ahorrar espacio. Todo el contenido se cifra en el lado del cliente antes de enviarse, garantizando privacidad absoluta.',
      icon: Lock,
      useCases: ['Backups de Servidores de Archivos', 'Deduplicación Masiva de Datos', 'Archivado Seguro a Largo Plazo'],
      specs: [
        { label: 'Eficiencia', value: 'Deduplicación basada en fragmentos' },
        { label: 'Seguridad', value: 'Cifrado AES-256 (Client-side)' },
        { label: 'Velocidad', value: 'Compresión ajustable (LZ4, ZSTD)' },
        { label: 'Soporte', value: 'Montaje de backups vía FUSE' }
      ]
    },
    {
      id: 'truenas',
      name: 'TrueNAS',
      tagline: 'Almacenamiento Empresarial Open Source',
      description: 'La plataforma de almacenamiento (NAS) más popular del mundo, basada en el sistema de archivos ZFS. Ofrece integridad de datos inigualable contra la corrupción silenciosa y gestión avanzada de volúmenes.',
      icon: HardDrive,
      useCases: ['Almacenamiento Centralizado (SAN/NAS)', 'Snapshots y Replicación Remota', 'Sistemas de Archivos Resilientes (ZFS)'],
      specs: [
        { label: 'Sistema de Archivos', value: 'ZFS (Enterprise Grade)' },
        { label: 'Protocolos', value: 'SMB, NFS, iSCSI, S3' },
        { label: 'Protección', value: 'RAID-Z, Self-healing, Snapshots' },
        { label: 'Escalabilidad', value: 'Petabytes de capacidad' }
      ]
    },
    {
      id: 'restic',
      name: 'Restic',
      tagline: 'Backups Modernos y Rápidos',
      description: 'Un programa de backup moderno diseñado para ser fácil de usar, rápido y eficiente. Soporta múltiples destinos (S3, Azure, Google Cloud, SFTP) y se enfoca en la verificabilidad constante del repositorio.',
      icon: Cloud,
      useCases: ['Backup Multi-cloud', 'Despliegues en Contenedores', 'Versionado de Datos Críticos'],
      specs: [
        { label: 'Modelo', value: 'Snapshot-based deduplication' },
        { label: 'Destinos', value: 'S3, GCS, Azure, Swift, Backblaze' },
        { label: 'Binario', value: 'Single executable (Go)' },
        { label: 'Verificación', value: 'Hash-based integrity checks' }
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
            <RotateCcw className="w-3 h-3" />
            Data Resilience & Integrity
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Backup y <br /> <span className="text-cyan-accent">Almacenamiento</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto text-justify">
            Su activo más valioso son sus datos. Implementamos arquitecturas de almacenamiento de grado empresarial y estrategias de recuperación ante desastres que garantizan la disponibilidad perpetua de su información.
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
                  <History className="w-3 h-3 text-cyan-accent" />
                  Escenarios de Implementación
                </h4>
                <div className="grid gap-3">
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
                <FileCheck className="w-5 h-5 text-cyan-accent" />
                Especificaciones Técnicas
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

      {/* Continuity CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="p-20 rounded-[4rem] bg-gradient-to-br from-cyan-accent/20 to-surface-container border border-white/10 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
               <Clock className="w-5 h-5 text-cyan-accent" />
               <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Planificación de Desastres (DRP)</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">La supervivencia de su empresa <br /> reside en su <span className="text-cyan-accent">Último Backup</span></h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium text-justify">
              No espere a un incidente para descubrir que su estrategia de respaldo es insuficiente. Diseñamos sistemas de redundancia geográfica y auditorías de recuperación para que nunca pierda un segundo de su operación.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => window.location.href = '/#contacto'}
                className="bg-cyan-accent text-surface-container-lowest px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all glow-cyan"
              >
                Auditar mis Backups
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
