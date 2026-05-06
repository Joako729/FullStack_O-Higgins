"use client";
import { useState, useEffect } from 'react';
import { getAsignaturas, createAsignatura, deleteAsignatura, updateAsignatura } from '@/services/api';

export default function AdminMaterias() {
  const [materias, setMaterias] = useState<any[]>([]);
  const [form, setForm] = useState({ nombre: '', profesor: '', descripcion: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const cargar = async () => {
    const data = await getAsignaturas();
    setMaterias(data);
  };

  useEffect(() => { 
    cargar(); 
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    editId ? await updateAsignatura(editId, form) : await createAsignatura(form);
    setForm({ nombre: '', profesor: '', descripcion: '' });
    setEditId(null);
    cargar();
  };

  return (
    /* Contenedor principal con fondo adaptable */
    <div className="p-10 max-w-6xl mx-auto min-h-screen bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-8 text-foreground border-b pb-2">
        Administración de Asignaturas
      </h1>
      
      {/* Formulario con colores de input corregidos */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 mb-10 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <input 
          className="border p-3 rounded-lg bg-white dark:bg-zinc-800 text-foreground border-zinc-300 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Nombre Asignatura" 
          value={form.nombre} 
          onChange={e => setForm({...form, nombre: e.target.value})} 
          required 
        />
        <input 
          className="border p-3 rounded-lg bg-white dark:bg-zinc-800 text-foreground border-zinc-300 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Nombre Profesor" 
          value={form.profesor} 
          onChange={e => setForm({...form, profesor: e.target.value})} 
          required 
        />
        <input 
          className="border p-3 rounded-lg bg-white dark:bg-zinc-800 text-foreground border-zinc-300 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Descripción (Opcional)" 
          value={form.descripcion} 
          onChange={e => setForm({...form, descripcion: e.target.value})} 
        />
        <button className="bg-blue-600 text-white font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          {editId ? 'Actualizar' : 'Crear Materia'}
        </button>
      </form>

      {/* Lista de materias con contraste mejorado */}
      <div className="grid gap-4">
        {materias.map((m) => (
          <div 
            key={m.id} 
            className="flex justify-between items-center bg-white dark:bg-zinc-900 p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {m.nombre}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Docente: <span className="font-medium text-foreground/80">{m.profesor}</span>
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => { setForm(m); setEditId(m.id); }} 
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline decoration-2 underline-offset-4"
              >
                Editar
              </button>
              <button 
                onClick={async () => { if(confirm('¿Eliminar esta materia?')) { await deleteAsignatura(m.id); cargar(); } }} 
                className="text-red-500 dark:text-red-400 font-bold hover:underline decoration-2 underline-offset-4"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}