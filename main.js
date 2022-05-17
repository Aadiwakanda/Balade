//Create a reference for canvas 
canvas = document.getElementById("My_canvas")
ctx = canvas.getContext("2d")
//Give specific height and width to the car image

car_width = 70
car_height = 180

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carX = 10
carY = 10

function add() {
	//upload car, and background images on the canvas.
	bg_img = new Image()
	bg_img.onload = uploadBackground
	bg_img.src = background_image

	rover_bgimg = new Image()
	rover_bgimg.onload = uploadgreencar
	rover_bgimg.src = greencar_image
}

function uploadBackground() {
	ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height)
	//Define function ‘uploadBackground’

}

function uploadgreencar() {

	ctx.drawImage(rover_bgimg, carX, carY, car_width, car_height)
	//Define function ‘uploadgreencar’.


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (carY >= 0) {
		carY = carY - 10
		console.log("when the DOWN key is clicked X=" + carX + ",Y=" + carY)
		uploadBackground()
		uploadgreencar()
	}

}

function down() {
	if (carY <= 500) {
		carY = carY + 10
		console.log("when the DOWN key is clicked X=" + carX + ",Y=" + carY)
		uploadBackground()
		uploadgreencar()
	}
	//Define function to move the car downward
}

function left() {

	if (carX >= 0) {
		carX = carX - 10
		console.log("when the left key is clicked X=" + carX + ",Y=" + carY)
		uploadBackground()
		uploadgreencar()
	}
	//Define function to move the car left side
}

function right() {
	if (carX <= 600) {
		carX = carX + 10
		console.log("when the RIGHT key is clicked X=" + carX + ",Y=" + carY)
		uploadBackground()
		uploadgreencar()
	}
	//Define function to move the car right side
}