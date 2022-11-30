import React from 'react';
import {connect} from 'react-redux';

function Principal({citacoes}){    
  
    const numCitacao= 0, corCitacao= 'hotpink';
        
    document.querySelector('#root').style.backgroundColor= corCitacao;
    const autor= citacoes[numCitacao] ?
                    citacoes[numCitacao].author ?
                        citacoes[numCitacao].author
                        : 'Autor desconhecido'
                    : '';
    
    return (    
      citacoes.length !== 0 ?
        (<React.Fragment>

            <div id='quote-box' style={{color: corCitacao}}>
                <div id='text'>{citacoes[numCitacao].text}</div>
                <div id='author'>{autor}</div>
                
                <div className='botoes'>
                    <div className='botoes-share'>
                        <a id='tweet-quote' target="_top" className='twitter-share-button' href={'#'}>
                            <i className="fa-brands fa-twitter" style={{backgroundColor: corCitacao}}></i>
                        </a>
                        <a target="_blank" href={'#'}>     
                            <i className="fa-brands fa-tumblr" style={{backgroundColor: corCitacao}}></i>
                        </a>
                    </div>
                    <button id='new-quote' className='btn' style={{backgroundColor: corCitacao}}>New quote</button>
                </div>
            </div>

            <footer>
                by <a href='#'>hezag</a>
            </footer>
        </React.Fragment>)
        : 
        <div id='quote-box' className='incompleto'>
            <p>Não há citações</p>
        </div>      
    );
}

const mapStateToProps= state => ({
    citacoes: state.citacoesReducer.citacoes,
});

export default connect(mapStateToProps)(Principal);