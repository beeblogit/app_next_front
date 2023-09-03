export default function Header({
  title,
  desc,
  img,
  tags,
  post,
  published,
  author,
}: {
  title: string;
  desc?: string;
  img: string;
  tags?: string[]; // go, programming, packages
  post?: string; // /post/3
  published?: string; // 2023-08-25T17:33:33.000Z
  author?: string;
}) {
  const url = "https://www.beeblogit.com";
  if (!desc) {
    desc = title;
  }

  const urlPost = !post ? url : url + post;
  const urlImage = url + img;
  return (
    <head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.png" />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={desc} />

      <meta property="og:site_name" content="Bee Blogit" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={urlPost} />
      <meta property="og:image" content={urlImage} />
      {published && (
        <>
          <meta property="article:published_time" content={published} />
          <meta property="article:modified_time" content={published} />
        </>
      )}

      {tags &&
        tags.map((tag, i) => (
          <meta property="article:tag" key={i + 1} content={tag} />
        ))}

      <meta property="article:publisher" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:url" content={urlPost} />
      <meta name="twitter:image" content={urlImage} />
      {author && tags && (
        <>
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content={author} />
          <meta name="twitter:label2" content="Filed under" />
          <meta name="twitter:data2" content={tags.join(", ")} />
        </>
      )}

      <meta property="og:image:width" content="960" />
      <meta property="og:image:height" content="540" />
    </head>
  );
}
