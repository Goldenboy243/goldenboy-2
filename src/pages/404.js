import * as React from "react";
import { Link } from "gatsby";

// Styles
import "../styles/notfound.scss";

// Components
import Loader from "../components/Loader";
import Seo from "../components/Seo";

const NotFound = () => {
  return (
    <div className="not-found">
      <Seo
        title="Page Not Found"
        description="This page doesn't exist."
        noindex
      />
      <Loader isOpened={true} linkBack={true} limit={404} numberSize="!text-[100px]" />
      <Link to="/">go back to nathankinda.com</Link>
    </div>
  );
};

export default NotFound;
