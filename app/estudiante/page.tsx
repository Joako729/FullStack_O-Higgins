'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EstudianteDashboard() {
  const [userName, setUserName] = useState('Estudiante');

  useEffect(() => {
    // Recuperamos la sesión para personalizar el saludo
    const session = localStorage.getItem('session');
    if (session) {
      setUserName('Joaquín Marcelo'); // Simulación de nombre del estudiante
    }
  }, []);

  return (
    <div className="space-y-10 animate-in fade-in zoom-in duration-700">
      {/* Cabecera del Portal */}
      <header className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <p className="text-sky-400 font-mono text-xs uppercase tracking-[0.2em] mb-2">Portal Académico Estudiantil</p>
          <h1 className="text-4xl font-black text-white italic">
            BIENVENIDO, <span className="text-sky-400 uppercase">{userName}</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl text-sm leading-relaxed">
            Desde este panel puedes realizar el seguimiento de tu rendimiento académico, 
            revisar tu asistencia y mantener comunicación con tus docentes del Colegio Bernardo O’Higgins.
          </p>
        </div>
      </header>

      {/* Grid de Módulos Principales */}
      <section className="space-y-6">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-2">Servicios Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <ModuleCard 
            title="Mis Materias" 
            desc="Consulta tus asignaturas vigentes y horarios de clases." 
            icon="📚" 
            link="/estudiante/materias" 
          />

          <ModuleCard 
            title="Mis Notas" 
            desc="Visualiza tus calificaciones parciales y el análisis de desempeño." 
            icon="📊" 
            link="/estudiante/notas" 
          />

          <ModuleCard 
            title="Mi Asistencia" 
            desc="Revisa tu registro de participación y anotaciones de conducta." 
            icon="📅" 
            link="/estudiante/asistencia" 
          />

          <ModuleCard 
            title="Mensajería" 
            desc="Portal de comunicación directa con tus profesores y el colegio." 
            icon="💬" 
            link="/comunicaciones" 
          />

        </div>
      </section>

      {/* Sección de Información Adicional (Dashboard informativo) */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
            Anuncios Recientes
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-950 rounded-xl border-l-4 border-sky-500">
              <p className="text-xs text-sky-400 font-bold mb-1">DEPARTAMENTO ACADÉMICO</p>
              <p className="text-sm text-slate-300">Ya se encuentran disponibles las fechas para los Exámenes Finales Transversales.</p>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border-l-4 border-slate-700">
              <p className="text-xs text-slate-500 font-bold mb-1">ADMINISTRACIÓN</p>
              <p className="text-sm text-slate-300">Recuerden actualizar sus datos de contacto en el portal de apoderados.</p>
            </div>
          </div>
        </div>

        <div className="bg-sky-500/5 border border-sky-500/20 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
          <p className="text-slate-500 text-xs font-bold uppercase mb-2">Promedio General</p>
          <p className="text-5xl font-black text-white">6.4</p>
          <p className="text-sky-400 text-[10px] mt-4 font-mono tracking-tighter">Sincronizado con Microservicio de Gestión</p>
        </div>
      </section>
    </div>
  );
}

// Componente Reutilizable para las Tarjetas
function ModuleCard({ title, desc, icon, link }: { title: string, desc: string, icon: string, link: string }) {
  return (
    <Link href={link} className="group bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 hover:bg-slate-800/50 transition-all shadow-xl">
      <div className="text-3xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-xs leading-relaxed mb-6">
        {desc}
      </p>
      <div className="flex items-center text-sky-500 text-[10px] font-black uppercase tracking-[0.2em] border-t border-slate-800 pt-4">
        Acceder <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
      </div>
    </Link>
  );
}