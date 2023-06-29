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
