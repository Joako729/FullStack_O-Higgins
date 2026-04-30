'use client';
import Link from 'next/link';

export default function IngresarNotasPage() {
  return (
    <div className="space-y-6">
      <Link href="/profesor" className="text-sky-400 text-sm hover:underline">← Volver</Link>
      <h1 className="text-2xl font-bold text-white uppercase italic">Carga de Calificaciones</h1>
      
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div>
          <label className="text-xs text-slate-500 uppercase font-bold">Seleccionar Evaluación</label>
          <select className="w-full bg-slate-950 border border-slate-700 p-3 rounded-xl text-white mt-1 text-sm outline-none focus:ring-1 focus:ring-sky-500">
            <option>Evaluación Parcial 2 - Implementación</option>
            <option>Examen Final Transversal</option>
          </select>
        </div>
        
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
          <p className="text-slate-500 text-xs italic">Cargue el archivo CSV con las notas o ingréselas manualmente en el siguiente paso.</p>
        </div>
        
        <button className="w-full bg-slate-800 text-sky-400 font-bold py-3 rounded-xl border border-sky-500/30 hover:bg-sky-500/10 transition-all">Sincronizar con Microservicio</button>
      </div>
    </div>
  );
}