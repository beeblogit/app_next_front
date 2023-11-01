import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import "@/styles/buttons.css";
import { parseISO, format } from "date-fns";
import { IPost, IImage } from "@/model/interfaces";

import CategoryLabel from "@/components/blog/category";
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
              Welcome to this post, where we&apos;ll discuss Generics in Go, a
              powerful feature introduced in Go version 1.18.
            </p>

            <h2>Funtion</h2>
            <p>
              We can define a function that receives an integer value, for
              instance:
            </p>

            <Code lang="go">{`func Sum01(v int){
    // TODO
}`}</Code>

            <p>
              If we want to receive different values in the function, we&apos;ll
              define it as an interface.
            </p>
            <Code lang="go">{`func Sum01(v interface){
    // TODO
}`}</Code>

            <p>
              Starting from version 1.18, we can use Generics for defining a set
              of data types, such as: int, int32, int64, float32, or float64.
            </p>
            <p>
              To achieve this, we define a generic variable (in this case, N)
              and specify its set of data types within brackets.
            </p>
            <p>
              The generic data types must be separated by the pipe character (|)
            </p>

            <Code lang="go">{`func Sum01[N int | int32 | int64 | float64 | float32]`}</Code>
            <p>
              After that, we define a generic data type in our function&apos;s
              arguments. In this case, we receive an array of our generics.
            </p>
            <Code lang="go">{`func Sum01[N int | int32 | int64 | float64 | float32](v []N) {

}`}</Code>
            <p>
              We can also return our generic, where this generic (N) represents
              a set of data types (int, int32, int64, float64, float32).
            </p>
            <p>
              In this case, we receive all array elements and perform their
              summation.
            </p>

            <Code lang="go">{`func Sum01[N int | int32 | int64 | float64 | float32](v []N) N{
    var total N
    for _, tV := range v{
        total += tV
    }
    return total
}`}</Code>
            <p>
              We can execute the function with <b>Println</b> to see the result.
            </p>
            <Code lang="go">{`v1 := []float64{1.3,5.45,12.223,6.92,78.102}
v2 := []int32{9,23,1,23,8,98}

fmt.Println(Sum01(v1))
fmt.Println(Sum01(v2))`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`103.995
162`}</Code>
            <h2>Interface</h2>
            <p>
              We can create an interface to define the data types that represent
              our generic.
            </p>
            <p>
              We define an interface with the same data types, our generic is
              called &apos;Number&apos;.
            </p>
            <Code lang="go">{`type Number interface{
    int | int32 | int64 | float64 | float32
}`}</Code>
            <p>
              And we define our generic with this interface instead of the data
              types.
            </p>
            <Code lang="go">{`func Sum02[N Number](v []N) N{
    var total N
    for _, tV := range v {
        total += tV
    }
    return total
}`}</Code>
            <p>We execute the function</p>
            <Code lang="go">{`v1 := []float64{1.3,5.45,12.223,6.92,78.102}
v2 := []int32{9,23,1,23,8,98}

fmt.Println(Sum02(v1))
fmt.Println(Sum02(v2))`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`103.995
162`}</Code>
            <h2>Any</h2>
            <p>
              We can receive any values as parameters using the reserved word
              &apos;any.&apos;
            </p>
            <p>
              In this case, we are receiving 2 generics as &apos;any&apos;
              values (v1 and v2).
            </p>
            <Code lang="go">{`func anyType[N any](v1, v2 N){
    fmt.Println(v1, v2)
}`}</Code>
            <p>we execute the function:</p>
            <Code lang="go">{`anyType(1,1)
anyType("1","1")`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`1 1
1 1`}</Code>

            <p>
              We must take into account that if we send an integer value as a
              parameter, the generic will be an integer value. If we send a
              string value, the generic will be a string value. The generic will
              transform into the value we send. Therefore, we can&apos;t send
              different data types as the same generic.
            </p>
            <p>
              For example, in the previous example, we defined the generic N as
              &apos;any&apos;
            </p>
            <p>
              This generic (N) will be integer or string, but won&apos;t be
              integer and string, if we execute this code the program will
              return error
            </p>
            <Code lang="go">{`anyType(1,"1")`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`mismatched types untyped int and untyped string (cannot infer N)`}</Code>
            <p>
              If we wanted to send 2 different data types, we would define 2
              generics:
            </p>
            <Code lang="go">{`func anyTypeTwo[N1 any, N2 any](v1 N1, v2 N2){
    fmt.Println(v1, v2)
}`}</Code>
            <p>
              In this way, we can execute the function with integer and string
              values.
            </p>
            <Code lang="go">{`anyTypeTwo(1, "1")`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`1 1`}</Code>
            <h2>Comparable</h2>
            <p>
              We won&apos;t perform comparisons between &apos;any&apos; values.
              For instance, we won&apos;t check if v1 is equal to v2.
            </p>
            <Code lang="go">{`func anyType[N any](v1, v2 N){
    fmt.Println(v1, v2)
    fmt.Println(v1 != v2)
}`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`invalid operation: v1 != v2 (incomparable types in type set)`}</Code>
            <p>
              In this case, we must use the reserved word &apos;comparable&apos;
              to compare whether the variables are equal.
            </p>
            <Code lang="go">{`func comparableType[N comparable](v1, v2 N){
    fmt.Println(v1, v2)
    fmt.Println(v1 != v2) // != or ==
}`}</Code>
            <p>We execute the function</p>
            <Code lang="go">{`comparableType(4,4)`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`4 4
false`}</Code>
            <h2>Ordered</h2>
            <p>
              If we want to compare whether an &apos;any&apos; type variable
              &apos;a&apos; is greater or lesser than another variable
              &apos;b&apos;, we must use the &apos;Ordered&apos; interface in
              the internal &apos;cmp&apos; package.
            </p>
            <Code lang="go">{`func orderedValues[N cmp.Ordered](v1, v2 N){
    fmt.Println(v1, v2)
    fmt.Println(v1 !=v2)
    fmt.Println(v1 < v2)
    fmt.Println(v1 > v2)
}`}</Code>
            <p>We execute the function</p>
            <Code lang="go">{`orderedValues(2,4)`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`2 4
true
true
false`}</Code>
            <p>
              The &apos;cmp&apos; package was released in Go version 1.21. If
              your project is older than this version, you can use the external
              &apos;constraints&apos; package.
            </p>
            <Code lang="markdown">{`go get golang.org/x/exp`}</Code>
            <Code lang="go">{`import (
    "fmt"
    "golang.org/x/exp/constraints"
)

func orderedValues[N constraints.Ordered](v1, v2 N){
    fmt.Println(v1, v2)
    fmt.Println(v1 == v2)
    fmt.Println(v1 < v2)
    fmt.Println(v1 > v2)
}`}</Code>
            <h2>Generics with slices</h2>
            <p>
              We can define, let&apos;s say, a CustomSlice type with integer or
              string data types that represent a generic slice:
            </p>
            <Code lang="go">{`type CustomSlice[V int | string] []V`}</Code>
            <p>And we can use our custom slice:</p>
            <Code lang="go">{`csInt := CustomSlice[int]{1,2,3,4}
fmt.Println(csInt)

csStg := CustomSlice[string]{"a", "b","4"}
fmt.Println(csStg)`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`[1 2 3 4]
[a b 4]`}</Code>
            <h2>Tilde in generics</h2>
            <p>We are going to do the following examples.</p>
            <p>
              We have our &apos;Number&apos; interface that represents the
              following data types.
            </p>
            <Code lang="go">{`type Number interface{
    int | int32 | int64 | float64 | float32
}`}</Code>
            <p>
              And we have a function like this, using our &apos;Number&apos;
              interface, which returns the lesser value.
            </p>
            <Code lang="go">{`func MinNumber[T Number](x, y T) T {
    if x < y {
        return x
    }
    return y
}`}</Code>
            <p>We run the function, and it works perfectly</p>
            <Code lang="go">{`vv := MinNumber(5, 2)
fmt.Println(vv)`}</Code>
            <p>
              however, what happens if we define a type as integer called Point
            </p>
            <Code lang="go">{`type Point int`}</Code>
            <p>
              and we use this type to represent this integer value when we
              execute the function
            </p>
            <Code lang="go">{`x, y := Point(5), Point(2)
vv := MinNumber(x,y)`}</Code>
            <p>if we do it, the program will return the following error:</p>
            <Code lang="markdown">{`Point does not satisfy Number`}</Code>
            <p>
              In this interface we only can use int, int32, int64, float64,
              float32
            </p>
            <Code lang="go">{`type Number interface{
    int | int32 | int64 | float64 | float32
}`}</Code>
            <p>
              But, if we want to use a type (such as Point) that represents
              these values, we use the tilde character (~).
            </p>

            <Code lang="go">{`type Number2 interface {
    ~int |  ~int32 | ~int64 | ~float32 | ~float64
}`}</Code>
            <p>
              The <b>~</b> tilde token is used in the form <b>~T</b> to denote
              the set of types whose underlying type is <b>T</b>.
            </p>
            <p>Now, we run the program and see the result</p>
            <Code lang="go">{`x, y := Point(5), Point(2)
vv := MinNumber(x,y)
fmt.Println(vv)`}</Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`2`}</Code>
            <h2>Generics in structs</h2>
            <p>We are going to see how to use generics with structs.</p>
            <p>First, we create those structs with their methods.</p>
            <Code lang="go">{`type MyFirstData struct { }

type MySecondData struct { }

func (d MyFirstData) PrintOne(){
    fmt.Println("Print first")
}

func (d MySecondData) PrintTwo(){
    fmt.Println("Print second")
}`}</Code>
            <p>
              And we create our generic struct with a field called
              &apos;Data&apos; with the &apos;any&apos; data type.
            </p>
            <Code lang="go">{`type MyGenericStruct[D any] struct {
    StrValue string
    Data D
}`}</Code>
            <p>
              Finally, we generate the struct and run the methods we defined for
              each of the structs that represent this &apos;any&apos; field.
            </p>
            <Code lang="go">{`fd := MyGenericStruct[MyFirstData]{ StrValue: "Test", Data: MyFirstData{}}
fd.Data.PrintOne()

sd := MyGenericStruct[MySecondData]{ StrValue: "Test", Data: MySecondData{}}
sd.Data.PrintTwo()`}</Code>
            <h2>Conclusion</h2>
            <p>
              We have seen how to use generics with some examples. This is a
              powerful functionality introduced in Go version 1.18. For more
              information, you can refer to the{" "}
              <Link
                href="https://go.dev/blog/intro-generics"
                className="blog-link"
                target="_blank"
              >
                official documentation
              </Link>
            </p>
            <p>
              resource:{" "}
              <Link
                href="https://github.com/beeblogit/blog_go_generics"
                className="blog-link"
                target="_blank"
              >
                blog_go_generics
              </Link>
            </p>
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
