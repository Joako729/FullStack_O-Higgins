// ohiggins-ui/AttendanceForm.tsx
import React, { useState } from 'react';

interface AttendanceFormProps {
  onSubmit: (data: { estudiante: string; estado: string }) => void;
}

const AttendanceForm = ({ onSubmit }: AttendanceFormProps) => {
  const [estudiante, setEstudiante] = useState('');
  const [estado, setEstado] = useState('Presente');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ estudiante, estado });
    setEstudiante(''); // Limpia el campo después de enviar
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          RUT DEL ESTUDIANTE
        </label>
        <input
          type="text"
          value={estudiante}
          onChange={(e) => setEstudiante(e.target.value)}
          placeholder="Ej: 12345678-9"
          className="w-full p-4 border-2 border-slate-100 rounded-xl focus:border-indigo-500 outline-none transition"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          ESTADO DE ASISTENCIA
        </label>
        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          className="w-full p-4 border-2 border-slate-100 rounded-xl focus:border-indigo-500 outline-none transition bg-white"
        >
          <option value="Presente">✅ Presente</option>
          <option value="Ausente">❌ Ausente</option>
          <option value="Justificado">ℹ️ Justificado</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
      >
        Registrar Asistencia
      </button>
    </form>
  );
};

export default AttendanceForm; // <--- Esto es lo que quita el error de tu imagen