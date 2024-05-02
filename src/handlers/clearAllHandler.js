import { dom } from "../dom.js";
import { data } from "../data.js";


export const clearAllHandler = () => {
    dom.todos.innerHTML = '';
    data.items = [];
};