"use client";
import { useState } from 'react';
import { AlertFactory } from '@/ohiggins-ui';
import AttendanceForm from '@/ohiggins-ui/AttendanceForm';
import { registrarAsistencia } from '@/services/api'; // Importamos la función real

export default function ProfesorAsistencia() {
  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleRegistro = async (data: any) => {
    try {
      // 🚀 CONEXIÓN REAL: Llamamos al BFF
      await registrarAsistencia({
        rutEstudiante: data.estudiante, // Convertimos 'estudiante' del form a 'rutEstudiante'
        estado: data.estado
      });

      setMensaje(`Asistencia de ${data.estudiante} registrada con éxito.`);
      
      // Limpia el mensaje después de 4 segundos
      setTimeout(() => setMensaje(null), 4000);
    } catch (error) {
      console.error("Error al guardar:", error);
      setMensaje("Error: No se pudo guardar en el servidor.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen bg-slate-50">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-900 italic">Colegio Bernardo O'Higgins</h1>
        <p className="text-slate-500">Módulo de Control de Asistencia y Conducta</p>
      </header>

      {mensaje && (
        <AlertFactory type="asistencia" text={mensaje} />
      )}

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