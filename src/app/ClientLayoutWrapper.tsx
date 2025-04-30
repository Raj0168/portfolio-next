"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";

import { ThemeProvider, CssBaseline } from "@mui/material";

import ScrollToTop from "@/utils/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteGuard from "@/utils/RouteGuard";
import { getTheme } from "@/styles/theme";
import "../styles/globals.css";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const fontSize = useSelector((state: RootState) => state.theme.fontSize);

  const theme = getTheme(dark);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          flex: 1,
          fontSize: `${fontSize}px`,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ScrollToTop />
        <Navbar />
        <RouteGuard>
          <main style={{ flex: 1 }}>{children}</main>
        </RouteGuard>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
