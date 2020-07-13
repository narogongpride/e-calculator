let prevNumber = '';
let	calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
	calculatorScreen.value = number
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number;
	}	
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	});
});

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '0';
};

const equalSign = document.querySelector('.equal-sign');

const calculate = () => {
	let result = '';
	switch(calculationOperator) {
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case '-':
			result = prevNumber - currentNumber
			break
		case '*':
			result = prevNumber * currentNumber
			break
		case '/':
			result = prevNumber / currentNumber
			break
		default:
			return
	};
	currentNumber = result;
	calculationOperator = '';
};

equalSign.addEventListener("click", () => {
	calculate();
	updateScreen(currentNumber);
});

const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
	prevNumber ='';
	calculationOperator = '';
	currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentNumber);
});

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

inputDecimal = (dot) => {
	if(currentNumber.includes('.')){
		return
	}
	currentNumber += dot
};

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
	percentageNumber(event.target.value);
	updateScreen(currentNumber);
})

const percentageNumber = () => {
	if (currentNumber === '0') {
		return;
	}
	currentNumber = currentNumber /100;
};
