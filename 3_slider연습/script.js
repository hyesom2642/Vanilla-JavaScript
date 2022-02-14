// ===== Slide 유형1 =====
let currentIndex = 0; // 현재 이미지의 인덱스 번호
let positionValue = 0; // 이미지태그의 위치를 저장할 변수
let img_Width = 640; // 이미지크기

const prev_Btn = document.querySelector('.prev-btn');
const next_Btn = document.querySelector('.next-btn');
const images = document.querySelector('.slide-images');

// next버튼을 누를 때
function next(){
    if( currentIndex < 3 ) {
        prev_Btn.removeAttribute('disabled');
        positionValue -= img_Width;
        images.style.transform = `translateX(${positionValue}px)`;
        currentIndex += 1;
    }
    if ( currentIndex === 3 ){
        next_Btn.setAttribute('disabled', 'true');
    }
}
// prev버튼을 누를 때
function prev(){
    if( currentIndex > 0 ){
        next_Btn.removeAttribute('disabled');
        positionValue += img_Width;
        images.style.transform = `translateX(${positionValue}px)`;
        currentIndex -= 1;
    }
    if ( currentIndex === 0 ){
        prev_Btn.setAttribute('disabled', 'true');
    }
}

// 초기값
function init(){
    prev_Btn.setAttribute('disabled', 'true');
    next_Btn.addEventListener('click', next);
    prev_Btn.addEventListener('click', prev);
}
init();


// ===== Slide 유형2 =====
const slideShow = "slide-show";
const firstSlide = document.querySelector('.slide-item:first-child');

function slideMove(){
    let currentSlide = document.querySelector(`.${slideShow}`); // 현재 slideShow가 있는 slide
    if( currentSlide ){
        currentSlide.classList.remove(slideShow);
        let nextSlide = currentSlide.nextElementSibling;
        if( nextSlide ){
            nextSlide.classList.add(slideShow);
        } else {
            firstSlide.classList.add(slideShow); // 형제가 없을 경우 처음slide로 돌아간다.
        }
    } else {
        firstSlide.classList.add(slideShow);
    }
}
setInterval(slideMove, 3000);



