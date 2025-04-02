import React from 'react';
import './Footer.css';

import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import YouTubeIcon from '../assets/icons/youtube.svg';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import EmailIcon from '../assets/icons/email.svg';
import LocationIcon from '../assets/icons/location.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Redes sociales</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YouTubeIcon} alt="YouTube" />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <img src={WhatsAppIcon} alt="WhatsApp" />
          </a>
        </div>
      </div>

      <div className="footer-section contact">
        <h3>Contáctanos</h3>
        <p>
          <img src={PhoneIcon} alt="Teléfono" className="contact-icon" />
          <a href="https://wa.me/935389473" target="_blank" rel="noopener noreferrer" className="contact-link">
            935 389 473
          </a>
        </p>
        <p>
          <img src={EmailIcon} alt="Email" className="contact-icon" /> adoptify@gmail.com
        </p>
        <p>
          <img src={LocationIcon} alt="Ubicación" className="contact-icon" /> Dirección del albergue
        </p>
      </div>


      <div className="footer-section">
        <h3>Involúcrate</h3>
        <p>Puedes ayudarnos adoptando, apadrinando, o visitando nuestro albergue.</p>
        <a href="/voluntariado" className="footer-link">Conviértete en voluntario</a>
      </div>
    </footer>
  );
};

export default Footer;
