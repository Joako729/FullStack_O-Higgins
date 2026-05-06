// services/api.ts

// Esta es la URL de tu Backend For Frontend (BFF) corriendo en IntelliJ
const API_BASE = "http://localhost:8080/api/bff";

// --- GESTIÓN DE NOTAS (Microservicio 8081) ---

/**
 * Registra una nueva nota en el sistema.
 * @param nota Objeto con rutEstudiante, asignatura y valor.
 */
export const guardarNota = async (nota: { rutEstudiante: string; asignatura: string; valor: number }) => {
  const response = await fetch(`${API_BASE}/notas/registrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nota),
  });
  if (!response.ok) throw new Error('Error al guardar la nota');
  return response.json();
};

/**
 * Obtiene el listado de notas de un estudiante por su RUT.
 */
export const obtenerNotas = async (rut: string) => {
  const response = await fetch(`${API_BASE}/notas/estudiante/${rut}`);
  if (!response.ok) throw new Error('Error al obtener las notas');
  return response.json();
};


// --- GESTIÓN DE ASISTENCIA (Microservicio 8082) ---

/**
 * Registra la asistencia (Presente/Ausente) de un estudiante.
 * @param asistencia Objeto con rutEstudiante y estado.
 */
export const registrarAsistencia = async (asistencia: { rutEstudiante: string; estado: string }) => {
  const response = await fetch(`${API_BASE}/asistencia/registrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(asistencia),
  });
  if (!response.ok) throw new Error('Error al registrar asistencia');
  return response.json();
};

/**
 * Obtiene el historial de asistencia de un estudiante por su RUT.
 */
export const obtenerAsistencia = async (rut: string) => {
  const response = await fetch(`${API_BASE}/asistencia/estudiante/${rut}`);
  if (!response.ok) throw new Error('Error al obtener el historial de asistencia');
  return response.json();
};