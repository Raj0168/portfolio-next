"use client";
import { useState } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { frontendSkills, backendSkills, devopsSkills } from "@/data/MainPage";

const skillCategories = [
  { label: "Frontend", skills: frontendSkills },
  { label: "Backend", skills: backendSkills },
  { label: "DevOps", skills: devopsSkills },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontSize: isMobile ? "1.5rem" : "2rem", mb: 1 }}
      >
        My Skills
      </Typography>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        indicatorColor="secondary"
        sx={{
          mb: 2,
          "& .MuiTabs-indicator": {
            backgroundColor: "#b600d6",
          },
          "& .Mui-selected": {
            color: "#b600d6",
          },
        }}
      >
        {skillCategories.map((category) => (
          <Tab key={category.label} label={category.label} />
        ))}
      </Tabs>

      <Grid container spacing={2} justifyContent="center">
        {skillCategories[activeTab].skills.map((skill, index) => (
          <Grid
            key={skill.name}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillCard {...skill} isMobile={isMobile} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
