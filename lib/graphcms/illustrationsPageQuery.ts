import {gql} from "@apollo/client";

export interface Illustration {
  id: string;
  title: string;
  slug: string;
  images: Array<IllustrationImage>;
}

export interface IllustrationImage {
  id: string;
  isCover: boolean;
  image: {
    url: string;
  };
}

export interface Response {
  illustrations: Array<Illustration>
}

export const getAllIllustrationsQuery = gql`
  query {
    illustrations {
      title
      slug
      images {
        isCover
        image {
          url
        }
      }
    }
  }
`
