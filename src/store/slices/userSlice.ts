import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    active: boolean;
    username: string;
    role: "ADMIN" | "USER";
}

const initialState: UserState = {
    active: false,
    username: "",
    role: "USER",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; role?: UserState["role"] }>) => {
            state.active = true;
            state.username = action.payload.username;
            state.role = action.payload.role || "USER";
        },
        logout: (state) => {
            state.active = false;
            state.username = "";
            state.role = "USER";
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;