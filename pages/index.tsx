import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import styles from '../styles/Home.module.css';
import homePageContentQuery, { Response } from '../lib/graphcms/homePageContentQuery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageWSubtitle from '../components/ImageWSubtitle';
import SkeletonBox from '../components/SkeletonBox';
import getContentCover from '../lib/helpers/getContentCover';

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
        <SkeletonBox className={styles.boxLoading} width={470} height={470} />
        <SkeletonBox className={styles.boxLoading} width={470} height={470} />
        <SkeletonBox className={styles.boxLoading} width={470} height={470} />
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
            <a href="/">Ver tudo</a>
          </div>
          <div className={styles.sectionContent}>
            {data ? (
              getFirstOnes(data.designs).map((design, index) => (
                <ImageWSubtitle
                  key={`design_${index}`}
                  title={design.title}
                  width={470}
                  height={470}
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
            <a href="/">Ver tudo</a>
          </div>
          <div className={styles.sectionContent}>
            {data ? (
              getFirstOnes(data.illustrations).map((illustration, index) => (
                <ImageWSubtitle
                  key={`illustration_${index}`}
                  title={illustration.title}
                  width={470}
                  height={470}
                  url={getContentCover(illustration)}
                  onClick={() => router.push(`/illustrations/${illustration.slug}`)}
                />
              ))
            ) : (
              <SkeletonLoading />
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
