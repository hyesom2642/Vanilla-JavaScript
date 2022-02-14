// 로그인 창 열기
document.querySelector('.login-open').addEventListener('click', function(){
    document.querySelector('.container').style.display = 'block';
});

// 로그인 창 닫기
document.querySelector('.login-close').addEventListener('click', function(){
    document.querySelector('.container').style.display = 'none';
});