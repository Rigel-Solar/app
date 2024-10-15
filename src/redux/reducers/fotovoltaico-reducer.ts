import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CondicaoDTO = {
	condicao?: string;
	fichaFotovoltaico?: string;
};

export type IdadeTelhadoDTO = {
	idade?: number;
	fichaFotovoltaico?: string;
};

export type NivelamentoSoloDTO = {
	nivelamento?: string;
	fichaFotovoltaico?: string;
};

export type LocalInstalacaoModuloDTO = {
	local?: string;
	fichaFotovoltaico?: string;
};

export type MaterialVigasTelhadoDTO = {
	material?: string;
	fichaFotovoltaico?: string;
};

export type ModeloRelogioDTO = {
	modelo?: string;
	fichaFotovoltaico?: string;
};

export type TelhadoAcessoDTO = {
	acesso?: string;
	fichaFotovoltaico?: string;
};

export type TensaoNominalDTO = {
	tensao?: string;
	fichaFotovoltaico?: string;
};

export type TipoDTO = {
	tipo?: string;
	fichaFotovoltaico?: string;
};

export type FotovoltaicoTS = {
	quantidadeSf?: number;
	potenciaSf?: number;
	dimensoesSf?: number;
	areaOcupacaoSf?: number;
	modeloInversorSf?: string;
	quantidadeInversorSf?: number;
	concessionariaEnergiaPe?: string;
	demandaContratadaPe?: number;
	dimensaoCaixaPadraoPe?: string;
	aterramentoPe?: boolean;
	disjuntorPadraoEntradaPe?: string;
	bitolaCondutorPe?: number;
	antesDisjuntorPe?: number;
	disjuntorQuadroPrincipalQpe?: string;
	dimensoesQpe?: number;
	areaOcupacaoQpe?: number;
	modeloInversorQpe?: string;
	quantidadeInversorQpe?: number;
	larguraDcp?: number;
	comprimentoDcp?: number;
	profundidadeDcp?: number;
	larguraSolo?: number;
	comprimentoSolo?: number;
	tipoTelha?: string;
	distanciaRipasTelhado?: number;
	distanciaCaibrosTelhado?: number;
	distanciaTercasTelhado?: number;
	distanciaEmpenaTelhado?: number;
	condicaoPadraoEntradaDTO?: CondicaoDTO;
	condicaoQuadroPrincipalDTO?: CondicaoDTO;
	condicaoVigaDTO?: CondicaoDTO;
	idadeTelhadoDTO?: IdadeTelhadoDTO;
	localInstalacaoModuloDTO?: LocalInstalacaoModuloDTO;
	materialVigasTelhadoDTO?: MaterialVigasTelhadoDTO;
	modeloRelogioDTO?: ModeloRelogioDTO;
	nivelamentoSoloDTO?: NivelamentoSoloDTO;
	telhadoAcessoDTO?: TelhadoAcessoDTO;
	tensaoNominalDTO?: TensaoNominalDTO;
	tipoClienteDTO?: TipoDTO;
	tipoLigacaoDTO?: TipoDTO;
	tipoSuperficieDTO?: TipoDTO;
};

const initialState: FotovoltaicoTS = {
	quantidadeSf: 0,
	potenciaSf: 0,
	dimensoesSf: 0,
	areaOcupacaoSf: 0,
	modeloInversorSf: "string",
	quantidadeInversorSf: 0,
	concessionariaEnergiaPe: "string",
	demandaContratadaPe: 0,
	dimensaoCaixaPadraoPe: "string",
	aterramentoPe: true,
	disjuntorPadraoEntradaPe: "string",
	bitolaCondutorPe: 0,
	antesDisjuntorPe: 0,
	disjuntorQuadroPrincipalQpe: "string",
	dimensoesQpe: 0,
	areaOcupacaoQpe: 0,
	modeloInversorQpe: "string",
	quantidadeInversorQpe: 0,
	larguraDcp: 0,
	comprimentoDcp: 0,
	profundidadeDcp: 0,
	larguraSolo: 0,
	comprimentoSolo: 0,
	tipoTelha: "string",
	distanciaRipasTelhado: 0,
	distanciaCaibrosTelhado: 0,
	distanciaTercasTelhado: 0,
	distanciaEmpenaTelhado: 0,
	condicaoPadraoEntradaDTO: { condicao: "string", fichaFotovoltaico: "string" },
	condicaoQuadroPrincipalDTO: {
		condicao: "string",
		fichaFotovoltaico: "string",
	},
	condicaoVigaDTO: { condicao: "string", fichaFotovoltaico: "string" },
	idadeTelhadoDTO: { idade: 0, fichaFotovoltaico: "string" },
	localInstalacaoModuloDTO: { local: "string", fichaFotovoltaico: "string" },
	materialVigasTelhadoDTO: { material: "string", fichaFotovoltaico: "string" },
	modeloRelogioDTO: { modelo: "string", fichaFotovoltaico: "string" },
	nivelamentoSoloDTO: { nivelamento: "string", fichaFotovoltaico: "string" },
	telhadoAcessoDTO: { acesso: "string", fichaFotovoltaico: "string" },
	tensaoNominalDTO: { tensao: "string", fichaFotovoltaico: "string" },
	tipoClienteDTO: { tipo: "string", fichaFotovoltaico: "string" },
	tipoLigacaoDTO: { tipo: "string", fichaFotovoltaico: "string" },
	tipoSuperficieDTO: { tipo: "string", fichaFotovoltaico: "string" },
};

export const slice = createSlice({
	name: "fotovoltaico",
	initialState,
	reducers: {
		setFotovoltaico: (state, action: PayloadAction<FotovoltaicoTS>) => {
			return action.payload;
		},
		updateField: <K extends keyof FotovoltaicoTS>(
			state: FotovoltaicoTS,
			action: PayloadAction<{ field: K; value: FotovoltaicoTS[K] }>
		) => {
			const { field, value } = action.payload;
			state[field] = value;
		},
	},
});

export const { setFotovoltaico, updateField } = slice.actions;
export default slice.reducer;
