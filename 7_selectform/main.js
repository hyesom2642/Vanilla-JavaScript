const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');

let 바지size = [26, 27, 28, 29, 30];
let 셔츠size = [90, 95, 100, 105];

option1.addEventListener('change', function(){
    if( option1.value == '바지') {
        option2.innerHTML = '';
        for( i = 0; i < 바지size.length ; i++){
            var newOption = document.createElement('option');
            newOption.innerText = `${바지size[i]}`;
            option2.appendChild(newOption);
        }
    }
    if( option1.value == '셔츠') {
        option2.innerHTML = '';
        for( i = 0 ; i < 셔츠size.length ; i++ ){
            var newOption = document.createElement('option');
            newOption.innerText = `${셔츠size[i]}`;
            option2.appendChild(newOption);
        }        
    }
});

