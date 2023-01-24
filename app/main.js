let books = []

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getSearchBookAPI()

async function getSearchBookAPI(){
    const res = await fetch(endPointAPI)
    books = await res.json()
    let dicountBooks = discountApply(books)

    console.table(books)
    bookExibition(dicountBooks)
}

