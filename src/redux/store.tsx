import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonAPI } from "./APIslice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
  reducer: {
    [pokemonAPI.reducerPath]: pokemonAPI.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonAPI.middleware),
});

setupListeners(store.dispatch);
