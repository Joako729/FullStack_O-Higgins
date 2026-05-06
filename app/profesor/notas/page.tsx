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
      setMsg({ t: "Nota guardada con éxito", c: "text-green-600" });
      setForm({ rutEstudiante: '', asignatura: '', valor: '' });
    } catch {
      setMsg({ t: "Error de conexión", c: "text-red-600" });
    }
  };

  return (
    <div className="p-10 max-w-lg mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Registro de Notas</h2>
      {msg.t && <p className={`mb-4 ${msg.c}`}>{msg.t}</p>}
      <form onSubmit={enviar} className="space-y-4">
        <input className="w-full border p-2 rounded" placeholder="RUT Estudiante" value={form.rutEstudiante} onChange={e => setForm({...form, rutEstudiante: e.target.value})} required />
        <input className="w-full border p-2 rounded" placeholder="Asignatura" value={form.asignatura} onChange={e => setForm({...form, asignatura: e.target.value})} required />
        <input className="w-full border p-2 rounded" type="number" step="0.1" placeholder="Nota (1.0 - 7.0)" value={form.valor} onChange={e => setForm({...form, valor: e.target.value})} required />
        <button className="w-full bg-blue-600 text-white p-2 rounded font-bold">Registrar Nota</button>
      </form>
    </div>
  );
}