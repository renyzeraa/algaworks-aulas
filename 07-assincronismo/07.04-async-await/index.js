//async function
// funcao async, ja é uma funcao resolvida
async function handleClick() {
    //throw serve para disparar erros dentro do js
    throw 'erro ao execultar'
    // retorna uma nova promisse
    return 123
}
// para resolver corretamente dentro de uma async
// usamos o await com uma funcao ou codigo a ser executado
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), ms)
    })
}

async function handleClick2() {
    await sleep(2000)
    return 'batata'
}
