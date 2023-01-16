export const getCitacao= (numAnterior, totalCitacoes) => {  
  
    let numCitacao= Math.floor(Math.random() * totalCitacoes);
    const letras= '0123456789';
    let corCitacao= '#';
  
    while(numCitacao === numAnterior)
        numCitacao= Math.floor(Math.random() * totalCitacoes); 
    
    for(let i=0; i<6; i++)    
        corCitacao+= letras[Math.floor(Math.random() * letras.length)];
  
    return {numCitacao, corCitacao};
};

export const getCitacoes= async () => {
    const dados= await fetch('https://type.fit/api/quotes');
    return await dados.json();
};