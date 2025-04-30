import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

type SkillCardProps = {
  icon: React.ElementType;
  name: string;
  isMobile?: boolean;
};

const SkillCard = ({ icon: Icon, name, isMobile }: SkillCardProps) => (
  <Box
    component={motion.div}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    p={2}
    textAlign="center"
    borderRadius="10px"
    border="1px solid #ccc"
    bgcolor="background.paper"
    boxShadow={2}
  >
    <Icon size={isMobile ? 25 : 40} />
    <Typography sx={{ fontSize: isMobile ? 10 : 12 }} mt={1}>
      {name}
    </Typography>
  </Box>
);

export default SkillCard;
