import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageWSubtitle from '../../components/ImageWSubtitle';
import SkeletonBox from '../../components/SkeletonBox';
import { getAllDesignsQuery, Response } from '../../lib/graphcms/designsPageQuery';
import getContentCover from '../../lib/helpers/getContentCover';
import styles from '../../styles/Designs.module.css';

const DesignsPage = (): React.ReactElement => {
  const { data } = useQuery<Response>(getAllDesignsQuery);
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
            data.designs.map((design, index) => (
              <ImageWSubtitle
                key={`design_${index}`}
                height={470}
                width={470}
                title={design.title}
                url={getContentCover(design)}
                onClick={() => router.push(`/designs/${design.slug}`)}
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

export default DesignsPage;
