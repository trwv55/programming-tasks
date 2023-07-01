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
*/

// printNumbers(5);
