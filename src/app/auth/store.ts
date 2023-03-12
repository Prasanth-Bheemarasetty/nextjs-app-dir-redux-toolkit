import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * State Type
 */
export interface AuthStateType {
  userType: string;
  userName: string;
}

/**
 * State
 */
const authInitState: AuthStateType = {
  userType: "",
  userName: "",
};

/**
 * Slice
 */
const slice = createSlice({
  name: "auth",
  initialState: authInitState,
  reducers: {
    setUserType(state: AuthStateType, action: PayloadAction<string>) {
      state.userType = action.payload;
    },
    setUserName(state: AuthStateType, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const authStore = configureStore({
  reducer: slice.reducer,
});

export const authStoreActions = slice.actions;
