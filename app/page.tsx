import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-5xl mx-auto py-16 px-8">
        {/* Encabezado del Colegio */}
        <div className="flex flex-col items-center mb-12 text-center">
          <Image
            className="dark:invert mb-6"
            src="/next.svg"
            alt="Logo Institucional"
            width={120}
            height={24}
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Colegio Bernardo O’Higgins
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            Plataforma de Libro de Clases Digital
          </p>
        </div>

        {/* Módulos del Sistema */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
          {/* Módulo de Gestión Académica */}
          <div className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Gestión Académica</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Administración centralizada de asignaturas, cursos y evaluaciones para el seguimiento del rendimiento académico[cite: 118].
            </p>
          </div>

          {/* Módulo de Asistencia y Anotaciones */}
          <div className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Asistencia y Registro</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Control estructurado de asistencia y conducta para mantener un registro detallado del comportamiento estudiantil[cite: 119, 120].
            </p>
          </div>

          {/* Portal de Comunicaciones */}
          <div className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Comunicaciones</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Mensajería segura para facilitar el envío de información entre docentes, apoderados y estudiantes[cite: 121].
            </p>
          </div>
        </div>

        {/* Acciones de Acceso */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button className="flex-1 h-12 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity">
            Ingresar al Portal
          </button>
          <button className="flex-1 h-12 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
            Manual de Usuario
          </button>
        </div>
      </main>

      <footer className="py-8 text-center text-zinc-500 dark:text-zinc-600 text-xs">
        © 2026 Colegio Bernardo O’Higgins – Sistema de Gestión Escolar
      </footer>
    </div>
  );
}