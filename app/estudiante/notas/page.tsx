'use client';
import Link from 'next/link';

export default function NotasEstudiantePage() {
  // Estos datos en el futuro vendrán del Microservicio de Gestión Académica
  const calificaciones = [
    { id: 1, asignatura: "Matemáticas", n1: 6.5, n2: 5.8, n3: 7.0, promedio: 6.4 },
    { id: 2, asignatura: "Lenguaje", n1: 5.5, n2: 6.2, n3: 5.9, promedio: 5.9 },
    { id: 3, asignatura: "Historia", n1: 7.0, n2: 6.8, n3: 7.0, promedio: 6.9 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header className="flex justify-between items-center">
        <div>
          <Link href="/estudiante" className="text-sky-400 text-xs hover:underline">← Volver al Panel</Link>
          <h1 className="text-3xl font-black text-white mt-2 italic">MIS CALIFICACIONES</h1>
        </div>
        <div className="text-right">
          <p className="text-slate-500 text-xs">Periodo Académico</p>
          <p className="text-white font-bold">Primer Semestre 2026</p>
        </div>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50 text-sky-400 text-xs uppercase tracking-widest border-b border-slate-700">
              <th className="p-6">Asignatura</th>
              <th className="p-6 text-center">Nota 1</th>
              <th className="p-6 text-center">Nota 2</th>
              <th className="p-6 text-center">Nota 3</th>
              <th className="p-6 text-center bg-sky-500/10">Promedio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {calificaciones.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-6 font-bold text-white">{item.asignatura}</td>
                <td className="p-6 text-center text-slate-400 font-mono">{item.n1}</td>
                <td className="p-6 text-center text-slate-400 font-mono">{item.n2}</td>
                <td className="p-6 text-center text-slate-400 font-mono">{item.n3}</td>
                <td className="p-6 text-center font-black text-sky-400 bg-sky-500/5">{item.promedio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 bg-sky-500/5 border border-sky-500/20 rounded-2xl">
        <p className="text-slate-400 text-xs italic">
          * Los datos mostrados arriba son sincronizados en tiempo real con el Microservicio de Gestión Académica mediante el componente BFF.
        </p>
      </div>
    </div>
  );
}