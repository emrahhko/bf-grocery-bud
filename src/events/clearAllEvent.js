import { dom } from "../dom.js";
import {clearAllHandler} from "../handlers/clearAllHandler.js"

export const clearAllEvent = () => {
    dom.clearBtn.addEventListener('click', clearAllHandler);
};