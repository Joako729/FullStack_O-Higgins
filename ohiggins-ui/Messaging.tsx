import React from 'react';
import { Mail, Calendar } from 'lucide-react';

interface MessageCardProps {
  sender: string;
  subject: string;
  preview: string;
}

export const MessageCard: React.FC<MessageCardProps> = ({ sender, subject, preview }) => {
  return (
    <div className="p-4 border rounded-lg bg-white hover:shadow-md transition cursor-pointer mb-3 border-slate-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-indigo-900 flex items-center">
          <Mail className="w-4 h-4 mr-2" /> {sender}
        </span>
        <span className="text-xs text-slate-400 flex items-center">
          <Calendar className="w-3 h-3 mr-1" /> Hoy
        </span>
      </div>
      <h4 className="text-sm font-semibold text-slate-800 mb-1">{subject}</h4>
      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{preview}</p>
    </div>
  );
};