const tab_btn = document.querySelectorAll('.tab-button'); // 탭 버튼
const tab_content = document.querySelectorAll('.tab-content'); // 탭내용

function showContent(num){
    tab_content.forEach( (item) => {
        item.classList.remove('show');
    });
    tab_content[num].classList.add('show');
}
function showTab(num){
    tab_btn.forEach( (item) => {
        item.classList.remove('active');
    })
    tab_btn[num].classList.add('active');
}

tab_btn.forEach( (item, index) => {
    item.addEventListener('click', function(){
        showContent(index);
        showTab(index);
    })
});

// // 1번탭버튼을 누르면 1번탭버튼에 active 클래스와 tab-content에 show가 붙는다.
// tab_btn[0].addEventListener('click', function(e){
//     const current = e.target;
//     console.log(current);


//     tab_btn[1].classList.remove('active');
//     tab_content[1].classList.remove('show');
//     tab_btn[2].classList.remove('active');
//     tab_content[2].classList.remove('show');    

//     tab_btn[0].classList.add('active');
//     tab_content[0].classList.add('show');
// });
// // 2번탭을 누르면 2번탭버튼에 active클래스와 tab-content에 show를 붙이고
// // 1번탭에있는 active와 show를 삭제한다.
// tab_btn[1].addEventListener('click', function(){
//     tab_btn.classList.remove('active');
//     tab_content.classList.remove('show');
//     // tab_btn[0].classList.remove('active');
//     // tab_content[0].classList.remove('show');
//     // tab_btn[2].classList.remove('active');
//     // tab_content[2].classList.remove('show');

//     tab_btn[1].classList.add('active');
//     tab_content[1].classList.add('show');

// });
// // 3번탭의 경우
// tab_btn[2].addEventListener('click', function(){
//     tab_btn[0].classList.remove('active');
//     tab_content[0].classList.remove('show');
    
//     tab_btn[2].classList.add('active');
//     tab_content[2].classList.add('show');
    
//     tab_btn[1].classList.remove('active');
//     tab_content[1].classList.remove('show');
// });

