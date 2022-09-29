const students = [
  { name: 'Lucas', grade: 8 },
  { name: 'Mario', grade: 2 },
  { name: 'Jean', grade: 10 },
  { name: 'Rogério', grade: 6 },
  { name: 'Marcos', grade: 5 }
]

const specificStudent = students.find(student => {
  return student.name.includes('o') // Mario
})

// ele espera um valor de verdadeiro ou falso
// retorna um valor em especifico
// quando ele encontra este valor ele imediatamente sai da array
// método find serve para encontrar a primeira instancia de determinada lista (array)
