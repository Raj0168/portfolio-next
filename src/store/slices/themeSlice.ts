import { createSlice } from "@reduxjs/toolkit";

interface ThemeSlice {
    dark: boolean;
    fontSize: number;
}

const initialState: ThemeSlice = {
    dark: true,
    fontSize: 14,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.dark = !state.dark;
        },
        increaseFontSize: (state) => {
            state.fontSize = Math.min(24, state.fontSize + 2);
        },
        decreaseFontSize: (state) => {
            state.fontSize = Math.max(8, state.fontSize - 2);
        },
        resetFontSize: (state) => {
            state.fontSize = 14;
        },
    },
});

export const {
    toggleDarkMode,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
} = themeSlice.actions;

export default themeSlice.reducer;
