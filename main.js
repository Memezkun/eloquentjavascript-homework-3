'use strict'

/*Напишите функцию range, которая принимает два аргумента, start и end,
и возвращает массив, содержащий все числа от start до end включительно.*/

/*function range(start, end) {
	let result = new Array;
	while (start <= end) {
		result.push(start);
		start += 1;
	}
	console.log(result);
}
range(1,10);*/


/*Затем напишите функцию sum, которая принимает массив чисел и возвращает
их сумму. Запустите пример программы и посмотрите, действительно
ли она возвращает 55.*/

/*function sum(array) {
	let result = 0;
	for (let number of array) {
		result = result + number;
	}
	console.log(result);
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);*/

/*Для выполнения этого упражнения напишите две функции: reverseArray и 
reverseArrayinPlace. Первая функция, reverseArray,
принимает массив в качестве аргумента и создает новый массив, содержащий
те же элементы в обратном порядке. Вторая, reverseArrayinPlace, делает
то же, что и метод reverse: преобразовывает массив, заданный в качестве
аргумента, меняя порядок следования его элементов на обратный. Не 
используйте для этого стандартный метод reverse.*/

/*function reverseArray(array) {
	const reverse = array.reverse();
	console.log(reverse);
}

reverseArray([1,2,3,4]);*/

/*function reverseArrayinPlace(array) {
	let reverse = [],
		lenght = array.length;

	for (let i = 0; i < lenght; i++) {
		reverse[i] = array.pop();
	}
	console.log(reverse);
}

reverseArrayinPlace([1,2,3,4,5,6,7,8,9,10,11,12]);*/

/*Напишите функцию arrayToList, которая строит список, чья структура
подобна показанной, если передать функции массив [1, 2, з] в качестве
аргумента.*/

/*function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  console.log(list);
}*/

/*Напишите также функцию listToArray, создающую массив из
списка. */

/*let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};*/

/*function listToArray(node) {
	let array = [];
	for (let list = node; list; list = list.rest) {
		array.push(list.value);
	}
	console.log(array);
}

listToArray(list);*/


/*Затем добавьте вспомогательную функцию prepend, принимающую
элемент и список и создающую новый список, в котором заданный элемент
добавлен в начало исходного списка.*/

// function prepend(elem, list) {
// 	let newList = {
// 		value: elem,
// 		rest: list,
// 	}
// 	console.log(newList);
// }

// prepend(8, list);

/*Кроме того, создайте функцию nth,
принимающую список и число и возвращающую элемент, находящийся в заданной
позиции в этом списке (где ноль соответствует первому элементу),
или undefined, если элемента в заданной позиции не существует*/

/*function nth(node, index) {
	let array = [];
	for (let list = node; list; list = list.rest) {
		array.push(list.value);
	}
	console.log(array[index]);
}

nth(list, 6);
*/

/*Напишите функцию deepEqual, которая принимает два значения и возвращает
true, только если эти объекты имеют одинаковое значение или
являются объектами с одинаковыми свойствами и значения свойств равны
при сравнении с рекурсивным вызовом deepEqual.*/

/*function deepEqual(elem1, elem2) {
	if (typeof(elem1) == typeof(elem2)) {
		console.log(true);
	} else {
		console.log(false);
	}
};
*/
