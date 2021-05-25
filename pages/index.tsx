import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import homePageContentQuery, { Response } from '../lib/graphcms/homePageContentQuery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageWSubtitle from '../components/ImageWSubtitle';
import SkeletonBox from '../components/SkeletonBox';
import getContentCover from '../lib/helpers/getContentCover';

import styles from '../styles/Home.module.scss';

interface OrderContract {
  order: number;
}

const Home = (): React.ReactElement => {
  const { data } = useQuery<Response>(homePageContentQuery);
  const router = useRouter();

  function getFirstOnes<T extends Array<OrderContract>>(content: T): T {
    const orderedArray = content.slice().sort((a, b) => a.order - b.order);

    orderedArray.splice(3);

    return orderedArray as any;
  }

  function SkeletonLoading(): React.ReactElement {
    return (
      <>
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Linara Tomasoni</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h5>Designs</h5>
            <a href="/designs">Ver tudo</a>
          </div>
          <div className={styles.sectionContent}>
            {data ? (
              getFirstOnes(data.designs).map((design, index) => (
                <ImageWSubtitle
                  key={`design_${index}`}
                  title={design.title}
                  url={getContentCover(design)}
                  onClick={() => router.push(`/desings/`)}
                />
              ))
            ) : (
              <SkeletonLoading />
            )}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h5>Ilustrações</h5>
            <a href="/illustrations">Ver tudo</a>
          </div>
          <div className={styles.sectionContent}>
            {data ? (
              getFirstOnes(data.illustrations).map((illustration, index) => (
                <ImageWSubtitle
                  key={`illustration_${index}`}
                  title={illustration.title}
                  url={getContentCover(illustration)}
                  onClick={() => router.push(`/illustrations/${illustration.slug}`)}
                />
              ))
            ) : (
              <SkeletonLoading />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
