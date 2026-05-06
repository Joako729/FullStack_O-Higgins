// ohiggins-ui/AlertFactory.tsx
import React from 'react';
import { CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react';

interface AlertProps {
  type: 'asistencia' | 'anotacion' | 'comunicado';
  text?: string; // <--- Ahora acepta el mensaje de texto
}

const AlertFactory = ({ type, text }: AlertProps) => {
  const configs = {
    asistencia: {
      icon: <CheckCircle className="text-indigo-600" size={24} />,
      title: "ASISTENCIA",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-400"
    },
    anotacion: {
      icon: <AlertTriangle className="text-amber-600" size={24} />,
      title: "ANOTACIÓN",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-400"
    },
    comunicado: {
      icon: <MessageSquare className="text-slate-600" size={24} />,
      title: "COMUNICADO",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-400"
    }
  };

  const config = configs[type];

  return (
    <div className={`flex items-start p-4 border-l-4 rounded-r-xl ${config.bgColor} ${config.borderColor} shadow-sm mb-4`}>
      <div className="mr-4 mt-1">{config.icon}</div>
      <div>
        <h4 className="font-bold text-indigo-900 text-xs tracking-widest mb-1">{config.title}</h4>
        {text && <p className="text-sm text-indigo-700 font-medium">{text}</p>}
      </div>
    </div>
  );
};

export default AlertFactory;