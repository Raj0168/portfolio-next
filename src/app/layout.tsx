import { Providers } from "./providers";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import SEOHead from "@/utils/SEOHead";

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
        <SEOHead url="https://yourdomain.com" />
        <Providers>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
