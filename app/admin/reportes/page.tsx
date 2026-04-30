'use client';
import Link from 'next/link';

export default function ReportesAdminPage() {
  return (
    <div className="space-y-8">
      <header>
        <Link href="/admin" className="text-sky-400 text-sm hover:underline">← Volver</Link>
        <h1 className="text-3xl font-black text-white mt-2 italic uppercase tracking-tighter">Reportes Institucionales</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
          <h3 className="text-sky-400 font-bold uppercase text-xs tracking-widest">Análisis de Desempeño</h3>
          <p className="text-slate-400 text-sm">Genere informes detallados sobre el promedio general por curso y nivel.</p>
          <button className="w-full bg-slate-800 hover:bg-sky-500/10 text-sky-400 py-3 rounded-xl border border-sky-500/20 font-bold text-xs transition-all uppercase">
            Descargar Reporte Académico (.PDF)
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
          <h3 className="text-sky-400 font-bold uppercase text-xs tracking-widest">Estadísticas de Asistencia</h3>
          <p className="text-slate-400 text-sm">Resumen mensual de asistencia y puntualidad de la comunidad educativa.</p>
          <button className="w-full bg-slate-800 hover:bg-sky-500/10 text-sky-400 py-3 rounded-xl border border-sky-500/20 font-bold text-xs transition-all uppercase">
            Generar Informe de Asistencia (.XLSX)
          </button>
        </div>
      </div>

      <div className="p-6 bg-sky-500/5 border border-sky-500/20 rounded-2xl text-center">
        <p className="text-slate-500 text-xs italic">
          * Estos reportes se consolidan mediante la integración de todos los módulos desarrollados en el Examen Final Transversal.
        </p>
      </div>
    </div>
  );
}