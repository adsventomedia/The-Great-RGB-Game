var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i =0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
        this.classList.add("selected"); 
        if(this.textContent === "Easy"){
        	numSquares = 3;
        }else{
        	numSquares = 6;
        }
        reset();
    })

}
 function reset(){
    //generate new colors
	colors = generateRandomColors(numSquares);
	messageDisplay.textContent = "";
	//pick a new random color from array
	pickedColor = pickColor();
	//change the display value of h1 rgb to picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//change the color of sqaures
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	//reset the background of h1
	h1.style.background = "steeleblue";
 }

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for( var i = 0; i < squares.length; i++){
// 			if(colors[i]){
// 			squares[i].style.background =colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		 }
//     }
	
// })

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for( var i = 0; i < squares.length; i++){
// 			squares[i].style.background =colors[i];
// 			squares[i].style.display = "block";
// 		}
// })

resetButton.addEventListener("click",function(){
	reset();
})

colorDisplay.textContent = pickedColor;



for(var i = 0; i < squares.length; i++){
	// add initial colors to the squares
	squares[i].style.background = colors[i];

	// add click listeners to the squares
	squares[i].addEventListener("click", function(){
        // grab color of picked square
        var clickedColor = this.style.background;
    	// compare color to pickedColor
           if(clickedColor === pickedColor){
           	messageDisplay.textContent = "Correct!";
           	changeColor(clickedColor);
           	h1.style.background = clickedColor;
           	resetButton.textContent = "Play Again?"
           }
           else{
           	this.style.background = "#232323";
           	messageDisplay.textContent = "Try Again!";
           } 
	});
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function generateRandomColors(num){
	//make and array
	var arr = [] 
	//repeat num times
	for( var i = 0; i < num; i++){
		//push rando color into that array
		arr.push(randomColor());
	}
	
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()*256)
	//pick a green from 0-255
	var g = Math.floor(Math.random()*256)
	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256)
      return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
} 