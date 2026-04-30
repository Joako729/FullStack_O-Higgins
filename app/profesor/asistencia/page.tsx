'use client';
import Link from 'next/link';

export default function PasarListaPage() {
  const alumnos = [
    { id: 1, nombre: "Joaquín Cáceres", rut: "11.111.111-1" },
    { id: 2, nombre: "Marcelo Apablaza", rut: "22.222.222-2" }
  ];

  return (
    <div className="space-y-6">
      <Link href="/profesor" className="text-sky-400 text-sm hover:underline">← Volver</Link>
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-bold text-white uppercase">Control de Asistencia</h1>
        <p className="text-sky-400 text-xs font-mono">Curso: 2° Medio A</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        {alumnos.map(a => (
          <div key={a.id} className="p-4 border-b border-slate-800 flex justify-between items-center hover:bg-slate-800/30">
            <div>
              <p className="text-sm font-bold text-white">{a.nombre}</p>
              <p className="text-[10px] text-slate-500">{a.rut}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-lg text-xs font-bold hover:bg-sky-500 hover:text-slate-950 transition-all">P</button>
              <button className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-lg text-xs font-bold hover:bg-red-500 hover:text-white transition-all">A</button>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full bg-sky-500 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-sky-500/20">Finalizar Registro del Día</button>
    </div>
  );
}