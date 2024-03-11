import { atom } from 'recoil';

export type TodoType = {
    id: number;
    value: string;
    isDone: boolean;
};

export const todoState = atom<TodoType[]>({
    key: 'todo_state',
    default: [
        {
            id: 0,
            value: 'read a book',
            isDone: false,
        },
    ],
});
