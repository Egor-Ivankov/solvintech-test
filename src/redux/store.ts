import { configureStore } from "@reduxjs/toolkit";
import getData from './getData';

export const store = configureStore({
    reducer: {
        getData
    }
});

export type RootState = ReturnType<typeof store.getState>;