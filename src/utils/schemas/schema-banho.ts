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
	BaseCaixa: yup.number().optional(),
	BaseBoiler: yup.number().optional(),
	DistanciaBoiler: yup.number().optional(),
	RegistroCaixa: yup.number().optional(),
	RegistroBarrilete: yup.number().optional(),
	DisjuntorBipolar: yup.number().optional(),
});

type BanhoTS = yup.InferType<typeof banhoSchema>;

export { banhoSchema };
export type { BanhoTS };
