import hljs from "highlight.js/lib/core";
import go from "highlight.js/lib/languages/go";
hljs.registerLanguage("go", go);

export default function Code({
  children,
  lang,
}: {
  children: string;
  lang: string;
}) {
  const code = hljs.highlight(children, { language: lang }).value;

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}
