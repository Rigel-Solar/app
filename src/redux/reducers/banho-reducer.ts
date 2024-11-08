import { Client } from "@/models/client";
import { createSlice } from "@reduxjs/toolkit";

export type BanhoTS = {
	_id?: string;
	_orderId?: string;
	client?: Client;
	imgUrl?: string[];
	baseCaixa?: number;
	baseBoiler?: number;
	distanciaBoiler?: number;
	registroCaixa?: number;
	registroBarrilete?: number;
	disjuntorBipolar?: number;
	idVistoria?: number;
};

type State = {
	banho: BanhoTS;
};

const initialState: State = {
	banho: {
		baseCaixa: 0,
		baseBoiler: 0,
		distanciaBoiler: 0,
		registroCaixa: 0,
		registroBarrilete: 0,
		disjuntorBipolar: 0,
		idVistoria: 0,
	},
};

export const slice = createSlice({
	name: "banho",
	initialState,
	reducers: {
		setBanho: (state, action) => {
			state.banho = action.payload;
		},
		removeBanho: (state, action) => {
			state.banho = {};
		},
	},
});

export const { setBanho } = slice.actions;
export default slice.reducer;
