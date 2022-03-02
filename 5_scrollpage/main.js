const $nav = document.getElementById('nav');
let $logo = document.querySelector('.nav-logo');
// nav-bar 스크롤시 로고크기조절
window.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    if( window.scrollY >= 100 ){
        $logo.style.fontSize = '40px';
    } else {
        $logo.style.fontSize = '50px';
    }
});


const $scrollBtn = document.querySelector('.open');
const $scrollOpen = document.querySelector('.black-bg');
const $scrollClose = document.querySelector('.close');
// 열기, 닫기
$scrollBtn.addEventListener('click', function(){
    $scrollOpen.style.display = 'block';
});
$scrollClose.addEventListener('click', function(){
    $scrollOpen.style.display = 'none';
});


// 열고 스크롤 내렸을 때, 스크롤을 다 보았으면 alert창 뜨게
// 스크롤바 내린 값 == div의 높이
const $scrollHeight = document.querySelector('.white-bg');
$scrollHeight.addEventListener('scroll', () => { 
    let boxScrollHeight = $scrollHeight.scrollTop; // 스크롤양
    console.log(boxScrollHeight);
    let realScrollHeight = $scrollHeight.scrollHeight; // 실제박스스크롤크기
    console.log(realScrollHeight);
    if( boxScrollHeight + 600 > realScrollHeight ){
        alert('스크롤을 다 봤습니다.');
    }
});
