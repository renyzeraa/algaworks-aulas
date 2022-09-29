class Human {
  hungry = true
  awake = true

  eat() {
    this.hungry = false
  }
}

// evite esse prototype, definir direto na classe
Human.prototype.sleep = function () {
  this.awake = false
}

// instanciada
const person = new Human()

person.sleep()
