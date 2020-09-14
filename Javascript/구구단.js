var count =0;
var countx = 0;
while(count <=10) {
	var 숫자1 = Math.floor(Math.random() * 9)+1; // Math.floor 내림 , Math.random() 0~1 사이의 값이 랜덤하게 나온다.
	var 숫자2 = Math.ceil(Math.random() * 9); //Math.ceil 올림
	var 결과 = 숫자1 * 숫자2;
	var 조건 = true;
	while (조건) {
		var 답 = prompt(숫자1 + ' 곱하기 ' + 숫자2 + ' 는?')
		if( 결과 === Number(답)) {
		 	alert('딩동댕');
		 	count++;
		 	조건 = false;
		} else{
			alert('땡');
			countx++;
			if(countx === 3){
				alert('3번이상 틀렸습니다 반성하세요!!!')
				조건 = false;
				count = 100;
			}
		}
	}
}