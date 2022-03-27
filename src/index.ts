let x: number = 10;
x = 18;
console.log(x);

// definindo  array
const myNumbers = [1, 2, 3];
//myNumbers.push("adiolson"); // No js puro seria aceito por que um array no js aceita itens de tipos diferentes
                            // No ts dá erro pq tem que ser tudo do mesmo tipo e myNumbers foi definido por 
                            // inferência que é um array de numbers na linha anterior

// declarando com anotation
const myNumbers2: number[] = [4, 5, 6]; // tem que ser variável: tipo[] (com []) se não dá erro
console.log(myNumbers2);
console.log("adilson");
//console.log(myNumbers.toUpperCase());  // dá erro por que toUpperCase() não é um método para array mas com ts o erro já é apontado
                                         // na digitação (fica sublinhado de vermelho). Com js o erro seria apontado só na compilação

// Tupla
let myTuple: [number, string, string[]] = [4, "teste", ["a", "b","c"]];

console.log(myTuple); // vai logar um array 

//obj literal
const user: { name: string, age: number } = // equivalente a criar um objeto no js normal mas com a vantagem do intelissense 
{
    name: "adilson",
    age: 50
};

//user.job = "dev";  // dá erro, diferente do objeto javascript , não é possível acrescentar uma propriedade que não foi definida
                     // na declaração da tupla

console.log(user);
console.log(user.age);

//any
let a: any;  // declarando a variável com o tipo any ela se comporta como se fosse JS Vanilla
a = "adilson";
console.log(typeof (a));

a = 5;
console.log(typeof (a));

//union type

let id: string | number;
id = 15;  // ok
id = "15" // ok
// id = true; // dá erro
console.log("tipo " + typeof (id));

//type alias
type myType = string | number;

const userId: myType = 12;
const productId: myType = "12";
//const car: myType = { nome: "adilson" };  // erro

//enum
enum tamanho {  // é sem igual
    pequeno = "pequeno",  // diferente de um objeto js que usa : aqui usa =
    grande = "grande",
    medio = "medio"
}

const func = { nome: "adilson", camisa: tamanho.grande };
console.log(func);  // Object { nome: "adilson", camisa: "grande" }

// literal types
let situacao: "logado" | "não logado" | null;
situacao = "logado";
situacao = null;
situacao = "logado";
situacao = "não logado";
//situacao = "outro valor";  //dá erro só aceita exatamente os valores "logado" , "não logado" ou null


// funções
function soma(a:number, b: any) {  // se eu não colocar o tipo num arquivo .ts da erro. Tenho que por o tipo nem que seja o any
    return a + b;
}

console.log(`soma ${soma(5, "adilson")}`);


// tipando o retorno da função (opcional)
function hello(nome: string):string {
   return `olá ${nome}`; // quando o retorno é tipado é obrigatório ter return ( a não ser que seja void ou any)
}
console.log(hello("tito"));

// declarar esplicitamente como retorno void
function semretorno(nome: string): void {
    console.log(nome);
    //return `nome retornado ${nome}`; dá erro
}

// parâmetro opcional
function greeting(nome: string, greet?: string) { // O greet? torna o parâmetro opcional
    if (greet) {
        console.log(`${greet} , ${nome}`);
    }
    else {
        console.log(`${nome}`);
    }

}
greeting("adilson"); // diferente do JS, no TS esta função daria erro se o parâmetro greet não fosse opcional
greeting("adilson","oi");


// Interface para tipo
interface MathFunctions {
    n1: number,
    n2: number
}


function somar(nums: MathFunctions) { // Veja que aqui o parâmeto tem de ser do tipo Interface MathFunctions
    return nums.n1 + nums.n2;         // portanto ele tem que ser um objeto {n1:number , n2: number}
                                      // É diferente do C# que tem que herdar e implementar a Interface
                                      // No Ts também dá pra usar com classe ( mai abaixo )
}
console.log(`resultado soma interface ${somar({ n1: 1, n2: 2})}`);

const algunsNumeros: MathFunctions = { n1: 5, n2: 10 }
console.log(`resultado soma interface 2 ${somar(algunsNumeros)}`);

//narrowing
// checagem de típos
function doSomething(info: number | boolean) {
    if (typeof (info) == "number") {
        console.log(`o numero foi ${info}`)
        return;
    }
    console.log("não é num");
}

doSomething(false);


function showArrayItems1(arr: any[]) {
    arr.forEach((item) => console.log(item))
}

//generics
function showArrayItemsGeneric<T>(arr: T[]) { // Esta função genérica serve para qualquer tipo de array.
    arr.forEach((item)=>console.log(item))    // É igual a função não genérica acima mas não precisei usar o any
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
const a3 = [true, false];

showArrayItems1(a1)
showArrayItems1(a2);
showArrayItemsGeneric(a1);
showArrayItemsGeneric(a3);

// Classes

class User {
    name;  // Numa classe TS tenho que declarar as propriedades para usar no construtor como no C# senão dá erro
    role;  // O JS gerado não aparece estas propriedades
    isApproved;

    constructor(name:string, role:string, isApproved:boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const tito = new User("tito", "admin", true);
console.log(tito);

// Interface em classes
interface IVehicle {  // A interface simplesmente não aparece no arquivo .js
    brand: string;    // como muitos outras coisas em TS é usada só em tempo de compilação para apontar erros
    wheels: number;
    showBrand(): void;
}

class Car implements IVehicle { // Veja que precisa da palavra chave "implements" diferente da interface de tipo
                                // usada acima
    brand: string; // Este ":string" é opcional pois a propriedade var saber o tipo por inferência quando for usado no construtor abaixo
    wheels;
    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand() {
        console.log(`A marca é ${this.brand} e tem ${this.wheels} rodas`)
    }
}

const fusca = new Car("VW", 4);
console.log(fusca);
fusca.showBrand();

// herança de classe.
// com exceção do tratamento de tipos, não muda em nada do JS Vanilla

class SuperCar extends Car {
    engine;
    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("audi", 4, 2);
console.log(a4);
a4.showBrand();

// decorators
function BaseParameters() {
    //Na function generic abaixo estou dizendo que vou pegar todos os argumentos vindos do construtor e estou adicionando novos
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {  // O decorator retorna uma outra função com as informações que serão alteradas na classe base
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParameters()  // O decorator começa com @ e será aplicado na classe Person Abaixo
class Person {
    name;
    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("sam");
console.log(sam); //Object { name: "sam", id: 0.7240895582724572, createdAt: Date Sat Mar 26 2022 22:44:59 GMT-0300 (Horário Padrão de Brasília) }