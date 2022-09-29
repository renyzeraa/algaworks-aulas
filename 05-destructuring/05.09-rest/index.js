// ...rest faz a função inversa do spread

// método antigo de adicionar itens a mais no array
function createUser(name, age, contact1, contact2, contact3) {
  const args = Array.from(arguments)
  return {
    name,
    age,
    contacts: args.slice(2)
    // slice corta os primeiros indices do array
  }
}

// método novo com ...rest (espalhar)
// ...rest esta recuperando informações, e fara agrupamento em um array
function createUser1(name, age, ...contacts) {
  return {
    name,
    age,
    contacts: contacts
  }
}
