// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку: 

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let initials = [];
// for (const userName of userNames) {
//     const partNames = userName.split(" ");
//     let stringInitials = "";

//     for (const part of partNames) {

//         stringInitials = stringInitials + part[0] + ".";
//     }
//     initials.push(stringInitials);
//     initials.sort();

// }
// console.log(initials);

// З використанням методу 'map'.
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

const initials = userNames.map(userName =>
    userName.split(" ").map(part => part[0] + ".").join(""));
initials.sort();
console.log(initials);

// 2. Задача на фільтрування масиву:
// 2.1.1 Через умовну конструкцію:
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// const filteredNames = [];

// for (let i = 0; i < userNames.length; i++) {
//     const userName = userNames[i];
//     const firstLetter = userName[0];

//     const vowelLetter = ['У', 'Е', 'І', 'А', 'О', 'Є', 'Я', 'Ю', 'И'];
//     if (vowelLetter.includes(firstLetter)) {
//         filteredNames.push(userName);
//     }
// }
// console.log(filteredNames);

// 2.1.2 За допомогою методу "forEach":
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// const filteredNames = [];
// userNames.forEach(userName => {
//     const firstLetter = userName[0];
//     const vowelLetter = ['У', 'Е', 'І', 'А', 'О', 'Є', 'Я', 'Ю', 'И'];
//     if (vowelLetter.includes(firstLetter)) {
//         filteredNames.push(userName);

//     }
// });
// console.log(filteredNames);

// // 2.2.1 Через вбудований метод масивів.
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

// const filteredNames = userNames.filter(userNames => /^[уеіаоєяюУЕІАОЄЯЮ]/.test(userNames));

// console.log(filteredNames);

// 2.2.2 Без використання регулярного виразу.
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// const vowelLetter = ['У', 'Е', 'І', 'А', 'О', 'Є', 'Я', 'Ю', 'И'];
// const filteredNames = userNames.filter(userNames => {
//     const firstLetter = userNames[0];
//     return vowelLetter.includes(firstLetter);
// });

// console.log(filteredNames);

// 3. Задача на розворот числа:
// const currentMaxValue = 4589;

// let reverseMaxValue = String(currentMaxValue);
// reverseMaxValue = reverseMaxValue.split('').reverse().join('');
// reverseMaxValue = Number(reverseMaxValue);

// console.log(reverseMaxValue);
// console.log(typeof(reverseMaxValue));

// 4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
// const resultsArray = [1, 2, [3, [4]]];
// const initValue = 1;
// let productOfArray = resultsArray.flat(Infinity).reduce(
//     (previous, current) => {
//         return previous * current;
//     },
//     initValue
// )
// console.log(productOfArray);
