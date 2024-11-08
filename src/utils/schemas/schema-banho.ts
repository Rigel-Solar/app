import * as yup from "yup";

const banhoSchema = yup.object().shape({
	// orderId: yup.number().required("ID do pedido é obrigatório"),
	// technician: yup.string().required("Nome do técnico é obrigatório"),
	// name: yup.string().required("Nome é obrigatório"),
	// city: yup.string().required("Cidade é obrigatória"),
	// state: yup.string().required("Estado é obrigatório"),
	// street: yup.string().required("Rua é obrigatória"),
	// number: yup.number().required("Número é obrigatório"),
	// imgUrl: yup.array().of(yup.string().url("URL de imagem inválida")).optional(),
	// neighborhood: yup.string().required("Bairro é obrigatório"),
	// type: yup.string().required("Tipo é obrigatório"),
	// cellphone: yup
	// 	.string()
	// 	.matches(/^\d{10,11}$/, "Número de telefone deve ter 10 ou 11 dígitos")
	// 	.required("Telefone é obrigatório"),
	baseCaixa: yup.number().required("Obrigatório"),
	baseBoiler: yup.number().required("Obrigatório"),
	distanciaBoiler: yup.number().required("Obrigatório"),
	registroCaixa: yup.number().required("Obrigatório"),
	registroBarrilete: yup.number().required("Obrigatório"),
	disjuntorBipolar: yup.number().required("Obrigatório"),
	idVistoria: yup.number().optional(),
});

type BanhoTS = yup.InferType<typeof banhoSchema>;

export { banhoSchema };
export type { BanhoTS };
