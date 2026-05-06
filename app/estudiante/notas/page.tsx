"use client";
import { useState } from 'react';
import { obtenerNotas } from '@/services/api';

export default function PaginaEstudiante() {
  const [rut, setRut] = useState('');
  const [notas, setNotas] = useState<any[]>([]);

  const buscar = async () => {
    try {
      const data = await obtenerNotas(rut);
      setNotas(data);
    } catch {
      alert("No se pudieron cargar las notas");
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Mis Calificaciones</h2>
      <div className="flex gap-2 mb-6">
        <input className="flex-1 border p-2 rounded" placeholder="Tu RUT" value={rut} onChange={e => setRut(e.target.value)} />
        <button onClick={buscar} className="bg-black text-white px-4 py-2 rounded">Consultar</button>
      </div>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr><th className="border p-2">Asignatura</th><th className="border p-2">Nota</th></tr>
        </thead>
        <tbody>
          {notas.map((n, i) => (
            <tr key={i}><td className="border p-2">{n.asignatura}</td><td className="border p-2 font-bold">{n.valor}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}