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
    Условие: Напишите функцию на JavaScript, которая принимает несколько массивов в качестве аргументов и возвращает массив, 
    содержащий только уникальные значения из всех переданных массивов.
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

/*
   10. Функция трансформации букв в заглавный регистр

   Условие: Напишите функцию, которая принимает строку в качестве аргумента и возвращает новую строку, в которой все буквы преобразованы в заглавный регистр.

*/

function transformLetters(str) {
    let arr = str.split('');
    let res = arr.map((el) => {
        return el.toUpperCase();
    });
    let resStr = res.join('');
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
    const arr = str.split(' ');
    let res = null;
    res = arr
        .map((el) => {
            return el[0].toUpperCase() + el.slice(1);
        })
        .join(' ');

    return res;
};
// console.log(jadenCasedStrings("How can mirrors be real if our eyes aren't real"));
// 2 вариант
String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(' ');
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
    let nArr = n.toString().split('');
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
    const sArr = s.split('');
    const lettersArray = [];
    let res = [];

    for (let letterCode = 97; letterCode <= 109; letterCode++) {
        lettersArray.push(String.fromCharCode(letterCode));
    }

    let errors = sArr.filter((letter) => lettersArray.indexOf(letter) === -1);

    res.push(errors.length + '/' + sArr.length);
    return res.join('');
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
        res.push(lastEl + '_');
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
        A: 'Alpha',
        B: 'Bravo',
        C: 'Charlie',
        D: 'Delta',
        E: 'Echo',
        F: 'Foxtrot',
        G: 'Golf',
        H: 'Hotel',
        I: 'India',
        J: 'Juliett',
        K: 'Kilo',
        L: 'Lima',
        M: 'Mike',
        N: 'November',
        O: 'Oscar',
        P: 'Papa',
        Q: 'Quebec',
        R: 'Romeo',
        S: 'Sierra',
        T: 'Tango',
        U: 'Uniform',
        V: 'Victor',
        W: 'Whiskey',
        X: 'X-ray',
        Y: 'Yankee',
        Z: 'Zulu',
    };

    return function (word) {
        let arrWord = word.split('');
        let res = [];

        for (let i = 0; i < arrWord.length; i++) {
            if (letters.hasOwnProperty(arrWord[i].toUpperCase())) {
                res.push(letters[arrWord[i].toUpperCase()]);
            }
        }

        return res.join(' ');
    };
})();

// 2 вариант
var nato = (function () {
    var letters = {
        A: 'Alpha',
        B: 'Bravo',
        C: 'Charlie',
        D: 'Delta',
        E: 'Echo',
        F: 'Foxtrot',
        G: 'Golf',
        H: 'Hotel',
        I: 'India',
        J: 'Juliett',
        K: 'Kilo',
        L: 'Lima',
        M: 'Mike',
        N: 'November',
        O: 'Oscar',
        P: 'Papa',
        Q: 'Quebec',
        R: 'Romeo',
        S: 'Sierra',
        T: 'Tango',
        U: 'Uniform',
        V: 'Victor',
        W: 'Whiskey',
        X: 'X-ray',
        Y: 'Yankee',
        Z: 'Zulu',
    };

    return function (word) {
        return word
            .split('')
            .map(function (v) {
                return letters[v.toUpperCase()];
            })
            .join(' ');
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

    sheep.map((s) => {
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

const whosOnline = (friends) => {
    const res = {};

    if (friends.length === 0) {
        return res;
    } else {
        res.online = [];
        res.offline = [];
        res.away = [];

        friends.map((friend) => {
            if (friend.status === 'offline') {
                res.offline.push(friend.username);
            }
            if (friend.status === 'online' && friend.lastActivity > 10) {
                res.away.push(friend.username);
            } else if (friend.status === 'online' && friend.lastActivity <= 10) {
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
            return index + 1 + ': ' + element;
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
    return str.split(' ').reverse().join(' ');
}

nameShuffler('john McClane');

/*
  25. 8 kyu To square(root) or not to square(root)

    Write a method, that will get an integer array as parameter and will process every number from this array.

    Return a new array with processing every number of the input-array like this:

    If the number has an integer square root, take this, otherwise square the number.

    Example
    [4,3,9,7,2,1] -> [2,9,3,49,4,1]

   
*/

function squareOrSquareRoot(array) {
    let newArr = array.map((el) => {
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
    duplicateValue = arr.filter((elem) => {
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
// Вариант решения
var number = function (busStops) {
    var totalPeople = 0;
    for (var i = 0; i < busStops.length; i++) {
        totalPeople += busStops[i][0];
        console.log('totalPeople1', totalPeople);
        totalPeople -= busStops[i][1];
        console.log('totalPeople2', totalPeople);
    }
    return totalPeople;
};

// 2 вариант
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

console.log(
    number([
        [10, 0],
        [3, 5],
        [5, 8],
    ]),
);
