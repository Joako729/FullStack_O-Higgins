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

  // Se ejecuta apenas el estudiante entra a la página
  useEffect(() => {
    cargarMaterias();
  }, []);

  return (
    <div className="p-10 max-w-5xl mx-auto min-h-screen bg-slate-50">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Mis Materias</h1>
          <p className="text-slate-500">Listado oficial de asignaturas disponibles para este semestre</p>
        </div>
        <button 
          onClick={cargarMaterias}
          className="bg-white border-2 p-2 rounded-full hover:bg-slate-100 transition shadow-sm"
          title="Refrescar lista"
        >
          🔄
        </button>
      </div>

      {cargando ? (
        <p className="text-center text-slate-400 animate-pulse">Cargando oferta académica...</p>
      ) : materias.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materias.map((m) => (
            <div key={m.id} className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:scale-105 transition-transform">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Asignatura</span>
              <h2 className="text-2xl font-bold text-slate-800 mt-1 mb-3">{m.nombre}</h2>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {m.descripcion || "Esta materia no tiene una descripción cargada por el administrador."}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {m.profesor.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-xs text-slate-400">Docente a cargo</p>
                  <p className="text-sm font-bold text-slate-700">{m.profesor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 text-lg">No hay materias registradas aún.</p>
          <p className="text-sm text-slate-300">Consulta con tu administrador institucional.</p>
        </div>
      )}
    </div>
  );
}