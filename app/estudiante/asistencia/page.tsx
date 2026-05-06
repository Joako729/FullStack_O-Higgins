"use client";
import { useState } from 'react';
import { AlertFactory } from '@/ohiggins-ui';
import { obtenerAsistencia } from '@/services/api';

export default function EstudianteAsistencia() {
  const [rut, setRut] = useState('');
  const [lista, setLista] = useState<any[]>([]);

  const buscar = async () => {
    const data = await obtenerAsistencia(rut);
    setLista(data);
  };

  const porcentaje = lista.length > 0 ? (lista.filter(a => a.estado === 'Presente').length / lista.length) * 100 : 0;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Mi Registro de Asistencia</h1>
      <div className="flex gap-2 mb-10">
        <input className="flex-1 border-2 p-3 rounded-xl" placeholder="Ingresa tu RUT" value={rut} onChange={e => setRut(e.target.value)} />
        <button onClick={buscar} className="bg-black text-white px-10 py-3 rounded-xl font-bold">Consultar</button>
      </div>
      {lista.length > 0 && (
        <div className="relative mb-10">
          <AlertFactory type="asistencia" />
          <p className="absolute top-8 left-14 text-blue-700 font-bold">Asistencia General: {porcentaje.toFixed(0)}% (Mínimo 75%)</p>
        </div>
      )}
      <div className="bg-slate-900 text-white p-4 rounded-t-xl font-bold">Bitácora de Clases</div>
      <div className="border-2 border-t-0 rounded-b-xl overflow-hidden bg-white">
        {lista.map((a, i) => (
          <div key={i} className="flex justify-between p-5 border-b last:border-b-0 hover:bg-slate-50">
            <span className="text-slate-500 font-medium">Clase del {a.fecha}</span>
            <span className={`font-bold ${a.estado === 'Presente' ? 'text-green-600' : 'text-red-600'}`}>{a.estado}</span>
          </div>
        ))}
      </div>
    </div>
  );
}