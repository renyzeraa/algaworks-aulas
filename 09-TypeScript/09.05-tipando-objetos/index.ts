type Person = {
    name: string
    age: number
    contacts?: string[]
    isAlive: boolean
}

const person: Person = {
    age: 24,
    name: 'Renan',
    isAlive: true,
    contacts: ['renan@email.com']
}

const person2: Person = {
    name: 'Joaozinho',
    age: 18,
    isAlive: true
}
