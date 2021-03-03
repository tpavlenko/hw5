/*5. напиши функцию filter, которая принимает функцию - предикат и массив.
Возвращает она массив значений, для которых предикат вернет true.

var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]*/

// var input = [1, 2, 3, 4, 5, 6];

// function filter(input, callback) {
// 	for (var x = 0, size = input.length; x < size; x++) {
// 		return callback(input[x]);
// 	}
// }



var input = [1, 2, 3, 4, 5, 6];

function filter(input, callback) {
	var arr = [];

	for (var i = 0, size = input.length; i < size; i++) {
		var x = input[i];
		if (callback(x) === true) {
			arr.push(x);
		}
	}
	return arr;
}

function isEven(x) {
	return x % 2 == 0;
}

var result = filter(input, isEven);

console.log(result);