interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
// para buscar os dados do fetch, precisamos do promise chaining
// no caso o .then
fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')

// generic
async function enhancedFetch<ResponseData = string[]>(url: string) {
    // preciso pegar a resposta
    const res = await fetch(url)
    // converter para formato JSON
    const data: ResponseData = await res.json()

    // depois de converter posso pegar os dados
    return {
        status: res.status,
        data
    }
}

// o tipo do response data sera do type Photo, ou seja, tipo array
enhancedFetch<Photo[]>(
    'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3'
).then(res => {
    // aqui o dado ja esta tipado corretamente
    res.data.map(item => console.log(item.albumId))
})
