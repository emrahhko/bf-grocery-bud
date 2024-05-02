/* eslint-disable linebreak-style */
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
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.classList.add('edit-btn');

    editBtn.addEventListener('click', () => {
        dom.submitBtn.innerText = 'Edit';
        dom.input.value = item.text;
        document.getElementById(item.id).classList.add('selected');
        editBtnHandler(item);
    });

    const deleteBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        deleteBtnHandler(item.id);
    });

    btnContainer.append(editBtn, deleteBtn);
    container.append(title, btnContainer);

    return container;
};
