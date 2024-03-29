import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {carregarCitacoesAction, gerarNovaCitacaoAction} from './redux/actions/actionCreators';

function Principal({citacoes, carregando, erro, numCitacao, corCitacao, carregarCitacoes, gerarNovaCitacao}){    
  
    useEffect(() => { 
        carregarCitacoes();
    }, []);

    document.querySelector('#root').style.backgroundColor= corCitacao;
    const autor= !carregando && !erro && citacoes.length !== 0 && citacoes[numCitacao].author ? 
        citacoes[numCitacao].author : 'Autor desconhecido';
    
    return (    
        carregando ? 
            <div id='quote-box' className='incompleto'><p>Carregando</p></div>
            : erro ? 
                <div id='quote-box' className='incompleto'><p>{erro}</p></div>
                : citacoes.length !== 0 ?

                    (<React.Fragment>
                        <div id='quote-box' style={{color: corCitacao}}>
                            <div id='text'>{citacoes[numCitacao].text}</div>
                            <div id='author'>{autor}</div>
                            
                            <div className='botoes'>
                                <div className='botoes-share'>  
                                    <a id='tweet-quote' target="_top" className='twitter-share-button' href={`https://twitter.com/intent/tweet?text=%22${citacoes[numCitacao].text}%22%20%28${autor}%29%20&hashtags=quote`}>
                                        <i className="fa-brands fa-twitter" style={{backgroundColor: corCitacao}}></i>
                                    </a>
                                    <a target="_blank" href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&content=${citacoes[numCitacao].text}&caption=${autor}&tags=quote
&canonicalUrl=https%3A%2F%2Fwww.tumblr.com`}>
                                        {/* canonicalUrl se refere ao site de onde veio a citacao, a fonte. Neste caso seria https://www.tumblr.com*/}
                                        <i className="fa-brands fa-tumblr" style={{backgroundColor: corCitacao}}></i>
                                    </a>
                                </div>
                                <button id='new-quote' className='btn' onClick={gerarNovaCitacao} style={{backgroundColor: corCitacao}}>New quote</button>
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
    gerarNovaCitacao: () => dispatch(gerarNovaCitacaoAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Principal);