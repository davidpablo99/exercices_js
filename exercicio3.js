// Exercício 3 — Padronizar o nome

// Você deve criar:
// padronizarNomes(clientes)

/*
Ou seja:
    Todas as palavras do nome
    Primeira letra maiúscula
    O resto minúsculo
Dica mental:
    Separar o nome em palavras → split(" ")
Para cada palavra:
    primeira letra → maiúscula
    resto → minúsculo
Juntar de novo → join(" ")
*/
const clientes = [
  { nome: "maria da silva" },
  { nome: "joao souza" },
  { nome: "ANA COSTA" }
];


function padronizarNomes(clientes){
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
        }
    })
}

console.log(padronizarNomes(clientes))