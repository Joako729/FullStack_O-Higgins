'use client';
import Link from 'next/link';

export default function CursosAdminPage() {
  const cursos = [
    { id: 1, nivel: "Enseñanza Media", nombre: "1° Medio A", alumnos: 32 },
    { id: 2, nivel: "Enseñanza Media", nombre: "2° Medio B", alumnos: 28 },
    { id: 3, nivel: "Enseñanza Básica", nombre: "8° Básico A", alumnos: 35 },
  ];

  return (
    <div className="space-y-8">
      <header>
        <Link href="/admin" className="text-sky-400 text-xs hover:underline">← Volver al Panel</Link>
        <h1 className="text-3xl font-black text-white mt-2 italic uppercase">Configuración de Cursos</h1>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <p className="text-slate-400 text-sm">Estructura académica actual</p>
          <button className="bg-sky-500 text-slate-950 px-4 py-2 rounded-xl font-bold text-xs hover:bg-sky-600 transition-all">
            + Crear Nuevo Curso
          </button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-800/50 text-sky-400 text-[10px] font-bold uppercase tracking-widest">
            <tr>
              <th className="p-5">Nivel</th>
              <th className="p-5">Nombre del Curso</th>
              <th className="p-5">Total Estudiantes</th>
              <th className="p-5">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {cursos.map(c => (
              <tr key={c.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-5 text-slate-400 text-sm">{c.nivel}</td>
                <td className="p-5 text-white font-bold">{c.nombre}</td>
                <td className="p-5 text-slate-300 font-mono text-sm">{c.alumnos}</td>
                <td className="p-5">
                  <button className="text-sky-400 text-xs hover:text-white transition-colors">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}