'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    const message = document.querySelector('.message');

    const lastStory = localStorage.getItem('lastStory');
    if (lastStory === 'on') {
        turnOn();
    } else {
        turnOff();
    }

    button.addEventListener('click', function () {
        if (button.textContent === 'Turn off') {
            turnOn();
        } else {
            turnOff();
        }
    })

    function turnOn() {
        document.body.style.backgroundColor = 'rgb(100, 87, 87)';
        button.textContent = 'Turn on';
        message.textContent = `Last turn on: ${time()}`;
        message.style.color = 'white';
        localStorage.setItem('lastStory', 'on');
    }

    function turnOff() {
        document.body.style.backgroundColor = 'white';
        button.textContent = 'Turn off';
        message.textContent = `Last turn off: ${time()}`;
        message.style.color = 'black';
        localStorage.setItem('lastStory', 'off');
    }

    function time() {
        const date = new Date();
        const timeFormat = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
        return date.toLocaleDateString('uk-UA', timeFormat);
    }
});
