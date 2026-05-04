// Estructura lista para conectar con el microservicio a través del BFF
const BASE_URL = process.env.NEXT_PUBLIC_BFF_URL || 'http://localhost:8080/api';

export const bffService = {
  async fetchAsistencia(cursoId: string) {
    const res = await fetch(`${BASE_URL}/asistencia/${cursoId}`);
    if (!res.ok) throw new Error('Error al obtener asistencia');
    return res.json();
  },
  
  async enviarNota(payload: any) {
    const res = await fetch(`${BASE_URL}/notas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.json();
  }
};