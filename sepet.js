const basket = document.querySelector('.basket')
const items = JSON.parse(localStorage.getItem('items'))
const sil = document.querySelector('.delete')
const purchase  = document.querySelector('.continue')

 sil.addEventListener('click', function(){
    localStorage.removeItem('items')
    location.reload()
 })
 purchase.addEventListener('click', function(){
    alert("Ödeme Ekranına Yönlendiriliyorsunuz")
 })
items.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card','p-0')

    card.innerHTML = 
    `
    <img width="50px" height="80px" src="${item.resim}" class="card-img-top resim" alt="...">
    <div class="card-body">
        <h5 class="card-title ad">${item.isim}</h5>
        <p class="card-text">${item.isim}</p>
        <p class="card-text"><span class='price'>${item.price}</span> TL</p>
        
    </div>
    `
    basket.append(card)
    

});