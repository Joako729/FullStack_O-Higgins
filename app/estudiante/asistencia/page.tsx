'use client';
import Link from 'next/link';

export default function AsistenciaEstudiantePage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header>
        <Link href="/estudiante" className="text-sky-400 text-xs hover:underline">← Volver al Panel</Link>
        <h1 className="text-3xl font-black text-white mt-2 italic uppercase">Mi Asistencia y Conducta</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center">
          <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-2">Asistencia Anual</p>
          <p className="text-6xl font-black text-sky-400">96%</p>
          <p className="text-slate-400 text-sm mt-4 italic">Cumples con el requisito mínimo de promoción.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          <h3 className="text-white font-bold mb-4">Anotaciones Recientes</h3>
          <ul className="space-y-4 text-sm">
            <li className="border-l-2 border-sky-500 pl-4">
              <p className="text-sky-400 font-bold text-xs uppercase">Positiva - 15 Abr</p>
              <p className="text-slate-300 italic">"Excelente participación en el debate de Historia."</p>
            </li>
            <li className="border-l-2 border-slate-700 pl-4">
              <p className="text-slate-500 font-bold text-xs uppercase">Observación - 02 Abr</p>
              <p className="text-slate-300 italic">"Llega con 5 minutos de retraso a la primera hora."</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}