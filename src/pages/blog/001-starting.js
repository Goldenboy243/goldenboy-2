import * as React from "react";
import BlogLayout from "../../components/BlogLayout";

const Post = () => {
  return (
    <BlogLayout 
      id="000" 
      emoji="📍" 
      title="Origin" 
      date="2020-01-15"
    >
              <section className="intro-text">
                <h4 className="text-[31px] font-bold mb-4">The Crossroads of Medicine and Independence</h4>
                <p>
                  In 2020, while the world was slowing down, my life was accelerating toward a single question: <em>What now?</em>
                </p>
                <br />
                <p>
                  Growing up, the path for a "successful" man is usually narrow. My parents saw me in a white coat as a doctor. It is a noble, stable, and respected path. But inside, I felt no spark for it. With a background in Electricity, I understood circuits and power—but I didn't know how to turn that into the freedom I craved.
                </p>
                <br />
                <p>
                  At 17, my definition of success was simple: <strong>Independence</strong>. I wanted to be my own boss. Like many of my peers, I looked at the markets. Trading seemed like the fast track to wealth and the "laptop lifestyle." I spent hours thinking about charts and financial freedom.
                </p>
                <br />
                <p>
                  Coding hadn't always been what I had in mind. My brother was the first to plant the seed of programming. At first, I didn't get it. To me, it was just lines of text.
                </p>
                <br />
                <h4 className="text-[32px] font-bold mb-4 mt-8">The Realization</h4>
                <p>
                  It took a rejection from Medical School to clear the fog. That "No" from the university was the "Yes" I needed for my career. I looked at programming again, but this time through a different lens. I realized code was the bridge between all my interests:
                </p>
                <br />
                <ul className="list-none pl-8">
                  <li className="mb-4">• If I wanted to trade, I could build bots to do it for me.</li>
                  <li className="mb-4">• If I wanted to help people, I could build tools for doctors.</li>
                  <li className="mb-4">• If I wanted to be free, I could work from anywhere.</li>
                </ul>
                <br />
                <p>
                  I traded the stethoscope for a keyboard. I initially looked for something that could be a natural evolution of my Electricity background—like Robotics—but settled into IT. I didn't choose tech because it was trendy; I chose it because it was the only path that offered no limits.
                </p>
                <br />
                <h4 className="text-[32px] font-bold mb-4 mt-8">TL;DR:</h4>
                <ul className="list-none pl-8">
                  <li className="mb-4"><strong>The Background:</strong> Electricity student.</li>
                  <li className="mb-4"><strong>The Conflict:</strong> Medicine (Parents) vs. Trading (Personal interest) vs. Architecture (Friends).</li>
                  <li className="mb-4"><strong>The Pivot:</strong> Medical school rejection led to the discovery of Tech's true potential.</li>
                  <li className="mb-4"><strong>The Goal:</strong> Full-stack independence and automated finance.</li>
                </ul>
                <br />
                <p className="italic">
                  This is 000. The beginning of the log.
                </p>
              </section>
    </BlogLayout>
  );
};

export default Post;

export const Head = () => <title>001. Starting... | Nathan Kinda</title>;