import React from 'react';

interface Student {
  id: number;
  nombre: string;
  estado: string;
}

// Estrategia 1: Vista de Lista (para administrativos)
export const ListStrategy: React.FC<{ students: Student[] }> = ({ students }) => (
  <div className="space-y-2">
    {students.map(s => (
      <div key={s.id} className="p-2 border-b flex justify-between">
        <span>{s.nombre}</span>
        <span className="font-bold">{s.estado}</span>
      </div>
    ))}
  </div>
);

// Estrategia 2: Vista de Tarjetas (para profesores en tablet)
export const CardStrategy: React.FC<{ students: Student[] }> = ({ students }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {students.map(s => (
      <div key={s.id} className="p-4 border rounded-lg bg-white shadow-sm">
        <h4 className="font-bold text-lg">{s.nombre}</h4>
        <p className="text-gray-600">Estado actual: {s.estado}</p>
      </div>
    ))}
  </div>
);