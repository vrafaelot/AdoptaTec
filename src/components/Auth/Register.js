import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import adoptatecLogo from '../../assets/adoptatec-logo.png';

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-hero">
        <img src={adoptatecLogo} alt="AdoptaTec" className="auth-main-logo"/>
        <h2>Únete a nuestra misión</h2>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <h3>Crear Cuenta</h3>
          <form className="auth-form">
            <div className="input-group">
              <input type="text" placeholder="Nombre completo" required />
              <span className="input-icon">👤</span>
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
              <span className="input-icon">✉️</span>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Contraseña" required />
              <span className="input-icon">🔒</span>
            </div>
            <button type="submit" className="auth-button">
              Registrarse
              <span className="button-arrow">→</span>
            </button>
          </form>
          <div className="auth-links">
            <Link to="/login">¿Ya tienes cuenta? Inicia sesión</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;