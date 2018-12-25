var numSquares= 6;
var colors= generateRandomColors(numSquares);

var squares= document.querySelectorAll(".square");
//correct color
var pickedColor= pickColor();
var displayColor=document.getElementById('displayColor')
displayColor.textContent=pickedColor;
// displaying correct and tryagain
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var easyBtn= document.querySelector("#easy");
var hardBtn= document.querySelector("#hard");

//easy button
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	displayColor.textContent=pickedColor;
	for(i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});
//hard button
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	for(i=0;i<squares.length;i++){
	
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		
		
	}
});


//reset button
var button= document.querySelector("#reset");
// on clicking new colors button
  button.addEventListener("click", function(){
  	// generate 6 random colors
	 colors= generateRandomColors(numSquares);
	 //pick a random color among them
	 pickedColor= pickColor();
	 // display rgb in h1
	displayColor.textContent=pickedColor;
	this.textContent="New Colors";
	// loop through squares and assign colors
	for(var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent=" ";
  });

//looping through squares and assigning color to each square
for( var i=0; i<squares.length; i++){
squares[i].style.backgroundColor=colors[i];
//selecting color of each square and comparing it with correct color
squares[i].addEventListener("click", function(){
	var clickedColor= this.style.backgroundColor;
	console.log(clickedColor, pickedColor);
	if(clickedColor===pickedColor){
		messageDisplay.textContent="Correct";
		changeColors();
		h1.style.backgroundColor=pickedColor;
		button.textContent="Play again?"

	}
	else{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="Try again";
	}
});
}
// change color of all squares to correct color on clicking the correct square
function changeColors(){
	for(var i=0; i< squares.length; i++){
		squares[i].style.backgroundColor= pickedColor;
	}
}
// select a random color among array of 6 colors i,e colors array
function pickColor(){
  var random= Math.floor( Math.random() * colors.length);
  return colors[random];
}
// generate num random colors
function generateRandomColors(num){
	// create array
	var arr=[];
	// num random colors
	for(var i=0; i<num; i++){
		//push num random color to array
       arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// generate random numbers from 0 to 255 for r, g, b
	var r= Math.floor(Math.random() *256);
	var g= Math.floor(Math.random() *256);
	var b= Math.floor(Math.random() *256);
      // return string in the form (r, g, b)
	var rgbValue= "rgb(" + r + ", " + g + ", " + b + ")";
	return rgbValue;
}