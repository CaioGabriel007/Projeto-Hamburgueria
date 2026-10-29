const list = document.querySelector('ul')
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonTotalValue = document.querySelector(".add-all")
const buttonFilter = document.querySelector(".filter-all")


function formatCurrency(value) {
const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
})

return newValue
}


function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
    myLi += 
    `
        <li>
        <img src="${product.src}"/>
        <p>${product.name}</p>
        <p class="itens-price">R$ ${formatCurrency(product.price)}</p>
        </li>

   `

})

list.innerHTML = myLi
}


function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)

    console.log(newPrices)
}

function addAll(){
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price,0)
    
    list.innerHTML = `
    <li>
    <p>O valor total de todos os itens foi de R$ ${formatCurrency(totalValue)} </p>
    </li>
    `
}

function filterAllitens() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

    

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonTotalValue.addEventListener('click', addAll)
buttonFilter.addEventListener('click', filterAllitens)
