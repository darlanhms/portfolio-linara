export interface IllustrationImage {
  isCover: boolean;
  image: {
    url: string;
  };
}
export interface DesignImage {
  isCover: boolean;
  image: {
    url: string;
  };
}

export interface Illustration {
  order: number;
  title: string;
  description?: string;
  images: Array<IllustrationImage>;
}
export interface Design {
  order: number;
  title: string;
  description?: string;
  images: Array<DesignImage>;
}

export interface Response {
  illustrations: Array<Illustration>;
  designs: Array<Design>;
}

const homePageContentQuery = `
query {
  illustrations {
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
