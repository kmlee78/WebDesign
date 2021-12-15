const tomain = document.querySelector('.tomain');
const picture = document.querySelector('.picture');
const profile = document.querySelector('.profile');
const question = document.querySelector('#question');

let givenNumber = localStorage.getItem('typenumber');
let index = 0;
let mbtiArray = ['intj', 'intp', 'entj', 'entp', 'infj', 'infp', 'enfj', 'enfp',
                'istj', 'isfj', 'estj', 'esfj', 'istp', 'isfp', 'estp', 'esfp'];
let mbtiName = ['전략가', '사색가', '통솔자', '변론가', '옹호자', '중재자', '사회운동가', '활동가',
                '논리주의자', '수호자', '관리자', '외교관', '재주꾼', '예술가', '사업가', '연예인'];        

let standard = 1000000;
var checkNumber = [];
for(let i = 0; i < 7; i++){
    checkNumber[i] = Math.floor(givenNumber / standard);
    givenNumber = givenNumber - (checkNumber[i] * standard);
    standard /= 10;
}
switch(checkNumber[0]){
    case 1: index = 1; break;
    case 2: index = 2; break;
    case 3: index = 3; break;
    default: index = 0;
}
for(let j = 1; j < 7; j++){
    index += checkNumber[j]-1;
}

console.log(mbtiArray[index]);
question.textContent = localStorage.getItem('username') + '님의 투자 성격은: ' + mbtiName[index];
picture.classList.add(mbtiArray[index]);
profile.classList.add(mbtiArray[index] + '2');

tomain.addEventListener('click', function(e){
    localStorage.removeItem('username');
    localStorage.removeItem('typenumber');
    location.replace("../index.html");
});