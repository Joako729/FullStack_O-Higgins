// services/api.ts
const API_BASE = "http://localhost:8080/api/bff";

// --- 📚 GESTIÓN DE ASIGNATURAS (Materias) ---
export const getAsignaturas = async () => {
  const res = await fetch(`${API_BASE}/asignaturas`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Error al obtener asignaturas');
  return res.json();
};

export const createAsignatura = async (data: any) => 
  fetch(`${API_BASE}/asignaturas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const updateAsignatura = async (id: number, data: any) => 
  fetch(`${API_BASE}/asignaturas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const deleteAsignatura = async (id: number) => 
  fetch(`${API_BASE}/asignaturas/${id}`, { method: 'DELETE' });

// --- 📝 GESTIÓN DE NOTAS (El error de tu imagen) ---
export const guardarNota = async (nota: { rutEstudiante: string; asignatura: string; valor: number }) => {
  const res = await fetch(`${API_BASE}/notas/registrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nota),
  });
  if (!res.ok) throw new Error('Error al guardar la nota');
  return res.json();
};

export const obtenerNotas = async (rut: string) => {
  const res = await fetch(`${API_BASE}/notas/estudiante/${rut}`);
  if (!res.ok) throw new Error('Error al obtener las notas');
  return res.json();
};

// --- ✅ GESTIÓN DE ASISTENCIA ---
export const registrarAsistencia = async (data: { rutEstudiante: string; estado: string }) => {
  const res = await fetch(`${API_BASE}/asistencia/registrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al registrar asistencia');
  return res.json();
};

export const obtenerAsistencia = async (rut: string) => {
  const res = await fetch(`${API_BASE}/asistencia/estudiante/${rut}`);
  if (!res.ok) throw new Error('Error al obtener asistencia');
  return res.json();
};