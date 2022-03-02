const body = document.getElementById('body');
const darkbtn = document.querySelector('.dark');
const lightbtn = document.querySelector('.light');

let clickCount = 0; // 버튼 클릭횟수

// darkbtn.addEventListener('click', function(){
//     body.classList.add('black');
//     darkbtn.innerHTML = '🌞 Light Mode';
// });
// lightbtn.addEventListener('click', function(){
//     body.classList.remove('black');
// });

darkbtn.addEventListener('click', function(){
    if( clickCount % 2 == 0 ){ // 짝수
        body.classList.add('bg-black');
        darkbtn.classList.remove('dark');
        darkbtn.classList.add('light');
        darkbtn.innerHTML = '🌞 Light Mode';
        clickCount ++;
    } else if ( clickCount % 2 != 0 ){ // 홀수
        body.classList.remove('bg-black');
        darkbtn.classList.add('dark');
        darkbtn.classList.remove('light');
        darkbtn.innerHTML = '🌝 Dark Mode'
        clickCount ++;
    }
});