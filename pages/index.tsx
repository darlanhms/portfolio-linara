import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
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

  function scrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>Linara Tomasoni</title>
      </Head>
      <header className={styles.header}>
        <h1 className={styles.text}>Linara</h1>
        <ul className={styles.links}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Designs</a>
          </li>
          <li>
            <a href="/">Ilustrações</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </ul>
      </header>
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
        <div className={styles.section}>
          <span className={styles.backToTop} onClick={scrollTop}>
            <p>Voltar ao topo</p>
            <Icon icon={faLongArrowAltUp} />
          </span>
        </div>
        <div className={clsx(styles.section, styles.socials)}>
          <a href="https://www.instagram.com/linaraarts/" target="_blank" rel="noreferrer">
            <Icon size="2x" icon={faInstagram}></Icon>
          </a>
          <a href="https://linkedin.com/in/linara-tomasoni-da-silva-6769931a2" target="_blank" rel="noreferrer">
            <Icon size="2x" icon={faLinkedinIn}></Icon>
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
