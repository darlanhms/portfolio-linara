interface ContentImage {
  isCover: boolean;
  image: {
    url: string;
  };
}

interface ContentContract {
  images: Array<ContentImage>;
}

export default function getContentCover(content: ContentContract): string | undefined {
  return content.images.find(image => image.isCover)?.image?.url;
}
