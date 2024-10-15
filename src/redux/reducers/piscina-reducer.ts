import { Client } from "@/models/client";
import { createSlice } from "@reduxjs/toolkit";

export type PiscinaTS = {
	_id?: string;
	idVistoria?: number;
	client?: Client;
	imgUrl?: string[];
	comprimento?: number;
	largura?: number;
	temperatura?: number;
	profundidade?: number;
	usoCapaTermica?: string;
	regiao?: string;
	ambiente?: string;
	area?: number;
	volume?: number;
};

type State = {
	piscina: PiscinaTS;
};

const initialState: State = {
	piscina: {
		comprimento: 0,
		largura: 0,
		profundidade: 0,
		temperatura: 0,
		usoCapaTermica: "",
		regiao: "",
		ambiente: "",
		area: 0,
		volume: 0,
	},
};

export const slice = createSlice({
	name: "piscina",
	initialState,
	reducers: {
		setPiscina: (state, action) => {
			state.piscina = action.payload;
		},
	},
});

export const { setPiscina } = slice.actions;
export default slice.reducer;
