'use client';
import './globals.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const session = localStorage.getItem('session');
    setIsLoggedIn(!!session);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('session');
    window.location.href = '/';
  };

  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-200 min-h-screen">
        <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center font-black text-slate-950">BO</div>
              <span className="font-bold text-xl text-white">O’Higgins <span className="text-sky-400">Digital</span></span>
            </Link>
            
            {isLoggedIn && (
              <div className="flex items-center gap-6">
                <Link href="/comunicaciones" className="text-sm font-medium hover:text-sky-400 transition-colors">Mensajería</Link>
                <button 
                  onClick={handleLogout}
                  className="bg-slate-800 hover:bg-red-500/20 hover:text-red-400 px-4 py-2 rounded-lg text-sm font-bold transition-all border border-slate-700"
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-6 md:p-12">
          {children}
        </main>
      </body>
    </html>
  );
}