'use client';
import Link from 'next/link';

export default function EstudiantePage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-black text-white italic">PORTAL DEL ESTUDIANTE</h1>
        <p className="text-sky-400 text-sm">Colegio Bernardo O’Higgins - Coquimbo</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-all">
          <div className="text-2xl mb-4">📊</div>
          <h3 className="text-white font-bold text-lg mb-2">Mis Notas</h3>
          <p className="text-slate-500 text-xs mb-4">Consulta tus calificaciones y desempeño académico.</p>
          <Link href="/asistencia" className="text-sky-400 text-[10px] font-bold uppercase tracking-widest">Ver Detalles →</Link>
        </div>
        {/* Agrega más tarjetas como "Mis Materias" o "Mensajes" aquí */}
      </div>
    </div>
  );
}