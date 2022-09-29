const fruits = ['banana', 'morango', 'laranja']

fruits.map(fruit => {
  console.log(fruit.toUpperCase())
})

const newValue = fruits.map(fruit => {
  return fruit
})

console.log(newValue)

// map serve para iterar com os itens da lista também
// retornar um valor de volta em especifico, remapear
