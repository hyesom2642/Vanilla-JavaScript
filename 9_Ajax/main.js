const btnMore = document.getElementById('btn-more');
const image = document.getElementById('images');
const title = document.querySelector('.card-title');
const price = document.querySelector('.card-text');

btnMore.addEventListener('click', function(){
    fetch('https://codingapple1.github.io/data.json') // url 입력, GET메서드
    .then(res => res.json())  //응답 결과를 JSON으로 파싱
    .then((data) => {
        image.src = data.img;
        title.innerHTML = data.model;
        price.innerHTML = data.price;
    })
    .catch( (error) => { // 오류 발생시 오류를 담아서 보여줌
        console.log('Fetch Error', error);
    });
});