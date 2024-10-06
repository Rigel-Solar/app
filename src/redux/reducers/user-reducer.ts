import { api } from "@/utils/lib/api";
import {
	createAsyncThunk,
	createSlice,
	PayloadAction,
	SerializedError,
} from "@reduxjs/toolkit";

type CredentialTS = {
	token: string | null;
};

type LoginTS = {
	email: string;
	password: string;
};

export type UserTS = {
	id: string;
	email: string;
	avatar: string;
	first_name: string;
	last_name: string;
};

type UserState = {
	user: UserTS | null;
	token: string | null;
	error: SerializedError | null;
	loading: boolean;
};

const initialState: UserState = {
	user: null,
	token: null,
	error: null,
	loading: false,
};

export const signInUser = createAsyncThunk(
	"user/login",
	async ({ email, password }: LoginTS, thunkAPI) => {
		try {
			const response = await api.post("/login", { email, password });
			console.log(response.data)
			return response.data.token;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data || error.message);
		}
	}
);

export const fetchUser = createAsyncThunk("api/users", async (_, thunkAPI) => {
	try {
		const response = await api.get("/api/users/2");
		return response.data.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.response?.data || error.message);
	}
});

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<UserTS>) => {
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
	extraReducers: (builder) => {
		builder
			.addCase(signInUser.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(signInUser.fulfilled, (state, action: PayloadAction<string>) => {
				state.error = null;
				state.loading = false;
				state.token = action.payload;
			})
			.addCase(signInUser.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
				state.token = null;
			})
			.addCase(fetchUser.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserTS>) => {
				state.error = null;
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			});
	},
});

export const { addUser, addToken, onLogout } = slice.actions;
export default slice.reducer;
