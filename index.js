/*
    1. Функция проверки палиндрома
*/

function checkPalindrom(str) {
	let newStr = [];
	let lowerStr = str.toLowerCase();

	for (let i = lowerStr.length - 1; i >= 0; i--) {
		newStr.push(lowerStr[i]);
	}

	if (lowerStr === newStr.join("")) {
		console.log("Это палиндром");
	} else console.log("Это не палиндром");
}

// checkPalindrom("Шалаш");

// вторая реализация
function isPalindrom(str) {
	let arr = str.split("");
	let reversArr = arr.reverse();
	let resString = reversArr.join("");

	let res = str === resString;
	return res;
}
// console.log(isPalindrom('шалаш'));

/*
    2. Функция поиска самого короткого слова
*/
function findShort(str) {
	let arr = str.split(" ");
	let shortestWord = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length < shortestWord.length) {
			shortestWord = arr[i];
		}
	}
	return shortestWord;
}

// console.log(findShort("The smallest word in sentence"));

// 2 вариант
function findShortSecond(str) {
	let wordsArr = str.split(" ");
	let sortedWordsArr = wordsArr.sort(function (a, b) {
		return a.length - b.length;
	});
	return sortedWordsArr[0];
}

// console.log(findShortSecond("The smallest word in sentence"));

/*
    3. Функция возврата заглавных букв строки.
*/

function getCapitalsLetters(str) {
	let arr = str.split("");
	let resArr = arr.filter(el => {
		return el === el.toUpperCase();
	});
	let resStr = resArr.join("");
	return resStr;
}
// console.log(getCapitalsLetters('АвапВАПпсГГШШшш'));

/*
    4. Функция создания инициалов
*/

function toInitials(str) {
	let resArr = [];
	let nameArr = str.split(" ");

	for (let i = 0; i < nameArr.length; i++) {
		resArr.push(nameArr[i][0].toUpperCase());
		resArr.push(".");
	}
	return resArr.join("");
}
// console.log(toInitials('elon mask'));

// 2 вариант
function toInitialsSecond(name) {
	let nameArr = name.split(" ");

	let firstLetterArr = nameArr.map(el => {
		return el.slice(0, 1).toUpperCase() + ".";
	});

	let initials = firstLetterArr.join("");
	return initials;
}
// console.log(toInitialsSecond('elon mask'));

/*
    5. Функция вывода чисел от 1 до n

    Условие: Напишите функцию на JavaScript, которая принимает один аргумент n и выводит все числа от 1 до n включительно.
    Дополнительно, функция должна выводить foo вместо чисел кратных 3, должна выводить bar вместо чисел, кратных 5 и должна выводить foobar вместо чисел, одновременно кратных и 3, и 5
*/
function printNumbers(n) {
	for (let i = 1; i <= n; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			console.log("foobar");
		} else if (i % 3 === 0) {
			console.log("foo");
		} else if (i % 5 === 0) {
			console.log("bar");
		} else {
			console.log(i);
		}
	}
}
// printNumbers(20);

/*
    6. Функция возврата уникальных значений из нескольких массивов;
    Условие: Напишите функцию на JavaScript, которая принимает несколько массивов в качестве аргументов и возвращает массив, 
    содержащий только уникальные значения из всех переданных массивов.
*/
function getUniqueValues(arr1, arr2, arr3) {
	const combinedArr = [...arr1, ...arr2, ...arr3];
	let res = combinedArr.filter(element => combinedArr.indexOf(element) === combinedArr.lastIndexOf(element));
	return res;
}

var array1 = [1, 2, 3];
var array2 = [2, 3, 4, 5];
var array3 = [3, 4, 5, 6, 7];

getUniqueValues(array1, array2, array3);

/*
    7. Функция суммирования всех цифр числа;

*/
function sumDigits(num) {
	let arr = num.toString().split("");
	let numsArr = [];
	let sum = [];

	if (arr[0] === "-") {
		arr.shift();
	}

	numsArr = arr.map(Number);
	sum = numsArr.reduce((total, amount) => total + amount);
	return sum;
}

// console.log(sumDigits(-123));

// 2 вариант
function sumDigitsSecond(num) {
	let moduleNumber = Math.abs(num);
	let str = moduleNumber.toString();
	let arr = str.split("");

	let res = arr.reduce((total, amount) => {
		return Number(total) + Number(amount);
	}, 0);

	return res;
}

// console.log(sumDigitsSecond(-123));

/*
   8. Функция поиска мин и макс значения в массиве

*/
function minMax(arr) {
	let res = [];
	let assumedMin = arr[0];
	let assumedMax = arr[arr.length - 1];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < assumedMin) {
			assumedMin = arr[i];
		}
	}

	for (let i = arr.length - 2; i >= 0; i--) {
		if (arr[i] > assumedMax) {
			assumedMax = arr[i];
		}
	}

	res.push(assumedMin, assumedMax);
	return res;
}

// console.log(minMax([2, 9, 10, 25, 47, 4, 1]))
// [2, 9, 10, 25, 47, 4, 1]
// [2, 1]

// 2 вариант
function minMaxSecond(arr) {
	let res = [];
	let minValue = Math.min(...arr);
	let maxValue = Math.max(...arr);

	res.push(minValue, maxValue);
	return res;
}
// console.log(minMaxSecond([1]))

/*
   9. Функция создания набора дубликатов символов строки;

*/
function accum(str) {
	let strArr = str.split("");
	let res = null;

	const duplicateArr = strArr.map((el, id) => {
		return el.toUpperCase().repeat(id + 1);
	});

	const arr = duplicateArr.map(el => {
		return el.charAt(0) + el.slice(1).toLowerCase();
	});

	res = arr.join("-");
	return res;
}

// console.log(accum('abcd'));
// 'cwAt'

// 2 вариант
function accumSecond(str) {
	let arr = str.toUpperCase().split("");

	let repeatArr = arr.map((el, i) => {
		return (el += el.repeat(i).toLowerCase());
	});

	let resString = repeatArr.join("-");
	return resString;
}

// console.log(accumSecond('cwAt'))

/*
   10. Функция трансформации букв в заглавный регистр

   Условие: Напишите функцию, которая принимает строку в качестве аргумента и возвращает новую строку, в которой все буквы преобразованы в заглавный регистр.

*/

function transformLetters(str) {
	let arr = str.split("");
	let res = arr.map(el => {
		return el.toUpperCase();
	});
	let resStr = res.join("");
	return resStr;
}

// console.log(transformLetters('javascript is awesome'));

// CODE WARS
/*
   11. Capitalizing every word

   Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
   Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
// 1 вариант
const jadenCasedStrings = function (str) {
	const arr = str.split(" ");
	let res = null;
	res = arr
		.map(el => {
			return el[0].toUpperCase() + el.slice(1);
		})
		.join(" ");

	return res;
};
// console.log(jadenCasedStrings("How can mirrors be real if our eyes aren't real"));
// 2 вариант
String.prototype.toJadenCase = function () {
	return this.split(" ")
		.map(item => item[0].toUpperCase() + item.slice(1))
		.join(" ");
};

/*
   12. Digital Root

  Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

    Examples
        16  -->  1 + 6 = 7
        942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
        132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
        493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
function digitalRoot(n) {
	let nArr = n.toString().split("");
	if (nArr.length <= 1) {
		return n;
	} else {
		let arrNum = nArr.map(Number);
		return digitalRoot(arrNum.reduce((total, amount) => total + amount, 0));
	}
}
// console.log(digitalRoot(942));

/*
   13. You're a square!

   You just have to check if your number of building blocks is a perfect square.

    Examples
    -1  =>  false
     0  =>  true
     3  =>  false
     4  =>  true
    25  =>  true
    26  =>  fals    
*/
var isSquare = function (n) {
	if (n < 0) {
		return false;
	}
	if (n === 0) {
		return true;
	} else if (Math.round(Math.sqrt(n)) * Math.round(Math.sqrt(n)) === n) {
		return true;
	} else return false;
};
// console.log(isSquare(25));
// 2 вариант
function isSquare(n) {
	return Math.sqrt(n) % 1 === 0;
}

/*
   14. Printer Errors 7 kyu

    letters not from a to m

    Examples:
    s="aaabbbbhaijjjm"
    printer_error(s) => "0/14"

    s="aaaxbbbbyyhwawiwjjjwwm"
    printer_error(s) => "8/22"
     
*/
function printerError(s) {
	const sArr = s.split("");
	const lettersArray = [];
	let res = [];

	for (let letterCode = 97; letterCode <= 109; letterCode++) {
		lettersArray.push(String.fromCharCode(letterCode));
	}

	let errors = sArr.filter(letter => lettersArray.indexOf(letter) === -1);

	res.push(errors.length + "/" + sArr.length);
	return res.join("");
}

// console.log(printerError('aaabbbbhaijjjm'));

/*
   15. Split Strings 6 kyu

    Complete the solution so that it splits the string into pairs of two characters. 
    If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    Examples:

*   'abc' =>  ['ab', 'c_']
*   'abcdef' => ['ab', 'cd', 'ef']
     
*/
function solution(str) {
	let res = [];

	for (let i = 0; i < str.length; i += 2) {
		res.push(str.slice(i, i + 2));
	}

	if (str.length % 2 !== 0) {
		let lastEl = res.pop();
		res.push(lastEl + "_");
		return res;
	} else return res;
}

// console.log(solution('abc'));

/*
   16. NATO Phonetic Alphabet 7 kyu

    Complete the function word (string) and returns a string that spells the word using the NATO phonetic alphabet.

    There should be a space between each word in the returned string, and the first letter of each word should be capitalized.

    For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.

 Examples
    "hi"      -->  "Hotel India"
    "abc"     -->  "Alpha Bravo Charlie"
    "babble"  -->  "Bravo Alpha Bravo Bravo Lima Echo"
    "Banana"  -->  "Bravo Alpha November Alpha November Alpha"
     
*/

var nato = (function () {
	var letters = {
		A: "Alpha",
		B: "Bravo",
		C: "Charlie",
		D: "Delta",
		E: "Echo",
		F: "Foxtrot",
		G: "Golf",
		H: "Hotel",
		I: "India",
		J: "Juliett",
		K: "Kilo",
		L: "Lima",
		M: "Mike",
		N: "November",
		O: "Oscar",
		P: "Papa",
		Q: "Quebec",
		R: "Romeo",
		S: "Sierra",
		T: "Tango",
		U: "Uniform",
		V: "Victor",
		W: "Whiskey",
		X: "X-ray",
		Y: "Yankee",
		Z: "Zulu",
	};

	return function (word) {
		let arrWord = word.split("");
		let res = [];

		for (let i = 0; i < arrWord.length; i++) {
			if (letters.hasOwnProperty(arrWord[i].toUpperCase())) {
				res.push(letters[arrWord[i].toUpperCase()]);
			}
		}

		return res.join(" ");
	};
})();

// 2 вариант
var nato = (function () {
	var letters = {
		A: "Alpha",
		B: "Bravo",
		C: "Charlie",
		D: "Delta",
		E: "Echo",
		F: "Foxtrot",
		G: "Golf",
		H: "Hotel",
		I: "India",
		J: "Juliett",
		K: "Kilo",
		L: "Lima",
		M: "Mike",
		N: "November",
		O: "Oscar",
		P: "Papa",
		Q: "Quebec",
		R: "Romeo",
		S: "Sierra",
		T: "Tango",
		U: "Uniform",
		V: "Victor",
		W: "Whiskey",
		X: "X-ray",
		Y: "Yankee",
		Z: "Zulu",
	};

	return function (word) {
		return word
			.split("")
			.map(function (v) {
				return letters[v.toUpperCase()];
			})
			.join(" ");
	};
})();

/*
  17. Consider an array/list of sheep where some sheep may be missing from their place. 
  We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
     
*/

function countSheeps(sheep) {
	let count = 0;

	sheep.map(s => {
		if (s === true) {
			count++;
		} else {
		}
	});

	return count;
}
// 2 вариант
function countSheeps(arrayOfSheeps) {
	return arrayOfSheeps.filter(Boolean).length;
}

/*
  18. 
    Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

    If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

    The input data has the following structure:

    [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy', 
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob', 
      status: 'online',
      lastActivity: 104
    }]
    The corresponding output should look as follows:
    
    {
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob']
    }
    If for example, no users are online the output should look as follows:
    
    {
      offline: ['Lucy'],
      away: ['Bob']
    }
*/

const whosOnline = friends => {
	const res = {};

	if (friends.length === 0) {
		return res;
	} else {
		res.online = [];
		res.offline = [];
		res.away = [];

		friends.map(friend => {
			if (friend.status === "offline") {
				res.offline.push(friend.username);
			}
			if (friend.status === "online" && friend.lastActivity > 10) {
				res.away.push(friend.username);
			} else if (friend.status === "online" && friend.lastActivity <= 10) {
				res.online.push(friend.username);
			}
		});

		if (res.online.length === 0) {
			delete res.online;
		}

		return res;
	}
};

// console.log(
//     whosOnline([
//         {
//             username: 'David',
//             status: 'online',
//             lastActivity: 10,
//         },
//         {
//             username: 'Lucy',
//             status: 'offline',
//             lastActivity: 22,
//         },
//         {
//             username: 'Bob',
//             status: 'online',
//             lastActivity: 104,
//         },
//     ]),
// );

/*
  19. Sort array by string length 
    
    Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

    For example, if this array were passed as an argument:
    
    ["Telescopes", "Glasses", "Eyes", "Monocles"]
    
    Your function would return the following array:
    
    ["Eyes", "Glasses", "Monocles", "Telescopes"]
    
    All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

function sortByLength(array) {
	return array.slice().sort((a, b) => a.length - b.length);
}

// console.log(sortByLength(['Beg', 'Life', 'I', 'To']));

/*
  20. Area or Perimeter

    You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
    If it is a square, return its area. If it is a rectangle, return its perimeter.

    Example(Input1, Input2 --> Output):

    6, 10 --> 32
    3, 3 --> 9
*/

const areaOrPerimeter = function (l, w) {
	let r = null;

	if (l === w) {
		return (r = l * w);
	} else {
		return (r = (l + w) * 2);
	}
};

/*
  21. 8 kyu Grasshopper - Array Mean

    Find the mean (average) of a list of numbers in an array.
*/

var findAverage = function (nums) {
	const sum = nums.reduce(function (currentSum, currentNumber) {
		return currentSum + currentNumber;
	}, 0);

	return sum / nums.length;
};

// console.log(findAverage([1, 3, 5, 7]));

/*
  22. 7 kyu Testing 1-2-3

    Write a function which takes a list of strings and returns each line prepended by the correct number.

    The numbering starts at 1. The format is n: string. Notice the colon and space in between.

    Examples: (Input --> Output)

    [] --> []
    ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

var number = function (array) {
	let newArr = [];

	if (array.length === 0) {
		newArr = [];
	} else {
		newArr = array.map((element, index) => {
			return index + 1 + ": " + element;
		});
	}

	return newArr;
};

// console.log(number(['a', 'b', 'c']));

/*
  23. 8 kyu Find the first non-consecutive number

   Your task is to find the first element of an array that is not consecutive.

    By not consecutive we mean not exactly 1 larger than the previous element of the array.

    E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

    If the whole array is consecutive then return null2.
*/

function firstNonConsecutive(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1] - 1) {
			return arr[i + 1];
		}
	}
	return null;
}

// console.log(firstNonConsecutive([1, 2, 3, 4]));

/*
  24. 8 kyu Name Shuffler

   Write a function that returns a string in which firstname is swapped with last name.

    Example(Input --> Output)

    "john McClane" --> "McClane john"
*/

function nameShuffler(str) {
	return str.split(" ").reverse().join(" ");
}

nameShuffler("john McClane");

/*
  25. 8 kyu To square(root) or not to square(root)

    Write a method, that will get an integer array as parameter and will process every number from this array.

    Return a new array with processing every number of the input-array like this:

    If the number has an integer square root, take this, otherwise square the number.

    Example
    [4,3,9,7,2,1] -> [2,9,3,49,4,1]

   
*/

function squareOrSquareRoot(array) {
	let newArr = array.map(el => {
		if (Number.isInteger(Math.sqrt(el))) {
			return (el = Math.sqrt(el));
		} else {
			return (el = el * el);
		}
	});
	return newArr;
}

// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

/*
  26. Even numbers in an array 7 kyu;

    Given an array of numbers, return a new array of length number containing 
    the last even numbers from the original array (in the same order). 
    The original array will be not empty and will contain at least "number" even numbers.

    For example:

    ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
    ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
    ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
   
*/

function evenNumbers(array, number) {
	let res = [];
	let counter = number;

	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] % 2 === 0 && counter > 0) {
			res.push(array[i]);
			counter--;
		}
	}
	return res.reverse();
}

// 2 вариант
// const evenNumbers = (array, number) => array.filter((item) => item % 2 === 0).slice(-number);

// evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2);

/*
  27. Find The Duplicated Number in a Consecutive Unsorted List 7 kyu;

    You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

    The array is unsorted.

    An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

    You should return the duplicate value as a single integer.
   
*/

function findDup(arr) {
	console.log(arr.sort());
	let duplicateValue;
	duplicateValue = arr.filter(elem => {
		return arr.indexOf(elem) !== arr.lastIndexOf(elem);
	});

	return duplicateValue[0];
}

// 2 вариант
// function findDup(arr) {
//     arr.sort();

//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] == arr[i + 1]) {
//             return arr[i];
//         }
//     }
// }

// console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]));

/*
  28. Number of People in the Bus 7 kyu;

    There is a bus moving in the city which takes and drops some people at each bus stop.

    You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

    Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

    Take a look on the test cases.

    Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

    The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

    number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17
    number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21
   
*/

var number = function (busStops) {
	var totalPeople = 0;
	for (var i = 0; i < busStops.length; i++) {
		totalPeople += busStops[i][0];
		totalPeople -= busStops[i][1];
	}
	return totalPeople;
};

// 2 вариант
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// console.log(
//     number([
//         [10, 0],
//         [3, 5],
//         [5, 8],
//     ]),
// );

/*
  29. Compare within margin 8kyu;;

   Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

    Please note the following:

    When a is close to b, return 0.
    For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
    Otherwise...

    When a is less than b, return -1.

    When a is greater than b, return 1.

    If margin is not given, treat it as if it were zero.

    Assume: margin >= 0

    Tip: Some languages have a way to make parameters optional.

    Example 1
    If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.

    This is because a and b are no more than 3 numbers apart.
*/

function closeCompare(a, b, margin = 0) {
	// ...
	if (a < b - margin) return -1;
	if (a - margin > b) return 1;
	return 0;
}

// console.log(closeCompare(5, 5, 7));

/*
  30. Binary Addition

   Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

    The binary number returned should be a string.

    Examples:(Input1, Input2 --> Output (explanation)))

    1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
    5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
	const arr = [];
	arr.push(a);
	arr.push(b);

	let decimalNumber = arr.reduce((a, b) => {
		return a + b;
	}, 0);

	let binaryString = decimalNumber.toString(2);

	return binaryString;
}

// 2 вариант
function addBinary(a, b) {
	return (a + b).toString(2);
}

// addBinary(5, 9);

/*
  31. Two to One

   Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

    Examples:
    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"

    a = "abcdefghijklmnopqrstuvwxyz"
    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
	const arrS1 = s1.split("");
	const arrS2 = s2.split("");
	let arrS3 = [];
	let arrS3NoDouble = [];

	arrS1.forEach(item => {
		arrS3.push(item);
	});

	arrS2.forEach(item => {
		arrS3.push(item);
	});

	arrS3NoDouble = [...new Set(arrS3)].sort();

	return arrS3NoDouble.join("");
}

// 2 вариант
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

// longest('aretheyhere', 'yestheyarehere');
// 'aehrsty';

/*
  32. Greatest common divisor 7kyu;

   Find the greatest common divisor of two positive integers. 
   The integers can be large, so you need to find a clever solution.

    The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

    assert.strictEqual(mygcd(30, 12),  6)
    assert.strictEqual(mygcd(36, 12), 12)
    assert.strictEqual(mygcd( 8,  9),  1)
    assert.strictEqual(mygcd( 1,  1),  1)
*/

function mygcd(x, y) {
	if (y === 0) {
		return x;
	} else {
		return mygcd(y, x % y);
	}
}

// console.log(mygcd(30, 12));

// 33. Reversed Strings 8kyu

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
	return str.split("").reverse().join("");
}
// solution('world');

/*
  34. Convert boolean values to strings 'Yes' or 'No' 8kyu;

    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord(bool) {
	return bool === true ? "Yes" : "No";
}

/*
  35. Remove First and Last Character 8kyu;

    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

function removeChar(str) {
	return str.slice(1, -1);
}

/*
  36. String repeat 8kyu;

    Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

    Examples (input -> output)
    6, "I"     -> "IIIIII"
    5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
	let i = 0;
	let res = [];

	while (i !== n) {
		res.push(s);
		i++;
	}

	return res.join("");
}

// console.log(repeatStr(5, '#'));

/*
  37. Vowel Count 7kyu;

    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
	let vowelCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
			vowelCount++;
		}
	}

	return vowelCount;
}

// console.log(getCount('abracadabra'));

/*
  38. Sum of positive 8kyu;

    You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20
    
    Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
	let posArr = [];
	let sum;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			posArr.push(arr[i]);
		}
	}

	if (posArr.length === 0) {
		return 0;
	} else {
		sum = posArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return sum;
	}
}
// console.log(positiveSum([1, -2, 3, 4, 5]));

/*
  39. Highest and Lowest 7kyu;

    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers) {
	let numbersArr = numbers.split(" ").map(Number);
	let assumeLowest = numbersArr[0];
	let assummeHighest = numbersArr[numbersArr.length - 1];
	let res = [];

	for (let i = 1; i < numbersArr.length; i++) {
		if (numbersArr[i] < assumeLowest) {
			assumeLowest = numbersArr[i];
		}
	}

	for (let i = numbersArr.length - 1; i >= 0; i--) {
		if (numbersArr[i] > assummeHighest) {
			assummeHighest = numbersArr[i];
		}
	}

	res.push(assummeHighest, assumeLowest);

	return String(res.join(" "));
}

// 2 вариант
function highAndLow(numbers) {
	numbers = numbers.split(" ");
	return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// console.log(
//     highAndLow(
//         '3189 2333 913 1068 1902 2113 953 639 2314 844 1045 562 1104 148 2497 251 2951 900 1726 397 949',
//     ),
// );

/*
  40. Descending Order 7kyu;

    Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

    Examples:
    Input: 42145 Output: 54421

    Input: 145263 Output: 654321

    Input: 123456789 Output: 987654321
*/

function descendingOrder(n) {
	return parseInt(n.toString().split("").sort().reverse().join(""));
}

// console.log(descendingOrder(279));
/*
  41.  

    функционал скрытия номера телефона по кнопке у пользователя в формате 899999999 на 899******9
*/

function hidePhoneNumber(phoneNumber) {
	return phoneNumber.slice(0, 2) + "*****" + phoneNumber.slice(phoneNumber.length - 1);
}

// console.log(hidePhoneNumber('899999999'));

/*
  41. String repeat 8kyu;

   Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

    Examples (input -> output)
    6, "I"     -> "IIIIII"
    5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
	let i = 0;
	let res = [];

	while (i !== n) {
		res.push(s);
		i++;
	}

	return res.join("");
}

// 43. Дан массив операций:

// [
//   { date: '2023-07-10', amount: '100' },
//   { date: '2024-01-31', amount: '800' },
//   { date: '2024-01-20', amount: '900' }
// ]

// Нужно сгруппировать их по году чтобы получилось так:

//  {
//     '2023': ['07-10'],
//     '2024': ['01-31', '01-20']
//   }

function groupByYear(operations) {
	const result = {};

	operations.forEach(item => {
		const [year, month, day] = item.date.split("-"); // Разделяем дату на год и месяц-день
		const monthDay = `${month}-${day}`; // Объединяем месяц и день

		if (!result[year]) {
			result[year] = []; // создаем новый для года
		}

		result[year].push(monthDay);
	});
	return result;
}

const arr = [
	{ date: "2023-07-10", amount: "100" },
	{ date: "2024-01-31", amount: "800" },
	{ date: "2024-01-20", amount: "900" },
];

// console.log(groupByYear(arr));

/*
  44

  нам нужно создать функцию-обёртку над fetch, которая будет повторять запрос в случае ошибки, не более retriesCount раз.

    Определить функцию fetchWithRetries, которая принимает два параметра:

    retriesCount: количество попыток в случае ошибки.
    ...fetchArgs: аргументы, которые будут переданы в fetch.

*/

function fetchWithRetries(retriesCount, ...fetchArgs) {
	// Внутренняя функция для выполнения запроса с попытками
	function executeFetch(attemptsLeft) {
		return fetch(...fetchArgs)
			.then(response => {
				if (!response.ok) {
					// Если ответ не успешен, кидаем ошибку
					throw new Error(`Request failed with status ${response.status}`);
				}
				// Если ответ успешен, возвращаем его
				return response;
			})
			.catch(error => {
				if (attemptsLeft > 0) {
					// Если остались попытки, уменьшаем их количество и повторяем запрос
					console.log(`Retrying... Attempts left: ${attemptsLeft}`);
					return executeFetch(attemptsLeft - 1);
				}
				// Если попыток не осталось, кидаем ошибку
				throw error;
			});
	}

	// Запуск первой попытки с начальным количеством попыток
	return executeFetch(retriesCount);
}

// Пример использования
// fetchWithRetries(3, 'https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error('Fetch failed:', error));

/*
  45. 

*/

function sayHello() {
	return "Hello";
}

function limit(fn, limit) {
	if (typeof fn !== "function") {
		throw new Error("Первый параметр должен быть функцией");
	}
	if (typeof limit !== "number" || limit < 0) {
		throw new Error("Второй параметр должен быть неотрицательным целым числом");
	}
	limit = Math.floor(limit);
	let count = 0;

	return function (...args) {
		if (count >= limit) {
			return undefined;
		}
		count++;
		return fn(...args);
	};
}

// const zeroLimit = limit(sayHello, 2.2);
// console.log(zeroLimit());
// console.log(zeroLimit());
// console.log(zeroLimit());
// console.log(zeroLimit());

/*
  46. Square Every Digit 7 kyu;

   Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

    Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

    Note: The function accepts an integer and returns an integer.

*/

function squareDigits(num) {
	if (num === 0) return num;

	let res = [];
	let arr = num.toString().split("");

	for (let i = 0; i < arr.length; i++) {
		res.push(Math.pow(arr[i], 2));
	}

	return +res.join("");
}

// squareDigits(9119);

// Best practise
// function squareDigits(num) {
//     return +num
//         .toString()
//         .split('')
//         .map((i) => i * i)
//         .join('');
// }

/*
  47. sber currency;

   Для решения этой задачи, необходимо реализовать функцию, которая будет принимать дату и код валюты, и возвращать актуальный курс на эту дату. Если дата приходится на выходной или праздничный день, 
   необходимо использовать курс, заданный в предыдущий рабочий день.

*/

const rates = [
	{ date: "2023-12-29", code: "USD", rate: 96.7815 },
	{ date: "2024-02-19", code: "USD", rate: 93.7815 },
	{ date: "2024-01-16", code: "USD", rate: 92.5552 },
	{ date: "2024-01-15", code: "USD", rate: 92.8812 },
	{ date: "2024-02-19", code: "EUR", rate: 99.3468 },
	{ date: "2024-01-16", code: "EUR", rate: 98.561 },
	{ date: "2024-01-15", code: "EUR", rate: 99.1425 },
];

function getRate(date, code) {
	// Преобразуем входную дату в объект Date
	let queryDate = new Date(date);
	console.log("queryDate", queryDate);

	// Сортируем курсы по дате
	rates.sort((a, b) => new Date(a.date) - new Date(b.date));

	// Ищем курсы для данной валюты
	let currencyRates = rates.filter(rate => rate.code === code);

	// Найдем актуальный курс
	for (let i = currencyRates.length - 1; i >= 0; i--) {
		let rateDate = new Date(currencyRates[i].date);

		if (queryDate >= rateDate) {
			return currencyRates[i].rate;
		}
	}

	// Если нет подходящего курса, возвращаем null или можно выбросить ошибку
	return null;
}

// Пример использования:
// let date = '2024-01-17'; // запрос на дату
// let code = 'USD'; // запрос по коду валюты
// let rate = getRate(date, code);

// console.log(`Курс на ${date} для ${code}: ${rate}`);

/*
  48. Sum of two lowest positive integers;

   Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

    [10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {
	let lowNum1 = Math.min(...numbers);
	let index = numbers.indexOf(lowNum1);

	numbers.splice(index, 1);

	let lowNum2 = Math.min(...numbers);

	return lowNum1 + lowNum2;
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// Best practice

// function sumTwoSmallestNumbers(numbers){
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };

/*
  49. Array.diff 6 kyu;

   Твоя задача в этом ката - реализовать функцию разности, которая вычитает один список из другого и возвращает результат.

    Необходимо удалить все значения из списка a, которые присутствуют в списке b, сохраняя их порядок.
    
    Пример:
    
    arrayDiff([1,2],[1]) == [2]
    Если значение присутствует в b, все его вхождения должны быть удалены из другого списка:
    
    Пример:
    arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
	return a.filter(el => !b.includes(el));
}

// console.log(arrayDiff([1, 2, 2], [2]));

/*
  50. List Filtering 7 kyu;

   In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

    Example
    filter_list([1,2,'a','b']) == [1,2]
    filter_list([1,'a','b',0,15]) == [1,0,15]
    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
	return l.filter(el => typeof el === "number");
}

// console.log(filter_list([1, 'a', 'b', 0, 15]));

/*
  51. 

   Условие:
    У вас есть объект, где ключи являются строками, а значениями — массивами чисел. Вам нужно отсортировать ключи объекта по следующему критерию:

    По сумме всех чисел в массиве, соответствующем каждому ключу (по убыванию).
    Если суммы равны, отсортируйте ключи по длине массива (по убыванию).

    Входной объект:
    const data = {
      a: [1, 2, 3],
      b: [5, 5, 5],
      c: [1, 1],
      d: [2, 2, 2, 2],
    };

    Ожидаемый результат:

    После сортировки объект должен быть преобразован в новый объект, где ключи отсортированы по указанным критериям. В данном случае результат будет:
    {
      b: [5, 5, 5],     // Сумма: 15, длина: 3
      d: [2, 2, 2, 2],  // Сумма: 8, длина: 4
      a: [1, 2, 3],     // Сумма: 6, длина: 3
      c: [1, 1]         // Сумма: 2, длина: 2
    }
*/

function sortObjectByArray(data) {
	const keys = Object.keys(data); // Получаем все ключи объекта
	const sortedData = {};
}

/*
  52. Написать функцию getByPath, которая принимает объект и строку, представляющую путь, разделенный точками. Функция должна следовать пути и вернуть значение, на которое путь указывает. Если какая-либо часть пути не существует, функция должна вернуть undefined.

Пример:

const obj = { inner: { test: { value: "hello world" } } };

const path = "inner.test.value";

console.log(getByPath(obj, path)); // Должно вывести "hello world"

console.log(getByPath(obj, "inner.test")); // Должно вывести объект { value: "hello world" }

console.log(getByPath(obj, "inner.nonExistentKey")); // Должно вывести undefined

console.log(getByPath(obj, "")); // Должно вывести undefined или объект целиком в зависимости от реализации
*/

const obj = { inner: { test: { value: "hello world" } } };
const path = "inner.test.value";

function getByPath(obj, str) {}

getByPath(obj, path);

/*
  53. ### Мы в Авито любим проводить соревнования, — недавно мы устроили чемпионат по шагам. И вот настало время подводить итоги!

Необходимо определить userIds участников, которые прошли наибольшее количество шагов steps за все дни, не пропустив ни одного дня.
*/
function findChampions(statistics) {
	// Объект для хранения суммарного количества шагов каждого пользователя
	const userSteps = {};
	const totalDays = statistics.length; // Общее количество дней

	// Проходим по каждому дню
	for (const day of statistics) {
		// Проходим по каждому участнику за день
		for (const entry of day) {
			const { userId, steps } = entry;

			// Если пользователь уже есть в userSteps, добавляем шаги за текущий день
			if (userSteps[userId]) {
				userSteps[userId].steps += steps;
				userSteps[userId].days += 1;
			} else {
				// Если пользователь встречается впервые, инициализируем его
				userSteps[userId] = { steps: steps, days: 1 };
			}
		}
	}

	// Фильтруем только тех пользователей, которые участвовали все дни
	const champions = Object.entries(userSteps)
		.filter(([userId, data]) => data.days === totalDays)
		.map(([userId, data]) => ({
			userId: Number(userId),
			steps: data.steps,
		}));

	// Находим максимальное количество шагов среди оставшихся участников
	const maxSteps = Math.max(...champions.map(user => user.steps));

	// Определяем пользователей с максимальным количеством шагов
	const resultUserIds = champions.filter(user => user.steps === maxSteps).map(user => user.userId);

	return {
		userIds: resultUserIds,
		steps: maxSteps,
	};
}

// Пример 1
const statistics1 = [
	[
		{ userId: 1, steps: 1000 },
		{ userId: 2, steps: 1500 },
	],
	[{ userId: 2, steps: 1000 }],
];
// console.log(findChampions(statistics1)); // { userIds: [2], steps: 2500 }

// Пример 2
const statistics2 = [
	[
		{ userId: 1, steps: 2000 },
		{ userId: 2, steps: 1500 },
	],
	[{ userId: 1, steps: 3500 }],
];
// console.log(findChampions(statistics2)); // { userIds: [1], steps: 5500 }

/*
  54. Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
*/

function XO(str) {
	let xCount = 0;
	let oCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === "x") {
			xCount++;
		} else if (str[i].toLowerCase() === "o") {
			oCount++;
		}
	}

	if (xCount === oCount) {
		return true;
	}
	return false;
}

// console.log(XO("xxMm"));

// clever
// const XO = str => {
// 	str = str.toLowerCase().split("");
// 	return str.filter(x => x === "x").length === str.filter(x => x === "o").length;
// };

/*
  55. Simple, given a string of words, return the length of the shortest word(s).

    String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
	let arr = s.split(" ");
	let assumeShortest = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length < assumeShortest.length) {
			assumeShortest = arr[i];
		}
	}

	return assumeShortest.length;
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// clever
// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }

/*
  56. Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

    Your task is to write a function maskify, which changes all but the last four characters into '#'.

    "4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

    // "What was the name of your first pet?"
    "Skippy" --> "##ippy"
    "Nananananananananananananananana Batman!" --> "####################################man!"
*/

function maskify(cc) {
	let lastFour = cc.slice(-4);
	let charCount = cc.slice(0, -4).length;

	let res = "#".repeat(charCount) + lastFour;

	return res;
}

// console.log(maskify("4556364607935616"));

/*
  57. Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 

*/

function squareSum(numbers) {
	let res = 0;

	for (let i = 0; i < numbers.length; i++) {
		res += Math.pow(numbers[i], 2);
	}

	return res;
}

// Best practise
// function squareSum(numbers){
// 	return numbers.reduce(function(sum, n){
// 	  return (n*n) + sum;
// 	}, 0)
//   }

// console.log(squareSum([0, 3, 4, 5]));
//50

/*
  58. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

	Note: a and b are not ordered!

	Examples (a, b) --> output (explanation)
	(1, 0) --> 1 (1 + 0 = 1)
	(1, 2) --> 3 (1 + 2 = 3)
	(0, 1) --> 1 (0 + 1 = 1)
	(1, 1) --> 1 (1 since both are same)
	(-1, 0) --> -1 (-1 + 0 = -1)
	(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

function getSum(a, b) {
	let resArr = [];
	let a2 = a;
	let b2 = b;

	if (a === b) return a;

	if (b < a) {
		a2 = b;
		b2 = a;
	}

	for (let i = a2; i <= b2; i++) {
		resArr.push(i);
	}

	return resArr.reduce((a, b) => a + b, 0);
}

// Best practise
// const GetSum = (a, b) => {
// 	let min = Math.min(a, b),
// 		max = Math.max(a, b);
// 	return (max - min + 1) * (min + max) / 2;
//   }

// console.log(getSum(0, -1));

/*
  59. Make a program that filters a list of strings and returns a list with only your friends name in it.

	If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

	Input = ["Ryan", "Kieran", "Jason", "Yous"]
	Output = ["Ryan", "Yous"]

	Input = ["Peter", "Stephen", "Joe"]
	Output = []
*/

function friend(friends) {
	return friends.filter(n => n.length === 4);
}

// console.log(friend(["Ryan", "Kieran", "Mark"]));

/*
  60. The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

	To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

	Input
	Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

	input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
	output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data) {
	let result = data.map(item => {
		const [age, handicap] = item;
		console.log("age", age);

		if (age >= 55 && handicap > 7) {
			return "Senior";
		} else {
			return "Open";
		}
	});

	return result;
}

// console.log(
// 	openOrSenior([
// 		[45, 12],
// 		[55, 21],
// 		[19, -2],
// 		[104, 20],
// 	]),
// );

// Best practise
// function openOrSenior(data){
// 	return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//   }

/*
  61. Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

	Examples:
	
	solution('abc', 'bc') // returns true
	solution('abc', 'd') // returns false
*/

function solution(str, ending) {
	if (ending === "") {
		return true;
	}
	const endingLen = ending.split("").length;
	const a = str.split("").slice(-endingLen);

	if (a.join("") === ending) {
		return true;
	}
	return false;
}

// console.log(solution("abcde", "cde"));

// Best practise
// function solution(str, ending){
// 	return str.endsWith(ending);
//   }

/*
  62. Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
  Spaces will be included only when more than one word is present.

	Examples:

	"Hey fellow warriors"  --> "Hey wollef sroirraw" 
	"This is a test        --> "This is a test" 
	"This is another test" --> "This is rehtona test"
*/

function spinWords(string) {
	const arr = string.split(" ");

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length >= 5) {
			arr[i] = arr[i].split("").reverse().join("");
		}
	}

	return arr.join(" ");
}

// Best practise
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

// console.log(spinWords("Hey fellow warriors"));

/*
  63. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

	Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
	
	[]                                -->  "no one likes this"
	["Peter"]                         -->  "Peter likes this"
	["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
	["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
	["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
	Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
	let oneLikes = ["likes this"];
	let twoOrThreeLike = ["like this"];
	let moreThanFour = ["others like this"];

	if (!names.length) {
		return "no one likes this";
	} else if (names.length === 1) {
		oneLikes.unshift(names[0]);
		return oneLikes.join(" ");
	} else if (names.length === 2) {
		twoOrThreeLike.unshift(names[1]);
		twoOrThreeLike.unshift("and");
		twoOrThreeLike.unshift(names[0]);

		return twoOrThreeLike.join(" ");
	} else if (names.length === 3) {
		twoOrThreeLike.unshift(names[2]);
		twoOrThreeLike.unshift("and");
		twoOrThreeLike.unshift(names[1]);
		twoOrThreeLike.unshift(names[0] + ",");

		return twoOrThreeLike.join(" ");
	} else {
		let othersLength = names.length - 2;
		moreThanFour.unshift(othersLength.toString());
		moreThanFour.unshift("and");
		moreThanFour.unshift(names[1]);
		moreThanFour.unshift(names[0] + ",");

		return moreThanFour.join(" ");
	}
}

//Best practise
// function likes(names) {
//   names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }

// console.log(likes(["Max", "John", "Max", "John"]));

/*
  64. Given an array of integers, find the one that appears an odd number of times.

	There will always be only one integer that appears an odd number of times.

	Examples
	[7] should return 7, because it occurs 1 time (which is odd).
	[0] should return 0, because it occurs 1 time (which is odd).
	[1,1,2] should return 2, because it occurs 1 time (which is odd).
	[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
	[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
	const obj = A.reduce((acc, value, index) => ({ ...acc, [index]: value }), {});
	console.log("obj", obj);
	// return 0;
}

// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

// 65. Написать функцию, которая принимает массив из слов и удаляемое слово
// возвращает строку со словами массива через запятую.
function filterAndJoinWords(wordsArray, wordToRemove) {
	let result = wordsArray.filter(el => el.toLowerCase() !== wordToRemove.toLowerCase());

	return result.join(", ");
}

// Пример использования:
// const words = ["red", "green", "blue"];
// const result = filterAndJoinWords(words, "red");
// console.log(result); // "green, blue"

// 66. Необходимо написать функцию strjoin,
// которая склеивает строки через разделитель.

function strjoin(separator, ...strings) {
	return strings.join(separator);
}

// console.log(strjoin(".", "a", "b", "c")); // 'a.b.c'
// strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f') // 'a-b-c-d-e-f'

// 67. Написать декоратор для функции, который выводит параметры функции.
function sum(a, b) {
	return a + b;
}

function decoratedSum(originalFn) {
	return function (...args) {
		return originalFn(...args);
	};
}

// const decorated = decoratedSum(sum);

// console.log(decorated(1, 2)); // Выведет: "Параметры функции: \[1, 2\]" и вернёт 3

// 68. 6 kyu Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers) {
	let odd = [];
	let even = [];

	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0) {
			even.push(integers[i]);
		} else {
			odd.push(integers[i]);
		}
	}

	console.log("odd", odd);
	console.log("even", even);

	if (odd.length > 1) {
		return +even.join();
	}
	if ((even.length = 1)) {
		return +odd.join();
	} else return;
}

// console.log(findOutlier([1, 2, 3]));

// Best practise
// function findOutlier(int){
// 	var even = int.filter(a=>a%2==0);
// 	var odd = int.filter(a=>a%2!==0);
// 	return even.length==1? even[0] : odd[0];
//   }

// 69. Count the number of Duplicates
//
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const frequency = arr.reduce((acc, el) => {
	acc[el] = (acc[el] || 0) + 1;
	return acc;
}, {});

//   acc[el] = (acc[el] === undefined ? 0 : acc[el]) + 1;

function duplicateCount(text) {
	const arrFromText = text.toLowerCase().split("");

	const frequency = arrFromText.reduce((acc, el) => {
		acc[el] = acc[el] === undefined ? 1 : acc[el] + 1;
		return acc;
	}, {});

	const frequencyValues = Object.values(frequency).filter(el => el > 1);

	return frequencyValues.length;
}

// console.log(duplicateCount("Indivisibilities"));

// 70.
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
	let arrFromStr = word.toLowerCase().split("");
	let res = [];

	const count = arrFromStr.reduce((acc, el) => {
		acc[el] = acc[el] === undefined ? 1 : acc[el] + 1;
		return acc;
	}, {});

	for (let i = 0; i < arrFromStr.length; i++) {
		if (count[arrFromStr[i]] > 1) {
			res.push(")");
		} else {
			res.push("(");
		}
	}

	return res.join("");
}

// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"));

// Best pratcise

// function duplicateEncode(word) {
// 	return word
// 		.toLowerCase()
// 		.split("")
// 		.map(function (a, i, w) {
// 			return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
// 		})
// 		.join("");
// }

// 71. There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];

		if (arr.indexOf(el) === arr.lastIndexOf(el)) {
			return el;
		}
	}
}

// console.log(findUniq([3, 10, 3, 3, 3]));

// Best practise

// function findUniq(arr) {
// 	return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }

// 72. There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq2(arr) {
	const formatArr = arr.map(el => el.trim().toLowerCase());

	const signature = formatArr.map(el => {
		return [...new Set(el)] // массив уникальных символов
			.sort() // сортировка для стабильности
			.join(""); // склеиваем в строку
	});

	let index = null;

	for (let i = 0; i < signature.length; i++) {
		const el = signature[i];

		if (signature.indexOf(el) === signature.lastIndexOf(el)) {
			index = i;

			return arr[index];
		}
	}
}

// console.log(findUniq2(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
// console.log(findUniq2(["silvia", "vasili", "victor"]));
// console.log(findUniq2(["    ", "a", " "]));

// 73.
// // Задач: Для каждого вложенного объекта нужно добавить свойство level, которое равняется числу (номер вложенности).
// Если значение свойства будет не объект, то ничего не добавлять:

/* 
Должно получиться так:
  {
      a: {
          level: 1
          d: {
              level: 2,
              h: 4
          },
          e: 2
      },
      b: 1,
      c: {
          level: 1
          f: {
              level: 2
              g: 3,
              k: {
                  level: 3
              }
          }
      }
  }
*/

const objectFour = {
	a: {
		d: {
			h: 4,
		},
		e: 2,
	},
	b: 1,
	c: {
		f: {
			g: 3,
			k: {},
		},
	},
};

function addLevel(obj, currentLevel = 1) {
	if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
		return; // ← базовый случай: не объект → выходим
	}

	for (const key in obj) {
		const value = obj[key];

		if (typeof value === "object" && value !== null && !Array.isArray(value)) {
			value.level = currentLevel;
			addLevel(value, currentLevel + 1);
		}
	}
}

// 74.
// //  Подсчет глубины вложенности объекта
// 👉 Задача: вернуть максимальную глубину вложенности объекта
// 📌 Ожидаемый результат: 4
//

const calcDepth = (obj, depth = 1) => {
	if (typeof obj !== "object" || obj === null) return 0;

	let maxDepth = depth;

	for (const key in obj) {
		const value = obj[key];

		if (typeof value === "object" && value !== null) {
			const childDepth = calcDepth(value, depth + 1);
			if (childDepth > maxDepth) {
				maxDepth = childDepth;
			}
		}
	}

	return maxDepth;
};

// const obj1 = {
// 	a: {
// 		b: {
// 			c: {
// 				d: 5,
// 			},
// 		},
// 	},
// 	e: 10,
// };

// console.log(calcDepp(obj1));

// 75.
// Implement a function to calculate the sum of the numerical values in a nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10

const sumNested = arr => {
	return arr.reduce((acc, curr) => {
		if (Array.isArray(curr)) {
			return acc + sumNested(curr); // рекурсивный вызов
		} else {
			return acc + curr; // просто добавляем число
		}
	}, 0); // начальное значение суммы — 0
};

// console.log(sumNested([1, [2, [3, [4]]]]));

// 76.
// You are given an array. Complete the function that returns the number of ALL elements within an array,
// including any nested arrays.

// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7

function deepCount(a) {
	let sum = a.length; // Сначала учитываем элементы текущего уровня
	for (let item of a) {
		if (Array.isArray(item)) {
			sum += deepCount(item); // Рекурсивно добавляем элементы вложенных массивов
		}
	}
	return sum;
}

// console.log(deepCount([1, 2, [3, 4]]));
