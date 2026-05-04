'use client';
import React, { useState } from 'react';
import { AlertFactory, GradeForm } from '@/ohiggins-ui';

export default function ProfesorNotas() {
  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleEnviarNota = async (data: { materia: string; estudiante: string; nota: number }) => {
    // Aquí es donde conectarás con tu BFF en el futuro
    console.log("Enviando a la base de datos vía BFF:", data);
    
    // Simulación de éxito
    setMensaje(`Nota ${data.nota} para ${data.estudiante} en ${data.materia} guardada correctamente.`);
    
    // Desaparecer el mensaje después de 5 segundos
    setTimeout(() => setMensaje(null), 5000);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto min-h-screen bg-slate-50">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 italic">Colegio Bernardo O'Higgins</h1>
        <p className="text-slate-500 mt-2">Módulo de Gestión Académica - Registro de Calificaciones</p>
      </header>

      {mensaje && (
        <AlertFactory type="asistencia" text={mensaje} />
      )}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-blue-600 p-4">
          <h2 className="text-white font-semibold flex items-center">
            Nuevo Registro de Evaluación
          </h2>
        </div>
        <div className="p-6">
          <GradeForm onSubmit={handleEnviarNota} />
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-8">
        Nota: Al presionar guardar, los datos se sincronizan mediante el microservicio de gestión académica.
      </p>
    </div>
  );
}