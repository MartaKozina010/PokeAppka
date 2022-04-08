import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonType } from "../utils/colors";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    activeFilters: [] as string[],
    displayedTypes: [] as PokemonType[]
  },
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.activeFilters = state.activeFilters.includes(action.payload)
        ? state.activeFilters.filter((el) => el !== action.payload)
        : [...state.activeFilters, action.payload];
    },
    removeFilter: (state, action: PayloadAction<string[]>) => {
      state.activeFilters = action.payload;
    },
    typesToFilter: (state, action: PayloadAction<PokemonType[]>) => {
      state.displayedTypes = [...state.displayedTypes, ...action.payload.filter(el => !state.displayedTypes.includes(el))]
    }
  },
});

export const { setFilter, removeFilter, typesToFilter } = filterSlice.actions;
export default filterSlice.reducer;
