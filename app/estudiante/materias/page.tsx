'use client';
import Link from 'next/link';

export default function MateriasPage() {
  const materias = [
    { id: 1, nombre: "Desarrollo Fullstack III", prof: "Docente Duoc", sala: "L2" },
    { id: 2, nombre: "Arquitectura de Software", prof: "Marcelo Apablaza", sala: "L5" },
    { id: 3, nombre: "Ciberseguridad", prof: "Vicente Osorio", sala: "Remoto" }
  ];

  return (
    <div className="space-y-6">
      <Link href="/estudiante" className="text-sky-400 text-sm hover:underline">← Volver</Link>
      <h1 className="text-2xl font-bold text-white uppercase italic">Mis Materias Asignadas</h1>
      <div className="grid gap-4">
        {materias.map(m => (
          <div key={m.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-sky-400 font-bold">{m.nombre}</p>
              <p className="text-slate-500 text-xs">Prof: {m.prof}</p>
            </div>
            <span className="bg-slate-800 text-slate-400 text-[10px] px-3 py-1 rounded-full border border-slate-700">{m.sala}</span>
          </div>
        ))}
      </div>
    </div>
  );
}