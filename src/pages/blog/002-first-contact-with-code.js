import * as React from "react";
import BlogLayout from "../../components/BlogLayout";

const Post = () => {
  return (
    <BlogLayout 
      id="001" 
      emoji="💻" 
      title="First Syntax" 
      date="2023-01-20"
    >
              <section className="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>
                <ul className="list-disc pl-8">
                  <li className="mb-4">Swapped the Screwdriver for a keyboard.</li>
                  <li className="mb-4">First language: Visual Basic.</li>
                  <li className="mb-4">Realization: Wiring a house is predictable; making a digital button work is a different beast.</li>

                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  Coming from a background in Electricity, my brain was wired for the physical. I understood circuits, currents, and things you could touch. I expected programming to be an extension of that—something practical and direct.
                </p>
                <br />
                <p>
                  I was wrong.
                </p>
                <br />
                <p>
                  My first contact with code was through Visual Basic. It wasn't a circuit board; it was a blank screen. Instead of connecting wires to a terminal, I was writing words into one.
                </p>
                <br />
                <p>
                  At first, it felt strange. I went from being the "Electricity guy" who understood how to power a system to a total beginner again. There's a certain humility in not knowing how to make a simple button work after years of knowing how to wire a building.
                </p>
                <br />
                <p>
                  In my electricity days, the power was already there; I just had to direct it. Here, I have to create the logic from scratch. It's a different kind of power. I've traded the pliers for a keyboard, and for the first time, the "circuit" I'm building is purely logical.
                </p>
                <br />
                <p>
                  It's frustrating, it's new, but I'm here for it.
                </p>
                <br />
                <p>Hope you comeback.</p>
              </section>
    </BlogLayout>
  );
};

export default Post;

export const Head = () => (
  <title>001. First Syntax | Nathan Kinda</title>
);