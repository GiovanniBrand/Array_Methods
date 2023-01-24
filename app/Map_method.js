function discountApply(books) {
    const discount = 0.3

    dicountBooks = books.map( book => {
        return {...book, preco: book.preco - (book.preco * discount)}
    })
    return dicountBooks
}