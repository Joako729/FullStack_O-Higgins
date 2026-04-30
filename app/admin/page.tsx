export default function AsistenciaPage() {
  const alumnos = [
    { id: 1, rut: "20.123.456-7", nombre: "Ignacio Cáceres", asistencia: "Presente", anotacion: "Sin observaciones" },
    { id: 2, rut: "21.987.654-3", nombre: "Marcelo Apablaza", asistencia: "Ausente", anotacion: "Licencia médica" },
    { id: 3, rut: "19.555.444-k", nombre: "Vicente Osorio", asistencia: "Presente", anotacion: "Participación en clase" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-sky-400">Control de Asistencia</h1>
        <p className="text-slate-400 mt-2">Registro diario - Sección 002D</p>
      </header>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-slate-800/50 border-b border-slate-700">
            <tr className="text-sky-400 text-sm uppercase tracking-wider">
              <th className="p-5 font-semibold">RUT</th>
              <th className="p-5 font-semibold">Estudiante</th>
              <th className="p-5 font-semibold">Estado</th>
              <th className="p-5 font-semibold">Anotaciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {alumnos.map((a) => (
              <tr key={a.id} className="hover:bg-slate-700/30 transition-colors group">
                <td className="p-5 font-mono text-xs text-slate-400">{a.rut}</td>
                <td className="p-5 font-medium">{a.nombre}</td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    a.asistencia === 'Presente' ? 'bg-sky-500/10 text-sky-400' : 'bg-red-500/10 text-red-400'
                  }`}>
                    {a.asistencia}
                  </span>
                </td>
                <td className="p-5 text-sm text-slate-400 italic group-hover:text-slate-200">{a.anotacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}