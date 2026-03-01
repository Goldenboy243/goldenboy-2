import * as React from "react";

// Components
import BlogLayout from "../../components/BlogLayout";
import Seo from "../../components/Seo";

// Styles
import "../../styles/global.scss";

const Post = () => {
  return (
    <BlogLayout id="002" emoji="🤖" title="Introduction to Artificial Intelligence" date="2023-04-01">
      <Seo
        title="002. Introduction to Artificial Intelligence"
        description="An introduction to artificial intelligence — coming soon."
        pathname="/blog/002-introduction-to-artificial-intelligence"
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
