import hljs from "highlight.js/lib/core";
import go from "highlight.js/lib/languages/go";
import markdown from "highlight.js/lib/languages/markdown";
import json from "highlight.js/lib/languages/json";

hljs.registerLanguage("go", go);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("json", json);

export default function Code({
  children,
  lang,
}: {
  children: string;
  lang: string;
}) {
  const code = hljs.highlight(children, { language: lang }).value;

  return (
    <pre className="dark:bg-stone-800	">
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}
