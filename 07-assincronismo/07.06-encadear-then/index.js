//encadear ações dentro de uma promisse
//fetch tambem é uma promise
fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
