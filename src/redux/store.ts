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
import banhoReducer from "./reducers/banho-reducer";
import piscinaReducer from "./reducers/piscina-reducer";
import themeReducer from "./reducers/theme-reducer";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
	user: userReducer,
	theme: themeReducer,
	banho: banhoReducer,
	piscina: piscinaReducer
});

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	version: 1,
	whitelist: ["user", "theme", "banho", "piscina"],
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
