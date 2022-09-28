class Animal {
  sex

  constructor(props) {
    this.sex = props.sex
  }
}

class Human extends Animal {
  hungry = true
  name
  age

  constructor(props) {
    super(props)
    if (!props.name) {
      throw Error('error props')
    }
    console.log('instanciou')
    this.name = props.name
    this.age = props.age
    console.log(props)
  }

  eat() {
    this.hungry = false
  }
}

const person = new Human({
  name: 'Renan',
  age: 24,
  sex: 'Male'
})
