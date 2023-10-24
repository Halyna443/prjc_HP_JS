// 1. Напишіть функцію addThemAl
// Вона буде знаходити суму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).
// Використайте оператор розширення.
// 1.1 З використанням циклу.

// console.log(addThemAll(2, 4)); // 6
// console.log(addThemAll(1, 2, 3, 4)); // 10
// console.log(addThemAll(5, 5, 10)); // 20

// function addThemAll(...args) {
//     let sum = 0
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
// }

// 1.2 З використанням методу 'reduce' та стрілочної функції.

// console.log(addThemAll(-10, 4)); // -6
// console.log(addThemAll(1, 2, 3, 4)); // 10
// console.log(addThemAll(5, 5, 10)); // 20

// function addThemAll(...args) {
//     return args.reduce((previous, current) => previous + current, 0);
// }

//   2. Задача на використання замикання. 
//   Напишіть функцію яка працює таким чином: multiply(a)(b)  // a * b

// console.log(multiply(5)(5))		// 25
// console.log(multiply(2)(-2))    // -4
// console.log(multiply(4)(3))		// 12

// function multiply(a) {
// 	return function (b) {
//         return a * b;
//     }
// }

// 3. 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів 
// Функція буде приймати два аргумента:
// — властивість за якою треба посортувати.
// — опцію напрямку сортування (зростання чи спадання).

const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

console.log((`масив фільмів посортованих по року випуску.`), movies.sort(byProperty('releaseYear', '>')));
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log((`масив фільмів посортованих по їх тривалості.`), movies.sort(byProperty('runningTimeInMinutes', '<')));
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log((`масив фільмів посортованих по назві.`), movies.sort(byProperty('movieName', '>')));
// виведе масив фільмів посортованих по назві, в алфавітному порядку.

// 3.1 З використанням інструкції 'if':
// function byProperty(property, direction) {
//     return function (a, b) {
//         if (direction === '>') {
//             if (a[property] > b[property]) {
//                 return 1;
//             }
//             else if (a[property] < b[property]) {
//                 return - 1;
//             }
//             return 0;
//         }
//         else if (direction === '<') {
//             if (a[property] < b[property]) {
//                 return 1;
//             }
//             else if (a[property] > b[property]) {
//                 return - 1;
//             }
//             return 0;
//         }
//     }
// }
// 3.2 З використанням тернарного оператора '?':

function byProperty(property, direction) {
    return function (a, b) {
        if (direction === '>') {
            return a[property] > b[property] ? 1 : -1;
        }
        else if (direction === '<') {
            return a[property] < b[property] ? 1 : -1;
        }
    }
}

// 4. Напишіть функцію яка відфільтрує масив унікальних значень
// Рішення має працювати незалежно від конкретних значень в масиві імен

// const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

// function filterUnique(array) {
//     return Array.from(new Set(array));
// }

// console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];