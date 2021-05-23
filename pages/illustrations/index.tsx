import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageWSubtitle from '../../components/ImageWSubtitle';
import SkeletonBox from '../../components/SkeletonBox';
import { getAllIllustrationsQuery, Response } from '../../lib/graphcms/illustrationsPageQuery';
import getContentCover from '../../lib/helpers/getContentCover';

import ResponsiveGridContent from '../../components/ResponsiveGridContent';

const IllustrationsPage = (): React.ReactElement => {
  const { data } = useQuery<Response>(getAllIllustrationsQuery);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ilustrações</title>
      </Head>
      <Header />
      <ResponsiveGridContent>
        {data ? (
          data.illustrations.map((illustration, index) => (
            <ImageWSubtitle
              key={`illustration_${index}`}
              title={illustration.title}
              url={getContentCover(illustration)}
              onClick={() => router.push(`/illustrations/${illustration.slug}`)}
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

export default IllustrationsPage;
