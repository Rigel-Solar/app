import * as yup from "yup";

// Schema base comum para DTOs
const baseDTOSchema = yup.object().shape({
  fichaFotovoltaico: yup.string().optional(),
});

// Schemas específicos estendendo o base
const condicaoDTOSchema = baseDTOSchema.shape({
  condicao: yup.string().optional(),
});

const idadeTelhadoDTOSchema = baseDTOSchema.shape({
  idade: yup.number().optional(),
});

const nivelamentoSoloDTOSchema = baseDTOSchema.shape({
  nivelamento: yup.string().optional(),
});

const localInstalacaoModuloDTOSchema = baseDTOSchema.shape({
  local: yup.string().optional(),
});

const materialVigasTelhadoDTOSchema = baseDTOSchema.shape({
  material: yup.string().optional(),
});

const modeloRelogioDTOSchema = baseDTOSchema.shape({
  modelo: yup.string().optional(),
});

const telhadoAcessoDTOSchema = baseDTOSchema.shape({
  acesso: yup.string().optional(),
});

const tensaoNominalDTOSchema = baseDTOSchema.shape({
  tensao: yup.string().optional(),
});

const tipoDTOSchema = baseDTOSchema.shape({
  tipo: yup.string().optional(),
});

// Schema principal organizado por seções
const fotovoltaicoSchema = yup.object().shape({
  // ID da vistoria
  idVistoria: yup.number().optional(),

  // Sistema Fotovoltaico
  quantidadeSf: yup.number().optional(),
  potenciaSf: yup.number().optional(),
  dimensoesSf: yup.number().optional(),
  areaOcupacaoSf: yup.number().optional(),
  modeloInversorSf: yup.string().optional(),
  quantidadeInversorSf: yup.number().optional(),

  // Padrão de Entrada
  concessionariaEnergiaPe: yup.string().optional(),
  demandaContratadaPe: yup.number().optional(),
  dimensaoCaixaPadraoPe: yup.string().optional(),
  aterramentoPe: yup.boolean().optional(),
  disjuntorPadraoEntradaPe: yup.string().optional(),
  bitolaCondutorPe: yup.number().optional(),
  antesDisjuntorPe: yup.number().optional(),

  // Quadro Principal
  disjuntorQuadroPrincipalQpe: yup.string().optional(),
  dimensoesQpe: yup.number().optional(),
  areaOcupacaoQpe: yup.number().optional(),
  modeloInversorQpe: yup.string().optional(),
  quantidadeInversorQpe: yup.number().optional(),

  // Dimensões
  larguraDcp: yup.number().optional(),
  comprimentoDcp: yup.number().optional(),
  profundidadeDcp: yup.number().optional(),
  larguraSolo: yup.number().optional(),
  comprimentoSolo: yup.number().optional(),

  // Telhado
  tipoTelha: yup.string().optional(),
  distanciaRipasTelhado: yup.number().optional(),
  distanciaCaibrosTelhado: yup.number().optional(),
  distanciaTercasTelhado: yup.number().optional(),
  distanciaEmpenaTelhado: yup.number().optional(),

  // DTOs
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

// Tipo inferido do schema
type FotovoltaicoTS = yup.InferType<typeof fotovoltaicoSchema>;

export { fotovoltaicoSchema };
export type { FotovoltaicoTS };
