import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "@/utils/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import snackbarReducer from "./slices/snackbarSlice";
import userReducer from "./slices/userSlice";
import themeReducer from "./slices/themeSlice";

const userEncryptConfig = {
    key: "user",
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.NEXT_PUBLIC_PERSIST_SECRET || "",
            onError: (error) => console.error("Encryption error:", error),
        }),
    ],
};

const persistTheme = {
    key: "theme",
    storage
}

const rootReducer = combineReducers({
    user: persistReducer(userEncryptConfig, userReducer),
    theme: persistReducer(persistTheme, themeReducer),
    snackbar: snackbarReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
