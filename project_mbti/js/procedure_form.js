const nextBtn = document.querySelector('.next');
const questionnumber = document.querySelector('.questionnumber');
const box1 = document.querySelector('.img1');
const box2 = document.querySelector('.img2');
const box3 = document.querySelector('.img3');
const questions = document.querySelector('.questions');
const sentence1 = document.querySelector('.sentence1');
const sentence2 = document.querySelector('.sentence2');
const sentence3 = document.querySelector('.sentence3');

const MBTI = 'typenumber';
let calculation = 0;
let questionNum = 1;
let count = 0;
let placeOfNum = 1000000;

function doOpenCheck(chk){
    var obj = document.getElementsByName("cbox");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }
}

function removeCheck(){
    var obj = document.getElementsByName("cbox");
    for(var i=0; i<obj.length; i++){
            obj[i].checked = false;
    }
}

function callValue(e){
    var obj = document.getElementsByName("cbox");
    if(obj[0].checked === true)
        count = 1;
    if(obj[1].checked === true)
        count = 2;
    if(obj[2].checked === true)
        count = 3;
    if(count === 0){
        alert('항목을 체크해 주세요.');
    }else{
        calculation += count * placeOfNum;
        count = 0;
        questionNum++;
        placeOfNum /= 10;
        removeCheck();
        boxControl();
        console.log(calculation);
    }
}

nextBtn.addEventListener('click', callValue);

function boxControl(){
    if(questionNum === 2){
        questionnumber.children[0].classList.remove('highlight');
        questionnumber.children[1].classList.add('highlight');
        questions.innerHTML = '<h1 class="questions">Q2<br>이 중 어느 집에서 살고 싶은가요?</h1>';
        box1.classList.replace('one', 'four');
        box2.classList.replace('two', 'five');
        box3.classList.replace('three', 'six');
    }else if(questionNum === 3){
        questionnumber.children[1].classList.remove('highlight');
        questionnumber.children[2].classList.add('highlight');
        questions.innerHTML = '<h1 class="questions">Q3<br>야식으로 먹고 싶은 음식은?</h1>';
        box1.classList.replace('four', 'seven');
        box2.classList.replace('five', 'eight');
        box3.classList.replace('six', 'nine');
    }else if(questionNum === 4){
        questionnumber.children[2].classList.remove('highlight');
        questionnumber.children[3].classList.add('highlight');
        box1.classList.remove('seven');
        box2.classList.remove('eight');
        box3.classList.remove('nine');
        questions.innerHTML = '<h1 class="questions">Q4<br>당신의 취미는 무엇인가요?</h1>';
        sentence1.textContent = '독서, 공부, 음악 감상 같이 집 안에서 조용히 할 수 있는 것';
        sentence2.textContent = '축구, 농구, 등산 같은 운동';
        sentence3.textContent = '쇼핑이나 드라이브 등 육체적인 활동을 요구하진 않지만 가볍게 할 수 있는 야외 활동';
    }else if(questionNum === 5){
        questionnumber.children[3].classList.remove('highlight');
        questionnumber.children[4].classList.add('highlight');
        questions.innerHTML = '<h1 class="questions">Q5<br>생일날 받고 싶은 선물은 무엇인가요?</h1>';
        sentence1.textContent = '마음이 담긴 선물이라면 어떤 것이든 좋다';
        sentence2.textContent = '예쁘기만 한게 아니라 실용성이 있는 물건';
        sentence3.textContent = '현금이 최고!'; 
    }else if(questionNum === 6){
        questionnumber.children[4].classList.remove('highlight');
        questionnumber.children[5].classList.add('highlight');
        questions.innerHTML = '<h1 class="questions">Q6<br>몇명이서 여행을 가고 싶은가요?</h1>';
        sentence1.textContent = '혼자서 조용히 떠나는 여행';
        sentence2.textContent = '마음이 맞는 한 두 사람과 떠나는 여행';
        sentence3.textContent = '여러명의 사람들과 함께 복닥거리며 떠나는 여행'; 
    }else if(questionNum === 7){
        questionnumber.children[5].classList.remove('highlight');
        questionnumber.children[6].classList.add('highlight');
        questions.innerHTML = '<h1 class="questions">Q7<br>가장 맘에 드는 명언은?</h1>';
        sentence1.textContent = `"끊임없이 떨어지는 물방울이 바위에 구멍을 낸다"`;
        sentence2.textContent = `"산다는것 그것은 치열한 전투이다"`;
        sentence3.textContent = `"좋아하는 것에 이유를 찾지 말자"`;
    }else{
        localStorage.setItem(MBTI, calculation);
        location.replace("result.html");
    }
}