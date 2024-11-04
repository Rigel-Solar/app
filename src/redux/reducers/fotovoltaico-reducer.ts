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
		updateSistemaFotovoltaico: (
			state,
			action: PayloadAction<Partial<FotovoltaicoTS>>
		) => {
			Object.assign(state, action.payload);
		},
		updatePadraoEntrada: (
			state,
			action: PayloadAction<Partial<FotovoltaicoTS>>
		) => {
			state.concessionariaEnergiaPe =
				action.payload.concessionariaEnergiaPe ?? state.concessionariaEnergiaPe;
			state.demandaContratadaPe =
				action.payload.demandaContratadaPe ?? state.demandaContratadaPe;
			state.tipoClienteDTO = {
				...state.tipoClienteDTO,
				...action.payload.tipoClienteDTO,
			};
			state.tipoLigacaoDTO = {
				...state.tipoLigacaoDTO,
				...action.payload.tipoLigacaoDTO,
			};
			state.tensaoNominalDTO = {
				...state.tensaoNominalDTO,
				...action.payload.tensaoNominalDTO,
			};
			state.condicaoPadraoEntradaDTO = {
				...state.condicaoPadraoEntradaDTO,
				...action.payload.condicaoPadraoEntradaDTO,
			};
			state.dimensaoCaixaPadraoPe =
				action.payload.dimensaoCaixaPadraoPe ?? state.dimensaoCaixaPadraoPe;
			state.modeloRelogioDTO = {
				...state.modeloRelogioDTO,
				...action.payload.modeloRelogioDTO,
			};
			state.aterramentoPe = action.payload.aterramentoPe ?? state.aterramentoPe;
			state.disjuntorPadraoEntradaPe =
				action.payload.disjuntorPadraoEntradaPe ??
				state.disjuntorPadraoEntradaPe;
			state.bitolaCondutorPe =
				action.payload.bitolaCondutorPe ?? state.bitolaCondutorPe;
		},
		updateQuadroPrincipal: (
			state,
			action: PayloadAction<Partial<FotovoltaicoTS>>
		) => {
			state.disjuntorQuadroPrincipalQpe =
				action.payload.disjuntorQuadroPrincipalQpe ??
				state.disjuntorQuadroPrincipalQpe;
			state.condicaoQuadroPrincipalDTO = {
				...state.condicaoQuadroPrincipalDTO,
				...action.payload.condicaoQuadroPrincipalDTO,
			};
			state.bitolaCondutorPe =
				action.payload.bitolaCondutorPe ?? state.bitolaCondutorPe;
			state.aterramentoPe = action.payload.aterramentoPe ?? state.aterramentoPe;
		},
		updateLocalInstalacao: (
			state,
			action: PayloadAction<Partial<FotovoltaicoTS>>
		) => {
			state.localInstalacaoModuloDTO = {
				...state.localInstalacaoModuloDTO,
				...action.payload.localInstalacaoModuloDTO,
			};
			state.idadeTelhadoDTO = {
				...state.idadeTelhadoDTO,
				...action.payload.idadeTelhadoDTO,
			};
			state.materialVigasTelhadoDTO = {
				...state.materialVigasTelhadoDTO,
				...action.payload.materialVigasTelhadoDTO,
			};
			state.condicaoVigaDTO = {
				...state.condicaoVigaDTO,
				...action.payload.condicaoVigaDTO,
			};
		},
		updateSolo: (state, action: PayloadAction<Partial<FotovoltaicoTS>>) => {
			state.larguraSolo = action.payload.larguraSolo;
			state.comprimentoSolo = action.payload.comprimentoSolo;
			state.nivelamentoSoloDTO = {
				...state.nivelamentoSoloDTO,
				...action.payload.nivelamentoSoloDTO,
			};
			state.tipoSuperficieDTO = {
				...state.tipoSuperficieDTO,
				...action.payload.tipoSuperficieDTO,
			};
		},
		updateTelhado: (state, action: PayloadAction<Partial<FotovoltaicoTS>>) => {
			state.telhadoAcessoDTO = {
				...state.telhadoAcessoDTO,
				...action.payload.telhadoAcessoDTO,
			};
			state.tipoTelha = action.payload.tipoTelha ?? state.tipoTelha;
			state.distanciaRipasTelhado =
				action.payload.distanciaRipasTelhado ?? state.distanciaRipasTelhado;
			state.distanciaCaibrosTelhado =
				action.payload.distanciaCaibrosTelhado ?? state.distanciaCaibrosTelhado;
			state.distanciaTercasTelhado =
				action.payload.distanciaTercasTelhado ?? state.distanciaTercasTelhado;
			state.distanciaEmpenaTelhado =
				action.payload.distanciaEmpenaTelhado ?? state.distanciaEmpenaTelhado;
			state.condicaoVigaDTO = {
				...state.condicaoVigaDTO,
				...action.payload.condicaoVigaDTO,
			};
		},
	},
});

export const {
	setFotovoltaico,
	updateSistemaFotovoltaico,
	updatePadraoEntrada,
	updateQuadroPrincipal,
	updateLocalInstalacao,
	updateSolo,
	updateTelhado,
} = slice.actions;

export default slice.reducer;
