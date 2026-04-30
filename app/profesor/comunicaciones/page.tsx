'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ComunicacionesPage() {
  const [backLink, setBackLink] = useState('/');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      const { role } = JSON.parse(session);
      setBackLink(role === 'profesor' ? '/profesor' : role === 'admin' ? '/admin' : '/estudiante');
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link href={backLink} className="text-sky-400 text-xs hover:underline">← Volver al Dashboard</Link>
      <h1 className="text-3xl font-black text-white text-center italic">CENTRO DE COMUNICACIONES</h1>
      
      <div className="bg-slate-900 border border-slate-800 rounded-3xl h-[550px] flex flex-col shadow-2xl overflow-hidden border-t-4 border-t-sky-500">
        <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-slate-950/30">
          <div className="flex flex-col items-start space-y-1">
            <span className="text-[10px] font-bold text-sky-500 ml-2">ADMINISTRACIÓN</span>
            <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 max-w-[80%] text-sm">
              Recordatorio: La plataforma estará en mantenimiento el domingo a las 22:00.
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-1">
            <span className="text-[10px] font-bold text-slate-500 mr-2">TÚ</span>
            <div className="bg-sky-500/10 p-4 rounded-2xl rounded-tr-none border border-sky-500/30 max-w-[80%] text-sm italic">
              Recibido, gracias por la información.
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-900 border-t border-slate-800 flex gap-4">
          <input 
            type="text" placeholder="Escriba su mensaje institucional..." 
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-5 py-3 text-white outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-slate-950 px-8 py-3 rounded-xl font-black transition-all">ENVIAR</button>
        </div>
      </div>
    </div>
  );
}