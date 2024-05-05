/* eslint-disable linebreak-style */

/**
 * Create a new To-Do item.
 *
 * @param {object} item - The To-Do item oject containing data.
 * @returns {HTMLElement} The DOM item element.
 */

import { dom } from '../dom.js';
import { editBtnHandler } from '../handlers/editBtnHandler.js';
import { deleteBtnHandler } from '../handlers/deleteBtnHandler.js';

export const createItem = (item) => {
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = item.id;

    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = item.text;

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.classList.add('edit-btn');

    editBtn.addEventListener('click', () => {
        dom.submitBtn.innerText = 'Edit';
        dom.input.value = item.text;
        document.getElementById(item.id).classList.add('selected');
        editBtnHandler(item);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        deleteBtnHandler(item.id);
    });

    btnContainer.append(editBtn, deleteBtn);
    container.append(title, btnContainer);

    return container;
};
