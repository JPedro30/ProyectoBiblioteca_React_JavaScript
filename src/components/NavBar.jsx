// src/components/NavBar.jsx

export default function NavBar({ setVista, isAdmin, cerrarSesion }) {
  return (
    // 1. FONDO Y SOMBRAS
    <nav className="bg-amber-950/85 backdrop-blur-md sticky top-0 z-50 border-b border-amber-900/50 text-amber-50 px-4 md:px-8 py-4 shadow-lg shadow-amber-900/40 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

      {/* Grupo de Logo y Texto */}
      <div
        className="flex items-center gap-6 md:gap-6 cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={() => setVista('estanteria')}
      >
        <img
          src="/logoLibrary.png"
          alt="Logo Biblioteca"
          className="w-12 h-12 mb-4 md:w-22 md:h-22 object-contain"
        />
        {/* TÍTULO */}
        <div className="text-xl md:text-4xl font-black tracking-widest bg-gradient-to-r from-purple-100 to-yellow-600 bg-clip-text text-transparent text-center drop-shadow-sm">
          SUSANA'S LIBRARY
        </div>
      </div>

      {/* Menú de enlaces */}
      <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-medium text-base md:text-lg">
        
        {/* Enlace 1: Buscador (Siempre visible) */}
        <li 
          onClick={() => setVista('busqueda')} 
          className="flex flex-col items-center justify-end h-full gap-0 hover:text-amber-400 cursor-pointer transition-all duration-200"
        >
          <img
            src="/buscarLibro.png"
            alt="Buscar"
            className="w-8 h-8 md:w-14 md:h-14 object-contain"
          />
          <span>Buscador</span>
        </li>
        
        {/* Enlace 2: Agregar Libro (SOLO ADMIN) */}
        {isAdmin && (
          <li 
            onClick={() => setVista('formulario')} 
            className="flex flex-col items-center justify-end h-full gap-2 cursor-pointer transition-all duration-300 text-amber-500 hover:text-amber-300 font-semibold"
          >
            <img
              src="/agregarLibro.png"
              alt="Agregar"
              className="w-6 h-6 md:w-12 md:h-12 object-contain"
            />
            <span>Agregar Libro</span>
          </li>
        )}

        {/* Enlace 3: Login / Logout */}
        {isAdmin ? (
          <li 
            onClick={cerrarSesion} 
            className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 text-red-400 hover:text-red-300 font-semibold ml-2 md:ml-4"
          >
            <span className="border border-red-400/50 hover:bg-red-900/30 px-3 py-1 md:px-4 md:py-2 rounded-xl transition-colors">
              Salir
            </span>
          </li>
        ) : (
          <li 
            onClick={() => setVista('login')} 
            className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 text-amber-100 hover:text-white font-bold ml-2 md:ml-4"
          >
            <span className="bg-amber-700 hover:bg-amber-600 shadow-md shadow-amber-900/50 px-4 py-2 md:px-6 md:py-2 rounded-xl transition-colors">
              Acceder
            </span>
          </li>
        )}
        
      </ul>

    </nav>
  );
}