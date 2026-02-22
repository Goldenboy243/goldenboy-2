import * as React from "react";

// Components
import BlogLayout from "../../components/BlogLayout";

// Syntax highlighting
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Styles
import "../../styles/global.scss";

const vbCalcCode = `Private Sub btnCalculate_Click()
    Dim num1 As Double
    Dim num2 As Double
    Dim result As Double

    num1 = CDbl(txtNum1.Text)
    num2 = CDbl(txtNum2.Text)
    result = num1 + num2

    lblResult.Text = "Result: " & result
End Sub`;

const Post = () => {
  return (
    <BlogLayout id="002" emoji="🧮" title="Five Plus Three" date="2023-02-01">
      <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[35px] md:leading-[50px] text-[18px] md:text-[26px]">
        <section className="tldr text-[18px] md:text-[25px] leading-[32px] md:leading-[45px]">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">TL;DR</h4>
          <ul className="list-none pl-8">
            <li className="mb-4">
              <strong>The Task:</strong> Build a basic calculator in VB. Two text boxes, one button, one result.
            </li>
            <li className="mb-4">
              <strong>The Discovery:</strong> Variables have types. You can't just add text together and expect math.
            </li>
            <li className="mb-4">
              <strong>The Bug:</strong> My first ever error—trying to add strings instead of numbers. CDbl() saved the day.
            </li>
            <li className="mb-4">
              <strong>The Feeling:</strong> When the result finally showed up... that little hit of dopamine. I get why people do this.
            </li>
          </ul>
          <br />
          <br />
        </section>

        <section className="intro-text">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">Beyond Hello World</h4>
          <p>
            Okay, so last time I wrote my first "Hello World" and it felt like filling out paperwork. But today? Today we actually built something. A calculator. Nothing fancy—just two numbers in, one result out. But it's the first time the computer did something because <em>I told it to</em>.
          </p>
          <br />
          <p>
            The UI part was still easy. Drag two text boxes, a button, and a label onto the form. Done. But then the lecturer said: "Now make it calculate." And that's where the real lesson started.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Code That Broke</h4>
          <p>
            My first attempt? I just wrote <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">result = txtNum1.Text + txtNum2.Text</code>. Typed "5" and "3", clicked the button, and got... "53". Not 8. <em>Fifty-three.</em>
          </p>
          <br />
          <p>
            Turns out, text boxes give you <strong>strings</strong>, not numbers. And when you "add" two strings, they just stick together. That's called concatenation. I didn't know that word yet, but I sure learned it the hard way.
          </p>
          <br />
          <p>
            The fix? Convert the text to a number first using <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">CDbl()</code>:
          </p>
          <br />
          <div className="mb-4 rounded-lg overflow-hidden text-[18px] leading-[30px]">
            <SyntaxHighlighter
              language="vbnet"
              style={coldarkDark}
              customStyle={{ borderRadius: "12px", padding: "24px" }}
            >
              {vbCalcCode}
            </SyntaxHighlighter>
          </div>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Click That Changed Everything</h4>
          <p>
            When I clicked that button and the label showed "Result: 8"—I felt something. A tiny rush. Like, <em>I</em> made that happen. The computer didn't guess. It didn't auto-correct. It did exactly what I told it to do, nothing more, nothing less.
          </p>
          <br />
          <p>
            It's a calculator. It adds two numbers. It's not impressive. But it's mine. And now I'm starting to see why people get hooked on this.
          </p>
          <br />
          <p className="italic text-[16px] md:text-[22px]">
            First bug. First fix. First dopamine hit. This might actually be fun.
          </p>
        </section>
      </div>
      <br />
      <br />

      <a href={"/blog/"} className="px-[5%] text-[16px]">
        {"<- "} Back to blog
      </a>
      <br />
      <br />
      <br />
    </BlogLayout>
  );
};

export default Post;

export const Head = () => <title>002. Five Plus Three | Nathan Kinda</title>;
