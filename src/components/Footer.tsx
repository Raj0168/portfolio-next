"use client";

import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
        mt: 6,
      }}
    >
      <Box sx={{ ...(isMobile ? {} : { flex: 1 }) }} />

      <Typography
        color="text.secondary"
        sx={{ flex: 1, textAlign: "center", fontSize: 12 }}
      >
        © {new Date().getFullYear()} All rights reserved.
      </Typography>

      <Box
        sx={{ display: "flex", gap: 1, flex: 1, justifyContent: "flex-end" }}
      >
        <IconButton
          component="a"
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          sx={{
            transition: "all 0.2s ease",
            "&:hover": {
              color: "primary.main",
              transform: "scale(1.1)",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          sx={{
            transition: "all 0.2s ease",
            "&:hover": {
              color: "primary.main",
              transform: "scale(1.1)",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
