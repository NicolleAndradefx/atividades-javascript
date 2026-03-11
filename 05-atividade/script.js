// Empresa de bolo de pote

const sabores = ["Brigadeiro", "Cenoura", "Ninho", "Limão"];

console.log(sabores);
console.log(sabores.length);

//Adicionando um novo sabor 
sabores.push("Baunilha");
console.log(sabores);
console.log(sabores.length);

//Removendo Sabor
sabores.pop();
console.log("Baunilha está fora do estoque " + sabores);
console.log(sabores.length);


//Confeitria

const nomes = ["Grazi", "Thiago", "Maria", "Marcos", "Isabelly"];

console.log(nomes[0]);
console.log(nomes[4]);

//Conferindo clientes
const cliente = nomes.includes("Carlos")
console.log(cliente);

console.log(nomes.lastIndexOf("Maria"));


//Bolo de pote
const pedidosManha = [5, 15, 25];
console.log(pedidosManha.length);

const pedidosTarde = [35, 45, 55];
const todosPedidos = pedidosManha.concat(pedidosTarde);
console.log(todosPedidos);



//Ateliê
const servicos = ["barra de calça ", "ajuste de vestido", "reforma de camisa"];

//adicionando serviço
servicos.unshift("apertar calça folgada ");
console.log(servicos);

//removendo primeiro array
const primeiroServico = servicos.shift();
console.log(servicos);


//Psicólogo
const consulta = [];

consulta.push("Higor");
consulta.push("Cauã");
consulta.push("Vitor");
consulta.push("Eliza");

for(let i = 0; i < consulta.length; i++ ){
    console.log("Ìndice " + i + ": " + consulta[i]);
}


//clínica
let matriz = [
    [9, 13, 15],
    [8, 12, 14]
];

for(let b = 0; b < matriz.length; b++){
    for(let c = 0; c < matriz[b].length; c++){
        console.log("[" + b + "][" + c + "] = " + matriz[b][c] )
    }
}