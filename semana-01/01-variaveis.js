// Comentário de uma linha 

/* Comentário em que posso comentar várias linhas
e não haverá erros notados pelo VS Code
*/

// console.log("Esse comentário irá aparecer no terminal");

// Variáveis: caixas com nome:

// Existe duas maneiras duas forma de criar uma variável que guarda um valor

// Primeira forma:
let corridaHoje = 0; // let: Valor pode mudar
corridaHoje =   5; // A variável corridaHoje foi atribuido o valor 5

// Segunda forma:
const taxaUber = 0.25; // Por ser uma constante, o valor não pode mudar

/* Tipos de Dados
todo valor tem um tipo, os principais são:
*/

// Number: valores inteiros ou decimais são o mesmo tipo
const km = 4;
const valorCorrida = 12.5;

// String: texto, entre aspas 
const nome = "João";
const cidade = "Marabá";

// Template string: crases + ${} para encaixar valores no texto
console.log('${nome} fez uma corrida de ${km} km');

// Boolean: verdadeiro ou falso
const corridaFinalizada = true;

// undefined; a variável existe, mas nenhum valor foi atribuido a ela
let gorjeta;
console.log(gorjeta); //Undefined

// null: "vazio" de propósito, colocado por você
let passageiroAtual = null;
