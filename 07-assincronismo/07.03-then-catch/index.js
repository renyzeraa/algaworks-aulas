function handleClick() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(098)
            resolve(123)
        }, 2000)
    })
}

const result = handleClick()
    .then(res => {
        // then recupera o valor caso seja resolvida
        return res
    })
    .catch(err => {
        // catch recupera o valor caso de algum erro na execucao
        console.error(err)
    })
