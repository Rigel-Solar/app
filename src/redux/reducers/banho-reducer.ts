import { Client } from "@/models/client";
import { createSlice } from "@reduxjs/toolkit";

export type BanhoTS = {
	_id?: string;
	_orderId?: string;
	client?: Client;
	imgUrl?: string[];
	BaseCaixa?: number;
	BaseBoiler?: number;
	DistanciaBoiler?: number;
	RegistroCaixa?: number;
	RegistroBarrilete?: number;
	DisjuntorBipolar?: number;
};

type State = {
	banho: BanhoTS;
};

const initialState: State = {
	banho: {
		BaseCaixa: 0,
		BaseBoiler: 0,
		DistanciaBoiler: 0,
		RegistroCaixa: 0,
		RegistroBarrilete: 0,
		DisjuntorBipolar: 0
	},
};

export const slice = createSlice({
	name: "banho",
	initialState,
	reducers: {
		setBanho: (state, action) => {
			state.banho = action.payload;
		},
	},
});

export const { setBanho } = slice.actions;
export default slice.reducer;
