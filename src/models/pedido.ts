/* eslint-disable @typescript-eslint/no-explicit-any */
interface Cliente {
	tipo: string;
	nome: string;
	email: string;
	endereco: string;
	latitude: number;
	longitude: number;
}

interface Gestor {
	id: number;
	idUsuario: number;
	idUsuarioNavigation: null;
}

interface Tecnico {
	crea: string;
	usuario: {
		nome: string;
		email: string;
		id: string;
	};
}

export interface PedidoTS {
	id: number;
	fichaBanhos: any[];
	fichaFotovoltaicos: any[];
	fichaPiscinas: any[];
	idClienteNavigation: Cliente;
	gestorDTO: Gestor;
	idTecnicoNavigation: Tecnico;
	idGestor: number;
	idTecnico: number;
	idCliente: number;
	tipoInstalacao: string;
	solucoes:
		| "Fotovoltaico Residencial"
		| "Fotovoltaico Comercial"
		| "Aquecedor Banho"
		| "Aquecedor Piscina";
	pretendeInstalarEm: string;
	valorContaLuz: number;
	comentarios: string;
}
