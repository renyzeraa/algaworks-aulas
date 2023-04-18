const baseUrl = 'http://jsonplaceholder.typicode.com'

async function getTodos() {
    return Promise.all([
        fetch(`${baseUrl}/todos/1`).then(res => res.json()),
        fetch(`${baseUrl}/todos/2`).then(res => res.json()),
        fetch(`${baseUrl}/todos/3`).then(res => res.json())
    ])
}

const todos = getTodos()

// para realizar um array de promisses 'awaits' juntas, utilizamos o Promisse.All
