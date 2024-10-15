import * as yup from "yup";

const condicaoDTOSchema = yup.object().shape({
	condicao: yup.string().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const idadeTelhadoDTOSchema = yup.object().shape({
	idade: yup.number().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const nivelamentoSoloDTOSchema = yup.object().shape({
	nivelamento: yup.string().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const localInstalacaoModuloDTOSchema = yup.object().shape({
	local: yup.string().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const materialVigasTelhadoDTOSchema = yup.object().shape({
	material: yup.string().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const modeloRelogioDTOSchema = yup.object().shape({
	modelo: yup.string().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const telhadoAcessoDTOSchema = yup.object().shape({
	acesso: yup.string().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const tensaoNominalDTOSchema = yup.object().shape({
	tensao: yup.string().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const tipoDTOSchema = yup.object().shape({
	tipo: yup.string().optional(),
	fichaFotovoltaico: yup.string().optional(),
});

const fotovoltaicoSchema = yup.object().shape({
	quantidadeSf: yup.number().optional(),
	potenciaSf: yup.number().optional(),
	dimensoesSf: yup.number().optional(),
	areaOcupacaoSf: yup.number().optional(),
	modeloInversorSf: yup.string().optional(),
	quantidadeInversorSf: yup.number().optional(),
	concessionariaEnergiaPe: yup.string().optional(),
	demandaContratadaPe: yup.number().optional(),
	dimensaoCaixaPadraoPe: yup.string().optional(),
	aterramentoPe: yup.boolean().optional(),
	disjuntorPadraoEntradaPe: yup.string().optional(),
	bitolaCondutorPe: yup.number().optional(),
	antesDisjuntorPe: yup.number().optional(),
	disjuntorQuadroPrincipalQpe: yup.string().optional(),
	dimensoesQpe: yup.number().optional(),
	areaOcupacaoQpe: yup.number().optional(),
	modeloInversorQpe: yup.string().optional(),
	quantidadeInversorQpe: yup.number().optional(),
	larguraDcp: yup.number().optional(),
	comprimentoDcp: yup.number().optional(),
	profundidadeDcp: yup.number().optional(),
	larguraSolo: yup.number().optional(),
	comprimentoSolo: yup.number().optional(),
	tipoTelha: yup.string().optional(),
	distanciaRipasTelhado: yup.number().optional(),
	distanciaCaibrosTelhado: yup.number().optional(),
	distanciaTercasTelhado: yup.number().optional(),
	distanciaEmpenaTelhado: yup.number().optional(),
	condicaoPadraoEntradaDTO: condicaoDTOSchema.optional(),
	condicaoQuadroPrincipalDTO: condicaoDTOSchema.optional(),
	condicaoVigaDTO: condicaoDTOSchema.optional(),
	idadeTelhadoDTO: idadeTelhadoDTOSchema.optional(),
	localInstalacaoModuloDTO: localInstalacaoModuloDTOSchema.optional(),
	materialVigasTelhadoDTO: materialVigasTelhadoDTOSchema.optional(),
	modeloRelogioDTO: modeloRelogioDTOSchema.optional(),
	nivelamentoSoloDTO: nivelamentoSoloDTOSchema.optional(),
	telhadoAcessoDTO: telhadoAcessoDTOSchema.optional(),
	tensaoNominalDTO: tensaoNominalDTOSchema.optional(),
	tipoClienteDTO: tipoDTOSchema.optional(),
	tipoLigacaoDTO: tipoDTOSchema.optional(),
	tipoSuperficieDTO: tipoDTOSchema.optional(),
});

type FotovoltaicoTS = yup.InferType<typeof fotovoltaicoSchema>;

export { fotovoltaicoSchema };
export type { FotovoltaicoTS };
