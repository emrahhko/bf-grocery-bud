import { dom } from '../dom.js';
import { addItemHandler } from '../handlers/addItemHandler.js';

export const addItemEvent = () => {
    dom.submitBtn.addEventListener('click', (e) => {
        addItemHandler(e);
    });
};
