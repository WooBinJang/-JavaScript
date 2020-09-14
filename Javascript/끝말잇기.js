var startString = '바나나'; 
var count =0;
while(true) {
var String = prompt(startString);
if(String.length===3&&String[0]===startString[startString.length-1]){  
    startString = String;
} else{
    count = count+1 // count++; 도 가능
    if(count ==3 ){
    alert('3번이상 틀렸습니다. 벌칙을 받으세요!!')    
break;    
		}
	}
}