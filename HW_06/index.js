'use strict';

const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('.create-task-form');

form.addEventListener('submit', (event) => {
    if (taskInput.value.trim() === '') {
        return false;
    }

    createSingleTaskElement(taskInput.value);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
});

function getTasksFromLocalStorage() {
    return localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];
}

document.addEventListener('DOMContentLoaded', () => {
    const tasks = getTasksFromLocalStorage();

    tasks.forEach((task, index) => {
        createSingleTaskElement(task, index);
    });
});

taskList.addEventListener('click', (event) => {
    const iconContainer = event.target.parentElement;

    if (iconContainer.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            const taskToRemove = iconContainer.parentElement;
            const indexToRemove = taskToRemove.dataset.index;

            taskToRemove.remove();

            const tasks = getTasksFromLocalStorage();

            tasks.forEach((task, index) => {
                if (index.toString() === indexToRemove) {
                    tasks.splice(index, 1);
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                }
            });
        }

    } else if (iconContainer.classList.contains('edit-item')) {
        const taskToEdit = iconContainer.parentElement;
        const textElement = taskToEdit.querySelector('span');

        const newText = prompt('Edit task:', textElement.textContent.trim());

        if (newText !== null) {
            textElement.textContent = newText;

            const tasks = getTasksFromLocalStorage();

            tasks.forEach((task, index) => {
                if (index.toString() === taskToEdit.dataset.index) {
                    tasks[index] = newText;
                }
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
});

clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        taskList.innerHTML = '';
    }
});

function createSingleTaskElement(newTask, index) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.dataset.index = index;

    const textElement = document.createElement('span');
    textElement.appendChild(document.createTextNode(newTask));

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';

    const editElement = document.createElement('span');
    editElement.className = 'edit-item';
    editElement.innerHTML = '<i class="fa fa-edit"></i>';

    li.appendChild(textElement);
    li.appendChild(deleteElement);
    li.appendChild(editElement);

    taskList.appendChild(li);
};

function storeTaskInLocalStorage(newTask) {
    const tasks = getTasksFromLocalStorage();

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};
