import React, { useState } from 'react';
import Slider from 'react-slick';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import './Home.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ginger from '../assets/ginger.png';
import leo from '../assets/leo.png';
import oliver from '../assets/oliver.png';
import perroYGato1 from '../assets/carrusel1.png';
import perroYGato2 from '../assets/carrusel2.png';
import perroYGato3 from '../assets/carrusel3.png';
import perrosAbrazando from '../assets/perrosabrazando.png';

const animals = [
  {
    id: 1,
    image: ginger,
    name: 'Ginger',
    age: '10 años',
    gender: 'Hembra',
    size: 'Grande',
    weight: '23 kilos',
    description: 'Hembra de 10 años, grande, 23 kilos, juguetona. Sana y esterilizada.', // Descripción para el hover
    personality: 'Ginger es una perrita leal y cariñosa. Disfruta de la compañía y de las caricias, y siempre está lista para compartir momentos tranquilos o salir a explorar.'
  },
  {
    id: 2,
    image: oliver,
    name: 'Oliver',
    age: '6 meses',
    gender: 'Macho',
    size: 'Mediano',
    weight: '10 kilos',
    description: 'Macho 6 meses, mediano, 10 kilos, obediente. Sano, vacunado y castrado.',
    personality: 'Oliver es un perro obediente y lleno de energía. Le encanta jugar y socializar con otros animales y personas.'
  },
  {
    id: 3,
    image: leo,
    name: 'Leo',
    age: '4 años',
    gender: 'Macho',
    size: 'Grande',
    weight: '9 kilos',
    description: 'Macho de 4 años, grande, 9 kilos, activo. Sano y castrado.',
    personality: 'Leo es un gato independiente y curioso, siempre dispuesto a explorar su entorno y buscar nuevos lugares para descansar.'
  },
];


const Home = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div>
      <NavBar />
      <header className="home__header">
        <Slider {...settings} className="home__header-slider">
          <div>
            <img src={perroYGato1} alt="Perro y Gato 1" className="home__header-image" />
          </div>
          <div>
            <img src={perroYGato2} alt="Perro y Gato 2" className="home__header-image" />
          </div>
          <div>
            <img src={perroYGato3} alt="Perro y Gato 3" className="home__header-image" />
          </div>
        </Slider>
      </header>

      <section className="reality-section">
        <div className="reality-content">
          <div className="reality-text">
            <h2>La realidad en el Perú</h2>
            <p>En Perú, existen alrededor de 6 millones de perros abandonados, y solo en Lima se estima que hay 2 millones viviendo en las calles.
              En cuanto a los gatos, el número es tres veces mayor debido a su rápida reproducción. El abandono afecta tanto a perros como a gatos
              de todas las edades y razas, sin distinción.</p>
          </div>
          <img src={perrosAbrazando} alt="Perros abrazándose" className="reality-image" />
        </div>
      </section>

      <section className="adopt-banner">
        <h2>¡ADOPTA!</h2>
        <p>Adoptar no solo salva una vida, sino que también llena la tuya de alegría.</p>
      </section>

      <section className="gallery">
        {animals.map(animal => (
          <div key={animal.id} className="animal-card" onClick={() => openModal(animal)}>
            <img src={animal.image} alt={animal.name} className="animal-card__image" />
            <div className="animal-card__overlay">
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <Modal animal={selectedAnimal} closeModal={closeModal} />
      )}

      <Footer />
    </div>
  );
};

export default Home;
