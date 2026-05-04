import React from 'react';
import { CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react';

interface AlertProps {
  type: 'asistencia' | 'anotacion' | 'comunicado';
  text: string;
}

export const AlertFactory: React.FC<AlertProps> = ({ type, text }) => {
  const configs = {
    asistencia: { color: "bg-blue-50 border-blue-500 text-blue-700", Icon: CheckCircle, label: "Asistencia" },
    anotacion: { color: "bg-red-50 border-red-500 text-red-700", Icon: AlertTriangle, label: "Hoja de Vida" },
    comunicado: { color: "bg-green-50 border-green-500 text-green-700", Icon: MessageSquare, label: "Comunicación" }
  };

  const { color, Icon, label } = configs[type];

  return (
    <div className={`flex items-center p-4 border-l-4 rounded shadow-sm ${color} mb-4`}>
      <Icon className="w-5 h-5 mr-3" />
      <div>
        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};