import * as React from "react";

// Components
import Header from "../Header";
import Note from "../Note";
import Loader from "../Loader";
import Cursor from "../Cursor";

// Styles
import "../../styles/global.scss";

const BlogLayout = ({ 
  id, 
  emoji, 
  title, 
  date, 
  children,
  headingLevel = "h3"
}) => {
  const [isOpened, setIsOpened] = React.useState(true);
  
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  const HeadingTag = headingLevel;

  return (
    <>
      <Cursor />
      <div className="post">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main className="flex flex-col mb-10 max-w-[900px]">
          <article className="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">{emoji}</p>
              <HeadingTag className="about-title text-[35px] md:text-[50px] mb-4 font-black w-full md:mt-0 leading-[60px]">
                {id}. {title}
              </HeadingTag>
              <time dateTime={date} className="text-[18px] text-[#bbb]">
                {new Date(date).getFullYear()}
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              {children}
            </div>
          </article>
        </main>
        <Note />
      </div>
    </>
  );
};

export default BlogLayout;
