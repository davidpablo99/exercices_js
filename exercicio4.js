/* 
Exercício 4 — Converter idade para número

Ou seja:
    idade deixa de ser string
    vira number
    Dica: Number() ou parseInt()
*/

const clientes = [
  { nome: "Maria", idade: "29" },
  { nome: "Joao", idade: "17" },
  { nome: "Ana", idade: "34" }
];

function converterIdade(clientes){
    return clientes.map(cliente => {
        return {
            nome: cliente.nome,
            idade: Number(cliente.idade)
        }
    })
}
console.log(converterIdade(clientes))