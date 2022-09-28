// class é molde de um objeto
class Human {
  hungry = true

  constructor(props) {
    if (!props.name) {
      throw Error('error props')
    }
    console.log('instanciou')
    this.name = props.name
    this.age = props.age
    this.sex = props.sex
    console.log(props)
  }

  eat() {
    this.hungry = false
  }
}

// instanciar, criar novo objeto
const person = new Human({
  name: 'Renan',
  age: 24,
  sex: 'Male'
})

// acessa prop da class
person.eat()
console.log(person.hungry)
