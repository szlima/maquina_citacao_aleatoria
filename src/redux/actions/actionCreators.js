import {CARREGAR_CITACOES_INICIO, CARREGAR_CITACOES_SUCESSO, CARREGAR_CITACOES_ERRO} from './actionTypes';

export const carregarCitacoesInicio= () => ({
    type: CARREGAR_CITACOES_INICIO
});

const carregarCitacoesSucesso= citacoes => ({
    type: CARREGAR_CITACOES_SUCESSO,
    payload: {
      citacoes
    }
});

const carregarCitacoesErro= () => ({
    type: CARREGAR_CITACOES_ERRO,
    payload: {
      erro: 'Não foi possível carregar as citações.'
    }
});

const solicitarCitacaoAction= () => ({
    type: SOLICITAR_CITACAO
});