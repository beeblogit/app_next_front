import Image from "next/image";
import Link from "next/link";
import hljs from "highlight.js/lib/core";
import go from "highlight.js/lib/languages/go";
hljs.registerLanguage("go", go);

export default function Code(params) {
  const { lang, children } = params;

  const code = hljs.highlight(children, { language: lang }).value;

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}
