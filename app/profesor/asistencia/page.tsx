"use client";
import { useState } from 'react';
import { AlertFactory } from '@/ohiggins-ui';
import AttendanceForm from '@/ohiggins-ui/AttendanceForm';
import { registrarAsistencia } from '@/services/api';

export default function ProfesorAsistencia() {
  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleRegistro = async (data: any) => {
    try {
      await registrarAsistencia({
        rutEstudiante: data.estudiante, 
        estado: data.estado
      });

      setMensaje(`Asistencia de ${data.estudiante} registrada con éxito.`);
      setTimeout(() => setMensaje(null), 4000);
    } catch (error) {
      console.error("Error al guardar:", error);
      setMensaje("Error: No se pudo guardar en el servidor.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen bg-background text-foreground">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-900 dark:text-indigo-400 italic">
          Colegio Bernardo O'Higgins
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Módulo de Control de Asistencia y Conducta
        </p>
      </header>

      {mensaje && (
        <div className="mb-4">
          <AlertFactory type="asistencia" text={mensaje} />
        </div>
      )}

      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
        <div className="bg-indigo-600 p-4">
          <h2 className="text-white font-semibold">Pasar Lista - Día Actual</h2>
        </div>
        
        {/* Se añade la clase 'prose-sm' y selectores directos para forzar 
           que los labels y radios del formulario sean visibles 
        */}
        <div className="p-6 text-foreground">
          <div className="[&_label]:text-foreground [&_label]:font-medium [&_span]:text-foreground">
            <AttendanceForm onSubmit={handleRegistro} />
          </div>
        </div>
      </div>
    </div>
  );
}