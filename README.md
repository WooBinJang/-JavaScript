# -JavaScript

REOL
=> Read Evaluate Print Loop

"" , '', `` 감싸면 문자타입 (작은따음표 추천)
true / false  boolean타입
NaN = not a Number
NaN == NaN => false
1 == '1' => true
1 === '1' => false
자바스크립트에서 비교할땐 === 를 사용하는 걸 추천한다.
예외) NaN === NaN => false

var(variable) 변수
var 변수이름 = 값;
변수명에는 $,_를 제외한 특수문자 X , 첫 글자에서 숫자 X

자료형: 숫자(NaN) 문자 불린 undefined null
undefined : 컴퓨터가 넣은 빈값
null : 사용자가 일부러 넣은 빈값 (null만 사용을 추천)

조건문         
if (조건){
	
} else{
	
}

반복문 
1. while(조건) {
}

2. for(처음 ; 조건; 증가;){
	
}

함수
prompt()  창에서 값 입력
Number()  타입을 숫자형타입으로 변환
String()  타입을 문자형타입으로 변환
console.log() 콘솔에 값 출력
alert()   창에서 값 출력
repeat()   문자열을 반복한 값을 반환
Array.isArray()  true/false array 인지 아닌지 확인

'문자1' + '문자2'=> '문자1문자2'  => 문자 + 문자 가능
'문자1' + 5 => '문자25' => 문자 + 숫자를 더하면 문자가 가능

'함수야놀자'[2] => "야"
자바스크립트는 인덱스 0부터 시작한다.
.length  글자 길이

function 함수(x,y) {
	return x+y+5; 
}

var 객체 = {
	속성(프로퍼티) : 값,
	속성(메서드) : 함수  // 속성안에 함수가 있을 경우 메서드라고 불린다.
}  
값 그룹화를 하고 속성을 따로 주고 싶을때 객체를 쓴다.
객체에서 값을 호출할때  .속성 or  ['속성'] 으로 호출 가능하다 
단, 대괄호안에서는 변수를 쓸 수 있지만 . 뒤에는 변수를 쓸 수 없다.

배열 
var 배열 = [

] 
값 그룹화를 하고 속성이름을 따로 주고 싶지 않을때 배열을 쓴다
