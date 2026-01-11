// Exercício 1 — Tirar espaços extras

// Você recebeu esse array vindo de um sistema legado:

const clientes = [
  { nome: " Maria Silva ", email: " MARIA@EMAIL.COM " },
  { nome: " joao souza", email: "joao@email.com " }
];

function limparEspacos(clientes){
    return clientes.map(cliente => {
        return {
            nome: cliente.nome.trim(),
            email: cliente.email.trim()
        };
    })
        
}
console.log(limparEspacos(clientes))

// 🧩 Exercício 2 — Deixar o email em minúsculo

function normalizarEmail(clientes){
    return clientes.map(cliente => {
        return {
            email: cliente.email.toLowerCase().trim()
        }
    })
}
console.log(normalizarEmail(clientes))