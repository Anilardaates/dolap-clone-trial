
async function getProducts() {
    let response = await fetch(api)
    if (response.ok) {
        let veri = await response.json()
        console.log(veri.products)
        display(veri.products)
    } else {
        console.log(response)
    }
}


function display(data) {
    data.forEach(products => {
        console.log(products)

    });
}

const items = document.querySelectorAll('.card')
const counter = document.querySelector('.counter')
if (localStorage.getItem('items')) {
    let prevItems = localStorage.getItem('items')
    const itemsArr = JSON.parse(prevItems)
    counter.textContent = itemsArr.length
}
items.forEach((item) => {
    item.addEventListener('click', function () {
        let card = this

        let price = card.querySelector('.price').textContent
        let isim = card.querySelector('.ad').textContent
        let resim = card.querySelector('.resim').src

        if (localStorage.getItem('items')) {
            let prevItems = localStorage.getItem('items')
            const itemsArr = JSON.parse(prevItems)
            const isimler = itemsArr.reduce(
                (accumulator, currentValue) => {
                    accumulator.push(currentValue.isim)
                    return accumulator
                }, []);
            if (isimler.includes(isim)) return;
            itemsArr.push({ price: price, isim: isim, resim: resim })

            localStorage.setItem('items', JSON.stringify(itemsArr))
            console.log(itemsArr.length)
            counter.textContent = itemsArr.length
        }
        else {
            const itemsArr = []
            itemsArr.push({ price: price, isim: isim, resim: resim })
            localStorage.setItem('items', JSON.stringify(itemsArr))

            counter.textContent = "1"

        }
    })
})
const addToBasket = (html) => {

}