import {
  CARREGAR_CITACOES_INICIO, CARREGAR_CITACOES_SUCESSO, CARREGAR_CITACOES_ERRO, GERAR_NOVA_CITACAO
} from '../actions/actionTypes';

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
        ...action.payload.citacao
      };
        
    case CARREGAR_CITACOES_ERRO:
      return {
        ...state,
        carregando: false,
        erro: action.payload.erro
      };

    case GERAR_NOVA_CITACAO: 
      return {
        ...state,
        ...action.payload.citacao
      };
        
    default:
      return state;
  }
}