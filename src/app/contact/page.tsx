"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { showSnackbar } from "@/store/slices/snackbarSlice";
import { motion } from "framer-motion";

export default function ContactPage() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { message } = formData;

    if (!message || message.length > 300) {
      dispatch(
        showSnackbar({
          message: "Message must be between 1 and 300 characters.",
          severity: "error",
        })
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        dispatch(
          showSnackbar({
            message: "Message sent successfully!",
            severity: "success",
          })
        );
        setFormData({ name: "", email: "", message: "" });
        setCharCount(0);
      } else {
        dispatch(
          showSnackbar({
            message: "Failed to send message. Please try again.",
            severity: "error",
          })
        );
      }
    } catch (err) {
      console.error("Error sending message:", err);
      dispatch(
        showSnackbar({
          message: "Failed to send message. Please try again.",
          severity: "error",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          maxWidth: 600,
          width: "90%",
          mx: "auto",
          py: isMobile ? 4 : 6,
          px: isMobile ? 2 : 0,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: isMobile ? "1.75rem" : "2.125rem",
          }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            pb: 4,
            fontSize: isMobile ? "0.95rem" : "1rem",
          }}
        >
          {`If you would like to reach out—whether it's to discuss a project, give
          feedback, or just say hello—I’d love to hear from you. I typically
          respond within 1–2 days. Please use the form below.`}
        </Typography>

        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TextField
              label="Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              required
              sx={{ mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TextField
              label="Email (Optional)"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              sx={{ mb: 2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TextField
              label="Message"
              name="message"
              fullWidth
              value={formData.message}
              onChange={handleInputChange}
              multiline
              rows={4}
              required
              sx={{ mb: 1 }}
              inputProps={{
                maxLength: 300,
              }}
            />
          </motion.div>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "right", mb: 2 }}
          >
            {charCount}/300
          </Typography>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
              sx={{
                mt: 1,
                borderRadius: 2,
                textTransform: "none",
                padding: "10px 20px",
                color: "primary",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "primary.main" }} />
              ) : (
                "Send Message"
              )}
            </Button>
          </motion.div>
        </form>
      </Box>
    </motion.div>
  );
}
