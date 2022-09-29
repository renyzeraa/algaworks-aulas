const person = { name: 'John', age: 14 }

// teria que passar person.name e person.age, sem as chaves {}
// assim eu passo somente introduce(person)
function introduce({ name, age }) {
  console.log(`oi ! meu nome é ${name} e eu tenho ${age} anos`)
}

const fruits = ['banana', 'morango', 'laranja']

// selecionar algo em array
// comum
const primeiraFruta = fruits[0]
// com desestruturação
const [firstFruit, secondFruit] = fruits
