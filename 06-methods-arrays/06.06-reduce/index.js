const students = [
  { name: 'Lucas', grade: 8 },
  { name: 'Mario', grade: 2 },
  { name: 'Jean', grade: 10 },
  { name: 'Rogério', grade: 6 },
  { name: 'Marcos', grade: 5 }
]

// reduzir uma lista, para um único valor
let totalGrade = 0
students.forEach(pupils => (totalGrade += pupils.grade))
console.log(totalGrade)
// ate funciona porem não é um código funcional, esta gerando efeito somente na variável totalGrade

// previous sempre sera o valor inicial que eu defini
// current é o valor eu estou iterando
const classGrade = students.reduce((prev, current) => {
  console.log(prev)
  console.log(current)
  // obrigatório retornar um valor
  return prev + current.grade
}, 0)
console.log(classGrade)
// reduce tem uma function seguido de um valor inicial para o número total
