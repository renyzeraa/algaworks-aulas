// Podemos extender interfaces desta maneira

```
interface Animal {
    sex: 'male' | 'female'
    hungry: boolean
    age: number
}

interface Mammal extends Animal {
    weaned : boolean
}

const animal: Mammal = {
    sex: 'male',
    hungry: false,
    weaned: true,
    age: 5
}
```

// Ja o type precisamos atribuir o valor a minha classe

```
interface Animal {
    sex: 'male' | 'female'
    hungry: boolean
    age: number
}

interface Mammal extends Animal {
    weaned : boolean
}

type Person = Mammal & {
    name:  string
}

const animal: Mammal = {
    sex: 'male',
    hungry: false,
    weaned: true,
    age: 5
}

const humano: Person = {
    name: 'Renan',
    weaned: false,
    sex: 'male',
    hungry: true,
    age: 24
}
```

// Tanto o interface quanto o type pode extender um com o outro, levando sempre em consideração a regra de atribuição
