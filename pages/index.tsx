import Image from 'next/image';
import React from 'react';

import styles from '../styles/Home.module.css';

const Home = (): React.ReactElement => (
  <div className={styles.container}>
    <Image width={500} height={500} src="/images/building.jpg" />
    <h1 className={styles.text}>Em breve...</h1>
  </div>
);

export default Home;
