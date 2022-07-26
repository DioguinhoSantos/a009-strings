//Crie a const para a frase aqui
const frase = `\nJorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"\n`

let fraseDois = frase.replace('verde','rosa');
let fraseTres = fraseDois.replace('azul','laranja');

console.log(fraseTres);

console.log(`A nova string inclui verde? ${fraseTres.includes('verde')}`);
console.log(`A nova string inclui laranja? ${fraseTres.includes('laranja')}`);

let fraseCaixaAlta = fraseTres.replace('mas não deixe o gato sair','MAS NÃO DEIXE O GATO SAIR');

console.log(fraseCaixaAlta);

