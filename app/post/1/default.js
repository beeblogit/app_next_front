import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";

import { parseISO, format } from "date-fns";

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

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-6xl lg:leading-snug">
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
              Welcome to my article, we are going to talk about binary operators
              in Go 😀
            </p>

            <p>
              With this functionality, we can perform operations with binary
              numbers. For example, we can have a variable <b>&apos;A&apos;</b>{" "}
              representing a binary number, another variable{" "}
              <b>&apos;B&apos;</b>, and use logical operators to perform
              operations that will result in a value <b>&apos;X&apos;</b>
            </p>
            <table className="border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    A
                  </th>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    B
                  </th>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    X
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    101
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    100
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    {" "}
                    ?{" "}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    001
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    111
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    {" "}
                    ?{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Logical Operators</h2>
            <p>
              We use logical operators to compare two values. They allow us to
              combine two values and obtain a result of either <b>1(one)</b> or{" "}
              <b>0(zero)</b>.
            </p>
            <p>
              There are 3 common operators: <b>AND, OR</b> and <b>NOT</b>. In
              our examples, we will use variables <b>A</b> and <b>B</b> as
              input, and variable <b>X</b> as the output.
            </p>
            <h3>AND</h3>
            <p>
              When <b>A</b> and <b>B</b> are both <b>1</b>, <b>X</b> is <b>1</b>
              . Otherwise, <b>X</b> is <b>0</b>.
            </p>
            <h3>OR</h3>
            <p>
              When <b>A</b> or <b>B</b> is <b>1</b>, <b>X</b> is <b>1</b>.
            </p>
            <p>
              The only case where <b>X</b> can be <b>0</b> is when <b>A</b> and{" "}
              <b>B</b> are both <b>0</b>
            </p>
            <h3>NOT</h3>
            <p>
              Unlike the other logical operators, <b>NOT</b> only takes one
              input value, and the value of <b>X</b> will always be the opposite
              of <b>A</b>
            </p>

            <p>
              If A is <b>1</b>, X will be <b>0</b>, and if <b>A</b> is <b>0</b>,{" "}
              <b>X</b> will be <b>1</b>
            </p>
            <div className="relative z-0  overflow-hidden lg:rounded-lg">
              <Image
                src="/img/post/1/article/1.png"
                alt="logical operators"
                loading="eager"
                height="200"
                width="900"
                sizes="100vw"
              />
            </div>
            <p>
              There are other Logical Operatos that we are going to explain
              next:
            </p>
            <h3>XOR</h3>
            <p>
              XOR is equal to <b>OR</b>, however with a difference: if <b>A</b>{" "}
              and <b>B</b> are both <b>1</b>, <b>X</b> will be <b>0</b>.{" "}
              <b>X</b> is <b>1</b> when <b>A</b> and <b>B</b> aren&apos;t both
              the same value.
            </p>
            <p>
              For example: if <b>A</b> and <b>B</b> are both <b>1</b>, <b>X</b>{" "}
              will be <b>0</b>. if <b>A</b> and <b>B</b> are both <b>0</b>,{" "}
              <b>X</b> will be <b>0</b> too. Otherwise, <b>X</b> will be{" "}
              <b>1</b>
            </p>
            <h3>NAND</h3>
            <p>
              NAND is the opposite of <b>AND</b> (AND + NOT). <b>X</b> will be{" "}
              <b>0</b> when <b>A</b> and <b>B</b> are both <b>1</b>. Otherwise,{" "}
              <b>X</b> will be <b>1</b>
            </p>
            <h3>NOR</h3>
            <p>
              <b>NOR</b> is the opposite of OR (OR + NOT), if <b>A</b> and{" "}
              <b>B</b> are both <b>0</b>, <b>X</b> will be <b>1</b>. Otherwise,{" "}
              <b>X</b> will be <b>0</b>
            </p>
            <h3>XNOR</h3>
            <p>
              <b>XNOR</b> is the opposite of XOR (XOR + NOT), <b>X</b> will be{" "}
              <b>1</b> when <b>A</b> and <b>B</b> are both the same value
            </p>
            <div className="relative z-0  overflow-hidden lg:rounded-lg">
              <Image
                src="/img/post/1/article/2.png"
                alt="logical operators"
                loading="eager"
                height="200"
                width="900"
                sizes="100vw"
              />
            </div>
            <h2>Binary Operators in Go</h2>

            <p>
              For the next examples, we are going to use a 16-bit positive
              integer value (uint). We will set it to a decimal value and
              display the value in both decimal and binary formats in the
              console.
            </p>

            <p>
              (We will use{" "}
              <b>
                <i>%b</i>
              </b>{" "}
              to see its binary representation.)
            </p>

            <Code lang="go">
              {`var a uint16 = 213
              
fmt.Printf("Number %d in binary is %b\\n", a, a)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">Number 213 in binary is 11010101</Code>
            <h3>Left shift & Right shift</h3>
            <p>
              We use those operators to shift the binary values by <b>n</b>{" "}
              positions.
            </p>

            <p>
              <b>Left shift</b> is represented by <b>&lt;&lt;</b>, for example:
            </p>
            <Code lang="go">
              {`// binary_number << n_positions_to_shift = result

fmt.Printf("Number %d in binary is %b\\n", a << 1, a << 1)
// 11010101 << 1  = 110101010 (We shift it once)

fmt.Printf("Number %d in binary is %b\\n", a << 10, a << 10)
// 11010101 << 10 = 101010000000000 (We shift it 10 times)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Number 426 in binary is 110101010
Number 21504 in binary is 101010000000000`}</Code>
            <p>
              The result is <b>101010000000000</b> instead of{" "}
              <b>110101010000000000</b>. When we attempt to perform a left shift
              with 10 positions, the value is truncated. This happens because
              the value being shifted is bigger than 16 bits.
            </p>
            <p>
              <b>Right shift</b> is represented by <b>&gt;&gt;</b>, for example:
            </p>
            <Code lang="go">
              {`// binary_number >> n_positions_to_shift = result

fmt.Printf("Number %d in binary is %b\\n", a >> 1, a >> 1)
// 11010101 >> 1  = 1101010 (We shift it once, the number will be decreasing)

fmt.Printf("Number %d in binary is %b\\n", a >> 10, a >> 10)
// 11010101 >> 10  = 0 (We shift 10 times)

fmt.Printf("Number %d in binary is %b\\n", a >> 5, a >> 5)
// 11010101 >> 10  = 110 (We shift 5 times)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Number 106 in binary is 1101010
Number 0 in binary is 0
Number 6 in binary is 110`}</Code>
            <p>
              There will come a point where we won&apos;t be able to decrement
              it anymore, and it will always be zero. For example, when we tried
              to shift it 10 times.
            </p>
            <h3>Logical Operators</h3>
            <p>
              We are going to declare another variable to perform the following
              examples.
            </p>

            <p>(We will use a 10-digit format to fill it with leading zeros)</p>
            <Code lang="go">
              {`var b uint16 = 20

fmt.Printf("'a': %.3d - %.10b\\n", a, a) // a = 0011010101
fmt.Printf("'b': %.3d - %.10b\\n\\n", b, b) // b = 0000010100`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`'a': 213 - 0011010101
'b': 020 - 0000010100`}</Code>
            <p>Representation of the binary logical operators in Go:</p>
            <ul>
              <li>
                If we want to perform an AND operation between A and B, we use:
                a & b
              </li>
              <li>
                If we want to perform an OR operation between A and B, we use: a
                | b
              </li>
              <li>
                If we want to perform an XOR operation between A and B, we use:
                a ^ b
              </li>
              <li>If we want to perform a NOT operation on A, we use: ^a</li>
            </ul>
            <p>
              (The caret symbol (^) is indeed used for both XOR and NOT
              operations.)
            </p>
            <Code lang="go">
              {`// AND
fmt.Printf("Bitwise AND: %d - %.10b\\n", a & b, a & b)
// 0011010101 AND 0000010100 = 0000010100

// OR
fmt.Printf("Bitwise OR: %d - %.10b\\n", a | b, a | b)
// 0011010101 OR 0000010100 = 0011010101

// XOR
fmt.Printf("Bitwise XOR: %d - %.10b\\n", a ^ b, a ^ b)
// 0011010101 OR 0000010100 = 0011000001

fmt.Printf("Bitwise NOT: %d - %.10b\\n", ^a, ^a)
// NOT 0011010101 = 1111111100101010`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Bitwise AND: 20 - 0000010100
Bitwise OR: 213 - 0011010101
Bitwise XOR: 193 - 0011000001
Bitwise NOT: 65322 - 1111111100101010`}</Code>
            <p>
              In the case of <b>NOT</b>, a larger binary number is seen compared
              to the previous ones. This is because for the previous cases, we
              had leading zeros that didn&apos;t represent anything, but when
              performing a NOT operation, those zeros are converted to ones that
              now represent values.
            </p>
            <p>
              It will fill with ones up to the capacity of the variable, in this
              case, 16 bits.
            </p>
            <p></p>
            <p>
              To use the <b>NAND, NOR</b>, and <b>XNOR</b> operators, we do the
              same as in the previous example but add a <b>NOT</b> to each one.
            </p>
            <p>
              For example, if we want to perform a <b>NAND</b> operation, we
              take the <b>NOT</b> of an <b>AND</b> operation.
            </p>
            <Code lang="go">
              {`// NAND
fmt.Printf("Bitwise NAND: %d - %.10b\\n", ^(a & b), ^(a & b))
// NOT (0011010101 AND 0000010100) = 1111111111101011
// 0011010101 NAND 0000010100      = 1111111111101011

// NOR
fmt.Printf("Bitwise NOR: %d - %.10b\\n", ^(a | b), ^(a | b))
// NOT (0011010101 OR 0000010100) = 1111111100101010
// 0011010101 NOR 0000010100      = 1111111100101010

// XNOR
fmt.Printf("Bitwise XNOR: %d - %.10b\\n", ^(a ^ b), ^(a ^ b))
// NOT (0011010101 XOR 0000010100) = 1111111100111110
// 0011010101 XNOR 0000010100      = 1111111100111110`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Bitwise NAND: 65515 - 1111111111101011
Bitwise NOR: 65322 - 1111111100101010
Bitwise XNOR: 65342 - 1111111100111110`}</Code>
            <h2>Example</h2>
            <p>
              We are going to perform a small example using roles. We will have
              the roles <b>READ, WRITE, UPDATE</b>, and <b>DELETE</b>, each of
              which will be represented by binary numbers with only a <b>1</b>{" "}
              in different positions:
            </p>
            <table className="border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    Role
                  </th>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    READ
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0001
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    WRITE
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0010
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    UPDATE
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0100
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    DELETE
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    1000
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              We are going to do it this way so that we can add them up and
              based on a number (the sum of the roles we want to assign to a
              profile), we can identify which roles the profile has assigned.
            </p>
            <p></p>
            <p>
              So let&apos;s define those 4 variables that will represent the
              roles:
            </p>
            <Code lang="go">
              {`READ_ROLE := 1         // 0001
WRITE_ROLE := 1 << 1   // 0010
UPDATE_ROLE := 1 << 2  // 0100
DELETE_ROLE := 1 << 3  // 1000`}
            </Code>
            <p>
              Then we are going to assign roles to a profile. We will add the
              roles for writing, reading, and deleting:
            </p>
            <Code lang="go">
              {`myProfile := READ_ROLE + WRITE_ROLE + DELETE_ROLE 
// Profile: 1011`}
            </Code>
            <p>
              And now, to validate if the profile has permissions to perform an
              operation, we will use the bitwise <b>AND</b> operator:
            </p>
            <ul>
              <li>
                If the result of the <b>AND</b> operation is equal to the{" "}
                <b>ROLE</b>, then <b>it has permissions</b>.
              </li>
              <li>
                If the result of the <b>AND</b> operation is zero, then{" "}
                <b>it does NOT have permissions</b>.
              </li>
            </ul>
            <table className="border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    Role
                  </th>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    Role Value
                  </th>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    Profile
                  </th>
                  <th className="border border-slate-300 px-3 py-2 lg:px-5">
                    AND Result
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    READ
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0001
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    1011
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0001
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    WRITE
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0010
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    1011
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0010
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    UPDATE
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0100
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    1011
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    0
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    DELETE
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    1000
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    1011
                  </td>
                  <td className="border border-slate-300 px-3 py-2 lg:px-5">
                    1000
                  </td>
                </tr>
              </tbody>
            </table>
            <Code lang="go">
              {`// Validating for the update role, it does not have permissions.
fmt.Println("Does the user have permissions to perform the operation?")
if (0 != (myProfile & UPDATE_ROLE)) {
	fmt.Println("Yes! :D")
}else{
	fmt.Println("No :(")
}`}
            </Code>
            <Code lang="go">
              {`// Validating for the read role, it has permissions.
fmt.Println("Does the user have permissions to perform the operation?")
if (0 != (myProfile & READ_ROLE)) {
	fmt.Println("Yes! :D")
}else{
	fmt.Println("No :(")
}`}
            </Code>
            <h2>Conclusion</h2>
            <p>
              In this article, we have explored the fundamentals of binary
              operators in Golang and learned how to effectively use them in our
              applications. We have seen how these operators allow us to perform
              logical and arithmetic operations at the bit level, which is
              useful in specific scenarios. Remember that understanding and
              correctly applying binary operators can improve the performance
              and efficiency of your programs. Feel free to experiment with them
              and further explore the power of binary operators in your Go
              projects!
            </p>
            <p></p>
            <p>
              resource:{" "}
              <a href="https://github.com/beeblogit/blog_go_binary_operators">
                blog_go_binary_operators
              </a>
            </p>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
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
