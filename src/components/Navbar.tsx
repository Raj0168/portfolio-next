"use client";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Description,
  WorkOutline,
  MailOutline,
} from "@mui/icons-material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleDarkMode } from "@/store/slices/themeSlice";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { JSX, useState } from "react";
import { showSnackbar } from "@/store/slices/snackbarSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.dark);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Resume", href: "/resume.pdf", download: true },
  ];

  const handleResumeDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      dispatch(
        showSnackbar({
          message: "Resume downloaded successfully",
          severity: "success",
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(
        showSnackbar({
          message: "Failed to download resume",
          severity: "error",
        })
      );
    }
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={2}>
        <Toolbar sx={{ position: "relative", minHeight: "64px" }}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{ zIndex: 1 }}
              >
                <MenuIcon />
              </IconButton>

              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                component={Link}
                href="/"
              >
                <Image
                  src="/logo.webp"
                  alt="Logo"
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                />
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                component={Link}
                href="/"
              >
                <Image
                  src="/logo.webp"
                  alt="Logo"
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  marginLeft: "auto",
                }}
              >
                {navItems.map((item) =>
                  item.download ? (
                    <Button
                      key={item.label}
                      onClick={handleResumeDownload}
                      color="inherit"
                      sx={{
                        fontWeight: 500,
                        "&:hover": {
                          color: "#b600d6",
                          transform: "scale(1.05)",
                          transition: "all 0.2s ease-in-out",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Button
                      key={item.label}
                      component={Link}
                      href={item.href}
                      color="inherit"
                      sx={{
                        fontWeight: 500,
                        "&:hover": {
                          color: "rgb(211, 33, 243)",
                          transform: "scale(1.05)",
                          transition: "all 0.2s ease-in-out",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  )
                )}
                <IconButton
                  onClick={handleToggleTheme}
                  color="inherit"
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "rotate(20deg) scale(1.2)" },
                  }}
                >
                  {dark ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 250 } }}
      >
        <Box
          sx={{
            bgcolor: "rgb(211, 33, 243)",
            color: "primary.contrastText",
            py: 2,
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Explore
          </Typography>
        </Box>

        <List>
          {navItems.map((item) => {
            const iconMap: Record<string, JSX.Element> = {
              Projects: <WorkOutline />,
              Contact: <MailOutline />,
              Resume: <Description />,
            };

            return (
              <ListItem key={item.label} disablePadding>
                {item.download ? (
                  <ListItemButton
                    onClick={() => {
                      handleResumeDownload();
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemIcon>
                      <Description />
                    </ListItemIcon>
                    <ListItemText primary="Resume" />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemIcon>{iconMap[item.label]}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                )}
              </ListItem>
            );
          })}

          <ListItem disablePadding>
            <ListItemButton onClick={handleToggleTheme}>
              <ListItemIcon>
                {dark ? <Brightness7 /> : <Brightness4 />}
              </ListItemIcon>
              <ListItemText primary={dark ? "Light Mode" : "Dark Mode"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
