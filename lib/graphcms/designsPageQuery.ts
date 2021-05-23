import { gql } from "@apollo/client";

interface Design {
  order: number;
  title: string;
  slug
  description?: string;
  images: Array<DesignImage>;
}

interface DesignImage {
  isCover: boolean;
  image: {
    url: string;
  };
}

export interface Response {
  designs: Array<Design>;
}

export const getAllDesignsQuery = gql`
  query {
    designs {
      order
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
