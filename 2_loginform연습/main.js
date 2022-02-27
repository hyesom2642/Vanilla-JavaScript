const login_btn = document.getElementById('login-btn'); // 로그인 버튼
const login_close = document.getElementById('login-close'); // 닫기 버튼
const login_form = document.querySelector('.bg-black'); // 로그인 폼
const id = document.getElementById('id-input'); // 아이디 input
const pw = document.getElementById('pw-input'); // 패스워드 input
const submit_login = document.getElementById('login'); // 로그인전송버튼

// 로그인 버튼 클릭 시 로그인창 열기
login_btn.addEventListener('click', function(){
    login_form.classList.add('show');
});
// 닫기 버튼 클릭시 로그인창 닫기
login_close.addEventListener('click', function(){
    login_form.classList.remove('show');
});

// input이 비어있을 경우에는 로그인 버튼을 눌러도 submit이 안되게
submit_login.addEventListener('click', function(e){
    if ( id.value === "" ){
        e.preventDefault();
        alert('아이디 및 비밀번호를 확인하세요');
    }    
});
