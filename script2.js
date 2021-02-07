//     2. написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая - должен вернутся функцией.

var a = [1, 'n', 2, 3, 4, 5];
var b = [6, 'f', 7, 8, 9, 10];

function lagerFunctionSum(a, b) {
	var sumA = massSum(a);
	var sumB = massSum(b);

	if (sumA > sumB) {
		return a;
	}
	else {
		return b;
	}
}

function massSum(arguments) {
	for (var i = 0, sum = 0, size = arguments.length; i < size; i++) {
		if (!isNaN(arguments[i])) {
			sum += arguments[i];
		}
	}
}

var result = lagerFunctionSum(a, b);

console.log(result);