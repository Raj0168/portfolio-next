import {
  Box,
  Grid,
  Typography,
  Card,
  Avatar,
  Chip,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="md">
      <Typography
        textAlign="center"
        gutterBottom
        sx={{ fontSize: isMobile ? "1.5rem" : "2rem", mb: 1 }}
      >
        Featured Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.slice(0, 4).map((project, index) => {
          const isExpanded = expandedIndex === index;
          const hasLink = Boolean(project.url);

          return (
            <Grid key={project.name} component={motion.div}>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 2,
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                  p: 2,
                  backgroundColor: "background.paper",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <Avatar
                  src={project.image}
                  alt={project.name}
                  variant="rounded"
                  sx={{ width: 88, height: 88, flexShrink: 0 }}
                />

                <Box sx={{ flex: 1, minHeight: 88 }}>
                  <Typography
                    sx={{ fontSize: isMobile ? 14 : 16 }}
                    gutterBottom
                  >
                    {project.name}
                  </Typography>

                  <Box sx={{ minHeight: 48, position: "relative" }}>
                    <AnimatePresence initial={false} mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {project.desc}
                          </Typography>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {project.desc}
                          </Typography>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>

                  <Box mt={2}>
                    <Chip
                      label={
                        hasLink ? "Visit Project ↗" : "Internal Application"
                      }
                      variant="outlined"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (hasLink) {
                          window.open(project.url, "_blank");
                        }
                      }}
                      sx={{
                        color: hasLink ? "primary.main" : "inherit",
                      }}
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Box mt={5} textAlign="center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/projects" passHref>
            <Button
              variant="text"
              size="small"
              sx={{
                fontSize: "0.75rem",
                px: 2,
                color: "primary",
                transition: "all 0.3s ease-in-out",
              }}
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </Box>
    </Container>
  );
}
