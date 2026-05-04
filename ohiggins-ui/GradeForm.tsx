import React, { useState } from 'react';
import { Save, BookOpen, User, GraduationCap } from 'lucide-react';

interface GradeFormProps {
  onSubmit: (data: { materia: string; estudiante: string; nota: number }) => void;
}

export const GradeForm: React.FC<GradeFormProps> = ({ onSubmit }) => {
  const [materia, setMateria] = useState('');
  const [estudiante, setEstudiante] = useState('');
  const [nota, setNota] = useState<string>('1.0');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convertimos la nota a número antes de enviar al BFF
    onSubmit({ 
      materia, 
      estudiante, 
      nota: parseFloat(nota) 
    });
    // Limpiamos el formulario para el siguiente registro
    setMateria('');
    setEstudiante('');
    setNota('1.0');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <div>
        <label htmlFor="materia-input" className="flex items-center text-sm font-semibold mb-1">
          <BookOpen className="w-4 h-4 mr-2" /> Asignatura
        </label>
        <input
          id="materia-input"
          type="text"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          placeholder="Ej: Desarrollo Fullstack"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="estudiante-input" className="flex items-center text-sm font-semibold mb-1">
          <User className="w-4 h-4 mr-2" /> Estudiante
        </label>
        <input
          id="estudiante-input"
          type="text"
          value={estudiante}
          onChange={(e) => setEstudiante(e.target.value)}
          placeholder="Ej: Joaquín Cáceres"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="nota-input" className="flex items-center text-sm font-semibold mb-1">
          <GraduationCap className="w-4 h-4 mr-2" /> Calificación
        </label>
        <input
          id="nota-input"
          type="number"
          step="0.1"
          min="1.0"
          max="7.0"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700 transition shadow-md"
      >
        <Save className="w-5 h-5 mr-2 inline" /> Guardar en Libro Digital
      </button>
    </form>
  );
};