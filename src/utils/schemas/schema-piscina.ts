import * as yup from "yup";

const piscinaSchema = yup.object().shape({
	// _id: yup.string().optional(),
	// idVistoria: yup.number().optional(),
	// client: yup.object().nullable().optional(),
	// imgUrl: yup.array().of(yup.string().url("URL de imagem inválida")).optional(),
	comprimento: yup.number().optional(),
	largura: yup.number().optional(),
	profundidade: yup.number().optional(),
	temperatura: yup.number().optional(),
	usoCapaTermica: yup.string().optional(),
	regiao: yup.string().optional(),
	ambiente: yup.string().optional(),
	// area: yup.number().optional(),
	// volume: yup.number().optional(),
});

type PiscinaTS = yup.InferType<typeof piscinaSchema>;

export { piscinaSchema };
export type { PiscinaTS };
