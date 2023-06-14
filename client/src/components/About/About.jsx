import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About me</h1>
      <img className={styles.image} src={'/server/public/Img/facuRicky.png'} alt="Mi imagen" />
      <p>Hola, soy Facundo.</p>
      <p>Soy un entusiasta de la programación y me encanta desarrollar aplicaciones web.</p>
      <p>Actualmente estoy aprendiendo React y disfruto construyendo interfaces de usuario interactivas.</p>
      <p>¡Siempre estoy emocionado de aprender nuevas tecnologías y enfrentar desafíos creativos!</p>
    </div>
  );
};

export default About;
