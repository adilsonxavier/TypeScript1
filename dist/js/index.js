"use strict";
let x = 10;
x = 18;
console.log(x);
// definindo  array
const myNumbers = [1, 2, 3];
//myNumbers.push("adiolson"); // No js puro seria aceito por que um array no js aceita itens de tipos diferentes
// No ts dá erro pq tem que ser tudo do mesmo tipo e myNumbers foi definido por 
// inferência que é um array de numbers na linha anterior
// declarando com anotation
const myNumbers2 = [4, 5, 6]; // tem que ser variável: tipo[] (com []) se não dá erro
console.log(myNumbers2);
console.log("adilson");
//console.log(myNumbers.toUpperCase());  // dá erro por que toUpperCase() não é um método para array mas com ts o erro já é apontado
// na digitação (fica sublinhado de vermelho). Com js o erro seria apontado só na compilação
// Tupla
let myTuple = [4, "teste", ["a", "b", "c"]];
console.log(myTuple); // vai logar um array 
//obj literal
const user = {
    name: "adilson",
    age: 50
};
//user.job = "dev";  // dá erro, diferente do objeto javascript , não é possível acrescentar uma propriedade que não foi definida
// na declaração da tupla
console.log(user);
console.log(user.age);
//any
let a; // declarando a variável com o tipo any ela se comporta como se fosse JS Vanilla
a = "adilson";
console.log(typeof (a));
a = 5;
console.log(typeof (a));
//union type
let id;
id = 15; // ok
id = "15"; // ok
// id = true; // dá erro
console.log("tipo " + typeof (id));
const userId = 12;
const productId = "12";
//const car: myType = { nome: "adilson" };  // erro
//enum
var tamanho;
(function (tamanho) {
    tamanho["pequeno"] = "pequeno";
    tamanho["grande"] = "grande";
    tamanho["medio"] = "medio";
})(tamanho || (tamanho = {}));
const func = { nome: "adilson", camisa: tamanho.grande };
console.log(func); // Object { nome: "adilson", camisa: "grande" }
// literal types
let situacao;
situacao = "logado";
situacao = null;
situacao = "logado";
situacao = "não logado";
//situacao = "outro valor";  //dá erro só aceita exatamente os valores "logado" , "não logado" ou null
// funções
function soma(a, b) {
    return a + b;
}
console.log(`soma ${soma(5, "adilson")}`);
// tipando o retorno da função (opcional)
function hello(nome) {
    return `olá ${nome}`; // quando o retorno é tipado é obrigatório ter return ( a não ser que seja void ou any)
}
console.log(hello("tito"));
// declarar esplicitamente como retorno void
function semretorno(nome) {
    console.log(nome);
    //return `nome retornado ${nome}`; dá erro
}
// parâmetro opcional
function greeting(nome, greet) {
    if (greet) {
        console.log(`${greet} , ${nome}`);
    }
    else {
        console.log(`${nome}`);
    }
}
greeting("adilson"); // diferente do JS, no TS esta função daria erro se o parâmetro greet não fosse opcional
greeting("adilson", "oi");
function somar(nums) {
    return nums.n1 + nums.n2;
}
console.log(`resultado soma interface ${somar({ n1: 1, n2: 2 })}`);
const algunsNumeros = { n1: 5, n2: 10 };
console.log(`resultado soma interface 2 ${somar(algunsNumeros)}`);
//narrowing
// checagem de típos
function doSomething(info) {
    if (typeof (info) == "number") {
        console.log(`o numero foi ${info}`);
        return;
    }
    console.log("não é num");
}
doSomething(false);
