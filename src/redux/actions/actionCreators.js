import {CARREGAR_CITACOES_INICIO, CARREGAR_CITACOES_SUCESSO, CARREGAR_CITACOES_ERRO, SOLICITAR_CITACAO} from './actionTypes';
import {getCitacoes} from '../../dados';

const carregarCitacoesInicio= () => ({
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

export const carregarCitacoesAction= () => {
  return dispatch => {
    dispatch(carregarCitacoesInicio());
    
    getCitacoes()
    .then(citacoes => dispatch(carregarCitacoesSucesso(citacoes)))
    .catch(() => dispatch(carregarCitacoesErro()));
    
  };
};

export const solicitarCitacaoAction= () => ({
  type: SOLICITAR_CITACAO
});