"use client";

import {
  Box,
  Typography,
  Card,
  Avatar,
  Chip,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SiGithub } from "react-icons/si";

export default function ProjectsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ py: isMobile ? 4 : 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ fontSize: isMobile ? "1.75rem" : "2.125rem" }}
      >
        My Projects - A Journey of Learning and Growth
      </Typography>

      <Typography
        variant="body1"
        sx={{
          pb: 5,
          textAlign: "center",
          fontSize: isMobile ? "0.95rem" : "1rem",
        }}
      >
        Over the last 2.8 years, I’ve worked on a diverse range of projects—
        from e-commerce platforms to dynamic web apps—leveraging tools like
        ReactJS, Next.js, Spring Boot, AWS and more to deliver scalable and
        user-friendly solutions.
      </Typography>

      <Grid container spacing={isMobile ? 3 : 4} justifyContent="center">
        {projects.map((project) => (
          <Grid key={project.name}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: 1,
                  boxShadow: 1,
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                  p: 2,
                  flexDirection: isMobile ? "column" : "row",
                  backgroundColor: "background.paper",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <Avatar
                  src={project.image}
                  alt={project.name}
                  variant="square"
                  sx={{
                    width: 88,
                    height: 88,
                    borderRadius: 2,
                    alignSelf: isMobile ? "center" : "flex-start",
                    mx: isMobile ? "auto" : 0,
                  }}
                />

                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      justifyContent: "space-between",
                      alignItems: isMobile ? "center" : "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      textAlign={isMobile ? "center" : "left"}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={isMobile ? "center" : "right"}
                    >
                      {project.duration}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mt: 1, textAlign: isMobile ? "center" : "left" }}
                  >
                    {project.desc}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: isMobile ? "center" : "flex-start",
                    }}
                  >
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        icon={<tech.icon />}
                        label={tech.name}
                        variant="outlined"
                        size="small"
                        sx={{
                          borderRadius: 0,
                          "& .MuiChip-icon": { marginRight: 0.5 },
                        }}
                      />
                    ))}
                  </Box>

                  <Box
                    mt={2}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: isMobile ? "center" : "flex-start",
                    }}
                  >
                    <Chip
                      label={
                        project.url
                          ? "Visit Project ↗"
                          : "Internal Application"
                      }
                      color={project.url ? "primary" : "default"}
                      variant="outlined"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.url) {
                          window.open(project.url, "_blank");
                        }
                      }}
                      sx={{
                        borderRadius: 0,
                      }}
                    />
                    {project.github && (
                      <Chip
                        label="View on GitHub"
                        color="secondary"
                        icon={<SiGithub />}
                        variant="outlined"
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        sx={{
                          borderRadius: 0,
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
