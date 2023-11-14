'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    const message = document.querySelector('.message');

    let lastTurnOnTime = localStorage.getItem('lastTurnOnTime') || '';
    let lastTurnOffTime = localStorage.getItem('lastTurnOffTime') || '';

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
    })

    function turnOn() {
        document.body.style.backgroundColor = 'rgb(100, 87, 87)';
        button.textContent = 'Turn on';
        lastTurnOnTime = time();
        message.textContent = `Last turn off: ${lastTurnOffTime}`;
        message.style.color = 'white';
        localStorage.setItem('themeSwitcher', 'on');
        localStorage.setItem('lastTurnOnTime', lastTurnOnTime);
    }

    function turnOff() {
        document.body.style.backgroundColor = 'white';
        button.textContent = 'Turn off';
        lastTurnOffTime = time();
        message.textContent = `Last turn on: ${lastTurnOnTime}`;
        message.style.color = 'black';
        localStorage.setItem('themeSwitcher', 'off');
        localStorage.setItem('lastTurnOffTime', lastTurnOffTime);
    }

    function time() {
        const date = new Date();
        const timeFormat = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return date.toLocaleDateString('uk-UA', timeFormat);
    }
});