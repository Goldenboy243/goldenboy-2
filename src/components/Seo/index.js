import React from "react";
import { Helmet } from "react-helmet";

const SITE_URL = "https://nathankinda.com";
const DEFAULT_TITLE = "Nathan Kinda — Software Engineer";
const DEFAULT_DESCRIPTION =
  "Software Engineer building digital experiences. Sharing ideas about web development, design, and technology.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

/**
 * Reusable SEO component using react-helmet for Gatsby 3.x SSR support.
 * Use inside any page component's render (not as Head export).
 *
 * @param {object}  props
 * @param {string}  props.title       – Page title (will be appended with " | Nathan Kinda" unless `rawTitle`)
 * @param {boolean} [props.rawTitle]  – If true, use title as-is (no suffix)
 * @param {string}  [props.description]
 * @param {string}  [props.pathname]  – e.g. "/blog/000-origin"
 * @param {string}  [props.image]     – Full URL or path (will be prefixed with SITE_URL)
 * @param {string}  [props.type]      – og:type, defaults to "website"
 * @param {boolean} [props.noindex]   – Add noindex directive
 * @param {object}  [props.jsonLd]    – JSON-LD structured data object
 */
const Seo = ({
  title,
  rawTitle = false,
  description = DEFAULT_DESCRIPTION,
  pathname = "",
  image,
  type = "website",
  noindex = false,
  jsonLd,
}) => {
  const fullTitle = rawTitle ? title : `${title} | Nathan Kinda`;
  const canonical = `${SITE_URL}${pathname}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Nathan Kinda" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
