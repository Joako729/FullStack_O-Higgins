'use client';
import Link from 'next/link';

export default function ProfesoresAdminPage() {
  const docentes = [
    { id: 1, nombre: "Juan Pérez", asignatura: "Matemáticas", curso: "1° Medio A" },
    { id: 2, nombre: "Ana María Soto", asignatura: "Física", curso: "3° Medio B" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <Link href="/admin" className="text-sky-400 text-xs hover:underline">← Volver</Link>
        <h1 className="text-3xl font-black text-white mt-2 italic uppercase">Asignación de Planta Docente</h1>
      </header>

      <div className="grid gap-4">
        {docentes.map(d => (
          <div key={d.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex justify-between items-center group hover:border-sky-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">👤</div>
              <div>
                <h3 className="text-white font-bold">{d.nombre}</h3>
                <p className="text-sky-400 text-xs font-mono">{d.asignatura}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-500 text-xs uppercase font-bold mb-1">Curso Asignado</p>
              <p className="text-white font-black">{d.curso}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}