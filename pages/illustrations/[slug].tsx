import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import {
  illustrationBySlugQuery,
  Illustration,
  illustrationsSlug,
} from '../../lib/graphcms/illustrationPageQuery';
import client from '../../services/graphqlClient';

interface Props {
  illustration: Illustration;
}

const IllustrationPage = ({ illustration }: Props): React.ReactElement => {
  return (
    <>
      <h1>{illustration.title}</h1>
      {illustration.images.map(image => (
        <Image key={`image_${image.id}`} src={image.image.url} width={500} height={500} layout="fixed" alt="" />
      ))}
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

  if (!illustration) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      illustration,
    },
    revalidate: 10,
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
