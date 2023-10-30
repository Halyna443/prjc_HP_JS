// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
// detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// function detonatorTimer(delay) {
//     let id = setInterval (function() {
//         console.log(delay--);
//         if (delay === 0) {
//             clearInterval(id);
//             console.log(`BOOM!`);
//         }
//     }, 1000);
// };

// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'

// detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// function detonatorTimer(delay) {
//     function countdown() {
//         console.log(delay--);
//         if (delay > 0) {
//             setTimeout(countdown, 1000);
//         }
//         else {
//             console.log(`BOOM!`);
//         }
//     };
//     countdown();
// };

// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 

// let me = {
//     firstName: 'Halyna',
//     lastName: 'Petrenko',
//     residency: 'Lviv',
//     gender: 'woman',
//     age: 41,
//     children: 2,
//     hobby: 'gym',
//     myDream: 'Portugal',
//     introduce() {
//         console.log(`My name is ${this.firstName} ${this.lastName} and I live in ${this.residency}.`);
//     },
//     generalInformation() {
//         console.log(`I'm a ${this.gender}, I'm ${this.age} years old.`)
//     },
//     myHobbies() {
//         console.log(`I like to work out in the ${this.hobby}.`);
//     },
//     myChildren() {
//         console.log(`I have ${this.children} charming daughters, Sofia and Olesya.`);
//     },
//     prognose() {
//         console.log(`I want to visit ${this.myDream} next year.`);
//     },
// }

// me.introduce();
// me.generalInformation();
// me.myHobbies();
// me.myChildren();
// me.prognose();

// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
// Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

// let securedSelfIntroduce = me.introduce.bind(me);
// let securedSelfGeneralInformation = me.generalInformation.bind(me);
// let securedSelfMyHobbies = me.myHobbies.bind(me);
// let securedSelfMyChildren = me.myChildren.bind(me);
// let securedSelfPrognoses = me.prognose.bind(me);

// setTimeout(securedSelfIntroduce, 1000);
// setTimeout(securedSelfGeneralInformation, 2000);
// setTimeout(securedSelfMyHobbies, 3000);
// setTimeout(securedSelfMyChildren, 4000); 
// setTimeout(securedSelfPrognoses, 5000); 

// 5. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
// Тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль.
// function someFunction(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// // Функція декоратор.
// function slower(func, seconds) {
// return function() {
//     console.log(`Chill out, you will get your result in ${seconds} seconds`);
//     setTimeout(() => func.apply(this, arguments), seconds * 1000);
// };
// }

// let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення

// slowedSomeFunction(5, 7) // викликаєте декоратор
  