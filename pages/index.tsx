import React from 'react';
import Head from 'next/head';
import { useQuery } from 'urql';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from '../styles/Home.module.css';

interface OrderContract {
  order: number;
}

interface IllustrationImage {
  isCover: boolean;
  image: {
    url: string;
  };
}
interface DesignImage {
  isCover: boolean;
  image: {
    url: string;
  };
}

interface Illustration {
  order: number;
  title: string;
  description?: string;
  images: Array<IllustrationImage>;
}
interface Design {
  order: number;
  title: string;
  description?: string;
  images: Array<DesignImage>;
}

interface Response {
  illustrations: Array<Illustration>;
  designs: Array<Design>;
}

const contentQuery = `
  query {
    illustrations {
      order
      title
      description
      images {
        isCover
        image {
          url
        }
      }
    }

    designs {
      order
      title
      description
      images {
        isCover
        image {
          url
        }
      }
    }
  }
`;

const Home = (): React.ReactElement => {
  const [conntetRequest] = useQuery<Response>({
    query: contentQuery,
  });

  function getIllustrationCover(illustration: Illustration): IllustrationImage | undefined {
    return illustration.images.find(image => image.isCover);
  }

  function getDesingCover(desing: Design): DesignImage | undefined {
    return desing.images.find(image => image.isCover);
  }

  function getFirstOnes<T extends Array<OrderContract>>(content: T): T {
    const orderedArray = content.sort((a, b) => a.order - b.order);
    orderedArray.splice(3);

    return orderedArray;
  }

  function scrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  const { data, fetching } = conntetRequest;

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
            {!fetching &&
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
            {!fetching &&
              getFirstOnes(data.illustrations).map((illustration, index) => (
                <div
                  className={styles.art}
                  key={`illustrations_${index}`}
                  style={{
                    backgroundImage: `url(${
                      getIllustrationCover(illustration)?.image.url || '/images/building.jpg'
                    })`,
                  }}
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
