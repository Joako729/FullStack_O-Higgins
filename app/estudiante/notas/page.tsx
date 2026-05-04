'use client';
import React, { useState, useEffect } from 'react';
import { AlertFactory, ListStrategy } from '@/ohiggins-ui';

// Simulamos los datos que vendrán de la base de datos vía el microservicio académico
const NOTAS_INICIALES = [
  { id: 1, nombre: "Desarrollo Fullstack III", estado: "6.8" },
  { id: 2, nombre: "Arquitectura de Software", estado: "5.5" },
  { id: 3, nombre: "Ética Profesional", estado: "7.0" }
];

export default function EstudianteNotas() {
  const [notas, setNotas] = useState(NOTAS_INICIALES);

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen bg-slate-50">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Mi Portal Académico</h1>
        <p className="text-slate-500">Colegio Bernardo O'Higgins - Concentración de Notas</p>
      </header>

      {/* Uso del Factory para mensajes automáticos del sistema */}
      <AlertFactory 
        type="comunicado" 
        text="Se han actualizado tus calificaciones del Segundo Trimestre. Revísalas a continuación." 
      />

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 p-4">
          <h2 className="text-white font-medium">Calificaciones Vigentes</h2>
        </div>
        
        <div className="p-6">
          {/* Reutilizamos el ListStrategy de tu librería para mostrar las notas */}
          <ListStrategy students={notas} />
        </div>
      </div>

      <footer className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
        <p className="text-sm text-blue-700 font-medium">
          Promedio General Actual: 6.4
        </p>
      </footer>
    </div>
  );
}