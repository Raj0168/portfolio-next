import { createTheme } from "@mui/material/styles";

export const getTheme = (darkMode: boolean) =>
    createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            ...(darkMode
                ? {
                    background: {
                        default: "#0a0a0a",
                        paper: "#121212",
                    },
                    text: {
                        primary: "#ffffff",
                        secondary: "#cccccc",
                    },
                }
                : {
                    background: {
                        default: "#ffffff",
                        paper: "#f5f5f5",
                    },
                    text: {
                        primary: "#000000",
                        secondary: "#333333",
                    },
                }),
        },
        typography: {
            fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
        },
    });
