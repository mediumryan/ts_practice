import { ChangeEvent, FormEvent, useState } from 'react';
import { styled } from 'styled-components';
import { TodoType, todoState } from './data';
import { useRecoilState } from 'recoil';

const ToDoWrapper = styled.div`
    margin-top: 5rem;
`;

const ToDoForm = styled.form`
    background-color: aliceblue;
    padding: 2rem 5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    input,
    button {
        font-size: 1.25rem;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        outline: none;
        border: none;
    }
    button {
        margin-left: 1rem;
        background-color: #eee;
        &:hover {
            color: #577;
        }
    }
`;

const ToDoList = styled.ul`
    li {
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;

        display: flex;
        align-items: center;
        justify-content: space-between;
        span,
        button {
            font-size: 1.25rem;
        }
        button {
            &:hover {
                color: #577;
            }
        }
    }
`;

export default function ToDo() {
    const [todo, setTodo] = useRecoilState(todoState);
    const [text, setText] = useState('');

    const getText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const addTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            value: text,
            isDone: false,
        };
        const newTodo = [...todo];
        newTodo.push(newItem);
        setTodo(newTodo);
        setText('');
    };

    const deleteTodo = (item: TodoType) => {
        const selectedTodo = todo.filter((a) => a.id !== item.id);
        setTodo(selectedTodo);
    };

    return (
        <ToDoWrapper>
            <ToDoForm onSubmit={addTodo}>
                <input type="text" value={text} onChange={getText} />
                <button>Submit</button>
            </ToDoForm>
            <ToDoList>
                {todo.map((item) => {
                    return (
                        <li key={`todo ${item.id}`}>
                            <span>{item.value}</span>
                            <button
                                onClick={() => {
                                    deleteTodo(item);
                                }}
                            >
                                X
                            </button>
                        </li>
                    );
                })}
            </ToDoList>
        </ToDoWrapper>
    );
}
