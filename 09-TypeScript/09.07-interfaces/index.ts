interface Animal {
    sex: 'male' | 'female'
}

// como o extends das Classes
interface Human extends Animal {
    name: string
    age: number
}

const person: Human = {
    age: 24,
    name: 'Renan',
    sex: 'male'
}
