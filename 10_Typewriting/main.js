const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const text = document.querySelector('h1').innerText;

window.addEventListener('load', function(){
    h1.innerHTML = '';

    // setTimeout(function(){
    //     h1.innerHTML = h1.innerHTML + text[0]
    // }, 500);
    // setTimeout(function(){
    //     h1.innerHTML = h1.innerHTML + text[1]
    // }, 1000);
    // setTimeout(function(){
    //     h1.innerHTML = h1.innerHTML + text[2]
    // }, 1500);
    // setTimeout(function(){
    //     h1.innerHTML = h1.innerHTML + text[3]
    // }, 2000);
    // setTimeout(function(){
    //     h1.innerHTML = h1.innerHTML + text[4]
    // }, 2500);
    
    for(let i=0; i<text.length; i++){
        setTimeout(function(){
            h1.innerHTML = h1.innerHTML + text[i]
        }, 200*i);
    }
});
