import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {carregarCitacoesAction, solicitarCitacaoAction} from './redux/actions/actionCreators';

function Principal({citacoes, carregando, erro, numCitacao, corCitacao, carregarCitacoes, solicitarCitacao}){    
  
    useEffect(() => { 
        carregarCitacoes();
    }, []);

    document.querySelector('#root').style.backgroundColor= corCitacao;                    
    
    return (    
        carregando ? 
            <div id='quote-box' className='incompleto'><p>Carregando</p></div>
            : erro ? 
                <div id='quote-box' className='incompleto'><p>{erro}</p></div>
                : citacoes.length !== 0 ?

                    (<React.Fragment>
                        <div id='quote-box' style={{color: corCitacao}}>
                            <div id='text'>{citacoes[numCitacao].text}</div>
                            <div id='author'>{
                                citacoes[numCitacao].author ? citacoes[numCitacao].author : 'Autor desconhecido'
                            }</div>
                            
                            <div className='botoes'>
                                <div className='botoes-share'>  
                                    <a id='tweet-quote' target="_top" className='twitter-share-button' href={'#'}>
                                        <i className="fa-brands fa-twitter" style={{backgroundColor: corCitacao}}></i>
                                    </a>
                                    <a target="_blank" href={'#'}>                                             
                                        <i className="fa-brands fa-tumblr" style={{backgroundColor: corCitacao}}></i>
                                    </a>
                                </div>
                                <button id='new-quote' className='btn' onClick={solicitarCitacao} style={{backgroundColor: corCitacao}}>New quote</button>
                            </div>

                        </div>
                        <footer>
                            by <a href='#'>hezag</a>
                        </footer>
                    </React.Fragment>)

                    : <div id='quote-box' className='incompleto'><p>Não há citações</p></div>      
    );    
}

const mapStateToProps= state => ({
    citacoes: state.citacoesReducer.citacoes,
    carregando: state.citacoesReducer.carregando,
    erro: state.citacoesReducer.erro,
    numCitacao: state.citacoesReducer.numCitacao,
    corCitacao: state.citacoesReducer.corCitacao
});

const mapDispatchToProps= dispatch => ({
    carregarCitacoes: () => dispatch(carregarCitacoesAction()),
    solicitarCitacao: () => dispatch(solicitarCitacaoAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Principal);