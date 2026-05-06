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
      // Se cambió el alert por un estado para evitar interrupciones bruscas
      console.error("No se pudieron cargar las notas");
    }
  };

  return (
    /* Contenedor con fondo adaptable y texto con contraste */
    <div className="p-10 max-w-4xl mx-auto min-h-screen bg-background text-foreground">
      <h2 className="text-3xl font-bold mb-8 border-b pb-2 text-foreground">
        Mis Calificaciones
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <input 
          className="flex-1 border-2 p-3 rounded-xl bg-white dark:bg-zinc-800 text-foreground border-zinc-300 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Ingresa tu RUT (ej: 12.345.678-9)" 
          value={rut} 
          onChange={e => setRut(e.target.value)} 
        />
        <button 
          onClick={buscar} 
          className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-sm"
        >
          Consultar
        </button>
      </div>

      {/* Contenedor de tabla con bordes definidos para evitar el efecto 'blanco sobre blanco' */}
      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-lg">
        <table className="w-full border-collapse bg-white dark:bg-zinc-900">
          <thead className="bg-zinc-100 dark:bg-zinc-800">
            <tr>
              <th className="border-b border-zinc-200 dark:border-zinc-700 p-4 text-left font-bold text-foreground">Asignatura</th>
              <th className="border-b border-zinc-200 dark:border-zinc-700 p-4 text-center font-bold text-foreground">Nota</th>
            </tr>
          </thead>
          <tbody>
            {notas.length > 0 ? (
              notas.map((n, i) => (
                <tr key={i} className="border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="p-4 text-foreground font-medium">{n.asignatura}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-lg font-bold ${
                      n.valor >= 4.0 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' 
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {n.valor.toFixed(1)}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="p-10 text-center text-zinc-400 italic bg-white dark:bg-zinc-900">
                  Ingresa tu RUT para consultar tus calificaciones del periodo académico.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}