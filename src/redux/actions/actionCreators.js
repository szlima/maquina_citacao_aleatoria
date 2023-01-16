import {
  CARREGAR_CITACOES_INICIO, CARREGAR_CITACOES_SUCESSO, CARREGAR_CITACOES_ERRO, GERAR_NOVA_CITACAO
} from './actionTypes';

import {getCitacao, getCitacoes} from '../../funcoes';

const carregarCitacoesInicio= () => ({
    type: CARREGAR_CITACOES_INICIO
});

const carregarCitacoes= (citacoes, citacao) => ({
    type: CARREGAR_CITACOES_SUCESSO,
    payload: {
      citacoes,
      citacao
    }
});

const carregarCitacoesSucesso= citacoes => {
  return (dispatch, getState) => {
    const citacao= getCitacao(
      getState().citacoesReducer.numCitacao, 
      citacoes.length
    );

    dispatch(carregarCitacoes(citacoes, citacao));
  };
};

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

const gerarNovaCitacao= citacao => ({ 
  type: GERAR_NOVA_CITACAO,
  payload: {
    citacao
  }
});

export const gerarNovaCitacaoAction= () => {
  return (dispatch, getState) => {
    const citacao= getCitacao(
      getState().citacoesReducer.numCitacao, 
      getState().citacoesReducer.citacoes.length
    );

    dispatch(gerarNovaCitacao(citacao));
  };
};