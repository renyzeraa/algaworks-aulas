const user = {
  name: 'renansilva',
  email: 'renansilva@gmail.com'
}

// recebera a referencia de user
const newUser = user

//criar novo objeto user, com as propriedades de user
// método antigo
const newUser1 = Object.assign({}, user)

// método novo
const newUser2 = { ...user }

newUser.email = 'joaozinho@mail.com'
newUser.name = 'joaozinho123'
