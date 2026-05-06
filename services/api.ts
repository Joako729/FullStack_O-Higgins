// services/api.ts
const API_BASE = "http://localhost:8080/api/bff";

// Para el Profesor: Registrar nota
export const guardarNota = async (nota: { rutEstudiante: string; asignatura: string; valor: number }) => {
  const response = await fetch(`${API_BASE}/notas/registrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nota),
  });
  
  if (!response.ok) throw new Error('Error al guardar la nota');
  return response.json();
};

// Para el Estudiante: Obtener notas (ESTA ES LA QUE TE FALTABA)
export const obtenerNotas = async (rut: string) => {
  const response = await fetch(`${API_BASE}/notas/estudiante/${rut}`);
  
  if (!response.ok) throw new Error('Error al obtener las notas');
  return response.json();
};