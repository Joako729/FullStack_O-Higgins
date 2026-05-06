"use client";
import { useState, useEffect } from 'react';
import { getAsignaturas, createAsignatura, deleteAsignatura, updateAsignatura } from '@/services/api';

export default function AdminMaterias() {
  const [materias, setMaterias] = useState<any[]>([]);
  const [form, setForm] = useState({ nombre: '', profesor: '', descripcion: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const cargar = async () => setMaterias(await getAsignaturas());
  useEffect(() => { cargar(); }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    editId ? await updateAsignatura(editId, form) : await createAsignatura(form);
    setForm({ nombre: '', profesor: '', descripcion: '' });
    setEditId(null);
    cargar();
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Administración de Asignaturas</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input className="border p-3 rounded-lg" placeholder="Nombre" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} required />
        <input className="border p-3 rounded-lg" placeholder="Profesor" value={form.profesor} onChange={e => setForm({...form, profesor: e.target.value})} required />
        <input className="border p-3 rounded-lg" placeholder="Descripción" value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} />
        <button className="bg-blue-600 text-white font-bold p-3 rounded-lg hover:bg-blue-700 transition">
          {editId ? 'Actualizar' : 'Crear Materia'}
        </button>
      </form>

      <div className="grid gap-4">
        {materias.map((m) => (
          <div key={m.id} className="flex justify-between items-center bg-white p-5 border rounded-xl shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-800">{m.nombre}</h3>
              <p className="text-slate-500">Docente: {m.profesor}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setForm(m); setEditId(m.id); }} className="text-blue-600 font-bold hover:underline">Editar</button>
              <button onClick={async () => { await deleteAsignatura(m.id); cargar(); }} className="text-red-500 font-bold hover:underline">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}