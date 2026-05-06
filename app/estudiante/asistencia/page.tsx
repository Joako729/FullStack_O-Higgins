"use client";
import { useState } from 'react';
import { obtenerAsistencia } from '@/services/api';

export default function EstudianteAsistencia() {
  const [rut, setRut] = useState('');
  const [lista, setLista] = useState<any[]>([]);

  const buscar = async () => {
    try {
      const data = await obtenerAsistencia(rut);
      setLista(data);
    } catch (error) {
      console.error("Error al obtener asistencia:", error);
      setLista([]);
    }
  };

  return (
    /* Contenedor con fondo adaptable al tema */
    <div className="p-10 max-w-4xl mx-auto min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-foreground border-b pb-2">
        Mi Asistencia
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <input 
          className="flex-1 border-2 p-3 rounded-xl bg-white dark:bg-zinc-800 text-foreground border-zinc-300 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Ingresa tu RUT (ej: 12.345.678-9)" 
          value={rut} 
          onChange={e => setRut(e.target.value)} 
        />
        <button 
          onClick={buscar} 
          className="bg-blue-600 dark:bg-blue-700 text-white px-10 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-sm"
        >
          Consultar
        </button>
      </div>

      {/* Encabezado de la bitácora */}
      <div className="bg-zinc-900 dark:bg-zinc-800 text-white p-4 rounded-t-xl font-bold border-x border-t border-zinc-800">
        Bitácora de Clases
      </div>

      {/* Cuerpo de la bitácora con fondo adaptable */}
      <div className="border-2 border-t-0 rounded-b-xl overflow-hidden bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
        {lista && lista.length > 0 ? lista.map((a, i) => (
          <div key={i} className="flex justify-between items-center p-5 border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">
              Clase del {a.fecha}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
              a.estado === 'Presente' 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {a.estado}
            </span>
          </div>
        )) : (
          <div className="p-10 text-center">
            <p className="text-zinc-400 dark:text-zinc-500 italic">
              No hay registros para este RUT.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}