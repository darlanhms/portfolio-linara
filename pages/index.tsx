import Image from 'next/image';
import React from 'react';

import styles from '../styles/Home.module.css';

const Home = (): React.ReactElement => (
  <div className={styles.container}>
    <Image width={600} height={600} src="/images/em_breve.png" />
  </div>
);

export default Home;
