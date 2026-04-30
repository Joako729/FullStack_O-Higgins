export default function ComunicacionesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-sky-400 text-center">Centro de Mensajería Educativa</h1>
      
      <div className="bg-slate-800 rounded-3xl border border-slate-700 h-[600px] flex flex-col shadow-2xl overflow-hidden">
        {/* Historial de Chat */}
        <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-slate-900/50">
          <div className="flex flex-col items-start space-y-2">
            <span className="text-xs font-bold text-sky-400 ml-4">PROFESOR - SISTEMA</span>
            <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none border border-slate-600 max-w-[80%]">
              <p className="text-sm">Estimados, les recuerdo que la entrega del Parcial 2 es este viernes.</p>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <span className="text-xs font-bold text-slate-400 mr-4">ALUMNO (TÚ)</span>
            <div className="bg-sky-500/10 p-4 rounded-2xl rounded-tr-none border border-sky-500/30 max-w-[80%]">
              <p className="text-sm text-sky-100">Profesor, ¿el BFF debe ir en un repositorio separado o en el mismo?</p>
            </div>
          </div>
        </div>

        {/* Caja de Texto */}
        <div className="p-6 bg-slate-800 border-t border-slate-700 flex gap-4">
          <input 
            type="text" 
            placeholder="Escribe tu consulta académica..." 
            className="flex-1 bg-slate-900 border border-slate-600 rounded-xl px-5 py-3 text-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-slate-500 transition-all"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-slate-900 px-8 py-3 rounded-xl font-bold transition-transform active:scale-95 shadow-lg">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}