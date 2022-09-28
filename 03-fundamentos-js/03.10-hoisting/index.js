const result = sum(1, 2)

// const sum = (a = 1, b = 5) => a + b
// assim dará erro

function sum(a, b) {
  return a + b
}
// assim ira funcionar mesmo chamando antes

console.log(result)
