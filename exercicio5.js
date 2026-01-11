/* 
Exercício 5 — Converter "true"/"false" em boolean
Dica:
"true" === "true" // vira true
*/

const clientes = [
  { nome: "Maria", ativo: "true" },
  { nome: "Joao", ativo: "false" }
];

function converterBoolean(clientes){
    return clientes.map(cliente => {
        return {
            nome: cliente.nome,
            ativo: cliente.ativo === "true"
        }
    })
}

console.log(converterBoolean(clientes))