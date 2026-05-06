"use client";
import { useState } from 'react';
import { guardarNota } from '@/services/api';

export default function PaginaProfesor() {
  const [form, setForm] = useState({ rutEstudiante: '', asignatura: '', valor: '' });
  const [msg, setMsg] = useState({ t: '', c: '' });

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await guardarNota({ ...form, valor: parseFloat(form.valor) });
      setMsg({ t: "Nota guardada con éxito", c: "text-green-600 dark:text-green-400" });
      setForm({ rutEstudiante: '', asignatura: '', valor: '' });
    } catch {
      setMsg({ t: "Error de conexión", c: "text-red-600 dark:text-red-400" });
    }
  };

  return (
    /* Se cambió bg-white por bg-background y se añadió text-foreground */
    <div className="min-h-screen p-10 bg-background text-foreground">
      <div className="max-w-lg mx-auto bg-white dark:bg-zinc-900 shadow-xl rounded-lg p-8 border border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-foreground">
          Registro de Notas
        </h2>
        
        {msg.t && <p className={`mb-4 font-medium ${msg.c}`}>{msg.t}</p>}
        
        <form onSubmit={enviar} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">RUT Estudiante</label>
            <input 
              className="w-full border p-2 rounded bg-white dark:bg-zinc-800 text-foreground border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="12.345.678-9" 
              value={form.rutEstudiante} 
              onChange={e => setForm({...form, rutEstudiante: e.target.value})} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Asignatura</label>
            <input 
              className="w-full border p-2 rounded bg-white dark:bg-zinc-800 text-foreground border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="Ej: Matemáticas" 
              value={form.asignatura} 
              onChange={e => setForm({...form, asignatura: e.target.value})} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Nota (1.0 - 7.0)</label>
            <input 
              className="w-full border p-2 rounded bg-white dark:bg-zinc-800 text-foreground border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none" 
              type="number" 
              step="0.1" 
              min="1"
              max="7"
              placeholder="7.0" 
              value={form.valor} 
              onChange={e => setForm({...form, valor: e.target.value})} 
              required 
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-bold transition-colors mt-4">
            Registrar Nota
          </button>
        </form>
      </div>
    </div>
  );
}