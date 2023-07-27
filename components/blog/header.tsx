export default function Header({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  const url = "https://www.beeblogit.com";
  if (desc == "" || desc == undefined) {
    desc = title;
  }

  return (
    <head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <meta prefix={`og:${url}#`} property="og:title" content={title} />
      <meta prefix={`og:${url}#`} name="twitter:card" content={title} />
      <meta name="description" content={desc} />
      <meta prefix={`og:${url}#`} property="og:description" content={desc} />
      <meta prefix={`og:${url}#`} property="og:image" content={url + img} />
      <meta prefix={`og:${url}#`} property="og:url" content={url} />
    </head>
  );
}
