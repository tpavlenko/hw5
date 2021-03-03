//  Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.

//  'func("hello world", ['l', 'd'])' вернет нам "heo wor"



function getCutSymbols(str, arrDeleted) {
	var arrString = [];
	arrString = str.split("");

	for (var i = 0; i < arrDeleted.length; i++) {
		var symbolDeleted = arrString.indexOf(arrDeleted[i]);

		if (symbolDeleted >= 0) {
			arrString.splice(symbolDeleted, 1);
			i--;
		}
	}

	var resultString = arrString.join('');

	return resultString;
}

var result = getCutSymbols("hello world", ['l', 'd']);

console.log(result);