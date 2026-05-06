"use client";
import { useState } from 'react';
import { obtenerAsistencia } from '@/services/api';

export default function EstudianteAsistencia() {
  const [rut, setRut] = useState('');
  const [lista, setLista] = useState<any[]>([]);

  const buscar = async () => {
    const data = await obtenerAsistencia(rut);
    setLista(data);
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Mi Asistencia</h1>
      <div className="flex gap-2 mb-10">
        <input 
          className="flex-1 border-2 p-3 rounded-xl" 
          placeholder="Ingresa tu RUT" 
          value={rut} 
          onChange={e => setRut(e.target.value)} 
        />
        <button onClick={buscar} className="bg-black text-white px-10 py-3 rounded-xl font-bold">
          Consultar
        </button>
      </div>

      <div className="bg-slate-900 text-white p-4 rounded-t-xl font-bold">Bitácora de Clases</div>
      <div className="border-2 border-t-0 rounded-b-xl overflow-hidden bg-white">
        {lista.length > 0 ? lista.map((a, i) => (
          <div key={i} className="flex justify-between p-5 border-b last:border-b-0">
            <span className="text-slate-500">Clase del {a.fecha}</span>
            <span className={`font-bold ${a.estado === 'Presente' ? 'text-green-600' : 'text-red-600'}`}>
              {a.estado}
            </span>
          </div>
        )) : (
          <p className="p-10 text-center text-slate-400 italic">No hay registros para este RUT.</p>
        )}
      </div>
    </div>
  );
}