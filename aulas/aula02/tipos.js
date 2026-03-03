//mostrar variaveis

let texto = "Rihanna";
let numero = 17;
let verdadeiro = true;
let indefinido;
let valorNull = null;

console.log("Texto: ", typeof texto);
console.log("Número: ", typeof numero);
console.log("True or false: ", typeof verdadeiro);
console.log("Undefined: ", typeof indefinido);
console.log("Null: ", typeof valorNull);

//conversões

let string = "13";
let stringParaNumero = Number(string)
console.log("Conversão texto para número: "+ Number(stringParaNumero + 4));

let number = 57;
let numberParaString= String(number);
console.log("Conversão número para texto: " + numberParaString);

let numero1 = 33;
let boolean = Boolean(33);
console.log("Conversão número 33 para boolean: " + boolean);
