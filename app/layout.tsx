'use client';
import './globals.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Mantenemos tu lógica de sesión original
    const session = localStorage.getItem('session');
    setIsLoggedIn(!!session);
  }, [pathname]);

  const handleLogout = () => {
    // Mantenemos tu función de salida
    localStorage.removeItem('session');
    window.location.href = '/';
  };

  return (
    <html lang="es" className="dark">
      {/* Aplicamos bg-[#121212] al body para que no queden bordes blancos en ningún lado */}
      <body className="bg-[#121212] text-slate-200 min-h-screen selection:bg-sky-500/30 antialiased">
        
        {/* Navbar con efecto Glassmorphism para que se integre con el fondo negro claro */}
        <nav className="bg-[#121212]/70 backdrop-blur-xl border-b border-white/5 p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center font-black text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)] group-hover:scale-105 transition-transform">
                BO
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                O’Higgins <span className="text-sky-400">Digital</span>
              </span>
            </Link>
            
            {isLoggedIn && (
              <div className="flex items-center gap-6">
                <Link 
                  href="/comunicaciones" 
                  className="text-sm font-bold text-slate-400 hover:text-sky-400 transition-colors uppercase tracking-widest text-[11px]"
                >
                  Mensajería
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-white/5 hover:bg-red-500/10 hover:text-red-400 px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all border border-white/5 hover:border-red-500/20"
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* 
          Quitamos el max-w y padding excesivo de aquí para que la página (page.tsx) 
          pueda manejar su propio ancho y el fondo sea fluido.
        */}
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}