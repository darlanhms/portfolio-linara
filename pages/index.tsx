import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import styles from '../styles/Home.module.css';
import homePageContentQuery, {
  Design,
  DesignImage,
  Illustration,
  IllustrationImage,
  Response,
} from '../lib/graphcms/homePageContentQuery';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface OrderContract {
  order: number;
}

const Home = (): React.ReactElement => {
  const { data } = useQuery<Response>(homePageContentQuery);
  const router = useRouter();

  function getIllustrationCover(illustration: Illustration): IllustrationImage | undefined {
    return illustration.images.find(image => image.isCover);
  }

  function getDesingCover(desing: Design): DesignImage | undefined {
    return desing.images.find(image => image.isCover);
  }

  function getFirstOnes<T extends Array<OrderContract>>(content: T): T {
    const orderedArray = content.slice().sort((a, b) => a.order - b.order);

    orderedArray.splice(3);

    return orderedArray as any;
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
            {data &&
              getFirstOnes(data.designs).map((design, index) => (
                <div
                  className={styles.art}
                  key={`design_${index}`}
                  style={{
                    backgroundImage: `url(${getDesingCover(design)?.image.url || '/images/building.jpg'})`,
                  }}
                >
                  <div className={styles.textWrapper}>
                    <p>{design.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h5>Ilustrações</h5>
            <a href="/">Ver tudo</a>
          </div>
          <div className={styles.sectionContent}>
            {data &&
              getFirstOnes(data.illustrations).map((illustration, index) => (
                <div
                  className={styles.art}
                  key={`illustrations_${index}`}
                  style={{
                    backgroundImage: `url(${
                      getIllustrationCover(illustration)?.image.url || '/images/building.jpg'
                    })`,
                  }}
                  onClick={() => router.push(`/illustrations/${illustration.slug}`)}
                >
                  <div className={styles.textWrapper}>
                    <p>{illustration.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
