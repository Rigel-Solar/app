import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// DTO Base comum
type BaseDTO = {
	fichaFotovoltaico?: string;
};

// DTOs específicos estendendo o BaseDTO
export type CondicaoDTO = BaseDTO & { condicao?: string };
export type IdadeTelhadoDTO = BaseDTO & { idade?: number };
export type NivelamentoSoloDTO = BaseDTO & { nivelamento?: string };
export type LocalInstalacaoModuloDTO = BaseDTO & { local?: string };
export type MaterialVigasTelhadoDTO = BaseDTO & { condicao?: string };
export type ModeloRelogioDTO = BaseDTO & { modelo?: string };
export type TelhadoAcessoDTO = BaseDTO & { acesso?: string };
export type TensaoNominalDTO = BaseDTO & { tensao?: string };
export type TipoDTO = BaseDTO & { tipo?: string };

export type FotovoltaicoTS = {
	idVistoria?: number;

	// Sistema Fotovoltaico
	quantidadeSf?: number;
	potenciaSf?: number;
	dimensoesSf?: number;
	areaOcupacaoSf?: number;
	modeloInversorSf?: string;
	quantidadeInversorSf?: number;
	
	// Padrão de Entrada
	concessionariaEnergiaPe?: string;
	demandaContratadaPe?: number;
	dimensaoCaixaPadraoPe?: string;
	aterramentoPe?: boolean;
	disjuntorPadraoEntradaPe?: string;
	bitolaCondutorPe?: number;
	antesDisjuntorPe?: number;
	
	// Quadro Principal
	disjuntorQuadroPrincipalQpe?: string;
	dimensoesQpe?: number;
	areaOcupacaoQpe?: number;
	modeloInversorQpe?: string;
	quantidadeInversorQpe?: number;
	
	// Dimensões
	larguraDcp?: number;
	comprimentoDcp?: number;
	profundidadeDcp?: number;
	larguraSolo?: number;
	comprimentoSolo?: number;
	
	// Telhado
	tipoTelha?: string;
	distanciaRipasTelhado?: number;
	distanciaCaibrosTelhado?: number;
	distanciaTercasTelhado?: number;
	distanciaEmpenaTelhado?: number;
	
	// DTOs
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

// Estado inicial simplificado - usando undefined em vez de valores padrão desnecessários
const initialState: FotovoltaicoTS = {};

// Helper para merge seguro de objetos aninhados
const safeAssign = <T>(target: T | undefined, source: T | undefined): T => ({
	...target,
	...source,
} as T);

export const fotovoltaicoSlice = createSlice({
	name: "fotovoltaico",
	initialState,
	reducers: {
		setFotovoltaico: (_, action: PayloadAction<FotovoltaicoTS>) => action.payload,
		
		updateSistemaFotovoltaico: (state, action: PayloadAction<Partial<FotovoltaicoTS>>) => {
			Object.assign(state, action.payload);
		},
		
		updatePadraoEntrada: (state, action: PayloadAction<Partial<FotovoltaicoTS>>) => {
			const { payload } = action;
			
			// Campos simples
			if (payload.concessionariaEnergiaPe !== undefined) state.concessionariaEnergiaPe = payload.concessionariaEnergiaPe;
			if (payload.demandaContratadaPe !== undefined) state.demandaContratadaPe = payload.demandaContratadaPe;
			if (payload.dimensaoCaixaPadraoPe !== undefined) state.dimensaoCaixaPadraoPe = payload.dimensaoCaixaPadraoPe;
			if (payload.aterramentoPe !== undefined) state.aterramentoPe = payload.aterramentoPe;
			if (payload.disjuntorPadraoEntradaPe !== undefined) state.disjuntorPadraoEntradaPe = payload.disjuntorPadraoEntradaPe;
			if (payload.bitolaCondutorPe !== undefined) state.bitolaCondutorPe = payload.bitolaCondutorPe;
			
			// DTOs
                        if (payload.tipoClienteDTO) state.tipoClienteDTO = safeAssign(state.tipoClienteDTO, payload.tipoClienteDTO);
			if (payload.tipoLigacaoDTO) state.tipoLigacaoDTO = safeAssign(state.tipoLigacaoDTO, payload.tipoLigacaoDTO);
			if (payload.tensaoNominalDTO) state.tensaoNominalDTO = safeAssign(state.tensaoNominalDTO, payload.tensaoNominalDTO);
			if (payload.condicaoPadraoEntradaDTO) state.condicaoPadraoEntradaDTO = safeAssign(state.condicaoPadraoEntradaDTO, payload.condicaoPadraoEntradaDTO);
			if (payload.modeloRelogioDTO) state.modeloRelogioDTO = safeAssign(state.modeloRelogioDTO, payload.modeloRelogioDTO);
		},
		
		updateQuadroPrincipal: (state, action: PayloadAction<Partial<FotovoltaicoTS>>) => {
			const { payload } = action;
			
                        if (payload.disjuntorQuadroPrincipalQpe !== undefined) state.disjuntorQuadroPrincipalQpe = payload.disjuntorQuadroPrincipalQpe;
                        if (payload.antesDisjuntorPe !== undefined) state.antesDisjuntorPe = payload.antesDisjuntorPe;
                        if (payload.aterramentoPe !== undefined) state.aterramentoPe = payload.aterramentoPe;
                        if (payload.condicaoQuadroPrincipalDTO) state.condicaoQuadroPrincipalDTO = safeAssign(state.condicaoQuadroPrincipalDTO, payload.condicaoQuadroPrincipalDTO);
                },
		
		updateLocalInstalacao: (state, action: PayloadAction<Partial<FotovoltaicoTS>>) => {
			const { payload } = action;
			
			if (payload.localInstalacaoModuloDTO) state.localInstalacaoModuloDTO = safeAssign(state.localInstalacaoModuloDTO, payload.localInstalacaoModuloDTO);
			if (payload.idadeTelhadoDTO) state.idadeTelhadoDTO = safeAssign(state.idadeTelhadoDTO, payload.idadeTelhadoDTO);
			if (payload.materialVigasTelhadoDTO) state.materialVigasTelhadoDTO = safeAssign(state.materialVigasTelhadoDTO, payload.materialVigasTelhadoDTO);
			if (payload.condicaoVigaDTO) state.condicaoVigaDTO = safeAssign(state.condicaoVigaDTO, payload.condicaoVigaDTO);
		},
		
		updateSolo: (state, action: PayloadAction<Partial<FotovoltaicoTS>>) => {
			const { payload } = action;
			
			if (payload.larguraSolo !== undefined) state.larguraSolo = payload.larguraSolo;
			if (payload.comprimentoSolo !== undefined) state.comprimentoSolo = payload.comprimentoSolo;
			if (payload.nivelamentoSoloDTO) state.nivelamentoSoloDTO = safeAssign(state.nivelamentoSoloDTO, payload.nivelamentoSoloDTO);
			if (payload.tipoSuperficieDTO) state.tipoSuperficieDTO = safeAssign(state.tipoSuperficieDTO, payload.tipoSuperficieDTO);
		},
		
		updateTelhado: (state, action: PayloadAction<Partial<FotovoltaicoTS>>) => {
			const { payload } = action;
			
			// Campos simples
			if (payload.tipoTelha !== undefined) state.tipoTelha = payload.tipoTelha;
			if (payload.distanciaRipasTelhado !== undefined) state.distanciaRipasTelhado = payload.distanciaRipasTelhado;
			if (payload.distanciaCaibrosTelhado !== undefined) state.distanciaCaibrosTelhado = payload.distanciaCaibrosTelhado;
			if (payload.distanciaTercasTelhado !== undefined) state.distanciaTercasTelhado = payload.distanciaTercasTelhado;
			if (payload.distanciaEmpenaTelhado !== undefined) state.distanciaEmpenaTelhado = payload.distanciaEmpenaTelhado;
			
			// DTOs
			if (payload.telhadoAcessoDTO) state.telhadoAcessoDTO = safeAssign(state.telhadoAcessoDTO, payload.telhadoAcessoDTO);
			if (payload.condicaoVigaDTO) state.condicaoVigaDTO = safeAssign(state.condicaoVigaDTO, payload.condicaoVigaDTO);
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
} = fotovoltaicoSlice.actions;

export default fotovoltaicoSlice.reducer;