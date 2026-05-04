import React, { useState } from 'react';
import { UserCheck, Calendar, BookOpen, Save } from 'lucide-react';

interface AttendanceFormProps {
  onSubmit: (data: { estudiante: string; asignatura: string; estado: string; fecha: string }) => void;
}

export const AttendanceForm: React.FC<AttendanceFormProps> = ({ onSubmit }) => {
  const [estudiante, setEstudiante] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [estado, setEstado] = useState('Presente');

  const hoy = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ estudiante, asignatura, estado, fecha: hoy });
    setEstudiante('');
    setAsignatura('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center text-sm font-semibold text-slate-700 mb-1">
            <UserCheck className="w-4 h-4 mr-2" /> Estudiante
          </label>
          <input
            type="text"
            value={estudiante}
            onChange={(e) => setEstudiante(e.target.value)}
            placeholder="Nombre del alumno"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <div>
          <label className="flex items-center text-sm font-semibold text-slate-700 mb-1">
            <BookOpen className="w-4 h-4 mr-2" /> Asignatura
          </label>
          <input
            type="text"
            value={asignatura}
            onChange={(e) => setAsignatura(e.target.value)}
            placeholder="Ej: Desarrollo Fullstack"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Estado de Asistencia</label>
        <div className="flex gap-4">
          {['Presente', 'Ausente', 'Justificado'].map((opt) => (
            <label key={opt} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="estado"
                value={opt}
                checked={estado === opt}
                onChange={(e) => setEstado(e.target.value)}
                className="mr-2"
              />
              <span className="text-sm text-slate-600">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center transition shadow-md"
      >
        <Save className="w-5 h-5 mr-2" /> Registrar en Libro de Clases
      </button>
    </form>
  );
};