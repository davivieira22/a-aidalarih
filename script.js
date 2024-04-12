const myMenu = document.querySelector(".ver-menu")
const list = document.querySelector("ul")
let myLi = ''



function formatValue(product) {
  const nyFormat = product.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  return nyFormat
}

function seeMenu() {
  window.scroll({ top: window.innerHeight, behavior: "smooth" })
  menuOptions.forEach(element => {

    myLi += `  
         <li>
          <img class="img" src="${element.src}">

          <p>${element.name}</p>

          <p class="Price"> ${formatValue(element.price)}</p>

         
         <p>tamanho: ${element.size}</p>

         </li>

         `
    list.innerHTML = myLi

  });
}





















myMenu.addEventListener("click", seeMenu)

