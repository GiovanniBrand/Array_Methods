let btnPriceOrder = document.querySelector('#btnOrdenarPorPreco')
btnPriceOrder.addEventListener('click', orderPrice)

function orderPrice(){
    let orderedBooks = books.sort((a, b) => a.preco - b.preco)
    bookExibition(orderedBooks);
}