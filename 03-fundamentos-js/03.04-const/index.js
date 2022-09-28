const age = 23
// age = 20
// NÃO PODE REASSUMIR OUTRO VALOR, SOMENTE ATRIBUIR

const me = {
  name: 'Renan',
  age: 23
}

me.age = 24
console.log(me.age)
// assim pode !

const list = ['batata', 'cenoura']
list.push('cebola')

console.log(list)

age > 17 ? console.log(age - 18) : console.log('nao fez 18 ainda')
