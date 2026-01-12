// Exercício de revisão — Normalizar clientes

/*
Crie uma função:

normalizarClientes(clientes)


Ela deve devolver:

[
  { nome: "Maria Silva", email: "maria@email.com", idade: 29, ativo: true },
  { nome: "Joao Souza", email: "joao@email.com", idade: 17, ativo: false }
]

*/

const clientes = [
  { nome: " maria silva ", email: " MARIA@EMAIL.COM ", idade: "29", ativo: "true" },
  { nome: " JOAO souza", email: " joao@email.com ", idade: "17", ativo: "false" }
];

function normalizarClientes(clientes){
    return clientes.map(cliente => {
        return {
            nome: cliente.nome
                .trim()
                .toLowerCase()
                .split(" ")
                .map(inicial =>
                    inicial.charAt(0).toUpperCase() + inicial.slice(1)
                )
                .join(" ")
                ,
            email: cliente.email
                .trim()
                .toLowerCase(),
            idade: Number(cliente.idade),
            ativo: cliente.ativo === "true"
        }
    })
}

console.log(normalizarClientes(clientes))