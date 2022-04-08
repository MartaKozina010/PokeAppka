import { createSlice, PayloadAction } from "@reduxjs/toolkit";


//redundant since inputSlice was changed to context, just an example
export const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;
