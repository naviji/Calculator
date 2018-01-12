function add(a,b) {
	return a+b;
}

function subtract(a,b) {
	return a-b;
}

function multiply(a,b) {
	return a*b;
}

function divide(a,b) {
	return a/b;
}


function operate(operator,a,b) {
	console.log(operator);
	switch(operator) {

		case "add": 
			return add(a,b);
		case "subtract": 
			return subtract(a,b);
		case "multiply": 
			return multiply(a,b);
		case "divide": 
			return divide(a,b);
		default: console.log("Error!");
	}
	
}

const MAX_LENGTH = 19;

let a = '';
let b = '';
let op = '';

let opWasPrev = false;
let isFirstNum = true;
let equalWasPrev = false;

const result = document.getElementById("result");
// const previous = document.getElementById("previous");

// previous.innerText = "";
result.innerText = "";


const numBtns = document.querySelectorAll(".numbers");

numBtns.forEach(btn => {
	btn.addEventListener('click', function(e) {
		if (result.innerText.length < MAX_LENGTH) {

			if(opWasPrev || equalWasPrev) {
				result.innerText = btn.value;
				opWasPrev = false;
				equalWasPrev = false;
			}
			else
				result.innerText += btn.value;
		}

		
	});
} );

const opBtns = document.querySelectorAll(".operators");
console.log(opBtns);

opBtns.forEach(btn => {
	btn.addEventListener('click', function(e) {
		if((!opWasPrev)) {
			if (isFirstNum  || equalWasPrev) {
				a = result.innerText;
				op = btn.value;
				opWasPrev = true;
				isFirstNum = false;
				equalWasPrev = false;
			}
			else {
				b = result.innerText;
				result.innerText = operate(op,Number(a),Number(b));
				a = result.innerText;
				op = btn.value;
				opWasPrev = true;
			}
		}
		// previous.innerText += ' ' + a + ' ' + btn.innerText;
		
	});
} );

const equalBtn = document.querySelector("#equal");
console.log(equalBtn);
equalBtn.addEventListener('click', function(e) {
	if (!isFirstNum) {
		b = result.innerText;
		result.innerText = operate(op,Number(a),Number(b));
		isFirstNum = true;
		// opWasPrev = true;
		equalWasPrev = true;
	}
});

const clearBtn = document.querySelector("#clear");
console.log(clearBtn);
clearBtn.addEventListener('click', function(e) {
	result.innerText = "";
	a = "";
	b = "";
	op = "";
	opWasPrev = false;
	isFirstNum = true;
	equalWasPrev = false;
	// previous.innerText = "";

} );


const dotBtn = document.querySelector(".dot");
dotBtn.addEventListener('click',function(e) {
	if(!(result.innerText.indexOf(".") > -1))
		result.innerText += dotBtn.value;
});


const backspace = document.querySelector("#backspace");
backspace.addEventListener('click',function(e) {
	if(result.innerText)
		result.innerText = result.innerText.slice(0,-1);
});
