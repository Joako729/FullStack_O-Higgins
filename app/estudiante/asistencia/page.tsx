'use client';
import React from 'react';
import { AlertFactory, ListStrategy } from '@/ohiggins-ui';

// Estos datos vendrán de la base de datos a través del BFF en la Parcial 2
const MI_ASISTENCIA = [
  { id: 1, nombre: "Desarrollo Fullstack (04/05/2026)", estado: "Presente" },
  { id: 2, nombre: "Arquitectura de Software (03/05/2026)", estado: "Presente" },
  { id: 3, nombre: "Ética Profesional (02/05/2026)", estado: "Ausente" }
];

export default function EstudianteAsistencia() {
  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Mi Registro de Asistencia</h1>
      <p className="text-slate-500 mb-8">Información histórica sincronizada con el libro digital[cite: 1]</p>

      <AlertFactory type="asistencia" text="Tu asistencia general es del 85%. Recuerda que el mínimo es 75%." />

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 p-4 text-white font-medium">
          Bitácora de Clases
        </div>
        <div className="p-6">
          <ListStrategy students={MI_ASISTENCIA} />
        </div>
      </div>
    </div>
  );
}