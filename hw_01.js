// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку: 

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];
for (const userName of userNames) {
    const partNames = userName.split(" ");
    let stringInitials = "";

    for (const part of partNames) {
        stringInitials = stringInitials + part.charAt(0) + ".";
    }
    initials.push(stringInitials);
    initials.sort();
    
}

console.log(initials);



// 2. Задача на фільтрування масиву:
// 2.1 Через умовну конструкцію:
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// const filteredNames = [];

// for (let i = 0; i < userNames.length; i++) {
//   const userName = userNames[i];
//   const firstLetter = userName.charAt(0);

//   if (['У', 'Е', 'І', 'А', 'О', 'Є', 'Я', 'Ю', 'И'].includes(firstLetter)) {
//     filteredNames.push(userName);
//   }
// }
// console.log(filteredNames);


// // 2.2 Через вбудований метод масивів.
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

// const filteredNames = userNames.filter(userNames => /^[уеіаоєяюУЕІАОЄЯЮ]/.test(userNames));

// console.log(filteredNames);

// 3. Задача на розворот числа:
// const currentMaxValue = 4589;
// let stringMaxValue = String(currentMaxValue);
// let reverseMaxValue = stringMaxValue.split('').reverse().join('');
// reverseMaxValue = Number(reverseMaxValue);

// console.log(reverseMaxValue);
// console.log(typeof(reverseMaxValue));

// 4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
// const resultsArray = [1, 2, [3, [4]]];
// const flatArray = resultsArray.flat(Infinity);
// // console.log(flatArray);
// const initArray = 1;
// let productOfArray = flatArray.reduce(
//     (previous, current) => {
//         // console.log(previous, current);
//         return previous * current;
//     },
//     initArray
// )
// console.log(productOfArray);
