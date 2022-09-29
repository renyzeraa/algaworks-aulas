// desestruturar retorno de função
function createUser(name, age, email) {
  return {
    name,
    age,
    contact: { email }
  }
}

const {
  name,
  age,
  contact: { email }
} = createUser('renan', 30, 'renan@mail.com')

// modo comum de fazer
function createUser2(user) {
  return {
    name: user.name,
    age: user.age,
    contact: { email: user.email }
  }
}

const user = createUser2({ name: 'Lucas', age: 22, email: 'lucas@mail.com' })

// forma otimizada
function createUser3({ name, age, email }) {
  return {
    name,
    age,
    contact: { email }
  }
}
