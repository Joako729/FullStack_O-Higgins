import React from 'react';
import { CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react';

export default function AlertFactory({ type }: { type: 'asistencia' | 'anotacion' | 'comunicado' }) {
  const configs = {
    asistencia: { icon: <CheckCircle className="text-blue-600" />, title: "ASISTENCIA", bg: "bg-blue-50", border: "border-blue-400" },
    anotacion: { icon: <AlertTriangle className="text-amber-600" />, title: "ANOTACIÓN", bg: "bg-amber-50", border: "border-amber-400" },
    comunicado: { icon: <MessageSquare className="text-slate-600" />, title: "COMUNICADO", bg: "bg-slate-50", border: "border-slate-400" }
  };
  const c = configs[type];
  return (
    <div className={`flex items-center p-4 border-l-4 ${c.bg} ${c.border} rounded-r-xl shadow-sm mb-4`}>
      <div className="mr-3">{c.icon}</div>
      <h4 className="font-bold text-blue-800 text-xs tracking-widest">{c.title}</h4>
    </div>
  );
}