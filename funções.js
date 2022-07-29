//tipagem estética: aparece tipo de dado ex Java, C
//tipagem dinâmica: não aparece tipo de dado ex JavaScript

//Exemplos de linguagens com tipagem dinâmica e forte: Python, Ruby, Erlang, Clojure

//Exemplos de linguagens com tipagem dinâmica e fraca: JavaScript, PHP, Perl

//Exemplos de linguagens com tipagem estática e forte: C#, Java, Scala

//Exemplos de linguagens com tipagem estática e fraca: C, C++

//Na tipagem estática, o tipo é inferido pela variável e a 
//checagem (type checking) é feita durante a compilação;

//Na tipagem dinâmica, o tipo é inferido pelo valor do dado
// e a checagem (type checking) é feita em tempo de execução (runtime);

//Linguagens estaticamente tipadas têm uma performance de execução melhor,
// pois durante a execução o código já foi “traduzido” para linguagem máquina e a checagem/tipagem das variáveis já foi feito;

//Por outro lado, linguagens dinamicamente tipadas costumam
// ser mais ágeis durante o desenvolvimento e também são mais flexíveis.

//HOISTING- função conseguir ser chamada antes mesmo de ser declarada

function soma(num1, num2){
    return num1 + num2;
}
console.log(soma(1, 2))

const funcao = function(num1, num2) {return num1 + num2}
console.log(funcao(1, 5))

//arrow function

const soma = (num1, num2) => num1 + num2;

//arrow function com mais de 1 linha

const somaa = (num1, num2) => {
    if (num1 > 10){
        return "nao pode";
    } else{
        return num1 + num2;
    }
}
console.log(somaa(11, 2))