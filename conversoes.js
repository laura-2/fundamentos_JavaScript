//conversão implicita
const numero = 456;
const numeroString = '456';


console.log(numero == numeroString) //compara só o valor
console.log(numero + numeroString) //tipo concatenação
//conversão explicita
console.log(numero + Number(numeroString))
console.log(numero === numeroString) // compara o valor e tipo de dado