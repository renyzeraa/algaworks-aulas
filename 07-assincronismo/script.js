// arquivo para rodas os .js no console do navegador

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // é executada a funcao conforme esta na ordem
        // neste caso seria o resolve
        resolve('😊')
        reject('👌')
    }, 5000)
})

// pendente <pending>
// resolvida <fulfilled>
// rejeitada <rejected>
