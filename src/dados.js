export const getCitacoes= async () => {
    const dados= await fetch('https://type.fit/api/quotes');
    return await dados.json();
};
