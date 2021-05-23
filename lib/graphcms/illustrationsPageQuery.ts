import {gql} from "@apollo/client";

export interface Illustration {
  id: string;
  title: string;
  images: Array<IllustrationImage>;
}

export interface IllustrationImage {
  id: string;
  image: {
    url: string;
  };
}

export const getAllIllustrationsQuery = gql`
  query {
    illustrations {
      title
      slug
      images {
        image {
          url
        }
      }
    }
  }
`
