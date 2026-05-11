import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerFullUser } from "../../../services/authService";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellphone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    const respuesta = await registerFullUser(formData);

    if (respuesta.success) {
      navigate('/login');
    } else {
      setError(respuesta.error);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-20 bg-bg-light p-6">
      <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-xl shadow-primary/5 border border-gray-100 overflow-hidden mt-4">
        <div className="p-8">

          {/* Header */}
          <div className="flex flex-col items-center mb-6 text-center">
            <h1 className="text-2xl font-bold text-text-heading tracking-tight">Crea tu cuenta</h1>
            <p className="text-sm text-text-body mt-1">Únete a la comunidad de MyStore hoy mismo</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs rounded-r-lg flex items-center gap-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre completo */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300 text-sm"
                  placeholder="Ej. Juan Pérez"
                  onChange={handleChange}
                />
              </div>

              {/* Correo electrónico */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300 text-sm"
                  placeholder="correo@ejemplo.com"
                  onChange={handleChange}
                />
              </div>

              {/* Celular */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Celular</label>
                <input
                  type="tel"
                  name="cellphone"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  placeholder="300..."
                  onChange={handleChange}
                />
              </div>

              {/* Dirección */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Dirección</label>
                <input
                  type="text"
                  name="address"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  placeholder="Calle 123..."
                  onChange={handleChange}
                />
              </div>

              {/* Contraseña */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
              </div>

              {/* Confirmar contraseña */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Confirmar contraseña</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full primary-btn !py-3 !rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
              >
                Crear mi cuenta
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </button>

              <p className="text-center text-xs text-text-body">
                ¿Ya tienes una cuenta? <Link to="/login" className="text-primary font-bold hover:underline">Inicia sesión</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;