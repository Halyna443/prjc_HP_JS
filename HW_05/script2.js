'use strict';

// document.addEventListener('DOMContentLoaded', function () {
//     const button = document.querySelector('.button');
//     const message = document.querySelector('.message');

//     const themeSwitcher = localStorage.getItem('themeSwitcher');
//     if (themeSwitcher === 'on') {
//         turnOn();
//     } else {
//         turnOff();
//     }

//     button.addEventListener('click', function () {
//         if (localStorage.getItem('themeSwitcher') === 'off') {
//             turnOn();
//         } else {
//             turnOff();
//         }
//     })

//     function turnOn() {
//         document.body.style.backgroundColor = 'rgb(100, 87, 87)';
//         button.textContent = 'Turn on';
//         message.textContent = `Last turn off: ${time()}`;
//         message.style.color = 'white';
//         localStorage.setItem('themeSwitcher', 'on');
//     }

//     function turnOff() {
//         document.body.style.backgroundColor = 'white';
//         button.textContent = 'Turn off';
//         message.textContent = `Last turn on: ${time()}`;
//         message.style.color = 'black';
//         localStorage.setItem('themeSwitcher', 'off');
//     }

//     function time() {
//         const date = new Date();
//         const timeFormat = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
//         return date.toLocaleDateString('uk-UA', timeFormat);
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    const message = document.querySelector('.message');

    const themeSwitcher = localStorage.getItem('themeSwitcher');
    if (themeSwitcher === 'on') {
        turnOn();
    } else {
        turnOff();
    }

    button.addEventListener('click', function () {
        if (localStorage.getItem('themeSwitcher') === 'off') {
            turnOn();
        } else {
            turnOff();
        }
    });

    function turnOn() {
        document.body.style.backgroundColor = 'rgb(0, 0, 0)';
        button.textContent = 'Turn on';

        const lastClickTime = localStorage.getItem('lastClickTime') || time();
        message.textContent = `Last turn off: ${lastClickTime}`;
        message.style.color = 'white';

        localStorage.setItem('themeSwitcher', 'on');
        localStorage.setItem('lastClickTime', lastClickTime);
    }

    function turnOff() {
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
        button.textContent = 'Turn off';

        const lastClickTime = localStorage.getItem('lastClickTime') || time();
        message.textContent = `Last turn off: ${lastClickTime}`;
        message.style.color = 'black';

        localStorage.setItem('themeSwitcher', 'off');
        localStorage.setItem('lastClickTime', lastClickTime);
    }

    function time() {
        const date = new Date();
        const formattedTime = `${padZero(date.getDate())}-${padZero(date.getMonth() + 1)}-${date.getFullYear()} ${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;
        return formattedTime;
    }

    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }
});













