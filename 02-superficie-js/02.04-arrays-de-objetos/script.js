const person1 = {
  name: 'Daniel',
  age: 22
}

const person2 = {
  name: 'Rafaela',
  age: 32
}

const person3 = {
  name: 'Caio',
  age: 36
}

const list = [person1, person2, person3]

for (let person of list) {
  console.log(`${person.name} tem ${person.age} anos`)
}
