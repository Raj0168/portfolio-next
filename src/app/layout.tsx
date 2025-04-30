import { Providers } from "./providers";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prateek Raj Verma",
  description:
    "Hi, I'm Prateek Raj - a passionate Full Stack Developer with 2.8 years of experience building scalable web applications using React, Next.js, Spring Boot, and AWS.",
  keywords: [
    "Prateek",
    "Prateek Verma",
    "Prateek Raj",
    "Prateek Raj Verma",
    "Full Stack Developer",
    "React",
    "Next.js",
    "AWS",
    "JavaScript",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "Capgemini",
  ],
  applicationName: "Prateek Raj Portfolio",
  generator: "Next.js",
  category: "Technology",
  robots: "index, follow",
  authors: [
    { name: "Prateek Raj Verma", url: "https://prateek-raj.vercel.app/" },
    { name: "GitHub", url: "https://github.com/raj0168" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prateek-raj-verma/" },
  ],
  creator: "Prateek Raj Verma",
  publisher: "Prateek Raj Verma",
  icons: {
    icon: "/Logo.webp",
    shortcut: "/Logo.webp",
    apple: "/Logo.webp",
  },
  openGraph: {
    title: "Prateek Raj - Full Stack Developer",
    description:
      "Explore my portfolio and projects built using modern technologies like React, Next.js, Spring Boot, and AWS. Discover my skills and work as a Full Stack Developer.",
    url: "https://prateek-raj.vercel.app/",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Providers>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
