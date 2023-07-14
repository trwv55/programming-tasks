/*
    1. Функция проверки палиндрома
*/

function checkPalindrom(str) {
    let newStr = [];
    let lowerStr = str.toLowerCase();

    for (let i = lowerStr.length - 1; i >= 0; i--) {
        newStr.push(lowerStr[i]);
    }

    if (lowerStr === newStr.join('')) {
        console.log('Это палиндром');
    } else console.log('Это не палиндром');
}

// checkPalindrom("Шалаш");

// вторая реализация
function isPalindrom(str) {
    let arr = str.split('');
    let reversArr = arr.reverse();
    let resString = reversArr.join('');

    let res = str === resString;
    return res;
}
// console.log(isPalindrom('шалаш'));

/*
    2. Функция поиска самого короткого слова
*/
function findShort(str) {
    let arr = str.split(' ');
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
    let wordsArr = str.split(' ');
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
    let arr = str.split('');
    let resArr = arr.filter((el) => {
        return el === el.toUpperCase();
    });
    let resStr = resArr.join('');
    return resStr;
}
// console.log(getCapitalsLetters('АвапВАПпсГГШШшш'));

/*
    4. Функция создания инициалов
*/

function toInitials(str) {
    let resArr = [];
    let nameArr = str.split(' ');

    for (let i = 0; i < nameArr.length; i++) {
        resArr.push(nameArr[i][0].toUpperCase());
        resArr.push('.');
    }
    return resArr.join('');
}
// console.log(toInitials('elon mask'));

// 2 вариант
function toInitialsSecond(name) {
    let nameArr = name.split(' ');

    let firstLetterArr = nameArr.map((el) => {
        return el.slice(0, 1).toUpperCase() + '.';
    });

    let initials = firstLetterArr.join('');
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
            console.log('foobar');
        } else if (i % 3 === 0) {
            console.log('foo');
        } else if (i % 5 === 0) {
            console.log('bar');
        } else {
            console.log(i);
        }
    }
}
// printNumbers(20);

/*
    6. Функция возврата уникальных значений из нескольких массивов;
    Условие: Напишите функцию на JavaScript, которая принимает несколько массивов в качестве аргументов и возвращает массив, содержащий только уникальные значения из всех переданных массивов.
*/
function getUniqueValues(arr1, arr2, arr3) {
    const combinedArr = [...arr1, ...arr2, ...arr3];
    let res = combinedArr.filter(
        (element) => combinedArr.indexOf(element) === combinedArr.lastIndexOf(element),
    );
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
    let arr = num.toString().split('');
    let numsArr = [];
    let sum = [];

    if (arr[0] === '-') {
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
    let arr = str.split('');

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
    let strArr = str.split('');
    let res = null;

    const duplicateArr = strArr.map((el, id) => {
        return el.toUpperCase().repeat(id + 1);
    });

    const arr = duplicateArr.map((el) => {
        return el.charAt(0) + el.slice(1).toLowerCase();
    });

    res = arr.join('-');
    return res;
}

// console.log(accum('abcd'));
// 'cwAt'

// 2 вариант
function accumSecond(str) {
    let arr = str.toUpperCase().split('');

    let repeatArr = arr.map((el, i) => {
        return (el += el.repeat(i).toLowerCase());
    });

    let resString = repeatArr.join('-');
    return resString;
}

// console.log(accumSecond('cwAt'))
