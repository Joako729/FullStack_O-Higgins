'use client';
import Link from 'next/link';

export default function ProfesorDashboard() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <header className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <p className="text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">Libro de Clases Electrónico</p>
        <h1 className="text-4xl font-black text-white italic">PANEL DOCENTE</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModuleCard title="Pasar Lista" desc="Registro diario de asistencia y conducta." icon="✅" link="/profesor/asistencia" />
        <ModuleCard title="Ingresar Notas" desc="Carga de calificaciones al sistema académico." icon="📝" link="/profesor/notas" />
        <ModuleCard title="Planificar" desc="Gestión de evaluaciones y exámenes finales." icon="📅" link="/profesor/evaluaciones" />
      </div>

      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
        <h3 className="text-white font-bold mb-4 flex items-center gap-2">Estado de Cursos</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
            <p className="text-sky-400 font-bold">2° Medio A</p>
            <p className="text-slate-500">Asistencia: Pendiente</p>
          </div>
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
            <p className="text-sky-400 font-bold">3° Medio B</p>
            <p className="text-slate-500">Asistencia: Registrada</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({ title, desc, icon, link }: { title: string, desc: string, icon: string, link: string }) {
  return (
    <Link href={link} className="group bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-all shadow-xl">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
      <div className="mt-6 text-sky-500 text-[10px] font-bold uppercase tracking-widest border-t border-slate-800 pt-4">Gestionar →</div>
    </Link>
  );
}