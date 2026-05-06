"use client";
import { useState } from 'react';
import { AlertFactory } from '@/ohiggins-ui';
import { registrarAsistencia } from '@/services/api';

export default function ProfesorAsistencia() {
  const [rut, setRut] = useState('');
  const [estado, setEstado] = useState('Presente');
  const [msg, setMsg] = useState<string | null>(null);

  const enviar = async (e: any) => {
    e.preventDefault();
    await registrarAsistencia({ rutEstudiante: rut, estado });
    setMsg(`Asistencia guardada para ${rut}`);
    setRut('');
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Registro Docente: Asistencia</h1>
      {msg && (
        <div className="relative mb-6">
          <AlertFactory type="asistencia" />
          <p className="absolute top-8 left-14 text-blue-700 font-bold">{msg}</p>
        </div>
      )}
      <form onSubmit={enviar} className="bg-white p-8 rounded-2xl shadow-xl border">
        <input className="w-full border-2 p-3 rounded-xl mb-4" placeholder="RUT del Alumno" value={rut} onChange={e => setRut(e.target.value)} required />
        <select className="w-full border-2 p-3 rounded-xl mb-6" value={estado} onChange={e => setEstado(e.target.value)}>
          <option value="Presente">✅ Presente</option>
          <option value="Ausente">❌ Ausente</option>
        </select>
        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700">Guardar Asistencia</button>
      </form>
    </div>
  );
}