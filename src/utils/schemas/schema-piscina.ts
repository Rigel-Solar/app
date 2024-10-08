import * as yup from "yup";

const piscinaSchema = yup.object().shape({
	Comprimento: yup.number().optional(),
	Largura: yup.number().optional(),
	Profundidade: yup.number().optional(),
	TemperaturaAgua: yup.number().optional(),
	UsoCapaTermica: yup.string().optional(),
	Regiao: yup.string().optional(),
	Ambiente: yup.string().optional(),
});

type PiscinaTS = yup.InferType<typeof piscinaSchema>;

export { piscinaSchema };
export type { PiscinaTS };

