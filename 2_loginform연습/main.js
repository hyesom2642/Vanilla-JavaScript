const login_btn = document.getElementById('login-btn'); // 로그인 버튼
const login_close = document.getElementById('login-close'); // 닫기 버튼
const login_form = document.querySelector('.bg-black'); // 로그인 폼
const id = document.getElementById('id-input'); // 아이디 input
const pw = document.getElementById('pw-input'); // 패스워드 input
const submit_login = document.getElementById('login'); // 로그인전송버튼

// 로그인 버튼 클릭 시 로그인창 열기
login_btn.addEventListener('click', function(e){
        login_form.classList.add('show');
});
// 닫기 버튼 클릭시 로그인창 닫기
login_close.addEventListener('click', function(){
    login_form.classList.remove('show');
});
// 검정배경을 눌렀을 때 로그인창 닫히게
login_form.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e.currentTarget);
    
    if ( e.target == e.currentTarget ) {
        login_form.classList.remove('show');
    }
});

// input이 비어있을 경우에는 로그인 버튼을 눌러도 submit이 안되게
submit_login.addEventListener('click', function(e){
    var email = /\S+@\S+\.\S+/; // 이메일정규식

    if ( id.value === "" ){
        e.preventDefault();
        alert('아이디를 확인하세요');
    }
    // 아이디가 이메일 형식이 아닐 경우 alert창 뜨게
    if ( email.test(id.value) === false ){
        e.preventDefault();
        alert('이메일형식으로 입력하세요')
    }
    if ( pw.value === "") {
        e.preventDefault();
        alert('비밀번호를 확인하세요');
    } else if ( id.value.length < 6) {
        e.preventDefault();
        alert('비밀번호가 6글자 미만입니다');
    }
    // 비밀번호에 대문자가 적어도 1개 있는지 검사
    if ( /[A-Z]/.test(pw.value) === false){
        e.preventDefault();
        alert('비밀번호에 대문자가 포함되어있지 않습니다.');
    }
});

