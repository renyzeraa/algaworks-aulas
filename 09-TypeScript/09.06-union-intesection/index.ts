// tipo union
// é um tipo de string OU number
type Cpf = string | number

function findPerson(cpf: Cpf) {
    if (typeof cpf === 'string') {
        return cpf.toUpperCase()
    }

    return cpf.toFixed(2)
}

type Animal = { sex: 'male' | 'female' }
type Human = { hungry: boolean }

// combinar valores em um tipo so, utiliza o &
// tipo Person é junção de Animal + Human
type Person = Animal & Human

function getPersonStatus(person: Person) {
    return person
}
