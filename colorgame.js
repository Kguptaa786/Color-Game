var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var numSquares=6;
var modeButtons=document.querySelectorAll(".mode");	                         	

for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?numSquares=3:numSquares=6;	
		reset();
	});
}

function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];	
		}
		else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
})

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedColor){
			messageDisplay.textContent="Correct";
			chageColors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
			resetButton.textContent="Play again?";
		}
		else{
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent="Try Again!";
		}
	});

}

function chageColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}