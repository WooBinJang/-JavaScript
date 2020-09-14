var 바디 = document.body;   // body 선택
//document는 window가 지원하는 객체   html를 자바스크립트 언어로 번역하는 통역사 역활  DOM(Document Object Model)객체 
var 단어 = document.createElement('div'); //createElement 태그 새로 만들기
단어.textContent = '바나나'; 
document.body.append(단어); // append  태그 추가
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수 (e){
	e.preventDefault();
	if(입력창.value[0]===단어.textContent[단어.textContent.length-1]){  
		결과창.textContent = '딩동댕';
		단어.textContent= 입력창.value;
		입력창.value= '';	
		입력창.focus();
	} else {
		결과창.textContent = '땡';
		입력창.value= '';	
		입력창.focus();
	} 
	
});
