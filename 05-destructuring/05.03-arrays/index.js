const fruits = ['banana', 'morango', 'laranja']

// forma comum
const primeiroItem = fruits[0]

// forma atual [ , ] colchetes
const [primeiro, segundo, terceiro, quarto] = fruits
// quarto vira undefined

// pegar um item em especifico, so colocar a virgula
const [, second] = fruits

//
const person1 = {
  name: 'Renan',
  age: 23
}
const person2 = {
  name: 'Jonas',
  age: 27
}
const person3 = {
  name: 'Julio',
  age: 20
}

const friends = [person1, person2, person3]

// pegar nome da pessoa em um objeto dentro de array
// forma comum (antiga)
const secondPerson = friends[1].name

// forma atual
const [, { name }] = friends

console.log(name) // jonas

// desestruturação de array dentro de array
const chart = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
]

const [, , [x, y]] = chart
// x = 5 e y = 6
