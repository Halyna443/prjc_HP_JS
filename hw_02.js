// 1. Задача про обчислення різниці часу.
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days', 'hours', 'minutes', seconds)
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

// function getTimePeriod(startDate = new Date().toISOString(), endDate = new Date().toISOString(), unit = 'days') {
//     startDate = new Date(startDate);
//     endDate = new Date(endDate);

//     const earlierDate = startDate < endDate ? startDate : endDate;
//     const laterDate = startDate < endDate ? endDate : startDate;

//     const timeDifference = (laterDate - earlierDate) / 1000;

//     switch (unit) {
//       case 'days':
//         return timeDifference / (24 * 60 * 60);
//       case 'hours':
//         return timeDifference / (60 * 60);
//       case 'minutes':
//         return timeDifference / 60;
//       case 'seconds':
//         return timeDifference;
//       default:
//         return timeDifference * 1000;
//     }
//   }

// const startDate = "31 Jan 2022";
// const endDate = "03 Feb 2021";
// const unit = "days";

// const timePeriod = getTimePeriod(startDate, endDate, unit);
// console.log(`${timePeriod} ${unit}`);

// 2. Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
// const priceData = {
//     Apples: '23.4',
//     BANANAS: '48',
//     oRAngGEs: '48.7584',
// };

// function optimizer(data) {
//     const updatedData = {};

//     for (const key in data) {
//         const lowerCaseKey = key.toLowerCase();
//         updatedData[lowerCaseKey] = Number(data[key]).toFixed(2);
//     }
//     return updatedData;
// }

// let updatedPriceData = optimizer(priceData);

// console.log(updatedPriceData);

// 3. Задача про рекурсію 
// Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// function recursiveOddSumTo(number) {
//     if (number <= 0) {
//         return "enter a positive number";
//     }
//     if (number === 1) {
//         return number;
//     }
//     if (number % 2 === 0) {
//         return recursiveOddSumTo(number - 1);
//     }
//         return number + recursiveOddSumTo(number - 2);
// };

// console.log(recursiveOddSumTo(1)) // 1
// console.log(recursiveOddSumTo(10)) // 25
// console.log(recursiveOddSumTo(-7)) // "enter a positive number"

//  4. Задача про ітерацію
// Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// function iterativeOddSumTo(number) {
//     if (number <= 0) {
//         return "enter a positive number";
//     }
//     let result = 0;
//     for (let i = 1; i <= number; i +=2) {
//        result += i;
//     }
//     return result;
// }

// console.log(iterativeOddSumTo(1)) // 1
// console.log(iterativeOddSumTo(10)) // 25