import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Components
import BlogLayout from "../../components/BlogLayout";

// Styles
import "../../styles/global.scss";

// Images
import towerOfHanoi from "../../images/blog-tower-of-hanoi/tower-of-hanoi.gif";

const hanoiCode = `#include <stdio.h>

void solveHanoi(int n, char source, char dest, char aux) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", source, dest);
        return;
    }
    solveHanoi(n - 1, source, aux, dest);
    printf("Move disk %d from %c to %c\\n", n, source, dest);
    solveHanoi(n - 1, aux, dest, source);
}

int main() {
    int disks = 4;
    solveHanoi(disks, 'A', 'C', 'B');
    return 0;
}`;

const Post = () => {
  return (
    <BlogLayout id="003" emoji="🗼" title="The Tower of Hanoi" date="2023-06-01">
      <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[35px] md:leading-[50px] text-[18px] md:text-[26px]">
        <section className="tldr text-[18px] md:text-[25px] leading-[32px] md:leading-[45px]">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">TL;DR</h4>
          <ul className="list-none pl-8">
            <li className="mb-4"><strong>The Puzzle:</strong> Three rods, stack of disks, one rule—never put a big disk on a small one.</li>
            <li className="mb-4"><strong>The Concept:</strong> Recursion. A function that calls itself until the problem is solved.</li>
            <li className="mb-4"><strong>The Feeling:</strong> Pure confusion. Then it clicks. Then confusion again.</li>
          </ul>
          <br />
          <br />
        </section>

        <section className="intro-text">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">Staring at Disks</h4>
          <p>
            I am currently staring at the Tower of Hanoi. In theory, it's a simple puzzle. In C, it is a nightmare. This is my first real introduction to <strong>recursion</strong>—a function that calls itself.
          </p>
          <br />
          <p>
            It feels unnatural. My brain wants to solve things step-by-step, like a circuit. But recursion requires you to <em>trust</em> that the function will handle the smaller versions of the problem. You don't trace every step—you define the logic and let it unfold. If you get one step wrong, the whole thing collapses into a stack overflow.
          </p>
          <br />

          <div className="flex justify-center rounded-xl overflow-hidden mb-4">
            <img
              src={towerOfHanoi}
              alt="Tower of Hanoi animation"
              className="w-full max-w-[600px]"
              loading="lazy"
            />
          </div>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Code</h4>
          <p>
            The idea: move <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">n</code> disks from rod A to rod C, using rod B as a helper. The trick is you break it into three steps:
          </p>
          <br />
          <ol className="list-none pl-8 space-y-4 text-[18px] md:text-[25px] leading-[32px] md:leading-[45px]">
            <li><strong>1.</strong> Move the top <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">n-1</code> disks out of the way (to the helper rod).</li>
            <li><strong>2.</strong> Move the biggest disk to the destination.</li>
            <li><strong>3.</strong> Move the <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">n-1</code> disks from the helper rod to the destination.</li>
          </ol>
          <br />
          <p>
            And steps 1 and 3? They're the same problem, just smaller. That's recursion.
          </p>
          <br />
          <div className="mb-4 rounded-lg overflow-hidden text-[18px] leading-[30px]">
            <SyntaxHighlighter
              language="c"
              style={coldarkDark}
              customStyle={{ borderRadius: "12px", padding: "24px" }}
            >
              {hanoiCode}
            </SyntaxHighlighter>
          </div>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Analogy</h4>
          <p>
            There are moments where I feel like I'm finished. Between pointers and this logical loop, I feel lost. But then it clicked—programming <em>is</em> the Tower of Hanoi. You can't just jump to the solution. You have to move smaller pieces first, build understanding one layer at a time, and trust that each step gets you closer.
          </p>
          <br />
          <p>
            I haven't mastered it yet. But the disks are moving.
          </p>
          <br />
          <p className="italic text-[16px] md:text-[22px]">
            Keep moving.
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

export const Head = () => <title>003. The Tower of Hanoi | Nathan Kinda</title>;
