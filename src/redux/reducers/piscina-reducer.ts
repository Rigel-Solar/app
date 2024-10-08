import { Client } from "@/models/client";
import { createSlice } from "@reduxjs/toolkit";

export type PiscinaTS = {
	_id?: string;
	_orderId?: string;
	client?: Client;
	imgUrl?: string[];
	Comprimento?: number;
	Largura?: number;
	Profundidade?: number;
	TemperaturaAgua?: number;
	UsoCapaTermica?: string;
	Regiao?: string;
	Ambiente?: string;
};

type State = {
	piscina: PiscinaTS;
};

const initialState: State = {
	piscina: {
		Comprimento: 0,
		Largura: 0,
		Profundidade: 0,
		TemperaturaAgua: 0,
		UsoCapaTermica: "",
		Regiao: "",
		Ambiente: ""
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
