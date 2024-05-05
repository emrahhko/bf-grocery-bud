/**
 * @jest-environment jsdom
 */

import { createItem } from './createItem.js';

describe('create an element', () => {
    const item = createItem({
        id: 1,
        text: 'Buy milk',
    });

    test('nodeName -> DIV', () => {
        expect(item.nodeName).toEqual('DIV');
    });

    test('childElementCount -> 2', () => {
        expect(item.childElementCount).toEqual(2);
    });

    test('edit button should have correct icon', () => {
        const editBtn = item.querySelector('.edit-btn');
        expect(editBtn.innerHTML).toContain('<i class="fa-solid fa-pen"></i>');
    });

    test('delete button should have correct icon', () => {
        const deleteBtn = item.querySelector('.delete-btn');
        expect(deleteBtn.innerHTML).toContain(
            '<i class="fa-solid fa-trash"></i>',
        );
    });
});
