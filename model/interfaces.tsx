export interface IPost {
  title: string;
  estReadingTime: string;
  tags: string[];
  categories: ICategory[];
  excerpt: string;
  mainImage: IMainImage;
  author: IAuthor;
  slug: ISlug;
  audio: string;
  publishedAt: string;
}

export interface ICategory {
  title: string;
  color: string;
  slug: ISlug;
}

export interface ISlug {
  current: string;
}

export interface IMainImage {
  blurDataURL: string;
  src: string;
  alt: string;
}

export interface IAuthor {
  name: string;
  position: string;
  image: IImage;
  slug: ISlug;
}

export interface IImage {
  src: string;
  blurDataURL: string;
  alt: string;
}
