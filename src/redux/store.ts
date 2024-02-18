import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user-reducer";
import themeReducer from "./reducers/theme-reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
