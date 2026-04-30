'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EstudianteDashboard() {
  const [userName, setUserName] = useState('Estudiante');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      setUserName('Joaquín Marcelo'); 
    }
  }, []);

  return (
    /* bg-[#121212] es el "negro claro" que pediste. min-h-screen asegura que cubra todo el fondo */
    <div className="min-h-screen bg-[#121212] text-slate-200 transition-colors duration-500 selection:bg-sky-500/30">
      
      {/* Contenedor con padding para que nada toque los bordes */}
      <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Cabecera del Portal - Usamos un tono un poco más claro para que resalte del fondo */}
        <header className="bg-slate-900/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full -mr-40 -mt-40 blur-[100px]"></div>
          <div className="relative z-10">
            <p className="text-sky-400 font-mono text-xs uppercase tracking-[0.3em] mb-3">Portal Académico Estudiantil</p>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              BIENVENIDO, <span className="text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">{userName}</span>
            </h1>
            <p className="text-slate-400 mt-5 max-w-2xl text-base leading-relaxed font-medium">
              Gestiona tu rendimiento, revisa tu asistencia y mantente conectado con la comunidad del **Colegio Bernardo O’Higgins**.
            </p>
          </div>
        </header>

        {/* Grid de Módulos */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 ml-2">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">Servicios Principales</h2>
            <div className="h-[1px] flex-grow bg-slate-800"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModuleCard title="Mis Materias" desc="Asignaturas y horarios vigentes." icon="📚" link="/estudiante/materias" />
            <ModuleCard title="Mis Notas" desc="Calificaciones y análisis de desempeño." icon="📊" link="/estudiante/notas" />
            <ModuleCard title="Mi Asistencia" desc="Registro de participación y conducta." icon="📅" link="/estudiante/asistencia" />
            <ModuleCard title="Mensajería" desc="Comunicación directa con docentes." icon="💬" link="/comunicaciones" />
          </div>
        </section>

        {/* Sección Informativa Inferior */}
        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              Tablón de Anuncios
            </h3>
            <div className="space-y-4">
              <div className="group p-5 bg-[#1a1a1a] hover:bg-[#222222] rounded-2xl border border-white/5 transition-all">
                <p className="text-[10px] text-sky-400 font-black tracking-widest mb-2">ACADÉMICO • HOY</p>
                <p className="text-slate-300 font-medium">Fechas disponibles para los Exámenes Finales Transversales.</p>
              </div>
              <div className="group p-5 bg-[#1a1a1a] hover:bg-[#222222] rounded-2xl border border-white/5 transition-all">
                <p className="text-[10px] text-slate-500 font-black tracking-widest mb-2">ADMINISTRACIÓN • AYER</p>
                <p className="text-slate-400 font-medium">Actualización obligatoria de datos de contacto.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-500/10 to-transparent border border-sky-500/20 p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-inner">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Promedio General</p>
            <div className="relative">
               <p className="text-7xl font-black text-white tracking-tighter">6.4</p>
               <div className="absolute -top-2 -right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-[#121212]"></div>
            </div>
            <p className="text-sky-400/60 text-[10px] mt-6 font-mono font-bold tracking-widest uppercase">Estatus: Al día</p>
          </div>
        </section>

      </div>
    </div>
  );
}

function ModuleCard({ title, desc, icon, link }: { title: string, desc: string, icon: string, link: string }) {
  return (
    <Link href={link} className="group relative bg-slate-900/50 border border-white/5 p-7 rounded-3xl hover:bg-slate-800/60 transition-all duration-300 shadow-xl overflow-hidden">
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-all"></div>
      <div className="text-4xl mb-5 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500 ease-out">
        {icon}
      </div>
      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-sky-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
        {desc}
      </p>
      <div className="flex items-center text-sky-500 text-[11px] font-black uppercase tracking-[0.2em] pt-4 border-t border-white/5">
        Explorar <span className="ml-2 transition-transform group-hover:translate-x-3">→</span>
      </div>
    </Link>
  );
}