'use client';
import Link from 'next/link';

export default function PlanificarPage() {
  const evals = [
    { id: 1, curso: "2° Medio A", fecha: "15 Mayo", tipo: "Prueba Coef. 2", tema: "Álgebra" },
    { id: 2, curso: "3° Medio B", fecha: "20 Mayo", tipo: "Taller", tema: "Mecánica" }
  ];

  return (
    <div className="space-y-8">
      <header>
        <Link href="/profesor" className="text-sky-400 text-xs hover:underline">← Volver</Link>
        <h1 className="text-2xl font-bold text-white mt-4 uppercase italic">Calendario de Evaluaciones</h1>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-800/50 text-sky-400 text-[10px] font-bold">
            <tr>
              <th className="p-5">Curso</th>
              <th className="p-5">Fecha</th>
              <th className="p-5">Tipo</th>
              <th className="p-5">Tema</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-sm">
            {evals.map(e => (
              <tr key={e.id} className="hover:bg-slate-800/30">
                <td className="p-5 font-bold text-white">{e.curso}</td>
                <td className="p-5 text-slate-400">{e.fecha}</td>
                <td className="p-5 text-sky-400">{e.tipo}</td>
                <td className="p-5 text-slate-500">{e.tema}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}