'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulación de validación y redirección por ruta
    if (email === 'estudiante@gmail.com' && password === 'estudiante123') {
      localStorage.setItem('session', JSON.stringify({ role: 'estudiante' }));
      router.push('/estudiante');
    } 
    else if (email === 'profesor@gmail.com' && password === 'profesor123') {
      localStorage.setItem('session', JSON.stringify({ role: 'profesor' }));
      router.push('/profesor');
    } 
    else if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('session', JSON.stringify({ role: 'admin' }));
      router.push('/admin');
    } 
    else {
      setError('Credenciales no válidas para el sistema escolar.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl w-full max-w-md border-t-4 border-sky-500">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter">O’Higgins <span className="text-sky-400">Digital</span></h1>
          <p className="text-slate-500 text-sm mt-2">Acceso al Libro de Clases Electrónico</p>
        </div>
        
        <div className="space-y-4">
          <input 
            type="email" placeholder="Correo institucional" 
            className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl text-white outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) => setEmail(e.target.value)} required 
          />
          <input 
            type="password" placeholder="Contraseña" 
            className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl text-white outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) => setPassword(e.target.value)} required 
          />
          {error && <p className="text-red-400 text-xs font-bold text-center">{error}</p>}
          <button className="w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}