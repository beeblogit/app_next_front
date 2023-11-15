import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import "@/styles/buttons.css";
import { IPost, IImage } from "@/model/interfaces";

import PostFooter from "@/components/blog/postFooter";
import AuthorCard from "@/components/blog/authorCard";
import Code from "@/components/blog/code";
import SubHeader from "@/components/blog/subHeader";

type Props = {
  post: IPost;
  loading?: boolean;
};

export default function Post(props: Props) {
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
              Welcome to this post, where we&apos;ll discuss the Work command in
              Go, which was released in Go version 1.18.
            </p>
            <p>
              In my case, my Go version is 1.21; however, you can use whatever
              latest version of 1.18
            </p>
            <p>
              If we must make changes to a package that we are using in our
              project, with this functionality, we can use our local package,
              test it in our project without the necessity of uploading it to a
              repository, and import it. And without the necessity of using{" "}
              <b>&apos;replace&apos;</b> in our go.mod file either.
            </p>
            <h2>Go Work</h2>
            <p>
              With this command, we can work with our locally imported package
              in our project instead of uploading our changes to our repository
              and then importing them into our project.
            </p>
            <h3>Go Work Init</h3>
            <p>With this command:</p>
            <Code lang="markdown">{`$ go work init`}</Code>
            <p>We created our go.work, which contains our local modules.</p>
            <h3>Go Work Use</h3>
            <p>
              With the <b>use</b> command, we can define the local modules
              imported into our project. For example, we can import our project
              into the go.work file.
            </p>
            <Code lang="markdown">{`$ go work use .`}</Code>
            <p>Our go.work file will look like</p>
            <Code lang="markdown">{`go 1.21.0

use (
	.
)
`}</Code>
            <p>
              And we can add new modules (which are imported into our project)
            </p>
            <Code lang="markdown">{`$ go work use .../my-package`}</Code>
            <p>Our go.work file will look like</p>
            <Code lang="markdown">{`go 1.21.0

use (
	.
  ../my-package
)
`}</Code>
            <p>
              In this way, we are going to use our local <b>my-package</b>{" "}
              package instead of the remote package.
            </p>
            <h2>Example</h2>
            <h3>External package</h3>
            <p>
              We have the following package called <b>domain</b>, wherein we
              have a <b>user struct</b> with its tags.
            </p>
            <Code lang="go">{`package domain

type User struct {
	ID        string \`json:"id"\`
	FirstName string \`json:"first_name"\`
}`}</Code>
            <p>
              The repository of this package is{" "}
              <Link
                href="https://github.com/beeblogit/blog_go_work_pkg"
                className="blog-link"
                target="_blank"
              >
                blog_go_work_pkg
              </Link>{" "}
              , the latest tag is v0.0.1, and its folder structure is:
            </p>
            <Code lang="markdown">{`
blog_go_work_pkg/
  ├─ domain/
  │    └─ user.go
  └─ go.mod

`}</Code>
            <h3>Project</h3>
            <p>
              We are going to create our project (in my case, I called it
              &apos;blog_go_work_project&apos;). The first thing that we are
              going to do is initialize our go.mod file
            </p>
            <Code lang="markdown">{`go mod init`}</Code>
            <p>and import our external package</p>
            <Code lang="markdown">{`go get github.com/beeblogit/blog_go_work_pkg`}</Code>
            <p>
              we create our <b>main.go</b> file, import our package and use our{" "}
              <b>User</b> struct
            </p>
            <p>
              We instantiate a user variable and perform &apos;Marshal&apos; to
              display the user entity in JSON.
            </p>
            <Code lang="go">{`package main

import (
    "encoding/json"
    "fmt"
    "github.com/beeblogit/blog_go_work_pkg/domain"
)

func main() {
    u := domain.User{
      ID:        "1231",
      FirstName: "Nahuel",
    }

    value, _ := json.Marshal(u)
    fmt.Println(string(value))
}`}</Code>
            <p>and the result is</p>
            <Code lang="json">{`{"id":"1231","first_name":"Nahuel"}`}</Code>
            <p>
              But how can we perform changes in our package and import it
              without the need to upload the changes to the repository? In this
              way, we can use the &apos;work&apos; functionality to perform this
              action.
            </p>
            <h3>Work functionality</h3>
            <p>
              As a clarification, it is necessary to have our Go path
              configuration set correctly and to respect our project structure.
            </p>
            <p>my folder project struct from the GOPATH is</p>
            <Code lang="markdown">{`
src/
  └─ github/
       └─ beeblogit/
            ├─ ...
            ├─ blog_go_work_pkg/
            ├─ blog_go_work_project/
            └─ ...

`}</Code>
            <p>
              We are going to make some changes to our package, adding the
              &apos;LastName&apos; and &apos;Country&apos; fields (without
              uploading it to the repository).
            </p>
            <Code lang="go">{`type User struct {
    ID        string \`json:"id"\`
    FirstName string \`json:"first_name"\`
    LastName  string \`json:"last_name"\`
    Country   string \`json:"country"\`
}`}</Code>
            <p>
              In our project, we are going to execute the following command to
              create our <b>go.work</b> file
            </p>
            <Code lang="markdown">{`go work init .`}</Code>
            <p>
              A <b>go.work</b> file should have been generated with this
              content.
            </p>
            <Code lang="markdown">{`go 1.21.0

use .`}</Code>
            <p>
              We are going to add our locally external package to our{" "}
              <b>go.work</b> file; for this, we execute the following command.
            </p>
            <Code lang="markdown">{`go work use ../blog_go_work_pkg`}</Code>
            <p>Our go.work would look like this:</p>
            <Code lang="markdown">{`go 1.21.0

use (
    .
    ../blog_go_work_pkg
)
`}</Code>
            <p>
              In our project, we are going to define the values for the
              &apos;LastName&apos; and &apos;Country&apos; fields.
            </p>
            <Code lang="go">{`func main() {
    u := domain.User{
      ID:        "1231",
      FirstName: "Nahuel",
      LastName:  "Costamagna",
      Country:   "Argentina",
    }

    value, _ := json.Marshal(u)
    fmt.Println(string(value))
}`}</Code>
            <p>we execute the program and see the result</p>
            <Code lang="json">{`{"id":"1231","first_name":"Nahuel","last_name":"Costamagna","country":"Argentina"}`}</Code>
            <p>
              In this way, we obtain our <b>&apos;blog_go_work_pkg&apos;</b>{" "}
              local package instead of the remote package on GitHub.
            </p>
            <p>
              We can remove the external package from our project using the
              following command.
            </p>
            <Code lang="markdown">{`go work edit -dropuse ../blog_go_work_pkg`}</Code>
            <p>
              and we see the content of our <b>&apos;go.work&apos;</b> file.
            </p>
            <Code lang="markdown">{`go 1.21.0

use .
`}</Code>
            <p>
              Of course, we can remove it directly from our &apos;go.work&apos;
              file without the need to execute a command.
            </p>
            <p>
              We run the program again and can see the error because we are
              using the externally hosted package instead of the local one.
            </p>
            <Code lang="markdown">{`# command-line-arguments
./main.go:13:3: unknown field LastName in struct literal of type domain.User
./main.go:14:3: unknown field Country in struct literal of type domain.User
`}</Code>
            <h2>Conclusion</h2>
            <p>
              With this functionality, we can use our imported package locally
              without the need to upload it to the repository or use{" "}
              <b>replace</b> in our go.mod file. For more information, you can
              refer to the
              <Link
                href="https://go.dev/doc/tutorial/workspaces"
                className="blog-link"
                target="_blank"
              >
                official documentation
              </Link>
            </p>
            <PostFooter github="https://github.com/beeblogit/blog_go_work_project" />
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
