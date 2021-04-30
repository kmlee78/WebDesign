const tomain = document.querySelector('.tomain');
const picture = document.querySelector('.picture');
const profile = document.querySelector('.profile');
const question = document.querySelector('#question');

let givenNumber = localStorage.getItem('idolnumber');
let index = 0;
let idolArray = ['serika','emily','hinata','yuriko','roko','anna','subaru','momoko',
                'konomi','iku','tamaki','kana','mirai','miya','sayoko','mizuki','sizuka',
                'tomoka','siho','akane','tsubasa','umi','arisa','nao','ayumu','noriko',
                'karen','huka','kotoha','chizuru','kaori','minako','matsuri','tsumugi',
                'julia','ellena','megumi','reika','rio'];
let idolName = ['하코자키 세리카','에밀리 스튜어트','키노시타 히나타','나나오 유리코','로코',
                '모치즈키 안나','나가요시 스바루','스오 모모코','바바 코노미','나카타니 이쿠',
                '오오가미 타마키','야부키 카나','카스가 미라이','미야오 미야','타카야마 사요코',
                '마카베 미즈키','모가미 시즈카','텐쿠바시 토모카','키타자와 시호',
                '노노하라 아카네','이부키 츠바사','코우사카 우미','마츠다 아리사',
                '요코야마 나오','마이하마 아유무','후쿠다 노리코','시노미야 카렌',
                '토요카와 후카','타나카 코토하','니카이도 치즈루','사쿠라모리 카오리',
                '사타케 미나코','토쿠가와 마츠리','시라이시 츠무기','줄리아','시마바라 엘레나',
                '토코로 메구미','키타카미 레이카','모모세 리오'];        

let standard = 1000000;
var checkNumber = [];
for(let i = 0; i < 7; i++){
    checkNumber[i] = Math.floor(givenNumber / standard);
    givenNumber = givenNumber - (checkNumber[i] * standard);
    standard /= 10;
}
switch(checkNumber[0]){
    case 1: index = 0; break;
    case 2: index = 13; break;
    case 3: index = 26; break;
    default: index = 0;
}
for(let j = 1; j < 7; j++){
    index += checkNumber[j]-1;
}

console.log(idolArray[index]);
question.textContent = localStorage.getItem('username') + 'P의 담당은: ' + idolName[index];
picture.classList.add(idolArray[index]);
profile.classList.add(idolArray[index] + '2');

tomain.addEventListener('click', function(e){
    localStorage.removeItem('username');
    localStorage.removeItem('idolnumber');
    location.replace("../index.html");
});