import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import "@/styles/buttons.css";
import Table from "@/components/blog/table";
import { parseISO, format } from "date-fns";

import PostFooter from "@/components/blog/postFooter";

import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";
import Code from "@/components/blog/code";

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage;

  const AuthorimageProps = post?.author?.image;

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-5xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {AuthorimageProps && (
                  <Link href={`/author/${post.author.slug.current}`}>
                    <Image
                      src={AuthorimageProps.src}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </Link>
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <Link href={`/author/${post.author.slug.current}`}>
                    {post.author.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post._createdAt}
                  >
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <span>· {post.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

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
        <article className="mx-auto max-w-screen-xl">
          <div className="prose mx-auto my-3 max-w-screen-xl dark:prose-invert lg:prose-xl prose-a:text-blue-600">
            <h2>Introduction</h2>
            <p>
              Welcome to a tour of Go 1.21&apos;s &apos;slices&apos; upgrades!
              In this blog post, we&apos;ll explore the enhancements this new
              package brings, ensuring better performance for your Go
              applications.
            </p>
            <p></p>
            <p>
              We are going to talk about the &apos;slices&apos; package. With
              this package, we can perform different operations over slices in
              Go.
            </p>
            <p>
              The first step is to import the slices package. (We&apos;ll import
              the fmt package for displaying the examples.)
            </p>
            <Code lang="go">
              {`import (
	"fmt"
	"slices"
)`}
            </Code>
            <p>We are going to see those methods next:</p>
            <ul>
              <li>
                <Link href="#binary-search" className="blog-link">
                  Binary Search
                </Link>
                : searches some value
              </li>
              <li>
                <Link href="#compact" className="blog-link">
                  Compact
                </Link>
                : replaces consecutive runs of equal elements
              </li>
              <li>
                <Link href="#compare" className="blog-link">
                  Compare
                </Link>
                : compares 2 slices
              </li>
              <li>
                <Link href="#contains" className="blog-link">
                  Contains
                </Link>
                : checks if some value exists
              </li>

              <li>
                <Link href="#clone" className="blog-link">
                  Clone
                </Link>
                : clones a slice
              </li>

              <li>
                <Link href="#equals" className="blog-link">
                  Equals
                </Link>
                : determines whether two slices are equal.
              </li>
              <li>
                <Link href="#index" className="blog-link">
                  Index
                </Link>
                : returns the index of the value searched
              </li>

              <li>
                <Link href="#insert" className="blog-link">
                  Insert
                </Link>
                : inserts a range of values
              </li>

              <li>
                <Link href="#issorted" className="blog-link">
                  IsSorted
                </Link>
                : checks whether our slices is sorted
              </li>
              <li>
                <Link href="#max-min" className="blog-link">
                  Max & Min
                </Link>
                : get the maximum or minimum value
              </li>
              <li>
                <Link href="#remove" className="blog-link">
                  Remove
                </Link>
                : removes a range of values
              </li>
              <li>
                <Link href="#reverse" className="blog-link">
                  Reverse
                </Link>
                : reverses the elements
              </li>
              <li>
                <Link href="#replace" className="blog-link">
                  Replace
                </Link>
                : replaces a range of elements
              </li>
              <li>
                <Link href="#sort" className="blog-link">
                  Sort
                </Link>
                : sorts the elements
              </li>
            </ul>

            <p>
              Some methods have a{" "}
              <Link href="#function" className="blog-link">
                &apos;Function&apos; functionality
              </Link>{" "}
              , with this we can use custom comparison
            </p>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="binary-search">Binary Search</h2>
            <p>
              We can perform a binary search with this method to find some value
              in our slice.
            </p>
            <p>Our slices must be ordered to do this operation.</p>
            <Code lang="go">
              {`position, isFound := slices.BinarySearch(mySlice, value)`}
            </Code>
            <p>For example:</p>
            <Code lang="go">
              {`binarySrcTest := []int{3, 2, 4, 7,3, 1, 2,4,6}
i, found := slices.BinarySearch(binarySrcTest, 7)
fmt.Printf("BinarySearch - found: %t | position: %d\\n", found, i)
	
// the slice must be ordered
slices.Sort(binarySrcTest)
	
i, found = slices.BinarySearch(binarySrcTest, 7)
fmt.Printf("BinarySearch - found: %t | position: %d\\n", found, i)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`BinarySearch - found: false | position: 9
BinarySearch - found: true  | position: 8`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="compact">Compact</h2>
            <p>
              This method replaces consecutive runs of equal elements with a
              single copy.
            </p>
            <p>Our slices must be ordered to do this operation.</p>
            <Code lang="go">{`result := slices.Compact(mySlice)`}</Code>
            <p>For example:</p>
            <Code lang="go">
              {`compactTest := []int{1,1,2,2,9,9,3,3,2,1,10,10,5,1}
fmt.Printf("Compact: %v\\n", slices.Compact(compactTest))

// the slice must be ordered
slices.Sort(compactTest)
fmt.Printf("Compact: %v\\n", slices.Compact(compactTest))`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Compact: [1 2 9 3 2 1 10 5 1]
Compact: [1 2 3 5 9 10]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="compare">Compare</h2>
            <p>We can compare 2 slices. The result is: </p>
            <ul>
              <li>0 if s1 == s2</li>
              <li>-1 if s1 &lt; s2</li>
              <li>+1 if s1 &gt; s2</li>
            </ul>
            <Code lang="go">{`result := slices.Compare(mySlice1, mySlice2)`}</Code>
            <p>For example:</p>
            <Code lang="go">
              {`compare1Test := []int{3, 2, 4, 3, 1, 2,4,6}
compare2Test := []int{3, 2, 4, 3, 1, 2,4,6}

r := slices.Compare(compare1Test, compare2Test)
fmt.Printf("Compare: %d - %v & %v\\n", r, compare1Test, compare2Test)

compare2Test[2] = 5
r = slices.Compare(compare1Test, compare2Test)
fmt.Printf("Compare: %d - %v & %v\\n", r, compare1Test, compare2Test)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Compare:  0 - [3 2 4 3 1 2 4 6] & [3 2 4 3 1 2 4 6]
Compare: -1 - [3 2 4 3 1 2 4 6] & [3 2 5 3 1 2 4 6]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="contains">Contains</h2>
            <p>
              We can use this method to check if some value exists in the slice.
            </p>

            <Code lang="go">{`exist := slices.Contains(mySlice, someValue)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`containsTest := []int{1,2,3,3,1,2,8,1}
fmt.Printf("Contains: %v\\n", slices.Contains(containsTest, 3))
fmt.Printf("Contains: %v\\n", slices.Contains(containsTest, 9))`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Contains: true
Contains: false`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="clone">Clone</h2>
            <p>We can use this method to clone a slice</p>

            <Code lang="go">{`clonedSlice := slices.Clone(mySlice)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`cloneTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("cloneTest value: %v\\n", cloneTest)

clonedTest := slices.Clone(cloneTest)
cloneTest[2] = 5 // change same value
fmt.Printf("Clone: %v & %v\\n", cloneTest, clonedTest)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`cloneTest value: [3 2 4 3 1 2 4 6]
Clone: [3 2 5 3 1 2 4 6] & [3 2 4 3 1 2 4 6]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />

            <h2 id="equals">Equals</h2>
            <p>
              We can use this method to determine whether two slices are equal:
              they must have the same length, and all elements must be equal.
            </p>
            <p>If the lengths are different, the method will return false.</p>

            <p>
              Otherwise, the elements are compared in increasing index order,
              and the comparison stops at the first unequal pair.
            </p>

            <Code lang="go">{`isEqual := slices.Equal(mySlice1, mySlice2)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`equalTest := []int{40,1,5,1,3}
fmt.Printf("Equal: %t\\n", slices.Equal(equalTest, []int{40,5,1,1,3}))
fmt.Printf("Equal: %t\\n", slices.Equal(equalTest, []int{4,3}))
fmt.Printf("Equal: %t\\n", slices.Equal(equalTest, []int{40,1,5,1,3}))`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Equal: false
Equal: false
Equal: true`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />

            <h2 id="index">Index</h2>
            <p>
              This method returns the index of the first occurrence of the value
              in our slice, or -1 if not present.
            </p>

            <Code lang="go">{`position := slices.Index(mySlice, value)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`indexTest := []int{1,2,3,1,2,8}
fmt.Printf("Index: %d\\n", slices.Index(indexTest, 8))
fmt.Printf("Index: %d\\n", slices.Index(indexTest, 2))
fmt.Printf("Index: %d\\n", slices.Index(indexTest, 9))`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Index: 5
Index: 1
Index: -1`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="insert">Insert</h2>
            <p>
              We can use this method to insert a range of values at a specific
              index and return the modified slice.
            </p>

            <Code lang="go">{`newSlice := slices.Insert(mySlice, index, value1, value2, ...)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`insertTest := []int{1,2,3,3,1,2,8,1}
fmt.Printf("Insert: %v\\n", slices.Insert(insertTest, 4, 10, 20, 22))
fmt.Printf("Insert: %v\\n", slices.Insert(insertTest, 6, 11, 11, 11))`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Insert: [1 2 3 3 10 20 22 1 2 8 1]
Insert: [1 2 3 3 1 2 11 11 11 8 1]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="issorted">IsSorted</h2>
            <p>
              We can use this method to check whether our slice is sorted in
              ascending order.
            </p>

            <Code lang="go">{`result := slices.IsSorted(mySlice)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`isSortedTest := []int{1,2,3,1,2,8}
fmt.Printf("IsSorted: %t\\n", slices.IsSorted(isSortedTest))

slices.Sort(isSortedTest)
fmt.Printf("IsSorted: %t\\n", slices.IsSorted(isSortedTest))`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`IsSorted: false
IsSorted: true`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="max-min">Max & Min</h2>
            <p>
              We can use the Max and Min methods to get the maximum and minimum
              values of the slice.
            </p>

            <Code lang="go">{`maxValue := slices.Max(mySlice)
minValue := slices.Min(mySlice)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`maxTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("Max: %d\\n", slices.Max(maxTest))

minTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("Min: %d\\n", slices.Min(minTest))`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Max: 6
Min: 1`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="remove">Remove</h2>
            <p>
              We can use this method to remove a range of our slice, and the
              method will return the new slice.
            </p>

            <Code lang="go">{`newSlice := slices.Delete(mySlice, from,to)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`deleteTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("deleteTest variable: %v\\n", deleteTest)
fmt.Printf("Delete: %v\\n", slices.Delete(deleteTest, 1,4))`}
            </Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`deleteTest variable: [3 2 4 3 1 2 4 6]
Delete: [3 1 2 4 6]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="reverse">Reverse</h2>
            <p>We can use this method to reverse the elements of our slice.</p>

            <Code lang="go">{`slices.Reverse(mySlice)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`reverseTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("reverseTest variable: %v\\n", reverseTest)

slices.Reverse(reverseTest)
fmt.Printf("Reverse: %v\\n", reverseTest)`}
            </Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`reverseTest variable: [3 2 4 3 1 2 4 6]
Reverse: [6 4 2 1 3 4 2 3]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="replace">Replace</h2>
            <p>
              We can use this method to replace a range of elements. To perform
              this operation, we need to define the value of &apos;i&apos;
              (start), the value of &apos;j&apos; (end), and the values that
              will be added.
            </p>

            <Code lang="go">{`newSlice := slices.Replace(mySlice, from, to, value1, value2, ...)`}</Code>

            <p>It panics if mySlice[ from : to ] is not a valid slice.</p>
            <p>For example, We will use the slice</p>

            <Code lang="go">{`index  [0, 1, 2, 3, 4, 5, 6, 7]
values [3, 2, 4, 3, 1, 2, 4, 6]`}</Code>

            <p>
              We will replace the values from index 3 to index 6 with other
              values. It is not necessary for these other values to have the
              same length as the range (index 3 to index 6).
            </p>

            <Code lang="go">{`index  [... , 3, 4, 5, ...]
values [... , 3, 1, 2, ...]`}</Code>

            <Code lang="go">{`replaceTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("replaceTest variable: %v\\n", replaceTest)

replaceTest = slices.Replace(replaceTest, 3, 6, 10, 11, 12)
fmt.Printf("Replace: %v\\n", replaceTest)`}</Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`replaceTest variable: [3 2 4 3 1 2 4 6]
Replace: [3 2 4 10 11 12 4 6]`}</Code>

            <p>We can add the same 3 values only replacing 1 value</p>

            <Code lang="go">{`replaceTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("replaceTest variable: %v\\n", replaceTest)

replaceTest = slices.Replace(replaceTest, 3, 4, 10, 11, 12)
fmt.Printf("Replace: %v\\n", replaceTest)`}</Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`replaceTest variable: [3 2 4 3 1 2 4 6]
Replace:              [3 2 4 10 11 12 1 2 4 6]`}</Code>

            <p>Or no values</p>

            <Code lang="go">{`replaceTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("replaceTest variable: %v\\n", replaceTest)

replaceTest = slices.Replace(replaceTest, 3, 3, 10, 11, 12)
fmt.Printf("Replace: %v\\n", replaceTest)`}</Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`replaceTest variable: [3 2 4 3 1 2 4 6]
Replace:              [3 2 4 10 11 12 3 1 2 4 6]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="sort">Sort</h2>
            <p>We can use this method to sort the elements of our slice.</p>

            <Code lang="go">{`slices.Sort(mySlice)`}</Code>

            <p>For example:</p>
            <Code lang="go">
              {`sortTest := []int{3, 2, 4, 3, 1, 2,4,6}
fmt.Printf("sortTest variable: %v\\n", sortTest)

slices.Sort(sortTest)
fmt.Printf("Sort: %v\\n", sortTest)`}
            </Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`sortTest variable: [3 2 4 3 1 2 4 6]
Sort: [1 2 2 3 3 4 4 6]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="function">Function</h2>
            <p>
              Some methods have a &apos;Function&apos; functionality, with which
              we can use custom comparison. Those methods are:
            </p>
            <Table
              headers={["Method", "Function Method"]}
              values={[
                ["BinarySearch", "BinarySearchFunc"],
                ["Compact", "CompactFunc"],
                ["Compare", "CompareFunc"],
                ["Contains", "ContainsFunc"],
                ["Delete", "DeleteFunc"],
                ["Equal", "EqualFunc"],
                ["Index", "IndexFunc"],
                ["IsSorted", "IsSortedFunc"],
                ["Max", "MaxFunc"],
                ["Min", "MinFunc"],
                ["Sort", "SortFunc"],
              ]}
            />

            <p>
              We are going to do the following example with the Equal method
              (Function method), comparing an integer slice with a string slice.
            </p>
            <p>We defined the values for comparing and the function.</p>

            <Code lang="go">
              {`numbers := []int{0, 42, 8}
strings := []string{"000", "42", "0o10"}

equal := slices.EqualFunc(numbers, strings, func(n int, s string) bool {
	sn, err := strconv.ParseInt(s, 0, 64)
	if err != nil {
		return false
	}
	return n == int(sn)
})
fmt.Printf("EqualFunc: %t\\n", equal)`}
            </Code>

            <h5>Output:</h5>
            <Code lang="markdown">{`EqualFunc: true`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2>Conclusion</h2>
            <p>
              In this article, we have presented an array of valuable methods to
              proficiently manipulate our slices. Remember, for more information
              you can see the Go official site{" "}
              <Link
                href="https://pkg.go.dev/slices@master"
                className="blog-link"
              >
                here
              </Link>
            </p>
            <PostFooter
              github="https://github.com/beeblogit/blog_go_v21_slices"
              medium="https://costamagna.medium.com/exploring-the-power-of-go-1-21-slices-package-6e017b2faec9"
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
    </>
  );
}
