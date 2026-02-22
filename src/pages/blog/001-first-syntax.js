import * as React from "react";

// Components
import BlogLayout from "../../components/BlogLayout";

// Syntax highlighting
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Styles
import "../../styles/global.scss";

const vbCode = `Public Class Form1
    Private Sub btnClick_Click()
        Dim greeting As String
        greeting = "Hello World"
        MsgBox(greeting)
    End Sub
End Class`;

const Post = () => {
  return (
    <BlogLayout id="001" emoji="💻" title="First Syntax" date="2023-01-01">
      <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[35px] md:leading-[50px] text-[18px] md:text-[26px]">
        <section className="tldr text-[18px] md:text-[25px] leading-[32px] md:leading-[45px]">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">TL;DR</h4>
          <ul className="list-none pl-8">
            <li className="mb-4"><strong>The Language:</strong> Python, Java, C++... nah, we're starting with VB. Says the college.</li>
            <li className="mb-4"><strong>The Tool:</strong> Visual Studio—drag, drop, easy. Until you write the code.</li>
            <li className="mb-4"><strong>The Syntax:</strong> All that just to say "Hello World"?</li>
          </ul>
          <br />
          <br />
        </section>

        <section className="intro-text">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">Day One. For Real This Time.</h4>
          <p>
            Today is officially my first day of learning how to code. I'm finally here to see how "programming" actually looks like and what tools are used. So turns out there are different programming languages—Python, Java, C, C++... you can pick any of those. But nah, we're starting with VB.
          </p>
          <br />
          <p>
            Says the college.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">What Even Is VB?</h4>
          <p>
            Before I could even write a line of code, I had to install something called a code editor. We're using Visual Studio, and honestly? It kinda looks easy to use. You just choose the tools you want—a text box, a button, a radio button—drag them onto the form, and arrange them however you like. You can even modify the properties of each element. Font size, color, position... easy, right?
          </p>
          <br />
          <p>
            Now it's time to make it actually <em>work</em>. Time to write the code.
          </p>
          <br />
          <p>
            Eish. This is when it gets complicated.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Basic Syntax</h4>
          <p>
            Writing code is just telling the computer what to do. That's what they say. But in VB, the conversation feels a bit... formal. Look at this:
          </p>
          <br />
          <div className="mb-4 rounded-lg overflow-hidden text-[18px] leading-[30px]">
            <SyntaxHighlighter
              language="vbnet"
              style={coldarkDark}
              customStyle={{ borderRadius: "12px", padding: "24px" }}
            >
              {vbCode}
            </SyntaxHighlighter>
          </div>
          <br />
          <p>
            Does this not seem complicated just to say "Hi"? I have to define a <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Public Class</code>, then a <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Private Sub</code>, and then <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Dim</code> a variable—whatever that means.
          </p>
          <br />
          <p>
            I'm trying to understand the "why" behind all these definitions. Why can't I just say <em>show "Hello World"</em> and call it a day? But for now, I'm just following along and hoping it makes sense soon.
          </p>
          <br />
          <p className="italic text-[16px] md:text-[22px]">
            The journey begins.
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

export const Head = () => <title>001. First Syntax | Nathan Kinda</title>;
