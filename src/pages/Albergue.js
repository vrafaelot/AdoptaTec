import React from 'react';
import './Albergue.css';
import { FaPaw, FaHeart, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Albergue = () => {
  return (
    <div className="albergue-container">
      <NavBar />
      
      <header className="albergue-header">
        <h1>Bienvenido a Nuestro Albergue</h1>
        <p>Tu espacio para darles una segunda oportunidad a nuestras mascotas.</p>
      </header>

      <section className="albergue-info">
        <div className="albergue-info-item">
          <FaPaw className="albergue-icon" />
          <h3>Adopta</h3>
          <p>Ofrecemos mascotas adorables que necesitan un hogar amoroso. Encuentra a tu compañero ideal.</p>
        </div>

        <div className="albergue-info-item">
          <FaHeart className="albergue-icon" />
          <h3>Apadrina</h3>
          <p>Si no puedes adoptar, apadrina una mascota y ayúdanos a darle todo lo que necesita.</p>
        </div>

        <div className="albergue-info-item">
          <FaMapMarkerAlt className="albergue-icon" />
          <h3>Visítanos</h3>
          <p>Te invitamos a que vengas a nuestro albergue y conozcas a nuestras mascotas en persona.</p>
        </div>
      </section>

      <section className="albergue-mision-vision">
        <div className="mision">
          <h2><FaInfoCircle /> Nuestra Misión</h2>
          <p>Brindar un hogar amoroso a las mascotas abandonadas y en situación de vulnerabilidad, promoviendo su bienestar y salud, mientras sensibilizamos a la comunidad sobre la importancia de la adopción responsable.</p>
        </div>
        <div className="vision">
          <h2><FaInfoCircle /> Nuestra Visión</h2>
          <p>Ser un referente de responsabilidad y compromiso en la protección animal, creando una red de apoyo entre la comunidad y los refugios de animales para lograr una sociedad más justa y solidaria con nuestros compañeros de cuatro patas.</p>
        </div>
      </section>

      <section className="albergue-map">
        <h2><FaMapMarkerAlt /> Visítanos</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.418437595719!2d-122.40822618467309!3d37.77521577975985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b5759fc17%3A0x18d3804b7c7956db!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1634522054198!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa de Ubicación"
          ></iframe>
        </div>
        <p>Visítanos en la dirección: Calle Ejemplo 123, Ciudad, País.</p>
      </section>

      <Footer />
    </div>
  );
};

export default Albergue;
