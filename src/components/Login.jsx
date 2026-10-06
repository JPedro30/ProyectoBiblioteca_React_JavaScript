// src/components/Login.jsx
import { useState } from 'react';

export default function Login({ setToken, setVista }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const manejarLogin = async (e) => {
    e.preventDefault();
    
    // Aquí es donde luego haremos el fetch a tu Spring Boot.
    // Por ahora, para que puedas probar que la interfaz cambia, 
    // ponemos un usuario "admin" y clave "1234" de prueba temporalmente.
    
    if (usuario === 'admin' && password === '1234') {
      const tokenFalso = "token_de_prueba_12345";
      localStorage.setItem('token', tokenFalso);
      setToken(tokenFalso);
      setVista('estanteria'); // Volvemos al inicio al loguearnos
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 bg-amber-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-amber-700/50 text-amber-50">
      <h2 className="text-3xl font-black text-center mb-6 text-amber-400 drop-shadow-md">Acceso Privado</h2>
      
      {error && (
        <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded-xl mb-4 text-center">
          {error}
        </div>
      )}

      <form onSubmit={manejarLogin} className="flex flex-col gap-4">
        <div>
          <label className="block text-amber-200 font-semibold mb-1">Usuario</label>
          <input 
            type="text" 
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full bg-amber-950/50 border border-amber-700/50 rounded-xl p-3 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label className="block text-amber-200 font-semibold mb-1">Contraseña</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-amber-950/50 border border-amber-700/50 rounded-xl p-3 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <button 
          type="submit" 
          className="mt-4 bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-amber-900/50"
        >
          Entrar a Susana's Library
        </button>
      </form>
    </div>
  );
}