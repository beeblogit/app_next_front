import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import "@/styles/buttons.css";

import PostFooter from "@/components/blog/postFooter";

import AuthorCard from "@/components/blog/authorCard";
import Code from "@/components/blog/code";
import SubHeader from "@/components/blog/subHeader";
export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage;

  return (
    <div>
      <SubHeader post={post} />
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-xl ">
          <div className="prose mx-auto my-3 max-w-screen-xl dark:prose-invert lg:prose-xl prose-a:text-blue-600">
            <h2>Introduction</h2>
            <p>
              Welcome to an insightful overview of the new &apos;cmp&apos;
              package within Go version 1.21. In this post, we&apos;ll explore
              how these updates optimize value comparisons, making your code
              more efficient and intuitive. Stay tuned to discover the
              improvements that Go 1.21 brings with the &apos;cmp&apos; package
              and how they can elevate your coding experience.
            </p>
            <p>
              The first step is to import the <b>cmp</b> package
            </p>
            <Code lang="go">
              {`import (
    "cmp"
)`}
            </Code>
            <p>
              We can use this package to perform comparisons. It provides 2
              methods: <b>Compare</b> and <b>Less</b>.
            </p>

            <h2>Compare</h2>
            <p>The &apos;Compare&apos; method compares 2 values:</p>
            <ul>
              <li>
                if the first value is less than the second value, the method
                will return -1
              </li>
              <li>if both values are equal, the method will return 0</li>
              <li>
                if the first value is greater than the second value, the method
                will return +1
              </li>
            </ul>
            <Code lang="go">{`func Compare[T Ordered](x, y T) int`}</Code>

            <Code lang="go">
              {`// in this case, the result will be +1
cmp.Compare(3,2)`}
            </Code>
            <h2>Less</h2>
            <p>
              We can use this method to check if the first value is less than
              the second value. In this case, the result will be true;
              otherwise, it will be false.
            </p>
            <p>(if both values are equal, the result will be false)</p>
            <Code lang="go">{`func Less[T Ordered](x, y T) bool`}</Code>
            <Code lang="go">
              {`// in this case, the result will be true
cmp.Less(1,2)`}
            </Code>
            <h2>NaN values</h2>
            <p>We can&apos;t perform comparisons between NaN values:</p>
            <Code lang="go">
              {`NaN < NaN  // false
NaN > NaN  // false
NaN == NaN // false`}
            </Code>

            <p>
              However, something interesting is that with those methods, we can
              work with NaN values. In this case:
            </p>
            <ul>
              <li>NaN is always less than any non-NaN value.</li>
              <li>NaN is considered equal to a NaN value.</li>
            </ul>

            <h3>Go Source code</h3>

            <p>
              The following is the source code for <b>Compare</b>
            </p>
            <Code lang="go">
              {`func Compare[T Ordered](x, y T) int {
    xNaN := isNaN(x)
    yNaN := isNaN(y)
    if xNaN && yNaN {
      return 0
    }
    if xNaN || x < y {
      return -1
    }
    if yNaN || x > y {
      return +1
    }
    return 0
}`}
            </Code>
            <p>
              There is a private <b>isNaN</b> function that checks whether the
              value is NaN.
            </p>
            <Code lang="go">
              {`func isNaN[T Ordered](x T) bool {
    return x != x
}`}
            </Code>
            <p>
              When we compare if <b>NaN</b> is equal to <b>NaN</b>, the result
              will always be <b>false</b>. Likewise, if we compare that some{" "}
              <b>NaN</b> value is different from another <b>NaN</b> value, the
              result will be <b>true</b>.
            </p>

            <p>
              The same applies to the <b>Less</b> method; they use this private
              function for performing comparisons.
            </p>

            <Code lang="go">
              {`func Less[T Ordered](x, y T) bool {
    return (isNaN(x) && !isNaN(y)) || x < y
}`}
            </Code>

            <p>
              Source code:
              <Link
                href="https://cs.opensource.google/go/go/+/refs/tags/go1.21.0:src/cmp/cmp.go"
                className="blog-link"
                target="_blank"
              >
                here
              </Link>
            </p>

            <h2>Ordered Type</h2>
            <p>
              In Go version 1.21, we can use the <b>Ordered Type</b> instead of
              the external package <b>constraints</b> to make comparisons in{" "}
              <b>Generics</b> (ordered comparisons).
            </p>
            <p>For example, in versions prior to 1.21, we used:</p>

            <Code lang="go">
              {`import (
    "fmt"
    "golang.org/x/exp/constraints"
)

func main(){
    oldOrderedValues(2, 4)
}

func oldOrderedValues[N constraints.Ordered](v1, v2 N){
    fmt.Println(v1, v2)
    fmt.Println(v1 !=v2)
    fmt.Println(v1 < v2)
    fmt.Println(v1 > v2)
}`}
            </Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`2 4
true
true
false`}</Code>

            <p>however, in go 1.21 we can use:</p>
            <Code lang="go">
              {`import (
    "cmp"
    "fmt"
)

func main(){
    orderedValues(2,4)
}

func orderedValues[N cmp.Ordered](v1, v2 N){
    fmt.Println(v1, v2)
    fmt.Println(v1 !=v2)
    fmt.Println(v1 < v2)
    fmt.Println(v1 > v2)
}`}
            </Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`2 4
true
true
false`}</Code>

            <h2>Conclusion</h2>
            <p>
              To sum up, With the <b>cmp</b> package, we can perform
              comparisons, and it works really well with <b>NaN</b> values.
              Additionally, we can use the <b>Ordered</b> type instead of the
              external &apos;constraints&apos; package for performing
              comparisons in Generics.
            </p>
            <PostFooter
              github="https://github.com/beeblogit/blog_go_v21_cmp"
              medium="https://costamagna.medium.com/deeper-cmp-package-in-go-1-21-425f25070d37"
            />
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500"
            >
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
      </Container>
    </div>
  );
}
