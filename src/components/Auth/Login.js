import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import adoptatecLogo from '../../assets/adoptatec-logo.png';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-hero">
        <img src={adoptatecLogo} alt="AdoptaTec" className="auth-main-logo"/>
        <h2>Salva una vida hoy</h2>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <h3>Iniciar Sesión</h3>
          <form className="auth-form">
            <div className="input-group">
              <input type="email" placeholder="Email" required />
              <span className="input-icon">✉️</span>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Contraseña" required />
              <span className="input-icon">🔒</span>
            </div>
            <button type="submit" className="auth-button">
              Ingresar
              <span className="button-arrow">→</span>
            </button>
          </form>
          <div className="auth-links">
            <Link to="/register">Crear cuenta</Link>
            <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;