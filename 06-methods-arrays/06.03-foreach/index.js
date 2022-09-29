const fruits = ['banana', 'morango', 'laranja']

function eatAllFruits() {
  // callback function
  fruits.forEach((item, index) => {
    console.log(`acabei de comer ${item}, é o ${index + 1}º item da lista`)
  })
}

eatAllFruits()

// foreach serve para iterar com os itens da lista
