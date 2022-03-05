var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
]
const itemTitle = document.querySelectorAll('.item-title');
const itemPrice = document.querySelectorAll('.item-price');

const priceBtn = document.getElementById('price-sort');
const nameBtn = document.getElementById('name-sort');
const PriceBtn2 = document.getElementById('50000price-sort');

const content = document.querySelector('.card');

for(i=0 ; i<products.length ; i++){
    itemTitle[i].innerHTML = products[i].title;
    itemPrice[i].innerHTML = products[i].price;
} 
// itemTitle[0].innerHTML = products[0].title;
// itemPrice[0].innerHTML = products[0].price;

// itemTitle[1].innerHTML = products[1].title;
// itemPrice[1].innerHTML = products[1].price;

// itemTitle[2].innerHTML = products[2].title;
// itemPrice[2].innerHTML = products[2].price;

// 상품가격별정렬
priceBtn.addEventListener('click', function(){
    products.sort( (a, b) => a.price - b.price);
    
    for(i=0 ; i<products.length ; i++){
        itemTitle[i].innerHTML = products[i].title;
        itemPrice[i].innerHTML = products[i].price;
    }    
});

// 상품이름별정렬
nameBtn.addEventListener('click', function(){
    products.sort( (a, b) => { 
        if( a.title < b.title == true){
            return -1
        } else {
            return 1
        }
    });
    
    for(i=0 ; i<products.length ; i++){
        itemTitle[i].innerHTML = products[i].title;
        itemPrice[i].innerHTML = products[i].price;
    }    
})

// 상품 5만원이하정렬

PriceBtn2.addEventListener('click', function(){
    products.filter( (a) => {
        if( a.price < 60000 ){
            content.classList.add('notshow');
        } else {
            content.classList.remove('notshow');            
        }
    });
    for(i=0 ; i<products.length ; i++){
        itemTitle[i].innerHTML = products[i].title;
        itemPrice[i].innerHTML = products[i].price;
    }
})