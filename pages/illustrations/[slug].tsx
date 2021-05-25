import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import client from '../../services/graphqlClient';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  illustrationBySlugQuery,
  Illustration,
  illustrationsSlug,
} from '../../lib/graphcms/illustrationPageQuery';

import styles from '../../styles/Illustration.module.scss';

interface Props {
  illustration: Illustration;
}

const IllustrationPage = ({ illustration }: Props): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{illustration.title}</title>
      </Head>
      <Header />
      <h1 className={styles.title}>{illustration.title}</h1>
      <div className={styles.content}>
        {illustration.images.map(image => (
          <div key={`image_${image.id}`} className={styles.imageContainer}>
            <Image
              src={image.image.url}
              width={650}
              height={650}
              layout="fixed"
              alt=""
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const illustrationSlug = context.params.slug;

  const {
    data: { illustration },
  } = await client.query<{ illustration: Illustration }>({
    query: illustrationBySlugQuery,
    variables: { slug: illustrationSlug },
  });

  return {
    props: {
      illustration,
    },
    revalidate: 15,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  interface Response {
    illustrations: Array<{ slug: string }>;
  }

  const {
    data: { illustrations },
  } = await client.query<Response>({
    query: illustrationsSlug,
  });

  return {
    paths: illustrations.map(illustration => ({
      params: {
        slug: illustration.slug,
      },
    })),
    fallback: 'blocking',
  };
};

export default IllustrationPage;
