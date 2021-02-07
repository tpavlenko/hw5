// 1. Написать функцию заполнения массива. Имя произвольное.

function arrayFiller(arr, sizeI, sizeJ) {
	for (var i = 0; i < sizeI; i++) {
		arr[i] = new Array(sizeJ);

		for (var j = 0; j < arr[i].length; j++) {
			arr[i][j] = Math.floor(Math.random() * 5);
		}
	}

	return arr;
}

var filledArray = arrayFiller([], 5, 5);

console.log(filledArray);