/*capitalize = function(str1){
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}
    
 console.log(capitalize('i am a web developer'));*/

 /*Intermdeiate 2*/

 /*function takeTheVal() {
   var Math = document.getElementById('input1').value;
   var Physics = document.getElementById('input2').value;
   var English = document.getElementById('input3').value;
   	var result = Math*1 + Physics*1 + English*1;
   	
	console.log(result);
	document.write('Sum ' + result + ' ');
	document.write('<br> Average ' + result/3 + ' ');

	return result;
   	
}
document.getElementById('btn').addEventListener('click', takeTheVal);*/

//Advanced 1

function timeconvert(minutes){
	var hour = minutes/60;
	var remainder = minutes % 60;
	console.log((Math.floor(hour)),remainder);
	document.write(" " hour " " + remainder + "minutes " )
	
}

timeconvert(200);
