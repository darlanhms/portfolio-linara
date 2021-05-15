import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home = (): React.ReactElement => (
  <>
    <Head>
      <title>Linara Tomasoni</title>
    </Head>
    <div className={styles.container}>
      <Image width={600} height={600} src="/images/em_breve.png" />
    </div>
  </>
);

export default Home;
