import { PedidoTS } from "@/models/pedido";

export const orders: PedidoTS = {
	id: 1,
	fichaBanhos: [
		{ tipo: "banho elétrico", consumo: 200 },
		{ tipo: "chuveiro solar", consumo: 100 },
	],
	fichaFotovoltaicos: [
		{ modelo: "Painel A", capacidade: 300 },
		{ modelo: "Painel B", capacidade: 400 },
	],
	fichaPiscinas: [{ volume: 5000, tipo: "aquecimento solar" }],
	clienteDTO: {
		tipo: "residencial",
		nome: "João Silva",
		email: "joao.silva@email.com",
		endereco: "Cidade Exemplo, Bairro Exemplo, Rua Exemplo, 53, 07809060",
		latitude: -23.5505,
		longitude: -46.6333,
	},
	gestorDTO: {
		id: 10,
		idUsuario: 101,
		idUsuarioNavigation: null,
	},
	tecnicoDTO: {
		crea: "123456-SP",
		usuario: {
			nome: "Carlos Oliveira",
			email: "carlos.oliveira@empresa.com",
			id: "tecnico001",
		},
	},
	idGestor: 10,
	idTecnico: 20,
	idCliente: 30,
	tipoInstalacao: "Fotovoltaica",
	solucoes: "Instalação de painéis solares e aquecimento de água",
	pretendeInstalarEm: "3 meses",
	valorContaLuz: 350,
	comentarios: "Cliente interessado em reduzir custo com energia elétrica.",
};
