var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
]
const itemTitle = document.querySelectorAll('.item-title');
const itemPrice = document.querySelectorAll('.item-price');

const priceBtn = document.getElementById('price-sort');
const nameBtn = document.getElementById('name-sort');
const PriceBtn2 = document.getElementById('price-sort2');

const content = document.querySelector('.card');
const cardContainer = document.getElementById('card-group');

// for(i=0 ; i<products.length ; i++){
//     itemTitle[i].innerHTML = products[i].title;
//     itemPrice[i].innerHTML = products[i].price;
// } 
// itemTitle[0].innerHTML = products[0].title;
// itemPrice[0].innerHTML = products[0].price;

// itemTitle[1].innerHTML = products[1].title;
// itemPrice[1].innerHTML = products[1].price;

// itemTitle[2].innerHTML = products[2].title;
// itemPrice[2].innerHTML = products[2].price;

// 페이지에 처음 들어왔을 때 3개의 상품진열
document.addEventListener('DOMContentLoaded', function() {
    let newProducts = products.filter(function(a){
        return a;
    });
    newProducts.forEach(function(a){
        const divContainer = document.createElement('div');
        let template = `<div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
                <h5 class="item-title">${a.title}</h5>
                <p>가격 : <span class="item-price">${a.price}</span></p>
                <button class="btn btn-danger">주문하기</button>
            </div>
        </div>`;
        divContainer.innerHTML = template;
        cardContainer.appendChild(divContainer);
    });
});

//상품가격별정렬
// priceBtn.addEventListener('click', function(){
//     products.sort( (a, b) => a.price - b.price);
    
//     for(i=0 ; i<products.length ; i++){
//         itemTitle[i].innerHTML = products[i].title;
//         itemPrice[i].innerHTML = products[i].price;
//     }    
// });
priceBtn.addEventListener('click', function(){
    cardContainer.innerHTML = ''; // 클릭시 이번상품초기화
    let newProducts = products.sort(function(a, b){
        return a.price - b.price;
    });
    newProducts.forEach(function(a){
        const divContainer = document.createElement('div');
        let template = `<div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
            <h5 class="item-title">${a.title}</h5>
            <p>가격 : <span class="item-price">${a.price}</span></p>
            <button class="btn btn-danger">주문하기</button>
            </div>
        </div>`;
        divContainer.innerHTML = template;
        cardContainer.appendChild(divContainer);
    });
});



// 상품이름별정렬
// nameBtn.addEventListener('click', function(){
//     products.sort( (a, b) => { 
//         if( a.title < b.title == true){
//             return -1
//         } else {
//             return 1
//         }
//     });
    
//     for(i=0 ; i<products.length ; i++){
//         itemTitle[i].innerHTML = products[i].title;
//         itemPrice[i].innerHTML = products[i].price;
//     }    
// })
nameBtn.addEventListener('click', function(){
    cardContainer.innerHTML = ''; // 클릭시 이번상품초기화
    let newProducts = products.sort(function(a, b){
        if( a.title < b.title == true){
            return -1
        } else {
            return 1
        }
    });
    newProducts.forEach(function(a){
        const divContainer = document.createElement('div');
        let template = `<div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
            <h5 class="item-title">${a.title}</h5>
            <p>가격 : <span class="item-price">${a.price}</span></p>
            <button class="btn btn-danger">주문하기</button>
            </div>
        </div>`;
        divContainer.innerHTML = template;
        cardContainer.appendChild(divContainer);
    });
});


// 상품 6만원이하정렬
// PriceBtn2.addEventListener('click', function(){
//     cardContainer.innerHTML = '';
//     products.filter(function(a){
//         if(a.price <= 60000){
//             const divContainer = document.createElement('div');
//             let template = `<div class="card">
//                 <img src="https://via.placeholder.com/600">
//                 <div class="card-body">
//                 <h5 class="item-title">${a.title}</h5>
//                 <p>가격 : <span class="item-price">${a.price}</span></p>
//                 <button class="btn btn-danger">주문하기</button>
//                 </div>
//             </div>`;
//             divContainer.innerHTML = template;
//             cardContainer.appendChild(divContainer);
//         }
//     });  
// });
PriceBtn2.addEventListener('click', function(){
    cardContainer.innerHTML = ''; // 클릭시 이번상품초기화
    let newProducts = products.filter(function(a){
        return a.price <= 60000
    });
    newProducts.forEach(function(a){
        const divContainer = document.createElement('div');
        let template = `<div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
            <h5 class="item-title">${a.title}</h5>
            <p>가격 : <span class="item-price">${a.price}</span></p>
            <button class="btn btn-danger">주문하기</button>
            </div>
        </div>`;
        divContainer.innerHTML = template;
        cardContainer.appendChild(divContainer);
    });
});