// em uma funcao sempre definir o tipo, pois por padrao vem any, onde tem grande chance de causar problemas na aplicação
function greet(name: string, age?: number) {
    // esse sinal de ? no age, permite vir vazio caso nao definido o parametro
    // se acaso nao definisse o tipo, poderia dar erro, pois toUpperCase executa somente com strings
    console.log(`Hello, ${name.toUpperCase()}!`)
}

greet('Renan Silva', 24)
greet('Fulano')
