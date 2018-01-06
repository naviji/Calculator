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

// function findPriority(operator) {
// 	switch(operator) {
// 		case "+":
// 		case "-":
// 			return 1;
// 		case "*":
// 		case "/":
// 			return 2;

// 	}
// }

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

let a = '';
let b = '';
let op = '';

let opWasPrev = false;
let isFirstNum = true;

const result = document.getElementById("result");
// const previous = document.getElementById("previous");

// previous.innerText = "";
result.innerText = "";


const numBtns = document.querySelectorAll(".numbers");

numBtns.forEach(btn => {
	btn.addEventListener('click', function(e) {
		if(opWasPrev) {
			result.innerText = btn.value;
			opWasPrev = false;
		}
		else
			result.innerText += btn.value;
	});
} );

const opBtns = document.querySelectorAll(".operators");
console.log(opBtns);

opBtns.forEach(btn => {
	btn.addEventListener('click', function(e) {
		if (isFirstNum) {
			a = result.innerText;
			op = btn.value;
			opWasPrev = true;
			isFirstNum = false;
		}
		else {
			b = result.innerText;
			result.innerText = operate(op,Number(a),Number(b));
			a = result.innerText;
			op = btn.value;
			opWasPrev = true;
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
		opWasPrev = true;
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
	// previous.innerText = "";

} );

// const clearCurrentBtn = document.querySelector("#clearCurrent");
// clearCurrentBtn.addEventListener('click', function(e) {
// 	result.innerText = "";
// } );

const dotBtn = document.querySelector(".dot");
dotBtn.addEventListener('click',function(e) {
	if(!(result.innerText.indexOf(".") > -1))
		result.innerText += dotBtn.value;
});