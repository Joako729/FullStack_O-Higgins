'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState('Administrador');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) setAdminName('Admin');
  }, []);

  return (
    <div className="space-y-10 animate-in fade-in zoom-in duration-700">
      <header className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <p className="text-sky-400 font-mono text-xs uppercase tracking-[0.2em] mb-2">Gestión Institucional Centralizada</p>
          <h1 className="text-4xl font-black text-white italic">
            PORTAL ADMIN: <span className="text-sky-400 uppercase">{adminName}</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl text-sm leading-relaxed">
            Centralice la información académica y facilite el acceso a los distintos actores del proceso educativo del Colegio Bernardo O’Higgins.
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdminModuleCard 
          title="Configurar Cursos" 
          desc="Gestión de niveles, secciones y matrículas anuales." 
          icon="🏫" 
          link="/admin/cursos" 
        />
        <AdminModuleCard 
          title="Planta Docente" 
          desc="Asignación de profesores a asignaturas y cursos." 
          icon="👤" 
          link="/admin/profesores" 
        />
        <AdminModuleCard 
          title="Reportes" 
          desc="Generación de informes institucionales y de rendimiento." 
          icon="📈" 
          link="/admin/reportes" 
        />
      </section>
    </div>
  );
}

function AdminModuleCard({ title, desc, icon, link }: { title: string, desc: string, icon: string, link: string }) {
  return (
    <Link href={link} className="group bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-all shadow-xl">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400">{title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center text-sky-500 text-[10px] font-black uppercase tracking-widest border-t border-slate-800 pt-4">
        Configurar <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
      </div>
    </Link>
  );
}