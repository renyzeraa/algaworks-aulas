// métodos para ajudar a executar funções em determinado contexto

function sum(a, b) {
  console.log(this)
  return a + b
}

const me = { name: 'Renan' }

sum.call(me.name, 1, 2)
// primeiro argumento que ele recebe é um contexto que ele seja executado

sum.apply(me, [1, 2])
//primeiro argumento também sera o contexto que sera executado
// porem o armento para a função devera estar dentro de um array.
