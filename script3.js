// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
// В переменной знак может быть: +, -, *, /, %, ^. 
// Вывести результат математического действия, указанного в переменной znak.

function doMath(x, znak, y) {
	var znak;
	switch (znak) {
		case '+':
			return x + y;

		case '-':
			return x - y;

		case '*':
			return x * y;

		case '/':
			return x / y;

		case '%':
			return x % y;

		case '^':
			return x ^ y;
	}
}

var result = doMath(4, '/', 2);

console.log(result);






// var sum = function (a, b) {
// 	return a + b;
// };

// var subtraction = function (a, b) {
// 	return a - b;
// };

// var mull = function (a, b) {
// 	return a * b;
// };

// var div = function (a, b) {
// 	return a / b;
// };

// var remainder = function (a, b) {
// 	return a % b;
// };

// var exponentiation = function (a, b) {
// 	return a ^ b;
// };

// function doMath(a, b, callback) {
// 	return callback(a, b);
// }

// var result = doMath(4, 2, sum);

// console.log(result);