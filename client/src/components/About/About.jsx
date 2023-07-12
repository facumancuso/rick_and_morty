import React from 'react';
import styles from './About.module.css';
import facuRicky from '../../assets/Img/1689180121005.png'
const About = () => {
  return (
    <div className={styles.container}>
    <div classname={styles.imgprofile}>
      <img className={styles.photo} src={facuRicky} alt="Mi imagen" />
    </div>
      <h1 className={styles.title}>Facundo Mancuso</h1>
      <p>lsalsdkjsaladkjsaldjsaldkjasldkjaslkjsaldkjsa aslsdkjasldkjsalak jaslsdkjas lkasjkd lasjk dlkaasjkd sakd lasjkd lasjk dlkasjd alasjk dlkaasjkd laasjk daskd asjkd asdjk</p>
    </div>
  );
};

export default About;
