function name() {}
// function declaration

const nome = () => {}
// function expressions

const getRemainingYears = age => age - 18
console.log(getRemainingYears(24))

// utilizar contextos dentro de arrow function pode ser algo complicado

const me = {
  name: 'renan',
  age: 12,
  greet() {
    console.log(this)
  },
  great: () => {
    console.log(this)
  }
  // ignora o contexto do objeto, e entendo o window
}
