"use client";
import { useState, useEffect } from 'react';
import { getAsignaturas } from '@/services/api';

export default function EstudianteMaterias() {
  const [materias, setMaterias] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  // Función para obtener los datos del BFF
  const cargarMaterias = async () => {
    try {
      setCargando(true);
      const data = await getAsignaturas();
      setMaterias(data);
    } catch (error) {
      console.error("Fallo al cargar materias:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarMaterias();
  }, []);

  return (
    /* Se usa bg-background y text-foreground para asegurar visibilidad global */
    <div className="p-10 max-w-5xl mx-auto min-h-screen bg-background text-foreground">
      <div className="flex justify-between items-center mb-10 border-b pb-6 border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Mis Materias</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Listado oficial de asignaturas disponibles para este semestre</p>
        </div>
        <button 
          onClick={cargarMaterias}
          className="bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all shadow-sm"
          title="Refrescar lista"
        >
          🔄
        </button>
      </div>

      {cargando ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-center text-zinc-400 animate-pulse text-lg">Cargando oferta académica...</p>
        </div>
      ) : materias.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materias.map((m) => (
            <div 
              key={m.id} 
              className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-all border-x border-b border-zinc-100 dark:border-zinc-800"
            >
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Asignatura</span>
              <h2 className="text-2xl font-bold text-foreground mt-1 mb-3">{m.nombre}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {m.descripcion || "Esta materia no tiene una descripción cargada por el administrador."}
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 bg-zinc-800 dark:bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-inner">
                  {m.profesor ? m.profesor.substring(0, 2).toUpperCase() : '??'}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-zinc-400">Docente a cargo</p>
                  <p className="text-sm font-bold text-foreground">{m.profesor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">No hay materias registradas aún.</p>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">Consulta con tu administrador institucional.</p>
        </div>
      )}
    </div>
  );
}