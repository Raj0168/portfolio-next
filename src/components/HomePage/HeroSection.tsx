import { profile_words } from "@/data/MainPage";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    textAlign="center"
  >
    <Typography variant="h3" gutterBottom>
      Hi, I am <strong>Prateek</strong>
    </Typography>
    <Typography variant="h5" color="text.secondary" mb={3}>
      <Typewriter
        words={profile_words}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={70}
        delaySpeed={1000}
      />
    </Typography>
    <Typography variant="body1" color="white" sx={{ opacity: 0.8 }}>
      {` I am a passionate Full Stack Developer, crafting modern web applications
      using React, Next, Spring Boot, AWS, and more.`}
    </Typography>
  </Box>
);

export default HeroSection;
