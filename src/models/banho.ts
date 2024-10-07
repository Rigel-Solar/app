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
	BaseCaixa?: number;
	BaseBoiler?: number;
	DistanciaBoiler?: number;
	RegistroCaixa?: number;
	RegistroBarrilete?: number;
	DisjuntorBipolar?: number;
};
