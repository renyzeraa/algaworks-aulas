const person = {
  name: 'John',
  age: 13
}

const person2 = {
  name: 'Caio',
  age: 14,
  contact: {
    email: 'caio@example.com'
  }
}

// forma comum de pegar valor de objeto
// const name = person.name
// const age = person.age

// nova forma
const { name, age } = person

// pegar propriedades aninhadas
const {
  contact: { email }
} = person2

// trocar nome da propriedade
const { name: batata } = person2
// buscar uma propriedade que não existe vira como undefined
