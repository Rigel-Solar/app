import { Client } from "./client";

export type BanhoTS = {
	_id?: string;
	client: Client;
	orderId: number;
	technician: string;
	name: string;
	city: string;
	state: string;
	street: string;
	number: number;
	imgUrl?: string[];
	neighborhood: string;
	type: string;
	cellphone: string;
	baseCaixa?: number;
	baseBoiler?: number;
	distanciaBoiler?: number;
	registroCaixa?: number;
	registroBarrilete?: number;
	disjuntorBipolar?: number;
};
