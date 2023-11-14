'use strict';

// 1. Задача на селектори
// Для сторінки з вебінару (https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html) напишіть селектори для наступних елементів:  
// — для елементу з текстом 'Навігація по DOM дереву'
// — для першого елементу <section>
// — для елементу списку з текстом 'Пункт 5'
// — для елементу з класом 'hatredLevelBlock'
// Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.

let idHeaderTwo = document.getElementById('headerTwo');
let tagSection = document.getElementsByTagName('section')[0];
let itemFive = document.querySelector('ul li:nth-child(5)');
let hatredBlock = document.getElementsByClassName('hatredLevelBlock')[0];

console.log(idHeaderTwo);
console.log(tagSection);
console.log(itemFive);
console.log(hatredBlock);


