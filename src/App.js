import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    documento: '',
    direccion: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [photo, setPhoto] = useState(null); // Nuevo estado para manejar la foto

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Almacenamos la imagen cargada
      };
      reader.readAsDataURL(file);
    }
  };

  // Función que se llama cuando el usuario hace clic en "Subir Foto"
  const handleClickFileInput = () => {
    document.getElementById('fileInput').click(); // Simula un clic en el input file oculto
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '16px' }}>Registro de Profesores</h1>

        <form onSubmit={handleSubmit}>
          {/* Círculo para la foto y botón centrado */}
          <div style={{ marginBottom: '16px', textAlign: 'center' }}>
            {/* El div que simula el círculo de la foto */}
            <div style={{
              width: '100px',
              height: '100px',
              background: photo ? `url(${photo}) center center/cover` : '#e0e0e0',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              cursor: 'pointer'
            }} onClick={handleClickFileInput}>
              {!photo && <span style={{ fontSize: '24px', color: '#fff' }}>📷</span>}
            </div>

            {/* Input de tipo file, oculto detrás del círculo */}
            <input 
              type="file" 
              id="fileInput" 
              style={{ display: 'none' }} 
              onChange={handleFileChange} 
              accept="image/*" 
            />

            <button type="button" onClick={handleClickFileInput} style={{
              display: 'block',
              margin: '10px auto',
              padding: '8px 16px',
              backgroundColor: '#4a90e2',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              Subir Foto
            </button>
          </div>

          {/* Documento */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Documento de Identidad</label>
            <input
              type="text"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>

          {/* Dirección */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Dirección de Residencia</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>

          {/* Correo Electrónico */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>

          {/* Contraseña */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>

          {/* Confirmar Contraseña */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>

          {/* Botón */}
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#4a90e2', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            Registrarse
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '16px', color: '#555' }}>
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" style={{ color: '#4a90e2', textDecoration: 'none' }}>
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
