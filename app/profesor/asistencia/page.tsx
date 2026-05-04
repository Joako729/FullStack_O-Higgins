'use client';
import React, { useState } from 'react';
import { AlertFactory, AttendanceForm } from '@/ohiggins-ui';

export default function ProfesorAsistencia() {
  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleRegistro = (data: any) => {
    // Simulación de envío al Microservicio de Asistencia
    console.log("Datos enviados al Backend:", data);
    setMensaje(`Asistencia de ${data.estudiante} registrada como ${data.estado}.`);
    setTimeout(() => setMensaje(null), 4000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen bg-slate-50">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-900 italic">Colegio Bernardo O'Higgins</h1>
        <p className="text-slate-500">Módulo de Control de Asistencia y Conducta</p>
      </header>

      {mensaje && <AlertFactory type="asistencia" text={mensaje} />}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-indigo-600 p-4">
          <h2 className="text-white font-semibold">Pasar Lista - Día Actual</h2>
        </div>
        <div className="p-6">
          <AttendanceForm onSubmit={handleRegistro} />
        </div>
      </div>
    </div>
  );
}