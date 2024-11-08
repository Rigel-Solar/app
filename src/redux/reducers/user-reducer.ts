import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LoginTS = {
	email: string;
	password: string;
};

type UserState = {
	user: string | null;
	token: string | null;
};

const initialState: UserState = {
	user: null,
	token: null,
};

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<string>) => {
			state.user = action.payload;
		},
		addToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		onLogout: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { addUser, addToken, onLogout } = slice.actions;
export default slice.reducer;
