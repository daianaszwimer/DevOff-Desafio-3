let colorSelected = "black"
let lineSelected = 2
const draw = () => {
	let isDrawing = false;
	let x = 0;
	let y = 0;

	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');

	canvas.addEventListener('mousedown', e => {
		e.preventDefault()
		x = e.offsetX;
		y = e.offsetY;
		isDrawing = true;
	});

	canvas.addEventListener('mousemove', e => {
		e.preventDefault()
		if (isDrawing === true) {
			drawLine(context, x, y, e.offsetX, e.offsetY);
			x = e.offsetX;
			y = e.offsetY;
		}
	});

	window.addEventListener('mouseup', e => {
		e.preventDefault()
		if (isDrawing === true) {
			drawLine(context, x, y, e.offsetX, e.offsetY);
			x = 0;
			y = 0;
			isDrawing = false;
		}
	});

	function drawLine(context, x1, y1, x2, y2) {
		context.beginPath();
		context.strokeStyle = colorSelected
		if (colorSelected === "multicolor") {
			context.strokeStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
		}
		context.strokeStyle = colorSelected
		context.lineWidth = lineSelected;
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
		context.closePath();
	}
}

const chooseColor = colorName => {
	if (colorName !== colorSelected) {
		document.getElementById(colorName).style.border = "5px solid darkgrey"
		document.getElementById(colorSelected).style.border = "none"
	}
	colorSelected = colorName
}
const getLineElement = value => {
	let element
	switch(value) {
		case 2:
			element = document.getElementById("very-small")
			break
		case 4:
			element = document.getElementById("small")
			break
		case 6:
			element = document.getElementById("medium")
			break
		case 8:
			element = document.getElementById("big-medium")
			break
		case 10:
			element = document.getElementById("big")
			break
	}
	return element
}

const chooseLine = lineSize => {
	if (lineSize !== lineSelected) {
		getLineElement(lineSize).style.backgroundColor = "darkgrey"
		getLineElement(lineSelected).style.backgroundColor = "black"
	}
	lineSelected = lineSize
}