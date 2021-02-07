//  Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.

//  'func("hello world", ['l', 'd'])' вернет нам "heo wor"

var str = "hello world";

// function getCutSymbols(str, arrDeleted) {
var arrString = [];
arrString = str.split("");
var arrDeleted = ['l', 'd'];
for (var i = 0; i < arrDeleted.length; i++) {
	var symbolDeleted = arrDeleted.indexOf(arrDeleted[i]);
	if (arrString[i] != symbolDeleted[i]) {
		var spliced = arrString.splice(arrString[i]);
		return spliced;
	}
}
var result = getCutSymbols("hello world", ['l', 'd']);
console.log(result);