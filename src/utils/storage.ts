import { WebStorage } from "redux-persist";

const createNoopStorage = (): WebStorage => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem() {
            return Promise.resolve();
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

const storage = typeof window !== "undefined"
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ? require("redux-persist/lib/storage").default
    : createNoopStorage();

export default storage;
