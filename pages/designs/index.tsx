import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageWSubtitle from '../../components/ImageWSubtitle';
import ResponsiveGridContent from '../../components/ResponsiveGridContent';
import SkeletonBox from '../../components/SkeletonBox';
import { getAllDesignsQuery, Response } from '../../lib/graphcms/designsPageQuery';
import getContentCover from '../../lib/helpers/getContentCover';

const DesignsPage = (): React.ReactElement => {
  const { data } = useQuery<Response>(getAllDesignsQuery);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Designs</title>
      </Head>
      <Header />
      <ResponsiveGridContent>
        {data ? (
          data.designs.map((design, index) => (
            <ImageWSubtitle
              key={`design_${index}`}
              title={design.title}
              url={getContentCover(design)}
              onClick={() => router.push(`/designs/${design.slug}`)}
            />
          ))
        ) : (
          <>
            <SkeletonBox />
            <SkeletonBox />
            <SkeletonBox />
          </>
        )}
      </ResponsiveGridContent>

      <Footer />
    </>
  );
};

export default DesignsPage;
