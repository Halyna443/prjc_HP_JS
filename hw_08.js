// 1. Є наступний код:
// Яким буде результат його виклику? Чому? Опишіть як працює цей код.
// 1.1

console.log('start'); // Першим виводить повідомлення 'start' у консоль, бо це перший рядок коду.

// створює об'єкт Promise (promise1), в який передається функція з двома аргументами resolve та reject.
// під час створення об'єкта Promise, його функція викликається негайно, тому код всередині цієї функції виконується.
// тому другим виводиться 1.

const promise1 = new Promise((resolve, reject) => { 
console.log(1)
resolve(2) // цей код відбувається асинхронно, він не виконується негайно.
})

promise1.then(res => {
console.log(res)
})

console.log('end'); // виводить end в консоль так як цей код знаходиться поза тілом об'єкта Promise і викликається негайно.
// в останню чергу виводиться 2. Це через асинхронність операції resolve(2),
// яка відбувається після виклику функції Promise, але до виклику promise1.then().

// результат
// start
// 1
// end
// 2

// 1.2
Promise.resolve(1) // створюємо promise який є вирішеним значенням 1.
		.then((x) => x + 1) //до 1 + 1 отримуємо 2.
		.then((x) => { throw new Error('My Error') }) // видає помилку з текстом 'My Error'.
		.catch(() => 1) // перехоплює помилку і повертає значення 1.
		.then((x) => x + 1) // додаємо 1 до 1(попереднє значення .catch() було 1,) отримуємо 2.
		.then((x) => console.log(x)) // виводить значення 2 до консолі.
		.catch(console.error) // якби в коді були помилки то цей .catch() обробив би помилки і вивів би в консоль повідомлення про помилку.
        // результат: 2

// 1.3
const promise = new Promise(res => res(2)); // за допомогою конструктора створюємо новий об'єкт promise який є вирішеним значенням 2.
	promise.then(v => {
	        console.log(v); // перший then отримує значення 2 і виводить це значення в консоль.
	        return v * 2; // потім повертає значення 2 * 2 = 4.
	    })
	    .then(v => {
	        console.log(v); // другий then отримує значення 4 і виводить це значення в консоль.
	        return v * 2; // потім повертає значення 4 * 2 = 8.
	    })
	    .finally(v => { // не отримує значення з попереднього then. Вона викликається незалежно чи були помилки чи ні.
	        console.log(v); // виводиться undefined, бо finally не повертає значення і не впливає на значення, що передається далі по ланцюжку.
	        return v * 2;
	    })
	    .then(v => { // третій then отримує значення 8
	        console.log(v); // виводить його в консоль.
	    });
        // результат
        // 2
        // 4
        // undefined
        // 8