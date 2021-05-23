import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageWSubtitle from '../../components/ImageWSubtitle';
import SkeletonBox from '../../components/SkeletonBox';
import { getAllIllustrationsQuery, Response } from '../../lib/graphcms/illustrationsPageQuery';
import getContentCover from '../../lib/helpers/getContentCover';

import styles from '../../styles/Illustrations.module.css';

const IllustrationsPage = (): React.ReactElement => {
  const { data } = useQuery<Response>(getAllIllustrationsQuery);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ilustrações</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <div className={styles.content}>
          {data ? (
            data.illustrations.map((illustration, index) => (
              <ImageWSubtitle
                key={`illustration_${index}`}
                height={470}
                width={470}
                title={illustration.title}
                url={getContentCover(illustration)}
                onClick={() => router.push(`/illustrations/${illustration.slug}`)}
              />
            ))
          ) : (
            <>
              <SkeletonBox className={styles.boxLoading} width={470} height={470} />
              <SkeletonBox className={styles.boxLoading} width={470} height={470} />
              <SkeletonBox className={styles.boxLoading} width={470} height={470} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IllustrationsPage;
