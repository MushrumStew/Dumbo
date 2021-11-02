var randx = 5;
var randy = 5;

function hellohihi(){
	randx++;
	window.moveTo(randx,randy);
	setTimeout('hellohihi()',10);
}