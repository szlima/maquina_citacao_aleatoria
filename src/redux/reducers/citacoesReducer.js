import {CARREGAR_CITACOES_INICIO, CARREGAR_CITACOES_SUCESSO, CARREGAR_CITACOES_ERRO, SOLICITAR_CITACAO} from '../actions/actionTypes';
import {gerarNovaCitacao} from '../../funcoes';

const estadoInicial= {
  citacoes: [],
  carregando: false,
  erro: '',
  numCitacao: -1,
  corCitacao: ''
};

export default function citacoesReducer(state=estadoInicial, action){
  
  switch(action.type){
    case CARREGAR_CITACOES_INICIO:
      return {
        ...state,
        carregando: true
      };
        
    case CARREGAR_CITACOES_SUCESSO: 
      return {
        ...state,
        carregando: false,
        citacoes: action.payload.citacoes,
        ...gerarNovaCitacao(state.numCitacao, action.payload.citacoes.length)
      };
        
    case CARREGAR_CITACOES_ERRO:
      return {
        ...state,
        carregando: false,
        erro: action.payload.erro
      };

    case SOLICITAR_CITACAO:
      return {
        ...state,
        ...gerarNovaCitacao(state.numCitacao, state.citacoes.length)
      };
        
    default:
      return state;
  }
}