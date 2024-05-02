/* eslint-disable linebreak-style */
import { data } from '../data.js';
import { dom } from '../dom.js';
import { createItem } from '../components/createItem.js';

export const addItemHandler = (e) => {
    e.preventDefault();
    const value = dom.input.value.trim();
    const btnType = dom.submitBtn.innerText;

    if (btnType === 'Submit') {
        if (!value) {
            dom.error.innerText = 'Enter something to your "to-do" list';
        } else {
            dom.error.innerText = '';
            const newItem = {
                id: data.id++,
                text: value,
            };

            const itemDom = createItem(newItem);
            dom.todos.prepend(itemDom);
            data.items.push(newItem);
            dom.input.value = '';
        }
    } else {
        const selectedItem = document.querySelector('.selected');
        selectedItem.querySelector('.title').innerText = value;
        const id = Number(selectedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;
        dom.submitBtn.innerText = 'Submit';
        selectedItem.classList.remove('selected');
    }
};
