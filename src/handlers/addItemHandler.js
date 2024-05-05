import { data } from '../data.js';
import { dom } from '../dom.js';
import { createItem } from '../components/createItem.js';

export const addItemHandler = (e) => {
    e.preventDefault();
    const value = dom.input.value.trim();
    const btnType = dom.submitBtn.innerText;

    if (btnType === 'Submit') {
        if (!value) {
            dom.error.innerText = 'Please add something to your "To-Do" list';
            dom.error.classList.add('error1');
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
        // selectedItem.querySelector('.delete-btn').disabled = true;
        const id = Number(selectedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;
        dom.input.value = '';
        dom.submitBtn.innerText = 'Submit';
        selectedItem.classList.remove('selected');
    }
};
