import gql from "graphql-tag";

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


export const illustrationBySlugQuery = gql`
  query($slug: String!) {
    illustration(where: { slug: $slug }) {
      id
      title
      description
      images {
        image {
          url
        }
      }
    }
  }
`

export const illustrationsSlug = gql`
   query {
    illustrations {
      slug
    }
   }
`;
