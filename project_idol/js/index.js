const startBtn = document.querySelector('.startBtn');
const input = document.querySelector('.input');

const USER = 'username';

function goToProcedure(e){
    if(!input.value){
        alert('이름을 입력해 주세요.');
    }else{
            location.href = "html/procedure.html";
            username = input.value;
            input.value = '';
    }
    localStorage.setItem(USER, username);
}

startBtn.addEventListener('click', goToProcedure);