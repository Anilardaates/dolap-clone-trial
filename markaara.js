const wrapper = document.querySelector('.wrapper')
const input = document.querySelector('#search-brand')


const ekranaYazdir = (x) => {
    wrapper.innerHTML = ''
    for(let i of x){
        const p = document.createElement('p')
        p.textContent = i
        wrapper.append(p)
    }
}

ekranaYazdir(markalar)

input.addEventListener('keyup',()=>{
   
    let secilmis = markalar.filter(marka => marka.toLowerCase().includes(input.value.toLowerCase()))

    console.log(secilmis, input.value)
    ekranaYazdir(secilmis)

})
