import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  url = "https://www.bhuviona.com",
  image = "https://www.bhuviona.com/assets/images/og-bhuviona.png",
  type = "website",
  author = "Bhuviona Technologies",
  keywords = "AI education, AI for Teachers, AI for students, AI Lesson Planning, adaptive learning, VYON, EdTech, intelligent tutoring, personalized learning",
  publishedTime,
  modifiedTime,
}) {
  const fullTitle = title.includes("Bhuviona") ? title : `${title} | Bhuviona Technologies`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Bhuviona Technologies" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bhuviona Technologies - Expanding Intelligence" />
      <meta property="og:locale" content="en_IN" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Bhuviona Technologies - Expanding Intelligence" />
      <meta name="twitter:site" content="@bhuviona" />
      <meta name="twitter:creator" content="@bhuviona" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#0d6e6e" />
      <meta name="msapplication-TileColor" content="#0d6e6e" />
    </Helmet>
  );
}
