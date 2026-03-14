import * as React from "react";

// Components
import BlogLayout from "../../components/BlogLayout";
import Seo from "../../components/Seo";

// Styles
import "../../styles/global.scss";

const Post = () => {
  return (
    <BlogLayout id="003" emoji="🖊️" title="Programming in C" date="2023-03-01">
      <Seo
        title="003. Programming in C"
        description="From writing code on paper to printing my first real hello world in C."
        pathname="/blog/003-programming-in-c"
        type="article"
        noindex
      />
      <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[35px] md:leading-[50px] text-[18px] md:text-[26px]">
        <p className="text-center text-[var(--tw-text-gray-secondary)] text-[18px] md:text-[22px] italic">
          Coming soon...
        </p>
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