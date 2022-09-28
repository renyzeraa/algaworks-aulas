function greet() {
  console.log('Bom dia ')
  console.log(this) // referencia objeto window
}

greet()

function majority(age) {
  return age - 18
}

const remainingYears = majority(23)

console.log(remainingYears)
