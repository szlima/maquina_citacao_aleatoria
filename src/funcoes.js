export const gerarNovaCitacao= (numAnterior, totalCitacoes) => {  
  
    let numCitacao= Math.floor(Math.random() * totalCitacoes);
    const letras= '0123456789';
    let corCitacao= '#';
  
    while(numCitacao === numAnterior)
        numCitacao= Math.floor(Math.random() * totalCitacoes); 
    
    for(let i=0; i<6; i++)    
        corCitacao+= letras[Math.floor(Math.random() * letras.length)];
  
    return {numCitacao, corCitacao};
};