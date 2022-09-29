const students = [
  { name: 'Lucas', grade: 8 },
  { name: 'Mario', grade: 2 },
  { name: 'Jean', grade: 10 },
  { name: 'Rogério', grade: 6 },
  { name: 'Marcos', grade: 5 }
]

const flushed = students.filter(pupil => {
  return pupil.grade >= 6
})

// filtrar arrays com um tipo de return
// retorna de 0 ate vários itens em especifico
