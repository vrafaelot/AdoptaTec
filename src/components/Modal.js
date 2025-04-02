import React, { useState } from 'react';
import './Modal.css';

import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';

const Modal = ({ animal, closeModal }) => {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // Estado para manejar el plan seleccionado

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBackClick = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="modal">
      <div className={`modal-content ${showPlans || selectedPlan ? 'expanded' : ''}`}>
        <button className="modal-close" onClick={closeModal}>✖</button>

        {!selectedPlan ? (
          <>
            <h2 className="modal-title">Juntos podemos cambiar vidas</h2>
            
            <div className="modal-body">
              <img src={animal.image} alt={animal.name} className="modal-image" />

              <div className="modal-details">
                <div className="modal-info">
                  <p><strong>Nombre:</strong> {animal.name}</p>
                  <p><strong>Edad:</strong> {animal.age}</p>
                  <p><strong>Género:</strong> {animal.gender}</p>
                  <p><strong>Tamaño:</strong> {animal.size}</p>
                  <p><strong>Peso:</strong> {animal.weight}</p>
                </div>

                <div className="modal-personality">
                  <p><strong>Personalidad:</strong> {animal.personality}</p>
                </div>

                <div className="modal-share">
                  <h3>Compártelo</h3>
                  <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <img src={FacebookIcon} alt="Facebook" className="share-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <img src={InstagramIcon} alt="Instagram" className="share-icon" />
                    </a>
                    <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                      <img src={WhatsAppIcon} alt="WhatsApp" className="share-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-buttons">
              <button className="adopt-button">Adóptalo</button>
              <div className="sponsor-container">
                <button className="sponsor-button" onClick={() => setShowPlans(!showPlans)}>
                  Apadrínalo
                </button>
                <div className={`sponsor-plans ${showPlans ? 'show' : ''}`}>
                  <button className="plan-button plan-mensual" onClick={() => handlePlanClick("mensual")}>Plan mensual</button>
                  <button className="plan-button plan-bimestral" onClick={() => handlePlanClick("bimestral")}>Plan bimestral</button>
                  <button className="plan-button plan-anual" onClick={() => handlePlanClick("anual")}>Plan anual</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="payment-details">
            <button className="back-button" onClick={handleBackClick}>Volver</button>
            <h2>Detalle de tu suscripción</h2>
            <p>Hola, tu suscripción para el Plan {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} será de:</p>
            <h3>$40</h3>
            <p>Se debitará de forma {selectedPlan === "mensual" ? "mensual" : selectedPlan === "bimestral" ? "bimestral" : "anual"}</p>
            <p>Acepto los <a href="/terms">Términos y condiciones</a> y autorizo el uso de mis datos de acuerdo a la <a href="/privacy">Declaración de Privacidad</a>.</p>
            <button className="pay-button">Elegir método de pago</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
