import Head from "next/head";

export const globalMetadata = {
  title: "Prateek Raj - Full Stack Developer",
  description:
    "Hi, I'm Prateek Raj - a passionate Full Stack Developer with 2.8 years of experience building scalable web applications using React, Next.js, Spring Boot, and AWS.",
  keywords:
    "Prateek, Prateek Verma, Prateek Raj,  Full Stack Developer, React, Next.js, AWS, JavaScript, Portfolio, Prateek Raj Verma, Software Engineer, Web Developer, Capgemini",
  applicationName: "Prateek Raj Portfolio",
  generator: "Next.js",
  category: "Technology",
  robots: "index, follow",
  authors: [
    { name: "Prateek Raj Verma", url: "https://yourdomain.com" },
    { name: "GitHub", url: "https://github.com/raj0168" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prateek-raj-verma/" },
  ],
  creator: "Prateek Raj Verma",
  publisher: "Prateek Raj Verma",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#ffffff",
  icons: {
    icon: "/Logo.webp",
    shortcut: "/Logo.webp",
    apple: "/Logo.webp",
  },
  openGraph: {
    title: "Prateek Raj - Full Stack Developer",
    description:
      "Explore my portfolio and projects built using modern technologies like React, Next.js, Spring Boot, and AWS. Discover my skills and work as a Full Stack Developer.",
    url: "https://yourdomain.com",
    siteName: "Prateek Raj Verma",
    images: [
      {
        url: "/Prateek_Photo.webp",
        width: 1200,
        height: 630,
        alt: "Prateek Raj Verma - Full Stack Developer",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

interface SEOHeadProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url: string;
}

const SEOHead = ({
  title = globalMetadata.title,
  description = globalMetadata.description,
  imageUrl = "/Prateek_Photo.webp",
  url,
}: SEOHeadProps) => (
  <Head>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=5"
    />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content={globalMetadata.keywords} />
    <meta name="author" content="Prateek Raj Verma" />

    {/* Title */}
    <title>{title}</title>

    {/* Description */}
    <meta name="description" content={description} />

    {/* Open Graph (for Facebook, LinkedIn, etc.) */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={globalMetadata.openGraph.siteName} />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />

    {/* JSON-LD Schema Markup for SEO */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Prateek Raj Verma",
        url: url,
        sameAs: [
          "https://github.com/raj0168",
          "https://www.linkedin.com/in/prateek-raj-verma/",
        ],
        jobTitle: "Full Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "Capgemini",
        },
      })}
    </script>

    {/* Favicon and Icons */}
    <link rel="icon" href={globalMetadata.icons.icon} />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={globalMetadata.icons.icon}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={globalMetadata.icons.icon}
    />
  </Head>
);

export default SEOHead;
