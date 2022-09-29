const parts = ['ombro', 'joelho']
const sentence = ['cabeça', ...parts, 'pe']

// array imutavel, não pode ser modificada
const immutableArray = ['select', '*', 'from']

// esta sera mudada, recebendo os valores da array imutavel
const mutableArray = [...immutableArray]
mutableArray.push('batata')
