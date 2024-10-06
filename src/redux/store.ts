import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import userReducer from "./reducers/user-reducer";
import themeReducer from "./reducers/theme-reducer";

const rootReducer = combineReducers({
	user: userReducer,
  theme: themeReducer
});

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	version: 1,
	whitelist: ["user", "theme"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
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
