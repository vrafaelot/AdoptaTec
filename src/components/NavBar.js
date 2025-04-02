import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/adoptatec-logo.png';

const NavBar = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo-link">
        <img src={logo} alt="AdoptaTec Logo" className="navbar__logo-image" />
      </a>
      <ul className="navbar__links">
        <li><a href="/albergue">Albergue</a></li>
        <li><a href="#contactanos">Contáctanos</a></li>
        <li onClick={toggleSubmenu} className="navbar__submenu-trigger">
          Sumando esfuerzos
          {submenuVisible && (
            <ul className="navbar__submenu">
              <li><a href="/adoptar">Adoptar</a></li>
              <li><a href="/apadrinar">Apadrinar</a></li>
              <li><a href="/donaciones">Donaciones</a></li>
            </ul>
          )}
        </li>
      </ul>
      <div className="navbar__actions">
        <a href="/login" className="navbar__login">Iniciar sesión</a>
        <a href="/register" className="navbar__signup">Inscribirse</a>
      </div>
    </nav>
  );
};

export default NavBar;
