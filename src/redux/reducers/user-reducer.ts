import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

type UserTS = {
  id: string;
  nome: string;
  email: string;
};

type State = {
  user: UserTS | null;
  loading: boolean;
  error: SerializedError | null;
};

const initialState: State = {
  user: null,
  loading: false,
  error: null,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default slice.reducer;
