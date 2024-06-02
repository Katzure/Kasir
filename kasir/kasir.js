function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Beef Steak',
        price: 120000
    },
    {
        id: 2,
        name: 'Chicken Steak',
        price: 100000
    },
    {
        id: 3,
        name: 'Salmon Steak',
        price: 125000
    },
    {
        id: 4,
        name: 'Lamb Steak',
        price: 130000
    },
    {
        id: 5,
        name: 'French Fries',
        price: 30000
    },
    {
        id: 6,
        name: 'Caesar Salad',
        price: 40000
    },
    {
        id: 7,
        name: 'Corn Soup',
        price: 45000
    },
    {
        id: 8,
        name: 'Onion Rings',
        price: 40000
    },
    {
        id: 9,
        name: 'Caramel Latte',
        price: 25000
    },
    {
        id: 10,
        name: 'Macchiatto',
        price: 30000
    },
    {
        id: 11,
        name: 'Americano',
        price: 21000
    },
    {
        id: 12,
        name: 'Mocha',
        price: 24000
    },
    {
        id: 13,
        name: 'Mint Tea',
        price: 25000
    },
    {
        id: 14,
        name: 'Rose Tea',
        price: 26000
    },
    {
        id: 15,
        name: 'Chamomile Tea',
        price: 24000
    },
    {
        id: 16,
        name: 'ButterFly Pea Tea',
        price: 30000
    }
   
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}