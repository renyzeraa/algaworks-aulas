// interface sao uma alternativa aos types
interface Animal {
    sex: 'male' | 'female'
}

// com interface posso criar outra com o mesmo nome, adicionando mais propriedades
interface Animal {
    //porem ela nao se torna viavel, pois voce pode criar uma só
    hungry: boolean
}

// como o extends das Classes
interface Human extends Animal {
    // cria uma nova interface adicionando mais propriedades para Human
    name: string
    age: number
}

const person: Human = {
    age: 24,
    name: 'Renan',
    sex: 'male',
    hungry: true
}

const animal: Animal = {
    sex: 'male',
    hungry: true
}
