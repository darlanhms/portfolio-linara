import gql from "graphql-tag";

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
  slug: string;
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

export interface Response {
  illustrations: Array<Illustration>;
  designs: Array<Design>;
}

const homePageContentQuery = gql`
query {
  illustrations {
    slug
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
`
export default homePageContentQuery;
