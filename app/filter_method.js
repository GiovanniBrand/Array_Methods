const btnFilter = document.querySelectorAll('.btn')

btnFilter.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const btnElement = document.querySelector('#' + this.id)
    const cat = btnElement.value
    
    let filteredBooks = cat == 'disponivel' ? filterByQnt() : fiterByCat(cat)
    bookExibition(filteredBooks);
    if(cat == 'disponivel') {
        exibValueAva()
    }
}

function fiterByCat(cat) {
    return books.filter(book => book.categoria == cat)
}

function filterByQnt() {
    return books.filter(book => book.quantidade > 0)
}

function exibValueAva(){
    elementValueAv.innerHTML = `
    <section id="valor_total_livros_disponiveis">
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${allValue()}</span></p>
        </div>
    </section>
    `
}

function allValue () {
    let count = 0
    let avaBooks = books.filter(book => book.quantidade > 0)
    let totalValue = avaBooks.reduce(
        (acc, currentValue) => acc + currentValue.preco,
        count 
    )

    totalValue = new Intl.NumberFormat('pt-BR').format(totalValue)
    
    return totalValue
}