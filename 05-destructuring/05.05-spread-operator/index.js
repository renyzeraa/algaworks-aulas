const parts = ['ombro', 'joelho']
// metodo comum para add em array
// const sentence = ['cabeça', parts[0], parts[1], 'pés']
// metodo novo
const sentence = ['cabeça', ...parts, 'pés']

// para o caso de eu querer mandar vários contatos
function createUser(name, age, ...contacts) {
  return {
    name,
    age,
    contacts: [contacts]
  }
}

const immutableArray = ['select', '*', 'from', 'posts']

// clonar o imutável e não alterar ele, apenas acrescentando
const mutableArray = [...immutableArray]
mutableArray.push('where id = 1')
